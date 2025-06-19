public class BrandService : IBrandService
{
  private readonly IBrandRepository _brandRepository;
  public BrandService(IBrandRepository brandRepository)
  {
    _brandRepository = brandRepository;
  }

  public async Task<IEnumerable<BrandDto>> GetAllAsync()
  {
    var brands = await _brandRepository.GetAllAsync();
    return brands.Select(b => new BrandDto
    {
        Id = b.Id,
        Name = b.Name
    });
}

}