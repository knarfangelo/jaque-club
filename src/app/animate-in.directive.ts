import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appAnimateIn]',
})
export class AnimateInDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'animate-in');
          observer.unobserve(this.el.nativeElement); // solo se ejecuta una vez
        }
      });
    }, { threshold: 0.3 });

    observer.observe(this.el.nativeElement);
  }
}
