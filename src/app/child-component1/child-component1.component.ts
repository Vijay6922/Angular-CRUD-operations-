import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-child-component1',
  templateUrl: './child-component1.component.html',
  styleUrl: './child-component1.component.css'
})
export class ChildComponent1Component {

  constructor(private http:HttpClient)
  {
  }

  data=null
  getMethod()
  {
    this.http.get('https://fakestoreapi.com/products?limit=5')
    .subscribe((data)=>{
      this.data=data;
    })
   

  }

 
}
