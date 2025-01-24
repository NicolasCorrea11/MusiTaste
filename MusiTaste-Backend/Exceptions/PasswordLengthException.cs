namespace Backend.Exceptions
{
    public class PasswordLengthException: Exception
    {
        public PasswordLengthException(string msg = "Password must be at least 6 characters long") : base(msg) { }
    }
}
