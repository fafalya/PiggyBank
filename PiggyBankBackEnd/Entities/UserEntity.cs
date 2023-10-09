namespace PiggyBankBackEnd.Entities
{
    public class UserEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<AimEntity> Aims { get; set; }
    }
}
