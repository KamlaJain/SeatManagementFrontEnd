import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SeatApiService } from 'src/app/apiServices/seat-api.service';

@Component({
  selector: 'app-seat-deallocation',
  templateUrl: './seat-deallocation.component.html',
  styleUrls: ['./seat-deallocation.component.scss']
})
export class SeatDeallocationComponent implements OnInit {
  public seatDeallocationForm: any;
  public seats: any[] = [];
  public filteredSeats: any[] = [];


  constructor(
    private readonly fb: FormBuilder,
    private readonly seatService: SeatApiService,
  ) {}

  ngOnInit() {
    this.seatService.getApiGeneralSeat().subscribe((seats) => {
      this.seats = seats as unknown as any[];  
      this.filteredSeats = this.seats.filter((seat) => seat.employeeId !== null);
    });

    this.seatDeallocationForm = this.fb.group({
      seatId: [''],
    }); 
  }

  onSubmit() {
    const seatId = this.seatDeallocationForm.get('seatId').value;

    console.log(seatId)
    this.seatService.patchApiGeneralSeat(seatId).subscribe({
      next: () => {
        window.alert('Success');
      },
      error: (errorDetails) => {
        window.alert(errorDetails.error);
      },
    });
  }
}

