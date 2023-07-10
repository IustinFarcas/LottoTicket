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
        public async Task<ActionResult<IEnumerable<Ticket>>> GetTickets()
        {
            var tickets = await contex.Ticket.ToListAsync();
            return Ok(tickets);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Ticket>> GetTicket(long id)
        {
            var ticket = await contex.Ticket.Where(t => t.Id == id).Include(t => t.Boxes).ThenInclude(b => b.Numbers).FirstOrDefaultAsync();
            return Ok(ticket);
        }

    }
}
