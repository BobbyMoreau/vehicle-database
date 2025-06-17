using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Vehiclesdatabase.api.Namespace
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehiclesController : ControllerBase
    {
        private readonly IVehicleService _vehicleService;

        public VehiclesController(IVehicleService vehicleService)
        {
            _vehicleService = vehicleService;
        }

        [HttpGet]
        public async Task<ActionResult<List<VehicleDto>>> GetVehicles()
        {
            var vehicles = await _vehicleService.GetAllAsync();
            return Ok(vehicles);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<VehicleDto>> GetVehicle(int id)
        {
            var vehicle = await _vehicleService.GetByIdAsync(id);

            if (vehicle == null)
            {
                return NotFound();
            }

            return Ok(vehicle);
        }

        [HttpPost]
        public async Task<ActionResult<VehicleDto>> CreateVehicle([FromBody] Vehicle vehicle)
        {
            var createdVehicle = await _vehicleService.CreateAsync(vehicle);
            return CreatedAtAction(nameof(GetVehicle), new { id = createdVehicle.Id }, createdVehicle);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateVehicle(int id, Vehicle vehicle)
        {
            if (id != vehicle.Id)
                return BadRequest();

            try
            {
                await _vehicleService.UpdateAsync(vehicle);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVehicle(int id)
        {
            var existingVehicle = await _vehicleService.GetByIdAsync(id);
            if (existingVehicle == null)
            {
                return NotFound();
            }

            await _vehicleService.DeleteAsync(id);

            return NoContent();
        }
    }
}
