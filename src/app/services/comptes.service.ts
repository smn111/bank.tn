import { Injectable } from '@angular/core';
import {Compte} from '../classes/compte';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComptesService {

  constructor(private http :HttpClient) { }

  postCompte(compte: Compte) {
    return this.http.post('http://localhost:9999/compte-service/comptes', compte) ;
  }
}
