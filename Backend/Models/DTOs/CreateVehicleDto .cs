public class CreateVehicleDto
{
    public string VIN { get; set; }
    public string LicensePlateNumber { get; set; }
    public string Name { get; set; }
    public int BrandId { get; set; }
    public List<int> EquipmentIds { get; set; }
}
