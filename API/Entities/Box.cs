namespace API.Entities
{
    public class Box
    {
        public Box()
        {
            BoxNumbers = new List<Number>();
        }
        public long Id { get; set; }
        public long TicketId { get; set; }

        public virtual Ticket Ticket { get; set; }
        public virtual ICollection<Number> BoxNumbers { get; set; }
    }
}