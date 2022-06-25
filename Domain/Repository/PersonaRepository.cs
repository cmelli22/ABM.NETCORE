using Domain.Entitis;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Repository
{
    public class PersonaRepository : IRepository
    {

        private readonly PersonasContext _context;

        public PersonaRepository(PersonasContext context)
        {
            _context = context;
        }
        public async Task<List<Persona>> Get()
        {
            return await _context.Persona.ToListAsync();
        }

        public async Task<Persona> GetById(int id)
        {
            return await _context.Persona.Where(p => p.Identificacion.Equals(id)).FirstAsync();
        }

        public async Task<Persona> Add(Persona entity)
        {
            var reply = await _context.AddAsync(entity);
            await _context.SaveChangesAsync();
            return reply.Entity;
        }
        public async Task<Persona> Delete(Persona entity)
        {
            var reply = _context.Remove(entity);
            await _context.SaveChangesAsync();
            return reply.Entity;
        }

        public async Task<Persona> Update(Persona entity)
        {
            var entityContext = _context.Persona.Where(p => p.Identificacion.Equals(entity.Identificacion)).FirstOrDefaultAsync().Result;
            if(entityContext != null)
            {
                entityContext.NombreCompleto = entity.NombreCompleto;
                entityContext.Edad = entity.Edad;
                entityContext.PadeceEnfermedad = entity.PadeceEnfermedad;
                entityContext.UsaLentes = entity.UsaLentes;
                entityContext.Maneja = entity.Maneja;  
                entityContext.Estado = entity.Estado;
                entityContext.AtributosAdicionales = entity.AtributosAdicionales;
                entityContext.Diabetico = entity.Diabetico;
                entityContext.Genero = entity.Genero;
            }
            await _context.SaveChangesAsync();
            return entity;

        }
    }
}
