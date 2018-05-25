import { ItemService } from './item.service';
import { routing } from './app.routing';
import { FormularioComponent } from './formulario/formulario.component';
import { DetalheItemComponent } from './detalhe-item/detalhe-item.component';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    DetalheItemComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
