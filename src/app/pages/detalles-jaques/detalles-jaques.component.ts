import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FooterComponent } from "../../layouts/footer/footer.component";
import { NavbarComponent } from "../../layouts/navbar/navbar.component";
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TermoService } from '../../services/termo.service';
import { GalleriaModule } from 'primeng/galleria';
import { register } from 'swiper/element/bundle';
import { DialogModule } from 'primeng/dialog';
import { Video360Component } from '../../components/video360/video360.component';

register();

@Component({
  selector: 'app-detalles-jaques',
  standalone: true,
  imports: [CommonModule, FooterComponent, NavbarComponent, GalleriaModule, DialogModule,Video360Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './detalles-jaques.component.html',
  styleUrls: ['./detalles-jaques.component.scss'],
})
export class DetallesJaquesComponent implements AfterViewInit {
  id!: number;
  producto: any;
  images: any[] = [];

  @ViewChild('swiperPrincipal', { static: false }) swiperPrincipal!: ElementRef;

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

  ngAfterViewInit(): void {
    // Asegurar que swiper esté listo
    this.swiperPrincipal.nativeElement.swiper.update();
  }

  goToSlide(index: number) {
    this.swiperPrincipal.nativeElement.swiper.slideTo(index);
  }

  modalVisible: boolean = false;


  cantidad: number = 1; // inicializa en 1

incrementar() {
  if (this.cantidad < 100) {
    this.cantidad++;
  }
}

decrementar() {
  if (this.cantidad > 1) {
    this.cantidad--;
  }
}

abrirModal() {
  this.modalVisible = true;
}



}
