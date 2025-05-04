namespace EcommerceApi.Dto
{
    public class CriarProdutoDto
    {
        public string Nome { get; set; } = string.Empty;
        public decimal Preco { get; set; } = decimal.Zero;
        public string ImagemUrl { get; set; } = string.Empty;
    }
}
