using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PiggyBankBackEnd.Context;
using PiggyBankBackEnd.DTOs;
using PiggyBankBackEnd.Entities;
using static System.Net.Mime.MediaTypeNames;

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

        //CRUD-> create-read-update-delete

        //create
        /// <summary>
        /// Controller for creating Aim
        /// </summary>
        [HttpPost]
        public async Task<IActionResult> CreateAim([FromBody] CreateUpdateAimDTO dto)
        {

            var newAim = new AimEntity();
            newAim.Title = dto.Title;
            newAim.Price = dto.Price;
            newAim.Date = dto.Date;
            newAim.WayOfSaving = dto.WayOfSaving;
            //newAim.User = dto.User;
            newAim.UserId = dto.UserId;
            newAim.Images = new List<ImageEntity>();
            if (dto.ImagesId != null)
            {
                foreach (var imageId in dto.ImagesId)
                {
                    try
                    {
                        var image = await _context.Images.FindAsync(imageId);
                        if (image != null) newAim.Images.Add(image);
                    }
                    catch (Exception ex) { return BadRequest(ex.Message); }
                }
            }
            await _context.Aims.AddAsync(newAim);
            await _context.SaveChangesAsync();

            return Ok("New aim is successfully created");
        }

        //read
        /// <summary>
        /// Controller for showing all aims
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AimEntity>>> GetAllAims()
        {
            var aims = await _context.Aims.Include(aim =>aim.Images).Include(aim => aim.User).ToListAsync();

            return Ok(aims);
        }

        /// <summary>
        /// Controller for showing aim by Id
        /// </summary>
        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult<AimEntity>> GetAimById([FromRoute] long id)
        {
            var aim = await _context.Aims.Include(aim=>aim.Images).Include(aim => aim.User).FirstOrDefaultAsync(q => q.Id == id);
            if (aim is null)
            {
                return NotFound("Aim is not found!");
            }

            return Ok(aim);
        }

        //update
        /// <summary>
        /// Controller for updating aim by Id
        /// </summary>
        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> UpdateAim([FromRoute] long id, [FromBody] CreateUpdateAimDTO dto)
        {
            var aim = await _context.Aims.Include(aim => aim.Images).Include(aim => aim.User).FirstOrDefaultAsync(q => q.Id == id);

            if (aim is null)
            {
                return NotFound("Aim is not found!");
            }
            var tempImages = new List<ImageEntity>();
            foreach (var imageId in dto.ImagesId)
            {
                try
                {
                    var image = await _context.Images.FindAsync(imageId);
                    if (image != null) tempImages.Add(image);
                }
                catch (Exception ex) { return BadRequest(ex.Message); }
            }
            aim.Title = dto.Title;
            aim.Price = dto.Price;
            aim.Date = dto.Date;
            aim.WayOfSaving = dto.WayOfSaving;
            //aim.User = dto.User;
            aim.UserId = dto.UserId;
            aim.Images = tempImages;

            await _context.SaveChangesAsync();

            return Ok("Aim is successfully updated!");
        }

        //delete
        /// <summary>
        /// Controller for deleting aim by Id
        /// </summary>
        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteAim([FromRoute] long id)
        {
            var aim = await _context.Aims.Include(aim => aim.Images).Include(aim => aim.User).FirstOrDefaultAsync(q => q.Id == id);

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
