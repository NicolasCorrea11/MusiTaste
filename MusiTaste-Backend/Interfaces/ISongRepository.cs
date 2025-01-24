using Backend.DTOs;
using Backend.Models;
using Microsoft.Identity.Client;

namespace Backend.Interfaces
{
    public interface ISongRepository
    {
        public Task<bool> AddFavoriteSongAsync(Song song);
        public Task<bool> HasFavoriteAsync(SongRequestDTO song);
        public Task<List<SongDTO>> GetUserFavoritesAsync(int Id);
        public Task<bool> DeleteSongFromFavoritesAsync(SongRequestDTO req);
    }
}
