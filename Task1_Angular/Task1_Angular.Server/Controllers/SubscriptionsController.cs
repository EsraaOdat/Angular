using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Task1_Angular.Server.Models;

namespace Task1_Angular.Server.Controllers
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