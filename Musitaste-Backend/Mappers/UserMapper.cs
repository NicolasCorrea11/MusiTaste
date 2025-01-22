using Backend.Interfaces;
using Backend.Models;

namespace Backend.Mappers
{
    public static class UserMapper
    {
        public static User CredentialsToUser(string username, string password)
        {
            return new User()
            {
                Username = username,
                Password = password
            };
        }
    }
}
