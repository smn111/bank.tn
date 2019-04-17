import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import  {Client} from '../../classes/client';

@Component({
  selector: 'app-detailsclient',
  templateUrl: './detailsclient.component.html',
  styleUrls: ['./detailsclient.component.scss']
})
export class DetailsclientComponent implements OnInit {

  constructor(
      public dialogRef: MatDialogRef<DetailsclientComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Client) { }

  ngOnInit() {

  }

}
