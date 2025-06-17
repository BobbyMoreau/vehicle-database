
public interface IVehicleService
{
    Task<VehicleDto> GetByIdAsync(int id);
    Task<IEnumerable<VehicleDto>> GetAllAsync();
    Task<VehicleDto> CreateAsync(Vehicle vehicle);
    Task UpdateAsync(Vehicle vehicle);
    Task DeleteAsync(int id);
}

