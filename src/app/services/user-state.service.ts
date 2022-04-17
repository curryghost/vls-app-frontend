import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {

  constructor(private helper: JwtHelperService) { 
  }

  get jwtToken(){
    return localStorage.getItem('jwtToken')
  }

  get isLogin(){
    return this.jwtToken ? true : false
  }
  
  get name(){
    return this.jwtToken && this.helper.decodeToken(this.jwtToken!).nameid
  }

}
