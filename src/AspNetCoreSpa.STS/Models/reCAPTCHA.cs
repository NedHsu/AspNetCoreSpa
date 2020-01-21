using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace AspNetCoreSpa.STS
{
    public class reCAPTCHA
    {
        public bool success { get; set; }
        public decimal score { get; set; }
        public string action { get; set; }
        public int challenge_ts { get; set; }
        public string hostname { get; set; }
        public string[] errorCodes { get; set; }
    }
}
