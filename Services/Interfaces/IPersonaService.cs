using Domain.Entitis;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Services.Interfaces
{
    public interface IPersonaService
    {
        Task<List<Persona>> Get();
        Task<Persona> GetById(int id);
        Task<Persona> Add(Persona entity);
        Task<Persona> Delete(Persona entity);
        Task<Persona> Update(Persona entity);
    }
}
