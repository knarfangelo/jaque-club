import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { NavbarComponent } from "../../layouts/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../layouts/footer/footer.component";
import { LogoJaqueComponent } from "../../components/LogoJaque/LogoJaque.component";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TermosJaqueComponent } from "../../components/TermosJaque/TermosJaque.component";
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, CommonModule, FooterComponent, LogoJaqueComponent, TermosJaqueComponent],
  templateUrl: './Home.component.html',
  styleUrl: './Home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('videoBg') videoBg!: ElementRef<HTMLVideoElement>;
  @ViewChild('izquierda') izquierda!: ElementRef;
  @ViewChild('derecha') derecha!: ElementRef;
  @ViewChild('logoJaque') logoJaque!: ElementRef;

  leftText = '';
  rightText = '';
  showLogo = false;

  constructor(private zone: NgZone) {}

  ngAfterViewInit() {
    // Forzar autoplay video
    const video = this.videoBg.nativeElement;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.play().catch(err => console.warn("Video autoplay bloqueado:", err));

ScrollTrigger.create({
  trigger: '.trigger-1',
  start: 'top center',
  end: 'bottom center',
  scrub: true,
  markers: false,
  onEnter: () => this.zone.run(() => {
    this.leftText = 'UNETE A';
    this.rightText = 'AHORA';
    this.showLogo = true;   // 👈 también reseteamos
  }),
  onLeaveBack: () => this.zone.run(() => {
    this.leftText = '';
    this.rightText = '';
    this.showLogo = false; // 👈 reseteamos al salir hacia atrás
  }),
  animation: gsap.timeline()
    .fromTo(".izquierda", { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 2 })
    .fromTo(".derecha",   { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 2 }, "<")
    .to(".logo-wrapper", { scale: 1, opacity: 1, duration: 3 }, "<") // 👈 ahora sí funciona
});
}

  pomos: string[] = [
    'pomos/pomoLoyalty.webp',
    'pomos/pomoSuccess.webp',
    'pomos/pomoDecision.webp',
    'pomos/pomoLove.webp',
    'pomos/jaque.png'
  ];
  currentIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.pomos.length;
    }, 1500);
  }
}
