using Backend.DTOs;

namespace Backend.Interfaces
{
    public interface IUserValidator
    {
        public void ValidateUser(CredentialsDTO user);
    }
}
