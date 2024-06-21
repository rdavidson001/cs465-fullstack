import { Component, OnInit } from '@angular/core';
import { AuthicationService } from '../services/authentication.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit{

  constructor(
    private authenticationService: AuthicationService
  ){}
  ngOnInit(){}
  public isLoggedIn():boolean{
    return this.authenticationService.isLoggedIn();
  }
  private onLogout(): void{
    return this.authenticationService.logout();
  }
}