using Infraestructure.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Services.Interfaces
{
    public interface ISecurityService
    {
        string createToken(LoginRequest user);
    }
}
