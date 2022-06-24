using System;
using Domain.Entitis;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Domain
{
    public partial class PersonasContext : DbContext
    {
        public PersonasContext()
        {
        }

        public PersonasContext(DbContextOptions<PersonasContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Persona> Persona { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Persona>(entity =>
            {
                entity.HasKey(e => e.Identificacion)
                    .HasName("PRIMARY");

                entity.ToTable("persona");

                entity.Property(e => e.Identificacion).HasColumnName("identificacion");

                entity.Property(e => e.AtributosAdicionales)
                    .HasColumnName("atributosAdicionales")
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.DescricpcionEnfermedad)
                    .HasColumnName("descricpcionEnfermedad")
                    .HasColumnType("varchar(200)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Diabetico).HasColumnName("diabetico");

                entity.Property(e => e.Edad).HasColumnName("edad");

                entity.Property(e => e.Estado).HasColumnName("estado");

                entity.Property(e => e.Genero)
                    .IsRequired()
                    .HasColumnName("genero")
                    .HasColumnType("char(1)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Maneja).HasColumnName("maneja");

                entity.Property(e => e.NombreCompleto)
                    .IsRequired()
                    .HasColumnName("nombreCompleto")
                    .HasColumnType("varchar(100)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.PadeceEnfermedad).HasColumnName("padeceEnfermedad");

                entity.Property(e => e.UsaLentes).HasColumnName("usaLentes");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
