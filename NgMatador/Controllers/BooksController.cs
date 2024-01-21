using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace NgMatador.Controllers;

public record Book
{
    public string Title { get; init; }

    public string Author { get; init; }
}

[Route("api/[controller]")]
public class BooksController : Controller
{
    [HttpGet]
    public IEnumerable<Book> Index()
    {
        return [];
    }
}
