import { Routes } from '@angular/router';
import { HomeComponent } from './pages/Home/Home.component';
import { TestPresentacionComponent } from './test/testPresentacion/testPresentacion.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { PoliticaEnviosComponent } from './pages/politicaEnvios/politicaEnvios.component';
import { PoliticaDevolucionComponent } from './pages/politica-devolucion/politica-devolucion.component';
import { TerminosCondicionesComponent } from './pages/TerminosCondiciones/TerminosCondiciones.component';
import { LibroReclamacionesComponent } from './pages/libroReclamaciones/libroReclamaciones.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ProductoDetalleComponent } from './pages/ProductoDetalle/ProductoDetalle.component';
import { CatalogoComponent } from './pages/Catalogo/Catalogo.component';

export const routes: Routes = [

    {
        path: '',
        component: HomeComponent
    },
    {
        path:'testPresentacion',
        component:TestPresentacionComponent
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
    {
        path: 'productos',
        component: ProductosComponent
    },
    { path: 'producto/:id', component: ProductoDetalleComponent },
    { path: 'catalogo', component: CatalogoComponent }



];
