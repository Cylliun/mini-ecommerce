import { Injectable } from '@angular/core';
import { CarrinhoItem } from '../models/carrinhoItem';
import { HttpClient } from '@angular/common/http';
import { CriarPedido } from '../models/criarPedido';
import { environment } from '../environment/environment';
import { Response } from '../models/response';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private itens: CarrinhoItem [] = [];

  apiUrl = environment.apiUrl

  constructor(private http: HttpClient) {}

  listarItensCarrinho(): CarrinhoItem[] {
    return this.itens;
  }

    adicionarItensCarrinho(item: CarrinhoItem) {
      const itemCarrinho = this.itens.find(i => i.produtoId === item.produtoId);
      if (itemCarrinho) {
        itemCarrinho.quantidade += item.quantidade;
        return;
      }
      this.itens.push(item);
    }

    removerItensCarrinho(produtoId: number) {
      this.itens = this.itens.filter(item => item.produtoId !== produtoId);
  }

  TotalItensCarrinho(): number {
    return this.itens.reduce((total, item) => total + item.precoUnitario * item.quantidade, 0);
  }

  confirmarPedido(pedido: CriarPedido): Observable<Response<CriarPedido>> {
    return this.http.post<Response<CriarPedido>>(`${this.apiUrl}/Orders`, pedido);
  }
}
