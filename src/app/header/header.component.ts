import { Component } from '@angular/core';
import { TestServiceService } from '../test-service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(public ts:TestServiceService,private r:Router){
  }
  
  navigate()
  {
    this.r.navigate(['/home']);
  }
}
