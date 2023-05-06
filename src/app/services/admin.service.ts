import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  URL=environment.urlBackend

  constructor(private http: HttpClient, private router: Router) { }



  
  loginAdmin(body: any) {
    return this.http.post(`${this.URL}`+'etudiant/login', body)


  }
}

