using GenerativeAI.Models;
using Microsoft.AspNetCore.Mvc;
using Backend.DTOs;
using Microsoft.AspNetCore.Authorization;


namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class GeminiAIController : ControllerBase
    {
        private readonly string _Apikey;
        private readonly GenerativeModel _Model;

        public GeminiAIController()
        {
            _Apikey = "YourApiKey";
            _Model = new GenerativeModel(_Apikey);
        }

        [HttpPost]
        public async Task<ActionResult<string>> GenerateProfile(List<SongDTO> tracks)
        {
            if (tracks.Count < 4)
            {
                return BadRequest(new { ErrorMessage = "atleast 4 songs are needed to make a profile" });
            }
            string songs = "";
            foreach (var s in tracks)
            {
                songs = songs + $"{s.Name}, {s.Artist}; ";
            }
            string prompt = $"According to the following list of songs: { songs}, what do you think my musical profile is? The answer must follow this template: '[profile]. [liking[1]], [linking[2]], [liking[3]]. [recommendattion[1]], [recommendattion[2]], [recommendattion[3]]. [profile] should correspond to a personality. [liking] should be a genre + the artist performing it in parentheses (if there is more than one artist, separate them with a '/'). The recommendation must be a band + the reason in parentheses. Recommendations and likings must be separated by commas. This is very important: The answer must be plain text, without markdown symbols, and must not contain any other word or explanation.";
            string? response = await _Model.GenerateContentAsync(prompt);
            return Ok(new { AiResponse = response });
        }
    }
}