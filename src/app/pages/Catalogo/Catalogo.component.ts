import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from "../../layouts/navbar/navbar.component";
import { FooterComponent } from "../../layouts/footer/footer.component";

@Component({
  selector: 'app-catalogo',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './Catalogo.component.html',
  styleUrl: './Catalogo.component.scss',
})
export class CatalogoComponent { }
