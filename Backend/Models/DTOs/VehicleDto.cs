public class VehicleDto
{
    public int Id { get; set; }
    public string ModelName { get; set; }
    public string VIN { get; set; }
    public string LicensePlateNumber { get; set; }
    public int BrandId { get; set; }    
    public string BrandName { get; set; }
    public List<string> Equipments { get; set; }
}