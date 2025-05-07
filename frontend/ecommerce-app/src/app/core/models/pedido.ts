export interface Pedido {
    id: number;
    dataCriacao: Date;
    itens: itemPedidoDto[];
    total: number;
}

export interface itemPedidoDto{
    idProduto: number;
    idPedido: number;
    produto: Produtos;
    quantidade: number;
    precoUnitario: number;
}

export interface Produtos{
    id: number;
    nome: string;
    preco: number;
}