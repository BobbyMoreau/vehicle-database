public class VehicleSeedDto
{
    public string VIN { get; set; }
    public string LicensePlateNumber { get; set; }
    public string ModelName { get; set; }
    public int BrandId { get; set; }
    public List<int> EquipmentIds { get; set; }
}
