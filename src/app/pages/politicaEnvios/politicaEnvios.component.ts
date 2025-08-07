import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from "../../layouts/navbar/navbar.component";
import { FooterComponent } from "../../layouts/footer/footer.component";

@Component({
  selector: 'app-politica-envios',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './politicaEnvios.component.html',
  styleUrl: './politicaEnvios.component.scss',
})
export class PoliticaEnviosComponent { }
