using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PiggyBankBackEnd.Context;
using PiggyBankBackEnd.DTOs;

namespace PiggyBankBackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AimController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AimController(ApplicationDbContext context)
        {
            _context = context;
        }

        //create
        [HttpPost]
        public async Task<IActionResult> CreateAim([FromBody] CreateUpdateAimDTO dto)
        {
            return null;
        }


    }
}
