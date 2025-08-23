import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Cafe {
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
export class CafesService {

  
  private jsonUrl = 'json/cafes.json';

  constructor(private http: HttpClient) {}

  getCafes(): Observable<Cafe[]> {
    return this.http.get<Cafe[]>(this.jsonUrl);
  }

  getCafeById(id: number): Observable<Cafe | undefined> {
    return new Observable(observer => {
      this.getCafes().subscribe(cafes => {
        const cafe = cafes.find(c => c.id === id);
        observer.next(cafe);
        observer.complete();
      });
    });
  }

}
