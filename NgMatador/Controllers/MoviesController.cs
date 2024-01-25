using Microsoft.AspNetCore.Mvc;
using NgMatador.Models;
using System.Collections.Generic;

namespace NgMatador.Controllers;

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
            },
            new Movie
            {
                Name = "Once up a time in the west",
                Description = "A strange shows up to town to fight!"
            },
            new Movie
            {
                Name = "O Brother Where Art Thou",
                Description = "Odysseus"
            },
            new Movie
            {
                Name = "Batman",
                Description ="The Dark Knight fights evil!"
            }
        ];
    }
}
