import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent } from "../../layouts/footer/footer.component";
import { NavbarComponent } from "../../layouts/navbar/navbar.component";
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../../Producto.service';
import { TermoService } from '../../services/termo.service';

@Component({
  selector: 'app-detalles-jaques',
  imports: [CommonModule, FooterComponent, NavbarComponent],
  templateUrl: './detalles-jaques.component.html',
  styleUrl: './detalles-jaques.component.scss',
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
