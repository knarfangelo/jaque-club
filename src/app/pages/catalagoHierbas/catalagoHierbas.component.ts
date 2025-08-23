import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from "../../layouts/navbar/navbar.component";
import { FooterComponent } from "../../layouts/footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-catalago-hierbas',
  imports: [NavbarComponent, FooterComponent, RouterLink],
  templateUrl: './catalagoHierbas.component.html',
  styleUrl: './catalagoHierbas.component.scss',
})
export class CatalagoHierbasComponent { }
