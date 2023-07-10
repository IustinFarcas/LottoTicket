namespace API.Entities
{
    public class Box
    {
        public Box()
        {
            Numbers = new HashSet<Number>();
        }
        public long Id { get; set; }
        public long TicketId { get; set; }

        public virtual Ticket Ticket { get; set; }
        public virtual ICollection<Number> Numbers { get; set; }
    }
}