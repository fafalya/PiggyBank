using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PiggyBankBackEnd.Context;
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

        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserEntity>>> GetUsers ()
        {
            return await _context.Users.ToListAsync();

        }
    }
}
