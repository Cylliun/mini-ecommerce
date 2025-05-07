import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../models/response';
import { environment } from '../environment/environment';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  urlApi = environment.apiUrl;

  pedido: Pedido[] = [];

  constructor(private http: HttpClient) { }

  MostrarPedido(): Observable<Response<Pedido[]>> {
    return this.http.get<Response<Pedido[]>>('https://localhost:7039/api/Orders');
  }

}
