import { Component } from '@angular/core';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private ts:TestServiceService){

  }
  mobiles=this.ts.mobiles;

  updateService()
  {
    this.ts.mobiles.push("vivo");
  }

  aboutInfo: string;

  ngOnInit(): void {
    this.aboutInfo = "This is a simple Angular application that demonstrates how to provide data within a component.";
  }


}
