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
    public class UsersubscriptionsController : ControllerBase
    {
        private readonly MyDbContext _context;

        public UsersubscriptionsController(MyDbContext context)
        {
            _context = context;
        }

        // GET: api/Usersubscriptions
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Usersubscription>>> GetUsersubscriptions()
        {
            return await _context.Usersubscriptions.ToListAsync();
        }

        // GET: api/Usersubscriptions/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Usersubscription>> GetUsersubscription(int id)
        {
            var usersubscription = await _context.Usersubscriptions.FindAsync(id);

            if (usersubscription == null)
            {
                return NotFound();
            }

            return usersubscription;
        }

        // PUT: api/Usersubscriptions/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUsersubscription(int id, Usersubscription usersubscription)
        {
            if (id != usersubscription.Id)
            {
                return BadRequest();
            }

            _context.Entry(usersubscription).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UsersubscriptionExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Usersubscriptions
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Usersubscription>> PostUsersubscription(Usersubscription usersubscription)
        {
            _context.Usersubscriptions.Add(usersubscription);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (UsersubscriptionExists(usersubscription.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetUsersubscription", new { id = usersubscription.Id }, usersubscription);
        }

        // DELETE: api/Usersubscriptions/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUsersubscription(int id)
        {
            var usersubscription = await _context.Usersubscriptions.FindAsync(id);
            if (usersubscription == null)
            {
                return NotFound();
            }

            _context.Usersubscriptions.Remove(usersubscription);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UsersubscriptionExists(int id)
        {
            return _context.Usersubscriptions.Any(e => e.Id == id);
        }
    }
}
