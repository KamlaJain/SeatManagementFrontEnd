import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FacilityApiService } from 'src/app/apiServices/facility-api.service';
import { MeetingroomApiService } from 'src/app/apiServices/meetingroom-api.service';
import { MeetingRoomDTO } from 'src/app/models/meeting-room-dto';

@Component({
  selector: 'app-meetingroom',
  templateUrl: './meetingroom.component.html',
  styleUrls: ['./meetingroom.component.scss']
})
export class MeetingroomComponent implements OnInit{

  public facilities: any[] =[];
  public meetingForm: any

  constructor(
    private facilityService: FacilityApiService,
    private meetingRoomService: MeetingroomApiService,
    private formbuilder: FormBuilder

  ){

  }
  public ngOnInit(){
    this.facilityService.getApiFacility().subscribe((facilities)=>{
      this.facilities = facilities as unknown as any[];
    })

    this.meetingForm= this.formbuilder.group({
      meetingRoomNumber: '',
      seatingCapacity: '',
      facilityId: ''
    })
  }

  public OnSubmit(){
    const formData=this.meetingForm.value;
    const request: MeetingRoomDTO ={
      facilityId: formData.facilityId,
      meetingRoomNumber: formData.meetingRoomNumber,
      seatingCapacity: formData.seatingCapacity   
    }
    console.log(request)
    this.meetingRoomService.postApiMeetingRoom(request).subscribe({
      next: () => {
        window.alert('Success');
      },
      error: (errorDetails) => {
        window.alert(errorDetails.error);
      },
    })
  }
}
