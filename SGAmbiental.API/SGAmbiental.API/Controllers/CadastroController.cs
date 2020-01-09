using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SGAmbiental.API.Models;

namespace SGAmbiental.API.Controllers
{
    [ApiController]
    [Route("cadastro")]
    public class CadastroController : ControllerBase
    {
        private static readonly string[] Nome = new[]
        {
            "Vale", "Usiminas", "Gerdau"
        };

        private readonly ILogger<CadastroController> _logger;

        public CadastroController(ILogger<CadastroController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<CadastroViewModel> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new CadastroViewModel
            {
                Date = DateTime.Now.AddDays(index),
                Nome = Nome[rng.Next(Nome.Length)]
            })
            .ToArray();
        }
    }
}
