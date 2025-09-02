import { Component, ElementRef, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [FormsModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
 menuOpen = false;

  constructor(private eRef: ElementRef) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  goTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    this.menuOpen = false; // cerrar el menú al navegar
  }

  // Detectar clics globales
  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    if (this.menuOpen && !this.eRef.nativeElement.contains(event.target)) {
      this.menuOpen = false;
    }
  }
}
