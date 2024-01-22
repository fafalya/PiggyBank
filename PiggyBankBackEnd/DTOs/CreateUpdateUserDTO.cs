using PiggyBankBackEnd.Entities;

namespace PiggyBankBackEnd.DTOs
{
    public class CreateUpdateUserDTO
    {
        //public int Id { get; set; }
        public string Name { get; set; }
        public string Password {  get; set; }
        public ICollection<AimEntity>? Aims { get; set; }
    }
}
