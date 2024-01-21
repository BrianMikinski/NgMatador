using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace NgMatador.Controllers;

public record Movie
{
    public string Name { get; init; }

    public string Description { get; init; }
}


[Route("api/[controller]")]
public class MoviesController : Controller
{
    [HttpGet]
    public IEnumerable<Movie> Index()
    {
        return [
            new Movie
            {
                Name = "Dances with Wolves",
                Description = "A man with wolves"
            },
            new Movie
            {
                Name = "Austin Powers",
                Description = "International Man of Mystery"
            },
            new Movie
            {
                Name = "Sicario",
                Description = "Gangs in mexico"
            }
        ];
    }
}
