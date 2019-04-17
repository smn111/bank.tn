import {Component, OnInit} from '@angular/core';
import {ClientsService} from '../services/clients.service';
import {Client} from '../classes/client';
import {MatDialog} from '@angular/material';
import {DetailsclientComponent} from './detailsclient/detailsclient.component';
import {SupprimerclientComponent} from './supprimerclient/supprimerclient.component';
import {ModifierClientComponent} from './modifier-client/modifier-client.component';

@Component({
  selector: 'app-gestion-client',
  templateUrl: './gestion-client.component.html',
  styleUrls: ['./gestion-client.component.scss']
})
export class GestionClientComponent implements OnInit  {
  CLIENTS: Client[];

  constructor(private clientsService: ClientsService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.clientsService.getclients().subscribe(
        (response) => this.CLIENTS = response,
        (error) => console.log('error')
    )
  }


  openDetailsDialog(cl : Client): void {
    const dialogRef = this.dialog.open(DetailsclientComponent, {
      width: '600px',data: cl
    });
  }

  openDeleteDialog(id : number): void {
    const dialogRef = this.dialog.open(SupprimerclientComponent, {
      width: '600px',data: id
    });
    dialogRef.afterClosed().subscribe(
        (res => {
          this.clientsService.getclients().subscribe(
              (response) => this.CLIENTS = response,
              (error) => console.log('error')
          )
        })
    );

  }

  openPatchDialog(id : number): void {
    const dialogRef = this.dialog.open(ModifierClientComponent, {
      width: '600px',data: id
    });
    dialogRef.afterClosed().subscribe(
        (res => {
          this.clientsService.getclients().subscribe(
              (response) => this.CLIENTS = response,
              (error) => console.log('error')
          )
        })
    );
  }

}
