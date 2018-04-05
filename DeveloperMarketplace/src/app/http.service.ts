console.log('********* HTTP **********');

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class HttpService {
  private userInfo = {
    githubAccount: "https://github.com/CrunchyJohnHaven",
    linkedIn: "https://linkedin.com/in/johnhavenbradley",
    AmericanElement: "http://www.theamericanelement.com/",
    Email: "http://johnhavenbradley@gmail.com",

  };
  getUserInfo(){
    return this.userInfo;
  }  
};
