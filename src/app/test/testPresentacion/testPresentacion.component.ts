import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LogoJaqueComponent } from '../../components/LogoJaque/LogoJaque.component';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-test-presentacion',
  templateUrl: './testPresentacion.component.html',
  styleUrls: ['./testPresentacion.component.scss'],
  standalone: true,
  imports: [LogoJaqueComponent],
})
export class TestPresentacionComponent implements OnInit, AfterViewInit, OnDestroy {
  videos = [
    { video: 'media/video1.webm', hidden: false },
    { video: 'media/video2.webm', hidden: false },
    { video: 'media/video3.webm', hidden: false },
    { video: 'media/video4.webm', hidden: false },
  ];

  private intervalId!: ReturnType<typeof setInterval>;

  @ViewChild('titulo') tituloRef!: ElementRef<HTMLDivElement>;
  @ViewChild('presentacion') presentacionRef!: ElementRef<HTMLElement>;
  @ViewChild('pomosJaque') pomosJaqueRef!: ElementRef<HTMLElement>;
  @ViewChildren('videoPlayer') videoRefs!: QueryList<ElementRef<HTMLVideoElement>>;

  ngOnInit(): void {
    this.iniciarCambioAleatorioCada3s();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  ngAfterViewInit(): void {
    const titulo = this.tituloRef.nativeElement;
    const presentacion = this.presentacionRef.nativeElement;
    const pomos = this.pomosJaqueRef.nativeElement;

    // Asegurarse que pomos-jaque esté oculto al inicio
    pomos.hidden = true;
    gsap.set(pomos, { opacity: 0 });

    // Cambiar texto según scroll
    const cambios = [
      { trigger: '#step1', texto: 'LOYALTY',pomo:'pomos/pomo2.webp', linea:'lineas/linea4.svg',lineaslogo:'lineaslogo/lineaslogo2.png' },
      { trigger: '#step2', texto: 'SUCCES',pomo:'pomos/pomo3.webp', linea:'lineas/linea2.svg',lineaslogo:'lineaslogo/lineaslogo3.png' },
      { trigger: '#step3', texto: 'DECISION',pomo:'pomos/pomo1.webp', linea:'lineas/linea3.svg',lineaslogo:'lineaslogo/lineaslogo4.png' },
      { trigger: '#step4', texto: 'LOVE',pomo:'pomos/pomo4.webp', linea:'lineas/linea1.svg',lineaslogo:'lineaslogo/lineaslogo1.png' },
    ];

    cambios.forEach((cambio) => {
      ScrollTrigger.create({
        trigger: cambio.trigger,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => this.animarTexto(titulo, cambio.texto, cambio.pomo,cambio.linea,cambio.lineaslogo),
        onEnterBack: () => this.animarTexto(titulo, cambio.texto,cambio.pomo,cambio.linea,cambio.lineaslogo),
      });
    });

    // Mostrar/ocultar pomos-jaque según scroll
    ScrollTrigger.create({
      trigger: '#step1',
      start: 'top center',
      end: 'bottom center',
      onEnter: () => this.mostrarPomos(presentacion, pomos),
      onLeaveBack: () => this.mostrarPresentacion(presentacion, pomos),
    });

    // Reproducir videos
    this.videoRefs.forEach((videoEl) => {
      const video = videoEl.nativeElement;
      video.muted = true;
      video.play().catch((err) => {
        console.warn('No se pudo reproducir el video automáticamente:', err);
      });
    });
  }

  private iniciarCambioAleatorioCada3s(): void {
    this.asignarHiddenAleatorio();

    this.intervalId = setInterval(() => {
      this.asignarHiddenAleatorio();
    }, 3000);
  }

  private asignarHiddenAleatorio(): void {
    const cantidad = Math.floor(Math.random() * 3) + 1;
    const indices = Array.from({ length: this.videos.length }, (_, i) => i);

    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    this.videos.forEach((v) => (v.hidden = false));
    indices.slice(0, cantidad).forEach((i) => (this.videos[i].hidden = true));
  }


  pomo:string = ''
  linea:string = ''
  lineaslogo:string = ''

  private animarTexto(titulo: HTMLElement, nuevoTexto: string, pomo:string, linea:string, lineaslogo:string) {
    this.pomo = pomo
    this.linea = linea
    this.lineaslogo = lineaslogo
    gsap.to(titulo, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      onComplete: () => {
        titulo.innerText = nuevoTexto;

        gsap.fromTo(
          titulo,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.3 }
        );
      },
    });
  }

  private mostrarPomos(presentacion: HTMLElement, pomos: HTMLElement) {
    gsap.to(presentacion, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        presentacion.hidden = true;
        pomos.hidden = false;
        gsap.fromTo(pomos, { opacity: 0 }, { opacity: 1, duration: 0.5 });
      },
    });
  }

  private mostrarPresentacion(presentacion: HTMLElement, pomos: HTMLElement) {
    gsap.to(pomos, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        pomos.hidden = true;
        presentacion.hidden = false;
        gsap.fromTo(presentacion, { opacity: 0 }, { opacity: 1, duration: 0.5 });
      },
    });
  }
}
