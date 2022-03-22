import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarComponent } from './components/consultar/consultar.component';
import { RegistrarComponent } from './components/registrar/registrar.component';

const routes: Routes = [
  { path: '', redirectTo: '/consultar', pathMatch: 'full' },
  { path: 'consultar', component: ConsultarComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: '**', redirectTo: '/consultar', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
