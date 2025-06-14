public class VehicleDto
{
    public int Id { get; set; }
    public string ModelName { get; set; }
    public string BrandName { get; set; }
    public List<EquipmentDto> Equipments { get; set; }
}