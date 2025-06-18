using Microsoft.EntityFrameworkCore;
public class BrandRepository : IBrandRepository
{
  private readonly VehicleDbContext _context;

  public BrandRepository(VehicleDbContext context)
  {
    _context = context;
  }

public async Task<IEnumerable<Brand>> GetAllAsync()
    {
        return await _context.Brands.ToListAsync();
    }

}