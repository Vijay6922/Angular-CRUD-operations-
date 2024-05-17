  import { Component, OnInit } from '@angular/core';
  import { UsersServiceService } from '../users-service.service';
  import { Users } from '../users';
  import { Router } from '@angular/router';


  @Component({
    selector: 'app-userslist',
    templateUrl: './userslist.component.html',
    styleUrl: './userslist.component.css'
  })
  export class UserslistComponent implements OnInit{

    constructor(public s:UsersServiceService,public r:Router) {
      
    }

    u:Users[];
users:Users[]=[]
  ngOnInit(): void {
     this.get()
  }
  get(){
    this.s.GetUser().subscribe(data =>{
      this.u=data;
    });
  }

  deleteUser(id: number){
    this.s.deleteUser(id).subscribe(data => {
      console.log(data);
      this.get();
    })
  }

  
  

  updateUser(id:number)
  {
  console.log(id)
  this.r.navigate(['/updateuser',id])
  }

  }



