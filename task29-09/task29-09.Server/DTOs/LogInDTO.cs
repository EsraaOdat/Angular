namespace task29_09.Server.DTOs
{
    public class LogInDTO
    {
        public string Email { get; set; } = null!;

        public string PasswordHash { get; set; } = null!;
    }
}
