using Microsoft.EntityFrameworkCore;
public class VehicleRepository : IVehicleRepository
{
  private readonly VehicleDbContext _context;

  public VehicleRepository(VehicleDbContext context)
  {
    _context = context;
  }

  public async Task<Vehicle> GetByIdAsync(int id)
  {
    return await _context.Vehicles
        .Include(v => v.Brand)
        .Include(v => v.VehicleEquipments)
            .ThenInclude(ve => ve.Equipment)
        .FirstOrDefaultAsync(v => v.Id == id);
  }

  public async Task<IEnumerable<Vehicle>> GetAllAsync()
  {
    return await _context.Vehicles
        .Include(v => v.Brand)
        .Include(v => v.VehicleEquipments)
            .ThenInclude(ve => ve.Equipment)
        .ToListAsync();
  }
  public async Task<Vehicle> CreateAsync(Vehicle vehicle)
  {
      _context.Vehicles.Add(vehicle);
      await _context.SaveChangesAsync();

      return await _context.Vehicles
          .Include(v => v.Brand)
          .Include(v => v.VehicleEquipments)
              .ThenInclude(ve => ve.Equipment)
          .FirstOrDefaultAsync(v => v.Id == vehicle.Id);
  }



  public async Task UpdateAsync(Vehicle updatedVehicle)
  {
    var vehicle = new Vehicle { Id = updatedVehicle.Id };

    _context.Attach(vehicle);

    vehicle.ModelName = updatedVehicle.ModelName;

    _context.Entry(vehicle).Property(v => v.ModelName).IsModified = true;

    await _context.SaveChangesAsync();
  }
  public async Task DeleteAsync(int id)
  {
    var vehicle = await GetByIdAsync(id);
    if (vehicle != null)
    {
      _context.Vehicles.Remove(vehicle);
      await _context.SaveChangesAsync();
    }
  }
}