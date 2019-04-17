import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {client} from '../../classes/clients';
import {ClientsService} from '../../services/clients.service';


@Component({
  selector: 'app-supprimerclient',
  templateUrl: './supprimerclient.component.html',
  styleUrls: ['./supprimerclient.component.scss']
})
export class SupprimerclientComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<SupprimerclientComponent>,
               @Inject(MAT_DIALOG_DATA) public data: number,
               private clientservice :ClientsService) { }

  ngOnInit() {
    console.log(this.data)
  }
  supprimer(){
    this.clientservice.deleteClient(this.data).subscribe() ;
    this.dialogRef.close();

  }
}
