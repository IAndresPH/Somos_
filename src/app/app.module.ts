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

const routes: Routes=[
  {path: '', redirectTo: './QuienesSomos', pathMatch:'full'},
  {path: 'Galeria', component:GaleriaComponent},
  {path: 'QuienesSomos', component:QuienesSomosComponent},
  {path: 'servicios', component:ServiciosComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    ServiciosComponent,
    HeaderComponent,
    QuienesSomosComponent,
    GaleriaComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
