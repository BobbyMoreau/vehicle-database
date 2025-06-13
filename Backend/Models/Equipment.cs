public class Equipment
{
  public int Id { get; set; }
  public string Name { get; set; }
  public ICollection<VehicleEquipment> VehicleEquipments { get; set; }
}