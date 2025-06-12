public class Vehicle
{
    public int Id { get; set; }
    public string VIN { get; set; }
    public string LicensePlateNumber { get; set; }
    public string ModelName { get; set; }
    public int BrandId { get; set; }
    public Brand Brand { get; set; }
    public List<VehicleEquipment> Equipments { get; set; }
}

public class Brand
{
    public int Id { get; set; }
    public string Name { get; set; }
}

public class Equipment
{
    public int Id { get; set; }
    public string Name { get; set; }
}

public class VehicleEquipment
{
    public int VehicleId { get; set; }
    public Vehicle Vehicle { get; set; }

    public int EquipmentId { get; set; }
    public Equipment Equipment { get; set; }
}
