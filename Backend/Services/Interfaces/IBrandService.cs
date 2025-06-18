
public interface IBrandService
{
  
    Task<IEnumerable<BrandDto>> GetAllAsync();

}