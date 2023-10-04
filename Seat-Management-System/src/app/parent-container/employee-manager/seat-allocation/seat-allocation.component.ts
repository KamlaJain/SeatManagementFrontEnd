import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SeatApiService } from 'src/app/apiServices/seat-api.service';

@Component({
  selector: 'app-seat-allocation',
  templateUrl: './seat-allocation.component.html',
  styleUrls: ['./seat-allocation.component.scss']
})
export class SeatAllocationComponent implements OnInit {
  public seatAllocationForm: any;
  public seats: any[] = [];
  public filteredSeats: any[] = [];


  constructor(
    private readonly fb: FormBuilder,
    private readonly seatService: SeatApiService,
  ) {}

  ngOnInit() {
    this.seatService.getApiGeneralSeat().subscribe((seat) => {
      this.seats = seat as unknown as any[];  
      this.filteredSeats = this.seats.filter((seat) => seat.employeeId === null);
    });

    this.seatAllocationForm = this.fb.group({
      seatId: '',
      employeeId: '',
    }); 
  }

  onSubmit() {
    // const formData = this.seatAllocationForm.value;
    // const request: any = {
    //   seatId: formData.seatId,
    //   employeeId: formData.employeeId,
    // };
    //console.log(request)

    const seatIdparam = this.seatAllocationForm.controls.seatId.value
    const employeeIdparam = this.seatAllocationForm.controls.employeeId.value
    this.seatService.patchApiGeneralSeat(seatIdparam,employeeIdparam).subscribe();
  }
}

