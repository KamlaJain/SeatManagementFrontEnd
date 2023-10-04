import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AmenityApiService } from 'src/app/apiServices/amenity-api.service';

@Component({
  selector: 'app-amenity-deallocation',
  templateUrl: './amenity-deallocation.component.html',
  styleUrls: ['./amenity-deallocation.component.scss'],
})
export class AmenityDeallocationComponent implements OnInit {
  public amenityDeallocationForm: any;
  public amenitiesInFacility: any[] = [];
  public filteredAmenities: any[] = [];

  constructor(
    private readonly fb: FormBuilder,
    private readonly amenityService: AmenityApiService
  ) {}

  ngOnInit() {
    this.amenityService.getAmenities().subscribe((amenityInFacility) => {
      this.amenitiesInFacility = amenityInFacility as unknown as any[];
      this.filteredAmenities = this.amenitiesInFacility.filter(
        (amenity) => amenity.meetingRoomId !== null
      );
    });

    this.amenityDeallocationForm = this.fb.group({
      roomAmenityId: '',
    });
  }

  onSubmit() {
    // const formData = this.amenityDeallocationForm.value;
    // const request: any = {
    //   roomAmenityId: formData.roomAmenityId,
    // };
    // console.log(request);
    const roomAmenityId=this.amenityDeallocationForm.controls.roomAmenityId.value
    this.amenityService.patchAmenityToRoom(roomAmenityId).subscribe();
  }
}
