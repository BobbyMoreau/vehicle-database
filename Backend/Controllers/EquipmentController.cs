using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
public class EquipmentController : ControllerBase
{
    private readonly IEquipmentService _equipmentService;

    public EquipmentController(IEquipmentService equipmentService)
    {
        _equipmentService = equipmentService;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<EquipmentDto>>> GetEquipments()
    {
        var equipments = await _equipmentService.GetAllAsync();
        return Ok(equipments);
    }
}
