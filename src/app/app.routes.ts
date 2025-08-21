import { Routes } from '@angular/router';
import { HomeComponent } from './pages/Home/Home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { PoliticaEnviosComponent } from './pages/politicaEnvios/politicaEnvios.component';
import { PoliticaDevolucionComponent } from './pages/politica-devolucion/politica-devolucion.component';
import { TerminosCondicionesComponent } from './pages/TerminosCondiciones/TerminosCondiciones.component';
import { LibroReclamacionesComponent } from './pages/libroReclamaciones/libroReclamaciones.component';
import { CatalogoComponent } from './pages/Catalogo/Catalogo.component';
import { TermosJaqueComponent } from './components/TermosJaque/TermosJaque.component';

export const routes: Routes = [

    {
        path: '',
        component: HomeComponent
    },
    {
        path:'contacto',
        component:ContactoComponent
    },
    {
        path:'politica-envios',
        component:PoliticaEnviosComponent
    },
    {
        path:'politica-devolucion',
        component:PoliticaDevolucionComponent
    },
    {
        path:'terminos-condiciones',
        component:TerminosCondicionesComponent
    },
    {
        path:'libro-reclamaciones',
        component:LibroReclamacionesComponent
    },
    { path: 'catalogo', component: CatalogoComponent },
    { path: 'test', component:TermosJaqueComponent }

];
