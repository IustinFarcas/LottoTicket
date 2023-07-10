namespace API.Entities
{
    public class Number
    {
        public long Id { get; set; }
        public int Value { get; set; }
        public bool IsChecked { get; set; }
        public long BoxId { get; set; }
        public virtual Box Box { get; set; }
    }
}