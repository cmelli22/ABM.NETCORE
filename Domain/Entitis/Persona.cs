using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Domain.Entitis
{
    public partial class Persona
    {
        public string NombreCompleto { get; set; }
        public int Identificacion { get; set; }
        public int Edad { get; set; }
        public string Genero { get; set; }
        public bool? Estado { get; set; } = false;
        public string AtributosAdicionales { get; set; }
        public bool? Maneja { get; set; } = false;
        public bool? UsaLentes { get; set; } = false;
        public bool? Diabetico { get; set; } = false;
        public bool? PadeceEnfermedad { get; set; } = false;
        public string DescripcionEnfermedad { get; set; }
    }
}
