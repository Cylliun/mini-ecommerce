import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';
import { Produtos } from '../models/produtos';
import { Response } from '../models/response';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService{
  
  urlApi = environment.apiUrl
  produto: Produtos [] = [];

  constructor(private http: HttpClient, private carrinhoService: CartService) {}

  getListarProdutos(): Observable<Response<Produtos[]>> {
    return this.http.get<Response<Produtos[]>>(`${this.urlApi}/Products`);
  }

  adicionarAoCarrinho(produto: Produtos) {
    this.carrinhoService.adicionarItensCarrinho({
      idProduto: produto.id,
      nome: produto.nome,
      precoUnitario: produto.preco,
      quantidade: 1,
    });
    alert('Produto adicionado ao carrinho!');
  }
}

