import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Employee} from '../../classes/employee';

@Component({
  selector: 'app-detailsemp',
  templateUrl: './detailsemp.component.html',
  styleUrls: ['./detailsemp.component.scss']
})
export class DetailsempComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DetailsempComponent>,
              @Inject(MAT_DIALOG_DATA) public emp: Employee) { }

  ngOnInit() {
  }

}
