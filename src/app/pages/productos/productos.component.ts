import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from "../../layouts/navbar/navbar.component";
import { FooterComponent } from "../../layouts/footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productos',
  imports: [CommonModule, NavbarComponent, FooterComponent,RouterLink],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss',
})
export class ProductosComponent {

  productos = [
  {
    id: 'loyalty',
    nombre: 'Jaque Road To Loyalty',
    imagen: 'pomos/pomo2.webp',
    precioOriginal: 200,
    precioOferta: 160
  },
  {
    id: 'success',
    nombre: 'Jaque Road To Success',
    imagen: 'pomos/pomo3.webp',
    precioOriginal: 200,
    precioOferta: 160
  },
  {
    id: 'decision',
    nombre: 'Jaque Road to Decision',
    imagen: 'pomos/pomo1.webp',
    precioOriginal: 200,
    precioOferta: 160
  },
  {
    id: 'love',
    nombre: 'Jaque Road to Love',
    imagen: 'pomos/pomo4.webp',
    precioOriginal: 200,
    precioOferta: 160
  }
];


}
