import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent } from "../../layouts/footer/footer.component";
import { NavbarComponent } from "../../layouts/navbar/navbar.component";
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalles-jaques',
  imports: [CommonModule, FooterComponent, NavbarComponent],
  templateUrl: './detalles-jaques.component.html',
  styleUrl: './detalles-jaques.component.scss',
})
export class DetallesJaquesComponent {

   id!: number;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id')); // capturamos el id de la ruta
    });
  }

}
