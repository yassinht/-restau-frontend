import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  URL=environment.urlBackend

  helper = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) { }




  loginSEtudiant(body: any) {
    return this.http.post(`${this.URL}`+'etudiant/login', body)


  }

  registerEtudiant(body: any) {
    return this.http.post(`${this.URL}`+'etudiant/', body)


  }

  saveDataEtudiant(token: any) {

    let decodeToken = this.helper.decodeToken(token)

    localStorage.setItem('token_etudiant', token)
    localStorage.setItem('role', decodeToken.subject.role)
    localStorage.setItem('id_etudiant', decodeToken.subject._id)

    console.log(decodeToken)
  }
  geid(){
    let id =localStorage.getItem('id_etudiant')



     return id

   }
  getNameEtudiant() {
    let token: any = localStorage.getItem('token_etudiant')
    let decodeToken = this.helper.decodeToken(token)
    return decodeToken.subject.name
  }
  getUsername(){
    let token:any=localStorage.getItem('token_etudiant')
 /*    console.log(token) */

    let decodeToken= this.helper.decodeToken(token)



     return decodeToken.subject

   }

   LoggedInEtudiant(){
    let token:any=localStorage.getItem('token_etudiant')

    if(!token){
      return false
     }
     if(this.helper.isTokenExpired(token)){
       return false
     }

     return true


  }


}
