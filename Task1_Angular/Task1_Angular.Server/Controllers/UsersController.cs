using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Task1_Angular.Server.Dtos;
using Task1_Angular.Server.Models;

namespace Task1_Angular.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly MyDbContext _db;
        public UserController(MyDbContext db) { _db = db; }

        [HttpPost]
        async public Task<IActionResult> addUser([FromForm] AddUSerDTO dto)
        {
            var userEmail = _db.Users.Where(x => x.Email == dto.Email).FirstOrDefault();

            if (userEmail != null)
            {
                return BadRequest("Email Exist");
            }

            var user = new User
            {
                Name = dto.UserName,
                Email = dto.Email,
                Password = dto.PasswordHash,
            };

            await _db.Users.AddAsync(user);
            await _db.SaveChangesAsync();
            return Ok();
        }

        [HttpPost("LogIn")]
        public IActionResult login([FromForm] LogInDTO user)
        {
            var logedUser = _db.Users.Where(u => u.Email == user.Email && u.Password == user.PasswordHash).FirstOrDefault();
            if (logedUser == null)
            {
                return BadRequest("Wrong Data");
            }


            return Ok(logedUser);


        }
    }
}
