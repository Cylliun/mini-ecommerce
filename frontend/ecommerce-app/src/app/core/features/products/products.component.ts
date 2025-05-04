import { Component, OnInit } from '@angular/core';
import { Produtos } from '../../models/produtos';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';;

@Component({
  selector: 'app-products',
  imports: [CommonModule],
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
    })
  }
}
