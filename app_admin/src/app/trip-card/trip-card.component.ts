import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'
import { Trip } from '../models/trips';
import { AuthicationService } from '../services/authentication.service';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.component.html',
  styleUrl: './trip-card.component.css'
})
export class TripCardComponent implements OnInit{

  @Input('trip') trip: any;

  constructor(
    private router: Router,
    private authenticationService: AuthicationService
  ) {}

  ngOnInit(): void {
    
  }

  public isLoggedIn(): boolean{
    return this.authenticationService.isLoggedIn();
  }

  public editTrip(trip: Trip){
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(['edit-trip']);
  }
}
