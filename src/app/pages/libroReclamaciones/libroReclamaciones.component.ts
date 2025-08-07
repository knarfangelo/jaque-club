import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from "../../layouts/navbar/navbar.component";
import { FooterComponent } from "../../layouts/footer/footer.component";

@Component({
  selector: 'app-libro-reclamaciones',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './libroReclamaciones.component.html',
  styleUrl: './libroReclamaciones.component.scss',
})
export class LibroReclamacionesComponent { }
