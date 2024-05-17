import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { UsersServiceService } from '../users-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrl: './addusers.component.css'
})
export class AddusersComponent implements OnInit {
  
  

u:Users=new Users();

constructor(public us:UsersServiceService,public r:Router) {
  
}

addUser()
{
  this.us.addUser(this.u).subscribe(data=>
    {
      alert("added");
      this.UsersLists()
    },error=>alert("unable to insert")
  )
  console.log(this.u)
}

  UsersLists()
  {
    this.r.navigate(['/userslist']);
  }
ngOnInit(): void {
  {
    this.UsersLists
  }
}



}
