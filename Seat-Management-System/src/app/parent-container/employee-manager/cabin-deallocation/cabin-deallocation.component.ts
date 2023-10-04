import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CabinApiService } from 'src/app/apiServices/cabin-api.service';

@Component({
  selector: 'app-cabin-deallocation',
  templateUrl: './cabin-deallocation.component.html',
  styleUrls: ['./cabin-deallocation.component.scss']
})
export class CabinDeallocationComponent implements OnInit {
  public cabinDeallocationForm: any;
  public cabins: any[] = [];
  public filteredcabins: any[] = [];


  constructor(
    private readonly fb: FormBuilder,
    private readonly cabinService: CabinApiService,
  ) {}

  ngOnInit() {
    this.cabinService.getApiCabinRooms().subscribe((cabin) => {
      this.cabins = cabin as unknown as any[];  
      this.filteredcabins = this.cabins.filter((cabin) => cabin.employeeId !== null);
    });

    this.cabinDeallocationForm = this.fb.group({
      cabinId: [''],
    }); 
  }

  onSubmit() {
    // const formData = this.cabinDeallocationForm.value;
    // const request: any = {
    //   cabinId: formData.cabinId,
    // };
    const cabinId = this.cabinDeallocationForm.get('cabinId').value;

    console.log(cabinId)

    this.cabinService.patchApiCabinRooms(cabinId).subscribe({
      next: () => {
        window.alert('Success');
      },
      error: (errorDetails) => {
        window.alert(errorDetails.error);
      },
    });
  }
}

