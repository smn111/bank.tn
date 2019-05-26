import { Component, OnInit } from '@angular/core';
import {EmployesService} from '../services/employes.service';
import {Employee} from '../classes/employee';
import {MatDialog} from '@angular/material';
import {ModifierempComponent} from './modifieremp/modifieremp.component';
import {SupprimerempComponent} from './supprimeremp/supprimeremp.component';
import {DetailsempComponent} from './detailsemp/detailsemp.component';

@Component({
  selector: 'app-gestion-emp',
  templateUrl: './gestion-emp.component.html',
  styleUrls: ['./gestion-emp.component.scss']
})
export class GestionEmpComponent implements OnInit {

  EMPS : Employee[] ;
  constructor(private empService :EmployesService ,  public dialog: MatDialog) { }

  ngOnInit() {
    this.empService.getEmployees().subscribe(
        (response) => this.EMPS = response,
        (error) => console.log('error'+error)
    )
  }



  openDetailsDialog(emp : Employee): void {
    const dialogRef = this.dialog.open(DetailsempComponent, {
      width: '800px',data: emp
    });
  }

  openDeleteDialog(id : number): void {
    const dialogRef = this.dialog.open(SupprimerempComponent, {
      width: '800px',data: id
    });
    dialogRef.afterClosed().subscribe(
        // (res => {
        //   this.clientsService.getClients().subscribe(
        //       (response) => this.CLIENTS = response,
        //       (error) => console.log('error')
        //   )
        // })
    );

  }

  openPatchDialog(id : number): void {
    const dialogRef = this.dialog.open(ModifierempComponent, {
      width: '1000px',data: id
    });
    dialogRef.afterClosed().subscribe(
  //       (res => {
  //         this.clientsService.getClients().subscribe(
  //             (response) => this.CLIENTS = response,
  //             (error) => console.log('error')
  //         )
  //       })
    );
  }

}
