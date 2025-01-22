using Backend.DTOs;
using Backend.Models;

namespace Backend.Mappers
{
    public static class SongMapper
    {
        public static Song SongRequestToSong(SongRequestDTO songReq)
        {
            return new Song()
            {
                Name = songReq.Song.Name,
                Artist = songReq.Song.Artist,
                ImageUrl = songReq.Song.ImageUrl,
                IdFavorite = songReq.UserId
            };
        }

        public static SongDTO SongToSongDTO(Song song)
        {
            return new SongDTO()
            {
                Name = song.Name,
                Artist = song.Artist,
                ImageUrl = song.ImageUrl
            };
        }
    }
}
