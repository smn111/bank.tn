import { Injectable } from '@angular/core';
import { Adresse } from '../classes/adresse';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdresseClientService {

  constructor(private http:HttpClient) { }

  postAdresse(adresse: Adresse) {
    return this.http.post('http://localhost:9999/adresse-client-service/adresses', adresse) ;
  }
}
