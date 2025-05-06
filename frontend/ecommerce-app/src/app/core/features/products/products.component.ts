import { Component, NgModule, OnInit } from '@angular/core';
import { Produtos } from '../../models/produtos';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  produtos: Produtos[] = [];
  erroMensagem = false;

  constructor(private produtosServices: ProductsService) {}

  ngOnInit(): void {
    this.produtosServices.getListarProdutos()
    .subscribe({
      next: response => {
          this.produtos = response.dados;
          console.log(response);
      },
      error: err => {
        console.error("Erro ao listar os produtos", err);
        this.erroMensagem = false;
      }
    });
  }

  adicionarAoCarrinho(produto: Produtos) {
    this.produtosServices.adicionarAoCarrinho(produto);
  }
}
