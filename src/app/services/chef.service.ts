import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ChefService {
  URL=environment.urlBackend

  helper = new JwtHelperService()
  constructor(private http: HttpClient, private router: Router) { }

  
  loginChef(body: any) {
    return this.http.post(`${this.URL}`+'chef/login', body)


  }

  saveDataEnsegn(token: any) {

    let decodeToken = this.helper.decodeToken(token)

    localStorage.setItem('token_ensegn', token)
    localStorage.setItem('role', decodeToken.subject.role)
    localStorage.setItem('id_ensegn', decodeToken.subject._id)

    console.log(decodeToken)
  }
  geid(){
    let id =localStorage.getItem('id_ensegn')



     return id

   }
  getNameEnsegn() {
    let token: any = localStorage.getItem('token_ensegn')
    let decodeToken = this.helper.decodeToken(token)
    return decodeToken.subject.name
  }
  getUsername(){
    let token:any=localStorage.getItem('token_ensegn')
 /*    console.log(token) */

    let decodeToken= this.helper.decodeToken(token)



     return decodeToken.subject

   }

   LoggedInEnsegn(){
    let token:any=localStorage.getItem('token_ensegn')

    if(!token){
      return false
     }
     if(this.helper.isTokenExpired(token)){
       return false
     }

     return true


  }



}
