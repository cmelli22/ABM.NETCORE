using Domain.Entitis;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Services.Interfaces;
using System.Threading.Tasks;

namespace ABM.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonasController : ControllerBase
    {
        private readonly IPersonaService _service;

        public PersonasController(IPersonaService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var reply = await _service.Get();
            return Ok(reply);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var reply = await _service.GetById(id);
            return Ok(reply);
        }

        [HttpPost]
        public async Task<IActionResult> Add(Persona entity)
        {
            var reply = await _service.Add(entity);
            return Ok(reply);
        }

        [HttpDelete]
        public async Task<IActionResult> Delete(Persona entity)
        {
            var reply = await _service.Delete(entity);
            return Ok(reply);
        }

        [HttpPatch]
        public async Task<IActionResult> Update(Persona entity)
        {
            var reply = await _service.Update(entity);
            return Ok(reply);
        }
    }
}
