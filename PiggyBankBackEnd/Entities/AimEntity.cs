namespace PiggyBankBackEnd.Entities
{
    public class AimEntity
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public double Price { get; set; }
        public DateTime Date { get; set; }
        public DateTime Start { get; set; } = DateTime.Now;
        public int WayOfSaving { get; set; }
        public UserEntity User { get; set; }
        public int UserId { get; set; }
        public ICollection<ImageEntity> Images { get; set; }

    }
}
