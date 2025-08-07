import { ChangeDetectionStrategy, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NavbarComponent } from "../../layouts/navbar/navbar.component";
import { PresentacionComponent } from "../../layouts/HomePage/presentacion/presentacion.component";
import { CommonModule } from '@angular/common';
import { TestPresentacionComponent } from "../../test/testPresentacion/testPresentacion.component";
import { FooterComponent } from "../../layouts/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, PresentacionComponent, CommonModule, TestPresentacionComponent, FooterComponent],
  templateUrl: './Home.component.html',
  styleUrl: './Home.component.scss',
})
export class HomeComponent {
  images: string[] = [
    '/pomos/pomo1.webp',
    '/pomos/pomo2.webp',
    '/pomos/pomo3.webp'
  ];

  index = 0;
  private intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.index = (this.index + 1) % this.images.length;
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
