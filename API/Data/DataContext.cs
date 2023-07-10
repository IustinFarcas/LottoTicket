using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Ticket> Ticket { get; set; }
        public DbSet<Box> Box { get; set; }
        public DbSet<Number> Number { get; set; }

    }
}
