import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CarrinhoItem } from '../../models/carrinhoItem';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  carrinhoItens: CarrinhoItem[] = [];
  total: number = 0;

  constructor(private cartService: CartService,private router: Router) {}

  ngOnInit(): void {
    this.carrinhoItens = this.cartService.listarItensCarrinho();
    this.total = this.cartService.TotalItensCarrinho();
  }

  confirmarPedido() {
    if (this.carrinhoItens.length === 0 || this.carrinhoItens.length === null){
      return alert('O carrinho está vazio!');
    }
    console.log('Pedido confirmado', this.carrinhoItens);
    this.router.navigate(['/checkout']);
  }
}
