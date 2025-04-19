namespace EcommerceApi.Models
{
    public class Pedido
    {
        public int Id { get; set; }

        public DateTime DataCriacao { get; set; } = DateTime.Now;

        public List<ItemPedido> Itens { get; set; } = new List<ItemPedido>();

        public decimal Total => Itens.Sum(item => item.Quantidade * item.PrecoUnitario);
    }
}
