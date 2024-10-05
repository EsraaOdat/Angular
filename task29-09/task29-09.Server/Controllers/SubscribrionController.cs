using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using task29_09.Server.Models;

namespace task29_09.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubscribrionController : ControllerBase
    {
        private readonly MyDbContext _db;

        public SubscribrionController(MyDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        public IActionResult getSubscriptions()
        {
            var subscriptions = _db.Subscriptions.ToList();
            return Ok(subscriptions);
        }
    }
}

