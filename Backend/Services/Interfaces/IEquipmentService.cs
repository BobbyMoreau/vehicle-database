
public interface IEquipmentService
{
  
    Task<IEnumerable<EquipmentDto>> GetAllAsync();

}