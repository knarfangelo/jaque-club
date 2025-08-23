import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hierba } from '../../services/hierbas.service';
import { ActivatedRoute } from '@angular/router';
import { Infucion, InfucionesService } from '../../services/infuciones.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../layouts/navbar/navbar.component";
import { FooterComponent } from "../../layouts/footer/footer.component";

@Component({
  selector: 'app-detalles-infuciones',
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './detalles-infuciones.component.html',
  styleUrl: './detalles-infuciones.component.scss',
})
export class DetallesInfucionesComponent {

    infucion?: Infucion;

  constructor(
    private route: ActivatedRoute,
    private infucionesService: InfucionesService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.infucionesService.getInfucionById(id).subscribe(data => {
      this.infucion = data;
    });
  }

}
