import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';

import {GestionClientComponent} from '../../gestion-client/gestion-client.component';
import {GestionCompteComponent} from '../../gestion-compte/gestion-compte.component';
import {GestionAgenceComponent} from '../../gestion-agence/gestion-agence.component';
import {GestionEmpComponent} from '../../gestion-emp/gestion-emp.component';
import {GestionOperationComponent} from '../../gestion-operation/gestion-operation.component';
import {RechercheComponent} from '../../recherche/recherche.component';
import {AdminComponent} from '../../admin/admin.component';
import { SupprimerclientComponent } from '../../gestion-client/supprimerclient/supprimerclient.component';
import { DetailsclientComponent } from '../../gestion-client/detailsclient/detailsclient.component';
import { ModifierClientComponent } from '../../gestion-client/modifier-client/modifier-client.component' ;

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

import {MatDialogModule} from '@angular/material/dialog';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatButtonToggleModule,
  MatIconModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatSlideToggleModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatIconModule,
    MatDialogModule,
    MatDatepickerModule,MatNativeDateModule,
    MatSlideToggleModule
  ],
  declarations: [
    GestionClientComponent,
    GestionCompteComponent,
    GestionAgenceComponent,
    GestionEmpComponent,
    GestionOperationComponent ,
    RechercheComponent,
    AdminComponent,
    SupprimerclientComponent,
    DetailsclientComponent,
    ModifierClientComponent,


    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    NotificationsComponent,
    UpgradeComponent,
  ],
    entryComponents:[DetailsclientComponent,SupprimerclientComponent,ModifierClientComponent]
})

export class AdminLayoutModule {}
