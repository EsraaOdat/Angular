namespace Task1_Angular.Server.Dtos
{
    public class addServiceDTO
    {
        public string ServiceName { get; set; } = null!;

        public string? ServiceDescription { get; set; }

        public IFormFile? ServiceImage { get; set; }
    }
}
