console.log('********* HTTP **********');

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable()
export class HttpService {
  constructor(private _http: HttpClient){}
  private userInfo = {
    githubAccount: "https://github.com/CrunchyJohnHaven",
    linkedIn: "https://linkedin.com/in/johnhavenbradley",
    AmericanElement: "http://www.theamericanelement.com/",
    Email: "http://johnhavenbradley@gmail.com",

  };

  getUserInfo(){
    return this.userInfo;
  }
  newContact(newContact) {
    console.log("addContact http")
    return this._http.post('/contact', newContact)
  }  
};
