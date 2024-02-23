import { Routes } from '@angular/router';
import { InfouserComponent } from './infouser/infouser.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { MultimComponent } from './multim/multim.component';

export const routes: Routes = [
    {path: '', redirectTo: '/infouser', pathMatch: 'full' },
    {path: 'infouser', component: InfouserComponent},
    {path: 'estadisticas', component: EstadisticasComponent},
    {path: 'multim', component: MultimComponent}
];
