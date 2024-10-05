namespace Task1_Angular.Server.Dtos
{
    public class LogInDTO
    {
        public string Email { get; set; } = null!;

        public string PasswordHash { get; set; } = null!;
    }
}
