
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Hierba {
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
export class HierbasService {

  private jsonUrl = 'json/hierbas.json';

  constructor(private http: HttpClient) {}

  getHierbas(): Observable<Hierba[]> {
    return this.http.get<Hierba[]>(this.jsonUrl);
  }

  getHierbaById(id: number): Observable<Hierba | undefined> {
    return new Observable(observer => {
      this.getHierbas().subscribe(hierbas => {
        const hierba = hierbas.find(h => h.id === id);
        observer.next(hierba);
        observer.complete();
      });
    });
  }

}
