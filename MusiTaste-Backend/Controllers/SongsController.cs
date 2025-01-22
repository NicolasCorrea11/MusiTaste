using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Database;
using Backend.Models;
using Backend.DTOs;
using Microsoft.AspNetCore.Authorization;
using Backend.Mappers;
using Backend.Interfaces;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class SongsController : ControllerBase
    {
        private readonly ISongRepository _repo;

        public SongsController(ISongRepository repository)
        {
            _repo = repository;
        }

        [HttpPost("AddFavorite")]
        public async Task<IActionResult> SaveFavoriteSong(SongRequestDTO request)
        {
            Song newFav = SongMapper.SongRequestToSong(request);
            if (await _repo.HasFavoriteAsync(request))
            {
                return BadRequest(new { Message = "Song already favorite" });
            }
            await _repo.AddFavoriteSongAsync(newFav);
            return Ok();
        }

        [HttpGet("GetFavorites")]
        public async Task<ActionResult<IEnumerable<SongDTO>>> GetUserFavorites(int UserId)
        {
            List<SongDTO> favs = await _repo.GetUserFavoritesAsync(UserId);
            return Ok(favs);
        }

        [HttpPost("DeleteFavorites")]
        public async Task<IActionResult> DeleteSongFromFavoritesAsync(SongRequestDTO request)
        {
            await _repo.DeleteSongFromFavoritesAsync(request);
            return Ok();
        }
    }
}
