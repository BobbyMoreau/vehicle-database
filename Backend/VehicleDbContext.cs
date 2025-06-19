using Microsoft.EntityFrameworkCore;

public class VehicleDbContext : DbContext
{
    public VehicleDbContext(DbContextOptions<VehicleDbContext> options) : base(options) { }
    public DbSet<Vehicle> Vehicles { get; set; }
    public DbSet<Brand> Brands { get; set; }
    public DbSet<Equipment> Equipments { get; set; }
    public DbSet<VehicleEquipment> VehicleEquipments { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<VehicleEquipment>()
        .HasKey(ve => new { ve.VehicleId, ve.EquipmentId });

    modelBuilder.Entity<VehicleEquipment>()
        .HasOne(ve => ve.Vehicle)
        .WithMany(v => v.VehicleEquipments)
        .HasForeignKey(ve => ve.VehicleId);

    modelBuilder.Entity<VehicleEquipment>()
        .HasOne(ve => ve.Equipment)
        .WithMany(e => e.VehicleEquipments)
        .HasForeignKey(ve => ve.EquipmentId);
    }
}
