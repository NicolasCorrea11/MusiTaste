using Microsoft.EntityFrameworkCore;

namespace Backend.Models
{
    [PrimaryKey(nameof(Name), nameof(Artist))]
    public class Song
    {
        public required string Name { get; set; }
        public required string Artist { get; set; }
        public required string ImageUrl { get; set; }
        public int IdFavorite { get; set; }
    }
}
