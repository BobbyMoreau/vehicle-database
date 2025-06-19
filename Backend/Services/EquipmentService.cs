public class EquipmentService : IEquipmentService
{
  private readonly IEquipmentRepository _equipmentRepository;
  public EquipmentService(IEquipmentRepository equipmentRepository)
  {
    _equipmentRepository = equipmentRepository;
  }

    public async Task<IEnumerable<EquipmentDto>> GetAllAsync()
    {
        var equipments = await _equipmentRepository.GetAllAsync();
        return equipments.Select(b => new EquipmentDto
    {
        Id = b.Id,
        Name = b.Name
    });
    }

}