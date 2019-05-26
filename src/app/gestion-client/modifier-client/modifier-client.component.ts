import {Component, Inject, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Client} from '../../classes/client';
import {ClientsService} from '../../services/clients.service';
import {AdresseClientService} from '../../services/adresse-client.service';
import {Adresse} from '../../classes/adresse';

declare var $: any;

@Component({
  selector: 'app-modifier-client',
  templateUrl: './modifier-client.component.html',
  styleUrls: ['./modifier-client.component.scss']
})
export class ModifierClientComponent implements OnInit {


  nomIsActive = true ;
  prenomIsActive = true ;
  cinIsActive = true ;
  sexeIsActive = true ;
  fonctionIsActive = true ;
  natureIsActive = true ;
  datenaissIsActive = true ;
  emailIsActive = true ;
  villeIsActive = true ;
  gouvIsActive = true ;
  quartierIsActive = true ;
  postalIsActive = true ;
  telIsActive = true ;

  client  = new Client() ;
  adresse = new Adresse() ;
  numClient: number ;

  constructor( public dialogRef: MatDialogRef<ModifierClientComponent>,
               @Inject(MAT_DIALOG_DATA) public data: number,
               private clientservice :ClientsService,
               private adresseClientService : AdresseClientService) { }

  ngOnInit() {
  }


  modifier(form :NgForm){
    this.client.nom = form.value.nom ? form.value.nom : null ;
    this.client.prenom = form.value.prenom ? form.value.prenom  : null ;
    this.client.cin = form.value.cin ? form.value.cin : null ;
    this.client.email = form.value.mail ? form.value.mail : null ;
    this.client.nature = form.value.nature ? form.value.nature : null ;
    this.client.sexe = form.value.sexe ? form.value.sexe : null ;
    this.client.fonction = form.value.fonction ? form.value.fonction : null ;
    this.client.dateNais = form.value.date_naissance ? form.value.date_naissance : null ;
    this.client.telephone = form.value.tel ? form.value.tel : null ;

    this.adresse.quartier = form.value.quartier ? form.value.quartier : null ;
    this.adresse.ville = form.value.ville ? form.value.ville : null ;
    this.adresse.codePostal = form.value.code_postale ? form.value.code_postale : null ;
    this.adresse.gouvernorat = form.value.gouvernerat ? form.value.gouvernerat : null ;

    this.clientservice.patchClient(this.client,this.data).subscribe(
        () => this.adresseClientService.patchAdresse(this.adresse,this.data).subscribe(
        () => this.showNotification('success',"La modification a été effectuée avec succès.","check_circle_outline"),
            (error) =>  this.showNotification('danger',"Une erreur systéme est survenue lors de la modification","highlight_off")
        ),
        (error) =>  this.showNotification('danger',"Une erreur systéme est survenue lors de la modification","highlight_off")
    ) ;



    this.dialogRef.close();

  }



  activeNom(){
    this.nomIsActive = !this.nomIsActive ;
  }
  activePrenom(){
    this.prenomIsActive = !this.prenomIsActive ;
  }
  activeCin(){
    this.cinIsActive = !this.cinIsActive ;
  }
  activeSexe(){
    this.sexeIsActive = !this.sexeIsActive ;
  }
  activeNature(){
    this.natureIsActive = !this.natureIsActive ;
  }
  activeGouv(){
    this.gouvIsActive = ! this.gouvIsActive ;
  }
  activeEmail(){
    this.emailIsActive = !this.emailIsActive ;
  }
  activeDate(){
    this.datenaissIsActive = !this.datenaissIsActive ;
  }
  activeVille(){
    this.villeIsActive = !this.villeIsActive ;
  }
  activeFonction(){
    this.fonctionIsActive = !this.fonctionIsActive ;
  }
  activeQuartier(){
    this.quartierIsActive = !this.quartierIsActive ;
  }
  activeCode(){
    this.postalIsActive = !this.postalIsActive ;
  }
  activeTel(){
    this.telIsActive = !this.telIsActive ;
  }

  showNotification(color,msg,icon){


    $.notify({
      icon: icon,
      message: msg

    },{
      type: color,
      timer: 4000,
      placement: {
        from: 'bottom',
        align:'center'
      },
      template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">'+icon+'</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>'
    });
  }
}
