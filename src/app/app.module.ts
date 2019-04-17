import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientsService } from './services/clients.service';
import { SupprimerclientComponent } from './gestion-client/supprimerclient/supprimerclient.component';
import { DetailsclientComponent } from './gestion-client/detailsclient/detailsclient.component';
import { ModifierClientComponent } from './gestion-client/modifier-client/modifier-client.component' ;

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    SupprimerclientComponent,
    DetailsclientComponent,
    ModifierClientComponent,

  ],
  providers: [ClientsService],
  bootstrap: [AppComponent],
  entryComponents:[DetailsclientComponent,SupprimerclientComponent,ModifierClientComponent]
})
export class AppModule { }
