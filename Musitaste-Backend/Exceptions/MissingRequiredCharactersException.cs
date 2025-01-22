namespace Backend.Exceptions
{
    public class MissingRequiredCharactersException : Exception
    {
        public MissingRequiredCharactersException(string msg = "The password must have at least one uppercase letter, one lowercase letter, one digit and one special character") : base(msg) { }
    }
}
