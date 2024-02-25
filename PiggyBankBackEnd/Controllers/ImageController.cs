using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PiggyBankBackEnd.Context;
using PiggyBankBackEnd.Entities;
using static System.Net.Mime.MediaTypeNames;

namespace PiggyBankBackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ImageController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IWebHostEnvironment _webHostEnvironment;

        public ImageController(ApplicationDbContext context, IWebHostEnvironment webHostEnvironment)
        {
            _context = context;
            _webHostEnvironment = webHostEnvironment;
        }

        /// <summary>
        /// Controller for uploading images
        /// </summary>
        [HttpPost]
        public async Task<ActionResult<IEnumerable<int>>> UploadImages(IEnumerable<IFormFile> images)
        {
            List<int> imgId = new List<int>();
            if (images != null)
            {
                foreach (var image in images)
                {
                    string date = DateTime.Now.ToString();
                    date = date.Replace(".", string.Empty);
                    date = date.Replace(":", string.Empty);
                    string imagePath = "/images/" + date + image.FileName;
                    using (var fileStream = new FileStream(_webHostEnvironment.WebRootPath + imagePath, FileMode.Create))
                    {
                        await image.CopyToAsync(fileStream);
                    }
                    ImageEntity img = new ImageEntity { ImagePath = imagePath };
                    await _context.Images.AddAsync(img);
                    await _context.SaveChangesAsync();
                    var imgIdDb = await _context.Images.FirstOrDefaultAsync(imgDB => imgDB.ImagePath == img.ImagePath);
                    imgId.Add(imgIdDb.Id);
                }
            }
            else return Problem("Problem with uploading images");
            return Ok(imgId);
        }

        /// <summary>
        /// Controller for showing images
        /// </summary>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ImageEntity>>> GetAllImages()
        {
            return Ok(await _context.Images.ToListAsync());
        }

        /// <summary>
        /// Controller for deleting image by Id
        /// </summary>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteImage(int id)
        {
            var image = await _context.Images.FindAsync(id);
            if (image == null) return NotFound();
            DirectoryInfo directory = new DirectoryInfo(_webHostEnvironment.WebRootPath + "/images/");
            var files = directory.GetFiles().ToList();

            foreach (var deletedFile in files)
            {
                string deleteFileString = deletedFile.ToString();
                deleteFileString = deleteFileString.Replace("\\", "/");
                bool imagePathDbInDirectoryPath = deleteFileString.Contains(image.ImagePath);

                if (deleteFileString.Contains(image.ImagePath))
                {
                    try
                    {
                        System.IO.File.Delete(deletedFile.FullName);
                        break;
                    }
                    catch (Exception e)
                    {
                        return Problem("Error: " + e);
                    }

                }
            }
            _context.Images.Remove(image);
            await _context.SaveChangesAsync();
            return Ok("Image is successfully deleted!");
        }
    }
}

