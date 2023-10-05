import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { BuildingApiService } from 'src/app/apiServices/building-api.service';
import { CityApiServiceService } from 'src/app/apiServices/city-api-service.service';
import { FacilityApiService } from 'src/app/apiServices/facility-api.service';
import { FacilityDTO } from 'src/app/models/facility-dto';

@Component({
  selector: 'app-onboard-facility',
  templateUrl: './onboard-facility.component.html',
  styleUrls: ['./onboard-facility.component.scss'],
})
export class OnboardFacilityComponent implements OnInit {
  public facilityForm!: any;
  public cities: any[] = [];
  public buildings: any[] = [];

  constructor(
    private formbuilder: FormBuilder,
    private buildingService: BuildingApiService,
    private cityService: CityApiServiceService,
    private facilityService: FacilityApiService,
  ) {}

  ngOnInit(): void {
    this.cityService.getApiCity().subscribe((cities) => {
      this.cities = cities as unknown as any[];

      this.buildingService.getApiBuilding().subscribe((buildings) => {
        this.buildings = buildings as unknown as any[];
      });
    });

    this.facilityForm = this.formbuilder.group({
      cityId: '',
      buildingId: '',
      facilityName: '',
      floorNumber: '',
    });
  }

  onSubmit() {
    const formData = this.facilityForm.value;
    const request: FacilityDTO = {
      cityId: formData.cityId,
      buildingId: formData.buildingId,
      facilityName: formData.facilityName,
      floorNumber: formData.floorNumber,
    };
    console.log(formData);

    this.facilityService.postApiFacility(request).subscribe({
      next: () => {
        window.alert('Success');
      },
      error: (errorDetails) => {
        window.alert(errorDetails.error);
      },
    });
  }

  // addBuilding() {
  //   this.router.navigate(['building']);
  // }
  // addCity() {
  //   this.router.navigate(['city']);
  // }
}
