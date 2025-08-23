import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Infucion {
  id: number;
  titulo: string;
  descripcion: string;
  bandera: string;
  imagen: string;
  precios: {
    "500gr": string;
    "1kg": string;
  };
}


@Injectable({
  providedIn: 'root'
})
export class InfucionesService {


  private jsonUrl = 'json/infuciones.json';

  constructor(private http: HttpClient) {}

  getInfuciones(): Observable<Infucion[]> {
    return this.http.get<Infucion[]>(this.jsonUrl);
  }

  getInfucionById(id: number): Observable<Infucion | undefined> {
    return new Observable(observer => {
      this.getInfuciones().subscribe(infuciones => {
        const infucion = infuciones.find(i => i.id === id);
        observer.next(infucion);
        observer.complete();
      });
    });
  }

}
