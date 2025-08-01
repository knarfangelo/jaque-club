import { ChangeDetectionStrategy, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-presentacion',
  imports: [],
  templateUrl: './presentacion.component.html',
  styleUrl: './presentacion.component.scss',
})
export class PresentacionComponent {

    private intervalId: any;
    @ViewChildren('videos') videos!: QueryList<ElementRef<HTMLVideoElement>>;


   ngAfterViewInit() {
    // Iniciar todos los videos en bucle silenciado
    this.videos.forEach((videoRef) => {
      const video = videoRef.nativeElement;
      video.muted = true;
      video.play().catch((error) => {
        console.warn('Autoplay bloqueado para un video:', error);
      });
    });

    // Cambio aleatorio de visibilidad cada 5s
    this.intervalId = setInterval(() => {
      this.showTwoRandomVideos();
    }, 5000);

    // Mostrar 2 al principio
    this.showTwoRandomVideos();
  }

  private showTwoRandomVideos() {
    const allVideos = this.videos.toArray();

    // Obtener 2 índices aleatorios sin repetir
    const shuffled = allVideos
      .map((v, i) => ({ index: i, rand: Math.random() }))
      .sort((a, b) => a.rand - b.rand)
      .slice(0, 2)
      .map((item) => item.index);

    // Mostrar solo los videos seleccionados
    allVideos.forEach((videoRef, i) => {
      const video = videoRef.nativeElement;
      video.hidden = !shuffled.includes(i);
    });
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }


}
