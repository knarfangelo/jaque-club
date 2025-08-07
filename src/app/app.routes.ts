import { Routes } from '@angular/router';
import { HomeComponent } from './pages/Home/Home.component';
import { TestPresentacionComponent } from './test/testPresentacion/testPresentacion.component';

export const routes: Routes = [

    {
        path: '',
        component: HomeComponent
    },
    {
        path:'testPresentacion',
        component:TestPresentacionComponent
    }

];
