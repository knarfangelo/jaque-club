import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavbarComponent } from "../../layouts/navbar/navbar.component";
import { FooterComponent } from "../../layouts/footer/footer.component";
import { TabsModule } from 'primeng/tabs';
import { register } from 'swiper/element-bundle';
import { RouterLink } from '@angular/router';
register();
@Component({
  selector: 'app-catalogo',
  imports: [NavbarComponent, FooterComponent, TabsModule, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './Catalogo.component.html',
  styleUrl: './Catalogo.component.scss',
  
})
export class CatalogoComponent { }
