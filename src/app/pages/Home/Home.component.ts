import { ChangeDetectionStrategy, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NavbarComponent } from "../../layouts/navbar/navbar.component";
import { PresentacionComponent } from "../../layouts/HomePage/presentacion/presentacion.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, PresentacionComponent],
  templateUrl: './Home.component.html',
  styleUrl: './Home.component.scss',
})
export class HomeComponent {

images: string[] = [
    'pomos/pomo1.webp',
    'pomos/pomo2.webp',
    'pomos/pomo3.webp'
  ];
  currentImage: string = this.images[0];
  private index = 0;
  private intervalId: any;


  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.index = (this.index + 1) % this.images.length;
      this.currentImage = this.images[this.index];
    }, 1000);
  }

 
}
