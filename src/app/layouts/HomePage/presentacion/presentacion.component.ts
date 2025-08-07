import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  QueryList,
  ViewChildren
} from '@angular/core';
import { LogoJaqueComponent } from "../../../components/LogoJaque/LogoJaque.component";

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
  }
}
