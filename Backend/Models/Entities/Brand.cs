public class Brand
{
  public int Id { get; set; }
  public string Name { get; set; }
  public ICollection<Vehicle> Vehicles { get; set; }
}