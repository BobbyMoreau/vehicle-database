public class CreateVehicleDto
{
    public string Name { get; set; }
    public int BrandId { get; set; }
    public List<int> EquipmentIds { get; set; }
}
