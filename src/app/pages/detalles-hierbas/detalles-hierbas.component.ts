import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HierbasService, Hierba } from '../../services/hierbas.service';
import { NavbarComponent } from "../../layouts/navbar/navbar.component";
import { FooterComponent } from "../../layouts/footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalles-hierbas',
  imports: [NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './detalles-hierbas.component.html',
  styleUrls: ['./detalles-hierbas.component.scss']
})
export class DetallesHierbasComponent implements OnInit {
  hierba?: Hierba;

  constructor(
    private route: ActivatedRoute,
    private hierbasService: HierbasService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.hierbasService.getHierbaById(id).subscribe(data => {
      this.hierba = data;
    });
  }
}
