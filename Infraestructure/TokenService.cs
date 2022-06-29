using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;

namespace Infraestructure
{
    public class TokenService
    {

        private string _signingKey;
        private string _tokenIssuer;
        private string _tokenAudience;
        private SymmetricSecurityKey _securityKey;
        private IConfiguration _configuration;
        private SigningCredentials _signingCredentials;

        public TokenService(IConfiguration iConfig)
        {
            _configuration = iConfig;
            _signingKey = _configuration.GetSection("JWT").GetSection("SigningKey").Value;
            _tokenIssuer = _configuration.GetSection("JWT").GetSection("TokenIssuer").Value;
            _tokenAudience = _configuration.GetSection("JWT").GetSection("TokenAudience").Value;
            _securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_signingKey));
            _signingCredentials = new SigningCredentials(_securityKey, SecurityAlgorithms.HmacSha256Signature, SecurityAlgorithms.Sha256Digest);
        }
        public string Create<T>(dynamic user)
        {


            string userSerialized = JsonConvert.SerializeObject(user);
            var claimsIdentity = new ClaimsIdentity(new[]
            {
                new Claim(typeof(T).Name, userSerialized),
                new Claim("password", user.password),
            });
            var now = DateTime.UtcNow;
            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = claimsIdentity,
                Issuer = _tokenIssuer,
                Audience = _tokenAudience,
                SigningCredentials = _signingCredentials,
                IssuedAt = now,
                Expires = now.AddMinutes(30)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
        public bool Validate(string token)
        {
            var validationParams = new TokenValidationParameters
            {
                //ValidateIssuer = true,
                //ValidIssuer = _tokenIssuer,

                //ValidateAudience = true,
                //ValidAudience = _tokenAudience,

                ValidateIssuerSigningKey = true,
                IssuerSigningKey = _securityKey,

                RequireExpirationTime = true,
                ValidateLifetime = true
            };

            try
            {
                var tokenHandler = new JwtSecurityTokenHandler
                {
                    InboundClaimTypeMap = { ["name"] = ClaimTypes.Name }
                };
                tokenHandler.ValidateToken(token, validationParams, out var securityToken);
                return true;
            }
            catch (SecurityTokenInvalidSignatureException ex)
            {
                return false;
            }
            catch (SecurityTokenExpiredException ex)
            {
                return false;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public ClaimsPrincipal Decrypt(string token)
        {
            var validationParams = new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidIssuer = _tokenIssuer,

                ValidateAudience = true,
                ValidAudience = _tokenAudience,

                ValidateIssuerSigningKey = true,
                IssuerSigningKey = _securityKey,

                RequireExpirationTime = true,
                ValidateLifetime = true
            };

            try
            {
                var tokenHandler = new JwtSecurityTokenHandler
                {
                    InboundClaimTypeMap = { ["name"] = ClaimTypes.Name }
                };
                var claims = tokenHandler.ValidateToken(token, validationParams, out var securityToken);
                return claims;
            }
            catch (SecurityTokenInvalidSignatureException ex)
            {
                return null;
            }
            catch (SecurityTokenExpiredException ex)
            {
                return null;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public T GetUserFromToken<T>(string token)
        {
            try
            {
                var identity = Decrypt(token);

                var _user = identity.Claims.Where(c => c.Type == typeof(T).Name)
                                 .Select(c => c.Value).SingleOrDefault();

                var user = JsonConvert.DeserializeObject<T>(_user);
                return user;
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
    }
}
