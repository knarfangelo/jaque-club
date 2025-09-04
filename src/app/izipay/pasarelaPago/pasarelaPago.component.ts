import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from "../../layouts/navbar/navbar.component";
import { FooterComponent } from "../../layouts/footer/footer.component";

@Component({
  selector: 'app-pasarela-pago',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './pasarelaPago.component.html',
  styleUrl: './pasarelaPago.component.scss',
})
export class PasarelaPagoComponent {



}
