import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-video360',
  imports: [CommonModule],
  templateUrl: './video360.component.html',
  styleUrls: ['./video360.component.scss'],
})
export class Video360Component implements AfterViewInit {
  @ViewChild('frame360', { static: true }) imgRef!: ElementRef<HTMLImageElement>;

  @Input() folderPath: string = '/videos360/';
  @Input() frameCount: number = 67;

  frames: string[] = [];
  currentFrame = 0;

  isRotating = false;
  lastX = 0;
  totalFrames = 0;

  ngAfterViewInit() {
    this.frames = [];
    for (let i = 1; i <= this.frameCount; i++) {
      const num = i.toString().padStart(6, '0');
      this.frames.push(`${this.folderPath}frame_${num}.jpg`);
    }
    this.totalFrames = this.frames.length;
  }

  startRotate(event: MouseEvent | TouchEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isRotating = true;
    this.lastX = this.getClientX(event);
  }

  rotate(event: MouseEvent | TouchEvent) {
    event.preventDefault();
    event.stopPropagation();
    if (!this.isRotating) return;

    const clientX = this.getClientX(event);
    const dx = clientX - this.lastX;
    const sensitivity = 5;

    if (Math.abs(dx) >= sensitivity) {
      if (dx > 0) {
        this.currentFrame = (this.currentFrame + 1) % this.totalFrames;
      } else {
        this.currentFrame = (this.currentFrame - 1 + this.totalFrames) % this.totalFrames;
      }
      this.lastX = clientX;
    }
  }

  stopRotate() {
    this.isRotating = false;
  }

  getClientX(event: MouseEvent | TouchEvent): number {
    if (event instanceof MouseEvent) return event.clientX;
    else return event.touches[0].clientX;
  }
}
