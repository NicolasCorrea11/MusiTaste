using Backend.DTOs;
using Backend.Models;

namespace Backend.Interfaces
{
    public interface IUserRepository
    {
        public Task<bool> UserExists(string username);
        public Task<bool> CreateUserAsync(User user);
        public Task<User?> GetUserByCredentials(string username, string password);
    }
}
