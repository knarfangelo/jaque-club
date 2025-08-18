import { ChangeDetectionStrategy, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NavbarComponent } from "../../layouts/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../layouts/footer/footer.component";
import { LogoJaqueComponent } from "../../components/LogoJaque/LogoJaque.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, CommonModule, FooterComponent, CommonModule, LogoJaqueComponent],
  templateUrl: './Home.component.html',
  styleUrl: './Home.component.scss',
})
export class HomeComponent {
 pomos: string[] = [
    'pomos/pomo1.webp',
    'pomos/pomo2.webp',
    'pomos/pomo3.webp',
    'pomos/pomo4.webp'
  ];

  currentIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.pomos.length;
    }, 1000); // cambia cada 2 segundos
  }
}
