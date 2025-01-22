using Backend.Database;
using Backend.DTOs;
using Backend.Interfaces;
using Backend.Mappers;
using Backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System.ComponentModel;

namespace Backend.Repository
{
    public class SongRepository: ISongRepository
    {
        private readonly ApplicationDbContext _context;

        public SongRepository(ApplicationDbContext context)
        {
            this._context = context;
        }
        public async Task<bool> HasFavoriteAsync(SongRequestDTO song)
        {
            return await _context.Songs.AnyAsync(x => x.Name == song.Song.Name && x.Artist == song.Song.Artist && x.IdFavorite == song.UserId);
        }
        public async Task<bool> AddFavoriteSongAsync(Song song)
        {
            await _context.Songs.AddAsync(song);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<List<SongDTO>> GetUserFavoritesAsync(int idUser)
        {
            List<Song> favs = await _context.Songs.Where(x => x.IdFavorite == idUser).ToListAsync();
            List<SongDTO> songs = new();
            foreach (var s in favs)
            {
                songs.Add(SongMapper.SongToSongDTO(s));
            }
            return songs;
        }

        public async Task<bool> DeleteSongFromFavoritesAsync(SongRequestDTO req)
        {
            await _context.Songs.Where(
                x => x.Name == req.Song.Name && 
                x.Artist == req.Song.Artist && 
                x.IdFavorite == req.UserId)
                .ExecuteDeleteAsync();
            return true;
        }
    }
}
