import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AmenityApiService } from 'src/app/apiServices/amenity-api.service';
import { FacilityApiService } from 'src/app/apiServices/facility-api.service';
import { MeetingroomApiService } from 'src/app/apiServices/meetingroom-api.service';

@Component({
  selector: 'app-amenity-allocation',
  templateUrl: './amenity-allocation.component.html',
  styleUrls: ['./amenity-allocation.component.scss'],
})
export class AmenityAllocationComponent implements OnInit {
  public amenityAllocationForm: any;
  public facilities: any[] = [];
  public amenitiesInFacility: any[] = [];
  public filteredAmenitiesInFacility: any[] = [];
  public meetingRooms: any[] = [];
  public filteredMeetingRooms: any[] = [];

  constructor(
    private readonly fb: FormBuilder,
    private readonly amenityService: AmenityApiService,
    private readonly meetingroomService: MeetingroomApiService,
    private readonly facilityService: FacilityApiService
  ) {}

  ngOnInit() {
    this.facilityService.getApiFacility().subscribe((facility) => {
      this.facilities = facility as unknown as any[];
    });

    this.amenityAllocationForm = this.fb.group({
      facilityId: '',
      meetingRoomId: '',
      roomAmenityId: '',
    });
  }
  onFilter() {
    this.amenityService.getAmenities().subscribe((amenityInFacility) => {
      this.amenitiesInFacility = amenityInFacility as unknown as any[];
      this.filteredAmenitiesInFacility = this.amenitiesInFacility.filter(
        (amenity) =>
          amenity.facilityId ==
          this.amenityAllocationForm.controls.facilityId.value
      );

      this.meetingroomService.getApiMeetingRoom().subscribe((meetingRoom) => {
        this.meetingRooms = meetingRoom as unknown as any[];
        this.filteredMeetingRooms = this.meetingRooms.filter(
          (room) =>
            room.facilityId ==
            this.amenityAllocationForm.controls.facilityId.value
        );

        console.log(this.filteredAmenitiesInFacility);
        console.log(this.filteredMeetingRooms);
        console.log(this.amenityAllocationForm.controls.facilityId.value);
      });
    });
  }
  onSubmit() {
    
    const meetingRoomId= this.amenityAllocationForm.controls.meetingRoomId.value;
    const roomAmenityId= this.amenityAllocationForm.controls.roomAmenityId.value;
    this.amenityService.patchAmenityToRoom(roomAmenityId, meetingRoomId).subscribe();
    console.log(roomAmenityId, meetingRoomId)


    // const formData = this.amenityAllocationForm.value;
    // const request: any = {
    //   meetingRoomId: formData.meetingRoomId,
    //   roomAmenityId: formData.roomAmenityId,
    // };
    // console.log(request);
    // this.amenityService.patchApiAmenity(request).subscribe();

  }
}
