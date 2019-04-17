import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {client} from '../classes/clients';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http :HttpClient) { }

  getclients() : Observable<client[]>{
    return this.http.get<client[]>('https://localhost:9999/client-service/clients') ;
  }

  deleteClient(id: number) {
    return this.http.delete('https://localhost:9999/client-service/clients/' + id);
  }

  // postFavorites(dishids: any) {
  //   return this.http.post(baseURL + 'favorites/', dishids)
  //       .pipe(catchError(error => { return this.processHTTPMsgService.handleError(error); }));
  // }
  //
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
