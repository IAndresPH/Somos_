import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { HeaderComponent } from './header/header.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { FooterComponent } from './footer/footer.component';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
