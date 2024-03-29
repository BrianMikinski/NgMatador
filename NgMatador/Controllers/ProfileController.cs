using Microsoft.AspNetCore.Mvc;
using NgMatador.Models;

namespace NgMatador.Controllers;

[Route("api/[controller]")]
public class ProfileController : Controller
{
    private Profile _profile = new()
    {
        FirstName = "John",
        LastName = "Doe",
        Email = "john.doe@example.com"
    };

    [HttpGet]
    public Profile Profile()
    {
        return _profile;
    }

    [HttpPost]
    public Profile UpdateProfile([FromBody] Profile updatedProfile)
    {
        _profile = updatedProfile;
        return _profile;
    }
}
