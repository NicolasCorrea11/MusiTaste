using Backend.DTOs;
using Backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SpotifyAPI.Web;
using System.Security.Policy;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class SpotifyAPIController: ControllerBase
    {
        private readonly string _Client_Secret = "YourClientSecret";
        private readonly string _Client_Id = "YourClientID";

        [HttpGet("getByName")]
        public async Task<ActionResult<IEnumerable<SongDTO>>> SearhTrackByName(string songName)
        {
            var config = SpotifyClientConfig.CreateDefault();

            var request = new ClientCredentialsRequest(_Client_Id, _Client_Secret);
            var response = await new OAuthClient(config).RequestToken(request);

            var spotify = new SpotifyClient(config.WithToken(response.AccessToken));

            var searchResponse = await spotify.Search.Item(new SearchRequest(SearchRequest.Types.Track, songName) { Limit = 1});
            if (searchResponse.Tracks?.Items == null || !searchResponse.Tracks.Items.Any())
            {
                return NotFound("No tracks found.");
            }
            var trackList = searchResponse.Tracks.Items.ToList();
            List<SongDTO> cleanTrackList = new();
            foreach (var t in trackList)
            {
                cleanTrackList.Add(new SongDTO() { Name = t.Name, Artist = t.Artists[0].Name, ImageUrl = t.Album.Images[0].Url });
            }
            return Ok(cleanTrackList);
        }
    }
}
