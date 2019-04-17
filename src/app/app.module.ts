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
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthentificationService } from './service/authentification.service';
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
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    LogoutComponent,
    SupprimerclientComponent,
    DetailsclientComponent,
    ModifierClientComponent,

  ],
  providers: [AuthentificationService,ClientsService],
  bootstrap: [AppComponent],
  entryComponents:[DetailsclientComponent,SupprimerclientComponent,ModifierClientComponent]

})
export class AppModule { }
