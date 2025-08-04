import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  QueryList,
  ViewChildren
} from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { LogoJaqueComponent } from "../../../components/LogoJaque/LogoJaque.component";

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-presentacion',
  standalone: true,
  imports: [LogoJaqueComponent],
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.scss'],
})
export class PresentacionComponent implements AfterViewInit, OnDestroy {
  private intervalId: any;
  @ViewChildren('videos') videos!: QueryList<ElementRef<HTMLVideoElement>>;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    // 🔁 Reproducir todos los videos silenciados en bucle
    this.videos.forEach((videoRef) => {
      const video = videoRef.nativeElement;
      video.muted = true;
      video.play().catch((error) => {
        console.warn('Autoplay bloqueado para un video:', error);
      });
    });

    // 🎲 Mostrar dos videos aleatorios cada 5s
    this.intervalId = setInterval(() => {
      this.showTwoRandomVideos();
    }, 5000);
    this.showTwoRandomVideos();

    // ✨ Animaciones GSAP al hacer scroll
    gsap.utils.toArray('.section').forEach((section: any) => {
      const text = section.querySelector('.animated-text');
      gsap.fromTo(
        text,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
            // markers: true,
          },
          duration: 1
        }
      );
    });

    // 🔤 Cambio de texto al hacer scroll sobre #section2
    const dynamicText = this.el.nativeElement.querySelector('#dynamicText');

    const sections = [
    { id: '#section1', text: 'Texto 1' },
    { id: '#section2', text: 'Texto 2' },
    { id: '#section3', text: 'Texto 3' },
    ];

    sections.forEach((section, i) => {
  ScrollTrigger.create({
    trigger: section.id,
    start: 'top+=100vh center',
    markers: false,
    onEnter: () => dynamicText.innerText = section.text,
    onLeaveBack: () => {
      const prev = sections[i - 1];
      if (prev) dynamicText.innerText = prev.text;
    }
  });
});
  }

  private showTwoRandomVideos() {
    const allVideos = this.videos.toArray();

    const shuffled = allVideos
      .map((v, i) => ({ index: i, rand: Math.random() }))
      .sort((a, b) => a.rand - b.rand)
      .slice(0, 2)
      .map((item) => item.index);

    allVideos.forEach((videoRef, i) => {
      const video = videoRef.nativeElement;
      video.hidden = !shuffled.includes(i);
    });
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }
}
