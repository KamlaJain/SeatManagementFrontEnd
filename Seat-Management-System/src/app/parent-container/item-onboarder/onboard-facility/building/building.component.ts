

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BuildingApiService } from 'src/app/apiServices/building-api.service';
import { BuildingLookUpDTO } from 'src/app/models/building-look-up-dto';


@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss'],
})
export class BuildingComponent implements OnInit {
  buildingForm: any;

  constructor(
    private readonly buildingService: BuildingApiService,
    private readonly fb: FormBuilder
  ) { }

  ngOnInit() {
    this.buildingForm = this.fb.group({
      buildingName: '',
      buildingCode: '',
    });
  }

  onSubmit() {
    const formData = this.buildingForm.value;
    const response: BuildingLookUpDTO = {
      buildingName: formData.buildingName,
      buildingCode: formData.buildingCode,
    };
    console.log(response);
    this.buildingService.postApiBuilding(response).subscribe({
      next: () => {
        window.alert('Success');
      },
      error: (errorDetails) => {
        window.alert(errorDetails.error);
      },
    });
  }
}
