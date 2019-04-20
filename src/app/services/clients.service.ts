import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Client} from '../classes/client';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http :HttpClient) { }

  getClients() : Observable<Client[]>{
    return this.http.get<Client[]>('http://localhost:9999/client-service/clients') ;
  }

  deleteClient(id: number) {
    return this.http.delete('http://localhost:9999/client-service/clients/' + id);
  }

  postClient(client: Client) {
    return this.http.post('http://localhost:9999/client-service/clients', client) ;
  }

  // isFavorite(id: string) {
  //   return this.http.get(baseURL + 'favorites/' + id)
  //       .pipe(catchError(error => { return this.processHTTPMsgService.handleError(error); }));
  // }
  //
  // postFavorite(id: string) {
  //   return this.http.post(baseURL + 'favorites/' + id, {})
  //       .pipe(catchError(error => { return this.processHTTPMsgService.handleError(error); }));
  // }
  //

}
