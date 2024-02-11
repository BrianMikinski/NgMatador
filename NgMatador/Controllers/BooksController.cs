using Microsoft.AspNetCore.Mvc;
using NgMatador.Models;
using System.Collections.Generic;

namespace NgMatador.Controllers;

[Route("api/[controller]")]
public class BooksController : Controller
{
    [HttpGet]
    public IEnumerable<Book> Index()
    {
        return [new Book
        {
            Title = "Meditations",
            Author = "Marcus Aurelius"
        },
            new Book
            {
                Title = "Republic",
                Author = "Plato"
            },
            new Book
            {
                Title = "On Liberty",
                Author = "John Stuart Mill"
            },
            new Book
            {
                Title = "Meditations on First Philosphy",
                Author = "Rene Descartes"
            }
        ];
    }
}
