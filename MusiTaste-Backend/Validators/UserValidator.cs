using Backend.DTOs;
using Backend.Exceptions;
using Backend.Interfaces;
using System.Data;
using System.Text.RegularExpressions;
using static System.Net.Mime.MediaTypeNames;

namespace Backend.Validators
{
    public class UserValidator : IUserValidator
    {
        public void ValidateUser(CredentialsDTO user)
        {
            if (user.Username.Length < 6)
            {
                throw new UsernameLengthException();
            }
            if (user.Password.Length < 6)
            {
                throw new PasswordLengthException();
            }
            if (!Regex.IsMatch(user.Password, "[A-Z]")
                || !Regex.IsMatch(user.Password, "[a-z]")
                || !Regex.IsMatch(user.Password, @"\d")
                || !Regex.IsMatch(user.Password, @"[!-/:-@\[-_{-~]"))
            {
                throw new MissingRequiredCharactersException();
            }
            if (Regex.IsMatch(user.Password, @"[^\dA-Za-z!-/:-@\[-_{-~]"))
            {
                throw new InvalidCharactersException();
            }
        }
    }
}
