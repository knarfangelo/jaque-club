import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';
import { AnimateInDirective } from '../../animate-in.directive';

@Component({
  selector: 'app-termos-jaque',
  imports: [CommonModule, AnimateInDirective],
  templateUrl: './TermosJaque.component.html',
  styleUrl: './TermosJaque.component.scss',
})
export class TermosJaqueComponent implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const videos: NodeListOf<HTMLVideoElement> = this.el.nativeElement.querySelectorAll('video');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const video = entry.target as HTMLVideoElement;

        if (entry.isIntersecting) {
          // ✅ Configurar atributos
          this.renderer.setAttribute(video, 'playsinline', '');
          this.renderer.setAttribute(video, 'webkit-playsinline', '');
          this.renderer.setAttribute(video, 'muted', '');
          this.renderer.removeAttribute(video, 'loop'); // sin loop automático

          // ✅ Reiniciar y reproducir al entrar
          video.currentTime = 0;
          video.muted = true;
          video.play().catch(err => console.warn('Autoplay bloqueado:', err));
        } else {
          // ✅ Pausar y resetear al salir del viewport
          video.pause();
          video.currentTime = 0;
        }
      });
    }, { threshold: 0.3 });

    videos.forEach(video => observer.observe(video));
  }
}
