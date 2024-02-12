using System.Text.Json.Serialization;

namespace PiggyBankBackEnd.Entities
{
    public class ImageEntity
    {
        public int Id { get; set; }
        public string ImagePath { get; set; }
        public int? AimId { get; set; }
        [JsonIgnore]
        public AimEntity? Aim { get; set; }
    }
}
