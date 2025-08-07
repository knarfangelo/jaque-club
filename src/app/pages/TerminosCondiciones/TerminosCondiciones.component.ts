import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from "../../layouts/navbar/navbar.component";
import { FooterComponent } from "../../layouts/footer/footer.component";

@Component({
  selector: 'app-terminos-condiciones',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './TerminosCondiciones.component.html',
  styleUrl: './TerminosCondiciones.component.scss',
})
export class TerminosCondicionesComponent { }
