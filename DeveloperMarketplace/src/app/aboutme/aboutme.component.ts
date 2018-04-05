import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  // template:`
  
  // <div style='width: 200; height: 200px'>
  //   <div parallax speed="5" src="path/to/image.jpg"></div>
  // </div>
  
  // `
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  constructor(private _httpService: HttpService) { }


  ngOnInit() {
  }

}
