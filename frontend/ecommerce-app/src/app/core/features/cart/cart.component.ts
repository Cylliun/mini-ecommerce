  import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CarrinhoItem } from '../../models/carrinhoItem';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  carrinhoItens: CarrinhoItem[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.carrinhoItens = this.cartService.listarItensCarrinho();
    this.total = this.cartService.TotalItensCarrinho();
  }
    
}
