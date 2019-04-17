import { Component, OnInit } from '@angular/core';
import {GestionClientComponent} from '../../gestion-client/gestion-client.component';
import {GestionCompteComponent} from '../../gestion-compte/gestion-compte.component';
import {GestionAgenceComponent} from '../../gestion-agence/gestion-agence.component';
import {GestionEmpComponent} from '../../gestion-emp/gestion-emp.component';
import {GestionOperationComponent} from '../../gestion-operation/gestion-operation.component';
import {RechercheComponent} from '../../recherche/recherche.component';
import {AdminComponent} from '../../admin/admin.component';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/gestionClient',     title: 'Gestion Clients',    icon: 'person', class: '' },
    { path: '/gestionCompte',     title: 'Gestion Comptes',    icon: 'dashboard', class: '' },
    { path: '/gestiobOperation',     title: 'Gestion Opérations', icon: 'dashboard', class: '' },
    { path: '/gestionEmp',        title: 'Gestion Employés',   icon: 'dashboard', class: '' },
    { path: '/gestionAgence',  title: 'Gestion Agences',    icon: 'dashboard', class: '' },
    { path: '/recherche',         title: 'Recherche',          icon: 'dashboard', class: '' },
    { path: '/admin',             title: 'Admin',              icon: 'dashboard', class: '' },

    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
