namespace EcommerceApi.Models
{
    public class ItemPedido
    {
        public int Id { get; set; }
        public int IdProduto { get; set; }
        public Produto Produto { get; set; } //Relacionamento de tabelas

        public int PedidoId { get; set; }
        public Pedido Pedido { get; set; } //Relacionamento de tabelas


        public int Quantidade { get; set; }
        public decimal PrecoUnitario { get; set; }
    }
}
