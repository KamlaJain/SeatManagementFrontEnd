import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CabinRoomDTO } from 'src/api/models';
import { CabinApiService } from 'src/app/apiServices/cabin-api.service';
import { FacilityApiService } from 'src/app/apiServices/facility-api.service';

@Component({
  selector: 'app-cabin',
  templateUrl: './cabin.component.html',
  styleUrls: ['./cabin.component.scss'],
})
export class CabinComponent implements OnInit {
  public cabinForm: any;
  public facilities: any[] = [];

  constructor(
    private readonly fb: FormBuilder,
    private readonly facilityService: FacilityApiService,
    private readonly cabinroomService: CabinApiService
  ) {}

  ngOnInit() {
    this.facilityService.getApiFacility().subscribe((facilities) => {
      this.facilities = facilities as unknown as any[];
    });

    this.cabinForm = this.fb.group({
      facilityId: '',
      cabinNumber: '',
    });
  }

  OnSubmit() {
    const formData = this.cabinForm.value;
    const request: CabinRoomDTO = {
      facilityId: formData.facilityId,
      cabinNumber: formData.cabinNumber,
    };
    this.cabinroomService.postApiCabinRooms(request).subscribe({
      next: () => {
        window.alert('Success');
      },
      error: (errorDetails) => {
        window.alert(errorDetails.error);
      },
    });
  }
}
