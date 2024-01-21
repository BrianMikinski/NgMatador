using Microsoft.AspNetCore.Mvc;

namespace NgMatador.Controllers;

[Route("api/[controller]")]
public class ProfileController : Controller
{
    private Profile _profile = new Profile()
    {
        FirstName = "John",
        LastName = "Doe"
    };

    [HttpGet]
    public Profile Profile()
    {
        return _profile;
    }

    [HttpPost]
    public Profile UpdateProfile()
    {
        _profile = new Profile
        {
            FirstName = "Bob",
            LastName = "Williams"
        };

        return _profile;
    }
}

public class Profile
{
    public string FirstName { get; init; }

    public string LastName { get; init; }
};