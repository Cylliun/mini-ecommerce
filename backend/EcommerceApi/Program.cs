
using EcommerceApi.Controllers;
using EcommerceApi.Data;
using EcommerceApi.Models;
using Microsoft.EntityFrameworkCore;
using Scalar.AspNetCore;

namespace EcommerceApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
            builder.Services.AddOpenApi();

            builder.Services.AddDbContext<AppDbContext>(options =>
            {
                options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
            });

            builder.Services.AddCors(options =>
            {
                options.AddPolicy("policyCors",
                    builder =>
                    {
                        builder.WithOrigins("http://localhost:4200")
                        .AllowAnyHeader()
                        .AllowAnyMethod();
                    });
            });

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.MapOpenApi();
                app.MapScalarApiReference(); // scalar adicionado
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors("policyCors");

            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}
