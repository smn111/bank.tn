import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TransactionSimple} from '../classes/transactionSimple';
import {TransactonVirement} from '../classes/transactonVirement';
import {Operationsimple} from '../classes/operationsimple';
import {Operationvirement} from '../classes/operationvirement';

@Injectable({
  providedIn: 'root'
})
export class OprationService {

  constructor(private http :HttpClient) {

  }

  debiter(data : TransactionSimple) {
    return this.http.post('http://localhost:9999/compte-service/comptes/debiter' , data) ;
  }

  crediter(data : TransactionSimple) {
    return this.http.post('http://localhost:9999/compte-service/comptes/crediter' , data) ;
  }

  virer(data : TransactonVirement){
    return this.http.post('http://localhost:9999/compte-service/comptes/virer' , data) ;
  }


  getTransactionStandard(id : number){
    return this.http.get('http://localhost:9999/transaction-standard-service/transactions/' + id ) ;
  }

  getTransactionvirement(id : number){
    return this.http.get('http://localhost:9999/transaction-virement-service/transactions/' + id ) ;
  }



  postTransactionStandard(data : Operationsimple){
    return this.http.post('http://localhost:9999/transaction-standard-service/transactions' , data) ;
  }

  postTransactionVirement(data : Operationvirement){
    return this.http.post('http://localhost:9999/transaction-virement-service/transactions' , data) ;
  }
}
