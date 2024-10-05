using task29_09.Server.Models;

namespace task29_09.Server.DTOs
{
    public class addServiceDTO
    {

        public string ServiceName { get; set; } = null!;

        public string? ServiceDescription { get; set; }

        public IFormFile? ServiceImage { get; set; }

    }
}
