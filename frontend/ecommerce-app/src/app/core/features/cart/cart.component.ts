import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environment/environment';
import { CarrinhoItem } from '../../models/carrinhoItem';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  carrinhoItens: CarrinhoItem[] = [];
  total: number = 0;

  urlApi = environment.apiUrl;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.carrinhoItens = this.cartService.listarItensCarrinho();
    this.total = this.cartService.TotalItensCarrinho();
  }

  confirmarPedido() {
    const pedido = {
      itens: this.carrinhoItens.map(item => ({
        
        produtoId: item.produtoId,
        quantidade: item.quantidade,
        precoUnitario: item.precoUnitario
      }))
    };

    this.cartService.confirmarPedido(pedido).subscribe({
      next: () => {
        alert('Pedido realizado com sucesso');
        
      },
      error: () => {
        console.error('Erro ao confirmar pedido');
      }
    });
  }
}
