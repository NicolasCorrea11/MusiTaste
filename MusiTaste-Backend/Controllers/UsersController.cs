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
using Backend.Services;
using Backend.Interfaces;
using Backend.Mappers;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IHashService _hash;
        private readonly ITokenService _tokenService;
        private readonly IUserRepository _repo;
        private readonly IUserValidator _validator;

        public UsersController(IHashService hashService, ITokenService tokenService, IUserRepository repository, IUserValidator validator)
        {
            _hash = hashService;
            _tokenService = tokenService;
            _repo = repository;
            _validator = validator;
        }

        [HttpPost("signup")]
        public async Task<IActionResult> Signup(CredentialsDTO user)
        {
            if (await _repo.UserExists(user.Username))
            {
                return BadRequest(new { Message = "Username already exists" });
            }
            try
            {
                _validator.ValidateUser(user);
            }
            catch (Exception e)
            {
                return BadRequest(new { Message = e.Message });
            }
            string password = _hash.Encrypt(user.Password);
            User newUser = UserMapper.CredentialsToUser(user.Username, password);
            await _repo.CreateUserAsync(newUser);
            return Ok();
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(CredentialsDTO user)
        {
            var userPassword = _hash.Encrypt(user.Password);
            var foundUser = await _repo.GetUserByCredentials(user.Username, userPassword);
            if (foundUser == null)
            {
                return NotFound(new { Message = "User not found" });
            }
            var token = _tokenService.CreateToken(foundUser);
            return Ok(new { Id = foundUser.Id, Token = token });
        }
    }
}
