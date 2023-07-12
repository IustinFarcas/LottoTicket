namespace API.Entities
{
    public class Ticket
    {
        public Ticket()
        {
            Boxes = new List<Box>();
        }

        public long Id { get; set; }
        public string Name { get; set; }
        public int Superzahl { get; set; }

        public virtual ICollection<Box> Boxes { get; set; }
    }
}