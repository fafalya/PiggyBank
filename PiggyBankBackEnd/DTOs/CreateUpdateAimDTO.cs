namespace PiggyBankBackEnd.DTOs
{
    public class CreateUpdateAimDTO
    {
        public string Title { get; set; }
        public double Price { get; set; }
        public DateTime Date { get; set; }
        public string PicturePath { get; set; }
        public int WayOfSaving { get; set; }
    }
}
