import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CabinApiService } from 'src/app/apiServices/cabin-api.service';

@Component({
  selector: 'app-cabin-allocation',
  templateUrl: './cabin-allocation.component.html',
  styleUrls: ['./cabin-allocation.component.scss']
})
export class CabinAllocationComponent implements OnInit {
  public cabinAllocationForm: any;
  public cabins: any[] = [];
  public filteredcabins: any[] = [];


  constructor(
    private readonly fb: FormBuilder,
    private readonly cabinService: CabinApiService,
  ) {}

  ngOnInit() {
    this.cabinService.getApiCabinRooms().subscribe((cabins) => {
      this.cabins = cabins as unknown as any[];  
      this.filteredcabins = this.cabins.filter((cabin) => cabin.employeeId === null);
    });

    this.cabinAllocationForm = this.fb.group({
      cabinId: '',
      employeeId: '',
    }); 
  }

  onSubmit() {
    // const formData = this.cabinAllocationForm.value;
    // const request: any = {
    //   cabinId: formData.cabinId,
    //   employeeId: formData.employeeId,
    // };
    // console.log(request)

    const cabinId = this.cabinAllocationForm.get('cabinId').value;
    const employeeId = this.cabinAllocationForm.get('employeeId').value;

console.log(cabinId, employeeId);

    this.cabinService.patchApiCabinRooms(cabinId, employeeId).subscribe({
      next: () => {
        window.alert('Success');
      },
      error: (errorDetails) => {
        window.alert(errorDetails.error);
      },
    });
  }
}

