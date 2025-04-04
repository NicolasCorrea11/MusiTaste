﻿using Backend.Interfaces;
using System.Security.Cryptography;
using System.Text;

namespace Backend.Services
{
    public class HashService : IHashService
    {
        public string Encrypt(string password)
        {
            byte[] hashedBytes = SHA256.HashData(Encoding.UTF8.GetBytes(password));
            StringBuilder builder = new();
            for (int i = 0; i < hashedBytes.Length; i++)
            {
                builder.Append(hashedBytes[i].ToString("x2"));
            }
            return builder.ToString();
        }

        public bool Validate(string txt, string hash) => Encrypt(txt).Equals(hash) || txt.Equals(hash);
    }
}
