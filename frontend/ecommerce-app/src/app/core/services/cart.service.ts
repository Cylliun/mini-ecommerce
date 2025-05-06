import { Injectable, OnInit } from '@angular/core';
import { CarrinhoItem } from '../models/carrinhoItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private itens: CarrinhoItem [] = [];

  listarItensCarrinho(): CarrinhoItem[] {
    return this.itens;
  }

  adicionarItensCarrinho(item: CarrinhoItem) {
    const itemCarrinho = this.itens.find(i => i.idProduto === item.idProduto);
    if (itemCarrinho) {
      itemCarrinho.quantidade += item.quantidade;
      return;
    }
    this.itens.push(item);
  }

  removerItensCarrinho(idProduto: number) {
    this.itens = this.itens.filter(item => item.idProduto !== idProduto);
  }

  TotalItensCarrinho(): number {
    return this.itens.reduce((total, item) => total + item.precoUnitario * item.quantidade, 0);
  }
}
