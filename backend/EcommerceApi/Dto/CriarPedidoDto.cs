﻿using EcommerceApi.Models;

namespace EcommerceApi.Dto
{
    public class CriarPedidoDto
    {
        public List<ItemPedidoDto> Itens { get; set; } = new();
    }

    public class ItemPedidoDto
    {
        public int ProdutoId { get; set; }
        public int Quantidade { get; set; }
        public decimal PrecoUnitario { get; set; }
    }

}
