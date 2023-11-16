using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;
using PiggyBankBackEnd.Context;
using PiggyBankBackEnd.DTOs;
using PiggyBankBackEnd.Entities;

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
        [HttpPost]
        public async Task <IActionResult> CreateUser([FromBody] CreateUpdateUserDTO dto)
        {
            var newUser = new UserEntity()
            {
                //Id= dto.Id,
                Name = dto.Name,
                Aims = dto.Aims,
            };

            await _context.Users.AddAsync(newUser);
            await _context.SaveChangesAsync();


            return Ok("New user is successfully created!");
        }

        //read
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserEntity>>> GetAllUsers ()
        {
            var users = await _context.Users.ToListAsync();

            return Ok(users);
        }

        [HttpGet]
        [Route("{id}")]
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
        [HttpPut]
        [Route("{id}")]
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
        [HttpDelete]
        [Route("{id}")]
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
