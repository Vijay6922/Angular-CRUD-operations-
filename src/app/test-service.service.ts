import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService implements CanActivate {

  constructor(private r:Router) { }

  mobiles = ['redmi', 'realme', 'oppo', 'one plus', 'apple'];


  //does not allow user to navigate into given componenets
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   
   //if not login it returns to login page
    let loggin=false;
   if(loggin)
    {
      return true;
    }
    else{

      this.r.navigate(['/login']);

    }
   
  }
}