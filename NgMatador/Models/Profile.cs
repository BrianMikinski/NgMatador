namespace NgMatador.Models;

public record Profile()
{
    public required string FirstName { get; init; }

    public required string LastName { get; init; }

    public required string Email { get; init; }
};