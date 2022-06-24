using Domain.Entitis;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public interface IRepository
    {
        Task<List<Persona>> Get();
        Task<Persona> Add(Persona entity);
        Task<Persona> Delete(Persona entity);
        Task<Persona> Update(Persona entity);

    }
}
