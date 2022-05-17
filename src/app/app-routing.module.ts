import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { TabelaComponent } from './views/tabela/tabela.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"tabela",component:TabelaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
