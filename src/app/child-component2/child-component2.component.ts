import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-child-component2',
  templateUrl: './child-component2.component.html',
  styleUrl: './child-component2.component.css'
})
export class ChildComponent2Component {

  myobs=new Observable(
    (listener)=>
      {
        listener.next(1);
        listener.next(2);
        setTimeout(()=>listener.next(3),1000)
        setTimeout(()=>listener.next(4),1000)
        setTimeout(()=>listener.next(5),100)
        setTimeout(()=>listener.complete(),10000)
      }
      
)
test()
{
  this.myobs.subscribe(
    data=>{console.log(data)},
    err=>{console.log(err)},
    ()=>{console.log("done")}

  )

}
}
