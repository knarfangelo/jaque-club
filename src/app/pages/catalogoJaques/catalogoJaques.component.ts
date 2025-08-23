import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from "../../layouts/navbar/navbar.component";
import { FooterComponent } from "../../layouts/footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-catalogo-jaques',
  imports: [NavbarComponent, FooterComponent, RouterLink],
  templateUrl: './catalogoJaques.component.html',
  styleUrl: './catalogoJaques.component.scss',
})
export class CatalogoJaquesComponent { }
