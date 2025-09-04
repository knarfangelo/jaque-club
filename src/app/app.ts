import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { LoadingService } from './Loading.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected title = 'jaques-club';

  constructor(private router: Router, public loadingService: LoadingService) {
    this.router.events.subscribe(async event => {
      if (event instanceof NavigationStart) {
        this.loadingService.show();
      }

      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        await this.waitForImages();
        this.loadingService.hide();
      }
    });
  }

  private waitForImages(): Promise<void> {
    return new Promise((resolve) => {
      const images: HTMLImageElement[] = Array.from(document.querySelectorAll('img'));
      if (images.length === 0) {
        resolve();
        return;
      }

      let loadedCount = 0;
      images.forEach(img => {
        if (img.complete) {
          loadedCount++;
        } else {
          img.onload = () => loadedCount++;
          img.onerror = () => loadedCount++;
        }
      });

      const check = setInterval(() => {
        if (loadedCount >= images.length) {
          clearInterval(check);
          resolve();
        }
      }, 50);
    });
  }
}
