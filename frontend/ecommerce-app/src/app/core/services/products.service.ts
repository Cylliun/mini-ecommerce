import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';
import { Produtos } from '../models/produtos';
import { Response } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class ProductsService{
  
  urlApi = environment.apiUrl

  constructor(private http: HttpClient) { }

  getListarProdutos(): Observable<Response<Produtos[]>> {
    return this.http.get<Response<Produtos[]>>(`${this.urlApi}/Products`);
  }

}
