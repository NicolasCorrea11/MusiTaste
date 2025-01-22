namespace Backend.Exceptions
{
    public class UsernameLengthException: Exception
    {
        public UsernameLengthException(string msg = "Username must be at least 6 characters long") : base(msg) { }
    }
}
