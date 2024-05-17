import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { UsersServiceService } from '../users-service.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrl: './updateuser.component.css'
})
export class UpdateuserComponent implements OnInit{

  constructor(public ur:UsersServiceService,public sr:ActivatedRoute,public r:Router) {
    
  }
  id:number
  u:Users=new Users()
  ngOnInit(): void {
    this.id=this.sr.snapshot.params['id'];
    console.log(this.id);
    this.ur.getUserById(this.id).subscribe(data=>
      {
        this.u=data;
      },
    )
    
      
  }
  onSubmit(){
    this.ur.updateUser(this.id, this.u).subscribe( data =>{
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.r.navigate(['/userslist']);
  }

}
