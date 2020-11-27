import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Componentes
import { CalculadoraComponent } from './components/calculadora/calculadora.component';

import { NgxsModule } from '@ngxs/store';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([], {
      developmentMode: true
    })
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
