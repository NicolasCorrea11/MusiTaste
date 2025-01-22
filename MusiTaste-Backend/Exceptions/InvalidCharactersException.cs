namespace Backend.Exceptions
{
    public class InvalidCharactersException: Exception
    {
        public InvalidCharactersException(string msg = "The password contains invalid characters") : base(msg) { }
    }
}
