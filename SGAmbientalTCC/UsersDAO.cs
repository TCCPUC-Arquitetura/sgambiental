using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Dapper;

namespace SGAmbientalTCC
{
    public class UsersDAO
    {
        private IConfiguration _configuration;

        public UsersDAO(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public User Find(string userID, string password)
        {
            List<bdsqlUsuarios> listUsuarios = new List<bdsqlUsuarios>();

            var usuario01 = new bdsqlUsuarios()
            {
                Usuario = "douglas@gmail.com",
                Password = "123@Asd"
            };
            var usuario02 = new bdsqlUsuarios()
            {
                Usuario = "filipe@gmail.com",
                Password = "123@Asd"
            };
            var usuario03 = new bdsqlUsuarios()
            {
                Usuario = "vinicius@gmail.com",
                Password = "123@Asd"
            };
            listUsuarios.Add(usuario01);
            listUsuarios.Add(usuario02);
            listUsuarios.Add(usuario03);

            
            
            var retorno = new User();
            if (!string.IsNullOrEmpty(userID)) {
                foreach (var user in listUsuarios)
                {
                    if (user.Usuario == userID && user.Password == user.Password)
                    {
                        retorno.UserID = userID;
                        retorno.Password = user.Password;
                        break;
                    }
                    else
                    {
                        retorno.UserID = null;
                    }
                }
            }
            else
            {
                retorno.UserID = null;
            }

            return retorno;

        }
    }
}
