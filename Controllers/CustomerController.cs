using GoOutdoorsKids.Models;
using Microsoft.AspNetCore.Mvc;

namespace GoOutdoorsKids.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CustomerController : ControllerBase
    {

        private static readonly string[] titles = new[]
        {
        "The Avid Angular", "The Adventurous", "Cool Camper"
       };

        private readonly ILogger<CustomerController> _logger;


        public CustomerController(ILogger<CustomerController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("gettitles")]
        public Array GetTitles()
        {
            return titles;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(new Customer
            {
                Name = "Claire Beaumont",
                Title = "Hunter Heroine"
            });           
        }
    }
}
