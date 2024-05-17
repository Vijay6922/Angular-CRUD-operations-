import { Component } from '@angular/core';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor(public ts:TestServiceService)
{
   
}
angularInfo: string = "Angular is a popular JavaScript framework for building web applications. It is maintained by Google and provides a robust and scalable platform for developing modern, single-page applications (SPAs).";
}
