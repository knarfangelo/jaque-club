import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../Producto.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../layouts/footer/footer.component";
import { NavbarComponent } from "../../layouts/navbar/navbar.component";

@Component({
  selector: 'app-producto-detalle',
  imports: [CommonModule, FooterComponent, NavbarComponent],
  templateUrl: './ProductoDetalle.component.html',
  styleUrl: './ProductoDetalle.component.scss',
})
export class ProductoDetalleComponent {

   producto: any;

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService
  ) {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.producto = this.productoService.getProductoById(id);
  }

    cantidad = 1;

  incrementarCantidad() {
    this.cantidad++;
  }

  decrementarCantidad() {
    if (this.cantidad > 1) {
      this.cantidad--;
    }
  }

  pagar() {
    // Lógica de pago
    console.log('Pagando', this.cantidad, 'unidad(es)');
  }

}
