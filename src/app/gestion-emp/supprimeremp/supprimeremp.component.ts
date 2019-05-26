import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-supprimeremp',
  templateUrl: './supprimeremp.component.html',
  styleUrls: ['./supprimeremp.component.scss']
})
export class SupprimerempComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SupprimerempComponent>,
              @Inject(MAT_DIALOG_DATA) public data: number) { }

  ngOnInit() {
  }

}
