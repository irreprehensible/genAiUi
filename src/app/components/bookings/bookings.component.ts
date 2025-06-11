import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Constants } from '../../utils/constants';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.scss'
})
export class BookingsComponent {

  public selectedOption: any;
  public showBookingOptions: boolean = true;

  public bookingStepsGas: any = Constants.BookingStepsGas;
  public bookingStepsPower: any = Constants.BookingStepsPower;
  public bookingStepsOther: any = Constants.BookingStepsOther;

  public continue() {
    this.showBookingOptions = false;
  }
}
