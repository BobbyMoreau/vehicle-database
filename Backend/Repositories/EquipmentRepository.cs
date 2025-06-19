using Microsoft.EntityFrameworkCore;
public class EquipmentRepository : IEquipmentRepository
{
    private readonly VehicleDbContext _context;

    public EquipmentRepository(VehicleDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Equipment>> GetAllAsync()
    {
        return await _context.Equipments.ToListAsync();
    }

}