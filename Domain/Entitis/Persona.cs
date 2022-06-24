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
        public bool? Estado { get; set; }
        public string AtributosAdicionales { get; set; }
        public bool? Maneja { get; set; }
        public bool? UsaLentes { get; set; }
        public bool? Diabetico { get; set; }
        public bool? PadeceEnfermedad { get; set; }
        public string DescricpcionEnfermedad { get; set; }
    }
}
