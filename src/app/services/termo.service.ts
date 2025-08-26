import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface Caracteristicas {
  caracteristicas1: string[];
  caracteristicas2: string[];
  caracteristicas3: string[];
}

export interface Producto {
  id: number;
  titulo: string;
  imagenes: string[];
  descripcion: string;
  caracteristicas: Caracteristicas;
}

@Injectable({
  providedIn: 'root'
})
export class TermoService {

  private jsonUrl = 'json/termos.json';

  constructor(private http: HttpClient) {}

  getProductoById(id: number): Observable<Producto | undefined> {
    return this.http.get<{ productos: Producto[] }>(this.jsonUrl).pipe(
      map(data => data.productos.find((p: Producto) => p.id === id))
    );
  }

  getAllProductos(): Observable<Producto[]> {
    return this.http.get<{ productos: Producto[] }>(this.jsonUrl).pipe(
      map(data => data.productos)
    );
  }
}
