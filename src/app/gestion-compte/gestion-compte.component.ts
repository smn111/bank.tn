import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-gestion-compte',
  templateUrl: './gestion-compte.component.html',
  styleUrls: ['./gestion-compte.component.scss']
})
export class GestionCompteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
