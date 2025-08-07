import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from "../../layouts/navbar/navbar.component";
import { FooterComponent } from "../../layouts/footer/footer.component";

@Component({
  selector: 'app-contacto',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss',
})
export class ContactoComponent { }
