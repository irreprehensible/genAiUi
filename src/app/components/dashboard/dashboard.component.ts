import { Component, OnInit } from '@angular/core';
import { Constants } from '../../utils/constants';
import { CommonModule } from '@angular/common';
import { BookingsComponent } from '../bookings/bookings.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, BookingsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  constructor(private _router: Router){}
  
  public menuitems = Constants.Tabs;
  public active = Constants.Tabs[0].id;
  public user!: any
  public menuClick(tab: any) {
    if(!tab || !tab.id) return;
    this.active = tab.id;
  }
  public ngOnInit(): void {
    const sUser = localStorage.getItem('user')
    if(sUser) {
      this.user = JSON.parse(sUser)
    }
    else {
      this._router.navigate([''])
    }
  }
  public book() {
    this.active = 'BOOKINGS'
  }
  public logout() {
    localStorage.removeItem('user')
    this._router.navigate([''])
  }

  public toOverview() {
    this.active = 'OVERVIEW'
  }
}
