namespace EcommerceApi.Models
{
    public class Produto
    {
        public int Id { get; set; }
        public string Nome { get; set; } = string.Empty;
        public decimal Preco { get; set; } = decimal.Zero;
        public string ImagemUrl { get; set; } = string.Empty;
    }
}
