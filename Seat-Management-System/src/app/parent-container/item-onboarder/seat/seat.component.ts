import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
//import { FacilityService, GeneralSeatService } from 'src/api/services';
import { FacilityApiService } from 'src/app/apiServices/facility-api.service';
import { SeatApiService } from 'src/app/apiServices/seat-api.service';
import { GeneralSeatDTO } from 'src/app/models/general-seat-dto';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss'],
})
export class SeatComponent implements OnInit {
  public seatForm: any;
  public facilities: any[] = [];

  constructor(
    private readonly fb: FormBuilder,
    private readonly facilityService: FacilityApiService,
    private readonly generalSeatService: SeatApiService
  ) {}

  ngOnInit() {
    this.facilityService.getApiFacility().subscribe((facilities) => {
      this.facilities = facilities as unknown as any[];
    });

   this.createNewForm()
  }
  createNewForm(){
    this.seatForm = this.fb.group({
      facilityId: '',
      seatNumber: '',
    });
  }

  OnSubmit() {
    const formData = this.seatForm.value;
    const request: GeneralSeatDTO = {
      facilityId: formData.facilityId,
      seatNumber: formData.seatNumber,
    };
    this.generalSeatService.postApiGeneralSeat(request).subscribe({
      next: () => {
        window.alert('Success');
      },
      error: (errorDetails) => {
        window.alert(errorDetails.error);
      },
    });
    this.createNewForm();
  }
}
