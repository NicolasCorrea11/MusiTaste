namespace Backend.DTOs
{
    public class SongRequestDTO
    {
        public int UserId { get; set; }
        public required SongDTO Song { get; set; }
    }
}
