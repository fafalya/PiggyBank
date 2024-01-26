using PiggyBankBackEnd.Entities;
using System.Text.Json.Serialization;

namespace PiggyBankBackEnd.DTOs
{
    public class CreateUpdateUserDTO
    {
        //public int Id { get; set; }
        public string Name { get; set; }
        public string Password {  get; set; }
        [JsonIgnore]
        public ICollection<AimEntity>? Aims { get; set; }
    }
}
