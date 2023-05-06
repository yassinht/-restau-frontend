import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  URL=environment.urlBackend
  helper = new JwtHelperService();
  constructor(private http:HttpClient) { }


     getMenus(){
      return this.http.get<any>(`${this.URL}`+'menu/',)
  
    }

    createMenu(body){
      return this.http.post<any>(`${this.URL}`+'menu/',body)
  
    }
  

  }