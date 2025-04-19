using EcommerceApi.Models;
using Microsoft.EntityFrameworkCore;

namespace EcommerceApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        DbSet<Produto> Produtos { get; set; }
        DbSet<Pedido> Pedidos { get; set; }
        DbSet<ItemPedido> ItemPedidos { get; set; }

    }
}
