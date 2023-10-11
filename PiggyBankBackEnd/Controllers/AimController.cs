using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PiggyBankBackEnd.Context;
using PiggyBankBackEnd.DTOs;
using PiggyBankBackEnd.Entities;

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
            var newAim = new AimEntity()
            {
                Title = dto.Title,
                Price = dto.Price,
                Date = dto.Date,
                PicturePath = dto.PicturePath,
                WayOfSaving = dto.WayOfSaving

            };
            await _context.Aims.AddAsync(newAim);
            await _context.SaveChangesAsync();

            return Ok("New aim is successfully created");
        }

        //read
        [HttpGet]
        public async Task<ActionResult<List<AimEntity>>> GetAllAims()
        {
            var aims = await _context.Aims.ToListAsync();

            return Ok(aims);
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult<AimEntity>> GetAimById([FromRoute] long id)
        {
            var aim = await _context.Aims.FirstOrDefaultAsync(q => q.Id == id);

            if(aim is null)
            {
                return NotFound("Aim is not found!");
            }

            return Ok(aim);
        }

        //update
        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> UpdateAim([FromRoute] long id, [FromBody] CreateUpdateAimDTO dto)
        {
            var aim = await _context.Aims.FirstOrDefaultAsync(q => q.Id == id);

            if (aim is null)
            {
                return NotFound("Aim is not found!");
            }

            aim.Title = dto.Title;
            aim.Price = dto.Price;
            aim.Date = dto.Date;
            aim.PicturePath = dto.PicturePath;
            aim.WayOfSaving = dto.WayOfSaving;

            await _context.SaveChangesAsync();

            return Ok("Aim is successfully updated!");
        }

        //delete
        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteAim([FromRoute] long id)
        {
            var aim = await _context.Aims.FirstOrDefaultAsync(q => q.Id == id);

            if (aim is null)
            {
                return NotFound("Aim is not found!");
            }

            _context.Aims.Remove(aim);
            await _context.SaveChangesAsync();

            return Ok("Aim is successfully deleted!");
        }



    }
}
