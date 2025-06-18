public class VehicleService : IVehicleService
{
  private readonly IVehicleRepository _vehicleRepository;
  public VehicleService(IVehicleRepository vehicleRepository)
  {
    _vehicleRepository = vehicleRepository;
  }
  public async Task<VehicleDto> GetByIdAsync(int id)
    {
        var vehicle = await _vehicleRepository.GetByIdAsync(id);
        if (vehicle == null)
        {
            return null; 
        }

        return MapToDto(vehicle);
    }

    public async Task<IEnumerable<VehicleDto>> GetAllAsync()
    {
        var vehicles = await _vehicleRepository.GetAllAsync();
        return vehicles.Select(v => MapToDto(v));
    }

    public async Task<VehicleDto> CreateAsync(Vehicle vehicle)
    {
        var createdVehicle = await _vehicleRepository.CreateAsync(vehicle);
        return MapToDto(createdVehicle);
    }

    public async Task UpdateAsync(Vehicle vehicle)
    {
        await _vehicleRepository.UpdateAsync(vehicle);
    }

    public async Task DeleteAsync(int id)
    {
        await _vehicleRepository.DeleteAsync(id);
    }

   private VehicleDto MapToDto(Vehicle vehicle)
    {
        return new VehicleDto
        {
            Id = vehicle.Id,
            ModelName = vehicle.ModelName,
            BrandId = vehicle.Brand.Id,
            BrandName = vehicle.Brand.Name,
           Equipments = vehicle.VehicleEquipments?
                        .Select(ve => ve.Equipment?.Name)
                        .Where(name => name != null)
                        .ToList()
        };
    }
}