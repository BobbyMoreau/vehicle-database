using System.Text.Json;
public class SeedData
{
 private readonly JsonSerializerOptions _options = new JsonSerializerOptions
    {
        PropertyNameCaseInsensitive = true
    };

    public async Task LoadBrands(VehicleDbContext context)
    {
        if (context.Brands.Any()) return;

        var dataInJsonFile = await File.ReadAllTextAsync("Data/json/brands.json");
        var brands = JsonSerializer.Deserialize<List<Brand>>(dataInJsonFile, _options);

        if (brands != null && brands.Count > 0)
        {
            await context.Brands.AddRangeAsync(brands);
            await context.SaveChangesAsync();
        }
    }

    public async Task LoadEquipments(VehicleDbContext context)
    {
        if (context.Equipments.Any()) return;

        var dataInJsonFile = await File.ReadAllTextAsync("Data/json/equipments.json");
        var equipments = JsonSerializer.Deserialize<List<Equipment>>(dataInJsonFile, _options);

        if (equipments != null && equipments.Count > 0)
        {
            await context.Equipments.AddRangeAsync(equipments);
            await context.SaveChangesAsync();
        }
    }

    public async Task LoadVehicles(VehicleDbContext context)
    {
        if (context.Vehicles.Any()) return;

        var dataInJsonFile = await File.ReadAllTextAsync("Data/json/vehicles.json");
        var vehicles = JsonSerializer.Deserialize<List<Vehicle>>(dataInJsonFile, _options);

        if (vehicles != null && vehicles.Count > 0)
        {
            await context.Vehicles.AddRangeAsync(vehicles);
            await context.SaveChangesAsync();
        }
    }

    public async Task Initialize(VehicleDbContext context)
    {
        await LoadBrands(context);
        await LoadEquipments(context);
        await LoadVehicles(context);
    }
}