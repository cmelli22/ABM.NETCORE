using Infraestructure;
using Infraestructure.Models;
using Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Services.Implementation
{
    public class securityService :ISecurityService
    {
        private readonly TokenService _tokenService;

        public securityService(TokenService tokenService)
        {
            _tokenService = tokenService; 
        }
        public string createToken(LoginRequest user)
        {
            return _tokenService.Create<LoginRequest>(user);
        }

    }
}
