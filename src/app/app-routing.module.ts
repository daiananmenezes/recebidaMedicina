import { NgModule } from '@angular/core';
import { Routes, RouterModule,  } from '@angular/router';
import { EquipeComponent } from './equipe/equipe.component';
import { HomeComponent } from './home/home.component';
import { RoletaComponent } from './roleta/roleta.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  //{ path: 'agendamento', component: AgendamentoComponent },
  { path: 'roleta', component: RoletaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
