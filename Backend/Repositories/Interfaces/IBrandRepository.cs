public interface IBrandRepository 
{
    Task<IEnumerable<Brand>> GetAllAsync();
}