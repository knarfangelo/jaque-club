import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, HostListener, NgZone, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NavbarComponent } from "../../layouts/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../layouts/footer/footer.component";
import { LogoJaqueComponent } from "../../components/LogoJaque/LogoJaque.component";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-home',
  imports: [NavbarComponent, CommonModule, FooterComponent, CommonModule, LogoJaqueComponent],
  templateUrl: './Home.component.html',
  styleUrl: './Home.component.scss',
})
export class HomeComponent implements AfterViewInit {

 leftText = 'UNETE A';
  rightText = 'AHORA';

  constructor(private zone: NgZone) {}

  ngAfterViewInit() {
    ScrollTrigger.create({
      trigger: '.logotipo',
      start: 'top 300px',
      end: 'top 600px',
      onEnter: () => this.zone.run(() => {
        this.leftText = 'DESCUBRE';
        this.rightText = 'NUEVO';
      }),
      onLeave: () => this.zone.run(() => {
        this.leftText = 'SUMATE';
        this.rightText = 'YA';
      }),
      onEnterBack: () => this.zone.run(() => {
        this.leftText = 'DESCUBRE';
        this.rightText = 'NUEVO';
      }),
      onLeaveBack: () => this.zone.run(() => {
        this.leftText = 'UNETE A';
        this.rightText = 'AHORA';
      }),
      markers: true
    });
  }
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
