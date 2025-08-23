import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from "../../layouts/navbar/navbar.component";
import { FooterComponent } from "../../layouts/footer/footer.component";
import { ActivatedRoute } from '@angular/router';
import { Cafe, CafesService } from '../../services/cafes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalles-cafes',
  imports: [NavbarComponent, FooterComponent,CommonModule],
  templateUrl: './detalles-cafes.component.html',
  styleUrl: './detalles-cafes.component.scss',
})
export class DetallesCafesComponent {

    cafe?: Cafe;

  constructor(
    private route: ActivatedRoute,
    private cafesService: CafesService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.cafesService.getCafeById(id).subscribe(data => {
      this.cafe = data;
    });
  }

}
