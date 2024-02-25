using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;
using PiggyBankBackEnd.Context;
using PiggyBankBackEnd.DTOs;
using PiggyBankBackEnd.Entities;
using System.Text;

namespace PiggyBankBackEnd.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController:ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public UserController(ApplicationDbContext context) {
            _context = context;

        }

        //CRUD-> create-read-update-delete

        //create
        /// <summary>
        /// Controller for creating user
        /// </summary>
        [HttpPost]
        public async Task <IActionResult> CreateUser([FromBody] CreateUpdateUserDTO dto)
        {
            UserEntity person = _context.Users.FirstOrDefault(u=> u.Name == dto.Name);
            if (person != null)
            {
                return BadRequest(
                    new
                    {
                        error = "This name is already in use. Please choose another name"
                    });
            }
            byte[] pass = System.Security.Cryptography.MD5.HashData(
                Encoding.Unicode.GetBytes(dto.Password));
            dto.Password = Convert.ToBase64String(pass);
            var newUser = new UserEntity()
            {
                //Id= dto.Id,
                Name = dto.Name,
                Aims = dto.Aims,
                Password = dto.Password,
            };

            await _context.Users.AddAsync(newUser);
            await _context.SaveChangesAsync();


            return Ok("New user is successfully created!");
        }

        //read
        /// <summary>
        /// Controller for showing all users
        /// </summary>
        [HttpGet]
        [Authorize]
        public async Task<ActionResult<IEnumerable<UserEntity>>> GetAllUsers ()
        {
            var users = await _context.Users.ToListAsync();

            return Ok(users);
        }

        /// <summary>
        /// controller for showing user by Id
        /// </summary>
        [HttpGet]
        [Route("{id}")]
        [Authorize]
        public async Task<ActionResult<UserEntity>> GetUserById([FromRoute] long id )
        {
            var user =await  _context.Users.FirstOrDefaultAsync(q => q.Id == id);
            if (user is null)
            {
                return NotFound("User is not found!");
            }
            return Ok(user);
        }

        //update
        /// <summary>
        /// Controller for updating user by id
        /// </summary>
        [HttpPut]
        [Route("{id}")]
        [Authorize]
        public async Task<IActionResult> UpdateUser([FromRoute] long id, [FromBody] CreateUpdateUserDTO dto)
        {
            var user = await _context.Users.FirstOrDefaultAsync(q => q.Id == id);
            if (user is null)
            {
                return NotFound("User is not found!");
            }
            //user.Id = dto.Id;
            user.Name = dto.Name;
            user.Aims = dto.Aims;

            await _context.SaveChangesAsync();

            return Ok("User is successfully updated!");
        }

        //delete
        /// <summary>
        /// Controller for deleting user by Id
        /// </summary>
        [HttpDelete]
        [Route("{id}")]
        [Authorize]
        public async Task<IActionResult> DeleteUser([FromRoute] long id)
        {
            var user = await _context.Users.FirstOrDefaultAsync(q => q.Id == id);
            if (user is null)
            {
                return NotFound("User is not found!");
            }
            _context.Users.Remove(user);

            await _context.SaveChangesAsync();

            return Ok("User is successfully deleted!");
        }

    }
}
