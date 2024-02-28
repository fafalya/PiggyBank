using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace PiggyBankBackEnd.Authentication
{
    public class AuthOptions
    {
        //издатель токена
        public const string ISSUER = "localhost:5000";
        //потребитель токена
        public const string AUDIENCE = "localhost:3000";
        //ключ для шифрации
        const string KEY = "SymmetricSecurityKeySymmetric_09()&*1h";
        //время жизни токена 500 минут
        public const int LIFETIME = 500;
        public static SymmetricSecurityKey GetSymmetricSecurityKey() => new SymmetricSecurityKey(Encoding.UTF8.GetBytes(KEY));
    }
}
