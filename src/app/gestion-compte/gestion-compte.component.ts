import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import { Client } from '../classes/client';
import { Compte } from '../classes/compte';
import { Adresse } from '../classes/adresse';
import { ClientsService } from '../services/clients.service';
import { AdresseClientService} from '../services/adresse-client.service';
import { ComptesService } from '../services/comptes.service';

@Component({
  selector: 'app-gestion-compte',
  templateUrl: './gestion-compte.component.html',
  styleUrls: ['./gestion-compte.component.scss']
})
export class GestionCompteComponent implements OnInit {
  adresse = new Adresse ;
  compte = new Compte ;
  client  = new Client ;
  constructor(private clientService : ClientsService,
              private adresseClientService : AdresseClientService,
              private compteService : ComptesService) { }

  ngOnInit() {
  }


  onSubmit(form : NgForm){
    this.client.numClient = 12345678 ;
    this.client.nom = form.value.nom ;
    this.client.prenom = form.value.prenom ;
    this.client.cin = form.value.cin ;
    this.client.email = form.value.mail ;
    this.client.nature = form.value.nature ;
    this.client.sexe = form.value.sexe ;
    this.client.fonction = form.value.fonction ;
    this.client.dateInscription = new Date() ;
    this.client.dateNais = form.value.date_naissance;
    this.client.codeSecret = (12345).toString() ;
    this.client.telephone = 26871743

    this.compte.numCompte = 1234 ;
    this.compte.numClient = this.client.numClient ;
    this.compte.dateCreation = new Date() ;
    this.compte.solde = form.value.solde ;
    this.compte.numTypeCompte = form.value.type_compte  ;

    this.adresse.numAdresse = 12345 ;
    this.adresse.numClient = this.client.numClient ;
    this.adresse.codePostal = form.value.code_postale ;
    this.adresse.ville = form.value.ville ;
    this.adresse.gouvernorat = form.value.gouvernerat ;
    this.adresse.quartier = form.value.quartier ;

    //this.clientService.postClient(this.client).subscribe() ;
   // this.adresseClientService.postAdresse(this.adresse).subscribe();
    this.compteService.postCompte(this.compte).subscribe() ;


    console.log(this.compte) ;

  }



  /*** client exist ou non ****/
  client_exist : boolean = false;
  exist(){
    this.client_exist = true ;
  }
  notExist(){
    this.client_exist = false ;
  }


}
