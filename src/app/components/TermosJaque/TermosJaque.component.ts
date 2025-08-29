import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, NgZone, Renderer2 } from '@angular/core';
import { AnimateInDirective } from '../../animate-in.directive';

@Component({
  selector: 'app-termos-jaque',
  imports: [CommonModule,AnimateInDirective],
  templateUrl: './TermosJaque.component.html',
  styleUrl: './TermosJaque.component.scss',
})
export class TermosJaqueComponent implements AfterViewInit { 

 constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    const videos: NodeListOf<HTMLVideoElement> = this.el.nativeElement.querySelectorAll('video');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const video = entry.target as HTMLVideoElement;

        if (entry.isIntersecting) {
          // ✅ Configurar atributos en runtime
          this.renderer.setAttribute(video, 'playsinline', '');
          this.renderer.setAttribute(video, 'webkit-playsinline', '');
          this.renderer.setAttribute(video, 'muted', '');
          this.renderer.removeAttribute(video, 'loop'); // no loop

          // ✅ Forzar reproducción
          video.muted = true; 
          video.play().catch(err => console.warn('Autoplay bloqueado:', err));

          // ✅ Dejar de observar (solo una vez)
          observer.unobserve(video);
        }
      });
    }, { threshold: 0.3 });

    // Observar cada <video>
    videos.forEach(video => observer.observe(video));
  }
}