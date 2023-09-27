import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { HeaderComponent } from './header/header.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

const routes: Routes=[
  {path: '', redirectTo: './home', pathMatch:'full'},
  {path: '', redirectTo: './quienes-somos', pathMatch:'full'},
  {path: '', redirectTo: './servicios', pathMatch:'full'},
  {path: '', redirectTo: './galeria', pathMatch:'full'},

  {path: 'servicios', component:ServiciosComponent},
  {path: 'quienes-somos', component:QuienesSomosComponent},
  {path: 'galeria', component:GaleriaComponent},
  {path: 'home', component:HomeComponent},


]
@NgModule({
  declarations: [
    AppComponent,
    ServiciosComponent,
    HeaderComponent,
    QuienesSomosComponent,
    GaleriaComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
