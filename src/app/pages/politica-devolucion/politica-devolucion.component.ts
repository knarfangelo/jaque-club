import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from "../../layouts/navbar/navbar.component";
import { FooterComponent } from "../../layouts/footer/footer.component";

@Component({
  selector: 'app-politica-devolucion',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './politica-devolucion.component.html',
  styleUrl: './politica-devolucion.component.scss',
})
export class PoliticaDevolucionComponent { }
