using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;

namespace PizzaStore.Data.Models
{
  public partial  class PizzaStoreContext : DbContext
    {

       
  
        
            public virtual DbSet<Pizza> Pizzas { get; set; }
            public virtual DbSet<Customer> Customers { get; set; }
            public virtual DbSet<Order> Orders { get; set; }
         

            protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            {
                if (!optionsBuilder.IsConfigured)
                {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                    optionsBuilder.UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=PizzaStore;Trusted_Connection=True;");
                }
            }

            protected override void OnModelCreating(ModelBuilder modelBuilder)
            {
                modelBuilder.Entity<Customer>(entity =>
                {
                    entity.HasKey(e => e.CustomerId);

                    entity.Property(e => e.Name).HasMaxLength(50);

                    entity.Property(e => e.Phone).HasMaxLength(50);

                    entity.Property(e => e.Email).HasMaxLength(50);
                });

                modelBuilder.Entity<Pizza>(entity =>
                {
                    entity.HasKey(e => e.PizzaId);

                    entity.Property(e => e.Name).HasMaxLength(50);
                    entity.Property(e => e.Price);
                    entity.Property(e => e.ImageUrl).HasMaxLength(255)
                    .IsRequired();


                });

          
                modelBuilder.Entity<Order>(entity =>
                {
                    entity.HasKey(e => e.OrderId);
                    entity.Property(e => e.Quantity);

                    entity.HasOne(d => d.Pizza)
                        .WithMany(p => p.Order)
                        .HasForeignKey(d => d.PizzaId)
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("FK_Order_Pizza");

                    entity.HasOne(d => d.Customer)
                        .WithMany(p => p.Order)
                        .HasForeignKey(d => d.CustomerId)
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("FK_Order_Customers");
                });
            }

        
        }




    }

