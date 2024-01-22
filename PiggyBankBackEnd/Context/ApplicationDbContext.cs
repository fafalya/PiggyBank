using Microsoft.EntityFrameworkCore;
using PiggyBankBackEnd.Entities;

namespace PiggyBankBackEnd.Context
{
    public class ApplicationDbContext: DbContext
    {
        public  ApplicationDbContext (DbContextOptions<ApplicationDbContext> options) : base(options) {
            //Database.EnsureDeleted();
            Database.EnsureCreated();
        }

        public DbSet<AimEntity> Aims { get; set; }
        public DbSet<UserEntity> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AimEntity>()
                .HasOne<UserEntity>(a => a.User)
                .WithMany(u => u.Aims)
                .HasForeignKey(a => a.UserId);
        }

    }
}
