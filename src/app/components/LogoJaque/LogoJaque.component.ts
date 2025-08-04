import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-logo-jaque',
  imports: [CommonModule],
  templateUrl: './LogoJaque.component.html',
  styleUrl: './LogoJaque.component.scss',
})
export class LogoJaqueComponent {
  svgList: string[] = [
    '/jaque/jaque1.svg',
    '/jaque/jaque2.svg',
    '/jaque/jaque3.svg',
    '/jaque/jaque4.svg'
  ];

  currentIndex = 0;
  private intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.svgList.length;
    }, 1000); // cambia cada segundo
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
