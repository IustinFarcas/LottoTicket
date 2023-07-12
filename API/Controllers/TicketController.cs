using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TicketController : ControllerBase
    {
        private readonly DataContext contex;

        public TicketController(DataContext contex)
        {
            this.contex = contex;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ticket>>> Get()
        {
            var tickets = await contex.Ticket.Include(t => t.Boxes).ThenInclude(b => b.BoxNumbers).ToListAsync();
            return Ok(tickets);
        }

        [HttpPut]
        public async Task<ActionResult> Put([FromBody] List<Ticket> tickets)
        {
            await contex.Ticket.AddRangeAsync(tickets);
            contex.SaveChanges();
            return Ok();

        }
    }
}
