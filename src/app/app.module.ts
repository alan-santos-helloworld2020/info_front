import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { HomeComponent } from './views/home/home.component';
import { TabelaComponent } from './views/tabela/tabela.component';
import { NavegadorComponent } from './components/navegador/navegador.component';
import { DocumentosComponent } from './components/documentos/documentos.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    HomeComponent,
    TabelaComponent,
    NavegadorComponent,
    DocumentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
