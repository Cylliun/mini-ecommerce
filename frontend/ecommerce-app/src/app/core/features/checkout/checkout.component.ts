import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../../services/checkout.service';
import { itemPedidoDto } from '../../models/criarPedido';
import { response } from 'express';
import { Pedido } from '../../models/pedido';

@Component({
  selector: 'app-checkout',
  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit{

  pedidos: Pedido[] = [];
  erroMensagem = false;

  constructor(private checkoutService: CheckoutService) { }

  ngOnInit(): void {
    this.checkoutService.MostrarPedido().subscribe({
      next: response => {
          this.pedidos = response.dados;
          console.log(response);
      },
      error: err => {
        console.log("Erro ao enviar o pedido", err);
        this.erroMensagem = false;
      }
    });
  }

}
