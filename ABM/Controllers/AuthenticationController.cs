using Infraestructure.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Services.Interfaces;
using System.Threading.Tasks;

namespace ABM.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly ISecurityService _sucurityService;

        public AuthenticationController(ISecurityService sucurityService)
        {
            _sucurityService = sucurityService;
        }
        [HttpPost]
        public IActionResult Login(LoginRequest request)
        {
            var token = _sucurityService.createToken(request);
            return Ok(new { Bearer = token });
        }
    }
}
