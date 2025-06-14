using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace Vehiclesdatabase.api.Namespace
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehiclesController : ControllerBase
    {
        private readonly VehicleDbContext _context;

        public VehiclesController(VehicleDbContext  context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Vehicle>>> GetVehicles()
        {
            var vehicles = await _context.Vehicles
                .Include(v => v.Brand)
                .Include(v => v.VehicleEquipments)
                    .ThenInclude(ve => ve.Equipment)
                .ToListAsync();

            return Ok(vehicles);
        }
    }

    
}
