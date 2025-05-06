export interface CriarPedido{
    itens: itemPedidoDto[];
}

export interface itemPedidoDto{
    produtoId: number;
    quantidade: number;
    precoUnitario: number;
}