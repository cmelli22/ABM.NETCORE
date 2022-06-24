using Domain;
using Domain.Entitis;
using Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Services.Implementation
{
    public class PersonaService : IPersonaService
    {
        private readonly IRepository _repository;

        public PersonaService(IRepository repository)
        {
            _repository = repository;
        }
        public async Task<List<Persona>> Get()
        {
            return await _repository.Get();
        }

        public async Task<Persona> Add(Persona entity)
        {
            return await _repository.Add(entity);
        }
        public async Task<Persona> Delete(Persona entity)
        {
            return await _repository.Delete(entity);
        }

        public async Task<Persona> Update(Persona entity)
        {
            return await _repository.Update(entity);
        }

    }
}
