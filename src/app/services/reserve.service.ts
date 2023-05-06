import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ReserveService {
  URL=environment.urlBackend

  constructor(private http: HttpClient, private router: Router) { }

  getReservationsByMenuId(body,id){
    return this.http.post<any>(`${this.URL}`+'/reserve/menu/',body)

  }
  getReservationsByStudentId(body,id){
    return this.http.post<any>(`${this.URL}`+'/reserve/student/',body)

  }
}
