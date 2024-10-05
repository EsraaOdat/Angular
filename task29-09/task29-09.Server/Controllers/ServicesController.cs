using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using task29_09.Server.DTOs;
using task29_09.Server.Models;

namespace task29_09.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServicesController : ControllerBase
    {
        private readonly MyDbContext _db;

        public ServicesController(MyDbContext db)
        {
            _db = db;
        }
        ////////////////////////////////////////////////////////////////////////////////////////
        [HttpGet("getAllServices")]
        public IActionResult GetAllServices()
        {
            var services = _db.Services.ToList();

            return Ok(services);
        }
        ////////////////////////////////////////////////////////////////////////////////////////
        ///

        [HttpPost]
        public IActionResult addService([FromForm] addServiceDTO serviceDTO)
        {

            var folder = Path.Combine(Directory.GetCurrentDirectory(), "UploadImages");
            if (!Directory.Exists(folder))
            {
                Directory.CreateDirectory(folder);
            }
            var imageFile = Path.Combine(folder, serviceDTO.ServiceImage.FileName);

            using (var stream = new FileStream(imageFile, FileMode.Create))
            {
                serviceDTO.ServiceImage.CopyToAsync(stream);
            }
            var newService = new Service
            {
                ServiceName = serviceDTO.ServiceName,
                ServiceDescription = serviceDTO.ServiceDescription,
                ServiceImage = serviceDTO.ServiceImage.FileName,
            };
            _db.Services.Add(newService);
            _db.SaveChanges();
            return Ok(newService);
        }

        [HttpPut("editService/{id}")]
        public IActionResult EditService(int id, [FromForm] addServiceDTO serviceDTO)
        {
            var service = _db.Services.Find(id);
            var folder = Path.Combine(Directory.GetCurrentDirectory(), "UploadImages");
            if (!Directory.Exists(folder))
            {
                Directory.CreateDirectory(folder);
            }
            var imageFile = Path.Combine(folder, serviceDTO.ServiceImage.FileName);

            using (var stream = new FileStream(imageFile, FileMode.Create))
            {
                serviceDTO.ServiceImage.CopyToAsync(stream);
            }

            service.ServiceName = serviceDTO.ServiceName;
            service.ServiceDescription = serviceDTO.ServiceDescription;
            service.ServiceImage = serviceDTO.ServiceImage.FileName;
            _db.Services.Update(service);
            _db.SaveChanges();
            return Ok(service);
        }
    }
}
