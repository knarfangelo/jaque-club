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
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'animate-in');
          observer.unobserve(this.el.nativeElement); // se ejecuta una sola vez
        }
      });
    }, { threshold: 0.3 });

    observer.observe(this.el.nativeElement);
  }
}