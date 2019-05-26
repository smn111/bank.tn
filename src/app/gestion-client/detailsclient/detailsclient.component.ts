import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import  {Client} from '../../classes/client';
import {AdresseClientService} from '../../services/adresse-client.service';
import {Adresse} from '../../classes/adresse';

@Component({
  selector: 'app-detailsclient',
  templateUrl: './detailsclient.component.html',
  styleUrls: ['./detailsclient.component.scss']
})
export class DetailsclientComponent implements OnInit {
   adresse = new Adresse;
  constructor(
      public dialogRef: MatDialogRef<DetailsclientComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Client,
      private adresseClientService : AdresseClientService) { }

  ngOnInit() {
    this.adresseClientService.getAdresseByClientId(this.data.numClient).subscribe(
        (response) => this.adresse = response ,
        (erreur) => {}
    )
  }

}
