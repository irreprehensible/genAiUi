import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Constants } from '../../utils/constants';
import { NgbCalendar, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbDatepickerModule],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.scss'
})
export class BookingsComponent implements OnInit {
  today = inject(NgbCalendar).getToday();

	model: NgbDateStruct = this.today;
	date: { year: number; month: number; } | undefined;

  public selectedOption: any;
  public showBookingOptions: boolean = true;
  public selectedDesc: boolean = false;
  public selectedResult: any = null;
  public selectedAppointment: boolean = false;

  public bookingStepsGas: any = Constants.BookingStepsGas;
  public bookingStepsPower: any = Constants.BookingStepsPower;
  public bookingStepsOther: any = Constants.BookingStepsOther;

  public gasDesc: string = '';

  ngOnInit(): void {
    this.showBookingOptions = true;
    this.selectedDesc = false;
    this.selectedResult = null;
    this._uncheck();
    this.gasDesc = ''
  }
  private _uncheck() {
    this.bookingStepsGas.forEach((element: any) => {
      element.checked= false
    });
    this.bookingStepsPower.forEach((element: any) => {
      element.checked= false
    });
    this.bookingStepsOther.forEach((element: any) => {
      element.checked= false
    });
  }
  public continue() {
    switch (this.selectedOption) {
      case 'B1':
        if (this.bookingStepsGas.filter((x: any) => { return x.checked }).length > 0) {
          if (this.gasDesc.length === 0) {
            this.selectedDesc = true;
          }
          else if(!this.selectedAppointment){
            this.selectedAppointment = true;
          }
          else {
            this.selectedAppointment = false;
            this.selectedDesc = false;
            this.selectedResult = {
              options: this.bookingStepsGas.filter((x: any) => { return x.checked }),
              description: this.gasDesc,
              appointment: {date: this.model, time:''}
            }
          }
        }
        break;

      default:
        break;
    }
    this.showBookingOptions = false;
  }
  public checkDisabledBtn(): boolean {
    let res:boolean = false
    switch (this.selectedOption) {
      case 'B1':
        if (this.bookingStepsGas.filter((x: any) => { return x.checked }).length === 0) {
          res = true;
        }
        else if(this.gasDesc.length === 0 && this.selectedDesc) {
          res = true;
        }
      break;
      default:
      break;
    }
    return res;
  }
}
