import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from "../../layouts/navbar/navbar.component";
import { FooterComponent } from "../../layouts/footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-catalogo-cafes',
  imports: [NavbarComponent, FooterComponent,RouterLink],
  templateUrl: './catalogoCafes.component.html',
  styleUrl: './catalogoCafes.component.scss',
})
export class CatalogoCafesComponent { }
