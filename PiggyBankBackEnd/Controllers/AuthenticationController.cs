using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using PiggyBankBackEnd.Authentication;
using PiggyBankBackEnd.Context;
using PiggyBankBackEnd.DTOs;
using PiggyBankBackEnd.Entities;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace PiggyBankBackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AuthenticationController(ApplicationDbContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Controller for authentication
        /// </summary>>
        [HttpPost]
        public async Task <ActionResult<UserEntity>> AuthUser([FromBody] AuthenticationDTO user)
        {
            List<Claim> identity;
            try
            {
                identity = GetIdentity(user);
            } catch (Exception ex) { return BadRequest(ex.Message); }
            var now = DateTime.UtcNow;
            var jwt = new JwtSecurityToken(
                issuer: AuthOptions.ISSUER,
                audience: AuthOptions.AUDIENCE,
                notBefore: now,
                claims: identity,
                expires: now.Add(TimeSpan.FromMinutes(AuthOptions.LIFETIME)),
                signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));
                var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);
            try
            {
                if (identity != null)
                {
                    var response = new
                    {
                        access_token = encodedJwt,
                        userId = identity[0].Value.ToString(),
                        userName = identity[1].Value.ToString(),
                    };
                    return Ok(response);
                }
                return NotFound("User is not found!");
            } catch (Exception ex) { return BadRequest(ex.Message); }
        }

        /// <summary>
        /// Identification of user
        /// </summary>
        private List<Claim> GetIdentity( AuthenticationDTO user)
        {
            if (user == null) return null;
            UserEntity person =  _context.Users.FirstOrDefault(u => u.Name == user.Name);
            if (person == null) return null;
            var cryptedPassword = Convert.ToBase64String(System.Security.Cryptography.MD5.HashData(
                Encoding.Unicode.GetBytes(user.Password)));
            if (person.Password != cryptedPassword) throw new Exception("Wrong name or password!");
            var claims = new List<Claim>
            {
                new Claim(nameof(person.Id), $"{person.Id}" ),    
                new Claim(nameof(person.Name), $"{person.Name}")
            };
            return claims;

        }
    }
}
