import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FooterComponent } from "../../layouts/footer/footer.component";
import { NavbarComponent } from "../../layouts/navbar/navbar.component";
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TermoService } from '../../services/termo.service';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-detalles-jaques',
  imports: [CommonModule, FooterComponent, NavbarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './detalles-jaques.component.html',
  styleUrls: ['./detalles-jaques.component.scss'],
})
export class DetallesJaquesComponent {

  id!: number;
  producto: any;

  constructor(
    private route: ActivatedRoute,
    private termoService: TermoService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.termoService.getProductoById(id).subscribe(data => {
      this.producto = data;
    });
  }

}
