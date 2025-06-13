public class Vehicle
{
    public int Id { get; set; }
    public string VIN { get; set; }
    public string LicensePlateNumber { get; set; }
    public string ModelName { get; set; }
    public int BrandId { get; set; }
    public Brand Brand { get; set; }
    public List<VehicleEquipment> VehicleEquipments { get; set; }
}

