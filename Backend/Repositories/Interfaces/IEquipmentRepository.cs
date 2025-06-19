public interface IEquipmentRepository 
{
    Task<IEnumerable<Equipment>> GetAllAsync();
}