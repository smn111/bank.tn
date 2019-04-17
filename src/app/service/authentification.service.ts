import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Employees } from 'app/classes/employees';
import { isUndefined } from 'util';
import { RequestOptions, Headers, Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  emp: Employees = null;

  constructor(private httpclient: HttpClient, private http: Http) { }

  getEmployee(username: string, password: string): Observable<any>{

    let headers =  new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Authorization', 'Basic YWRtaW46enV1bA=='/*'Basic '+btoa("admin:zuul")*/);
    
    return this.httpclient.post("http://localhost:9999/employee-service/employees/login",
    {
      "username": username,
      "password": password
    },
    { headers: headers, withCredentials: true});

    //return this.httpclient.get("https://www.localhost:9999/employee-service/employees",{ headers: headers, withCredentials: true});
  }

  authenticate(username, password) {
    this.getEmployee(username, password).subscribe(
      data=> {
        this.emp = data;
      }
    );
  
  console.log(this.emp);

    if (isUndefined(this.emp) || this.emp === null) {
      return false;
    } else {
      sessionStorage.setItem('username', username);
      sessionStorage.setItem('numero', this.emp.numEmployee.toString());
      sessionStorage.setItem('nom', this.emp.nom);
      sessionStorage.setItem('prenom', this.emp.prenom);
      sessionStorage.setItem('cin', this.emp.cin.toString());
      sessionStorage.setItem('datenais', this.emp.dateNais);
      sessionStorage.setItem('fonction', this.emp.fonction);
      sessionStorage.setItem('mdp', this.emp.mdp);
      sessionStorage.setItem('agence', this.emp.codeAgence.toString());
      sessionStorage.setItem('comm', this.emp.commission.toString());
      sessionStorage.setItem('tel', this.emp.telephone.toString());
      sessionStorage.setItem('sal', this.emp.salaire.toString());
      sessionStorage.setItem('sex', this.emp.sexe);
      sessionStorage.setItem('email', this.emp.email);
      return true;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.clear();
  }
}
