console.log('********* HTTP **********');

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class HttpService {
  private userInfo = {
    githubAccount: "https://github.com/CrunchyJohnHaven"
  };
  getUserInfo(){
    return this.userInfo;
  }
  // constructor(private _http: HttpClient) { }
  
};
