import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
//import { BuildingService, CabinRoomService, CityService, FacilityService } from 'src/api/services';
import { BuildingApiService } from 'src/app/apiServices/building-api.service';
import { CabinApiService } from 'src/app/apiServices/cabin-api.service';
import { CityApiServiceService } from 'src/app/apiServices/city-api-service.service';
import { FacilityApiService } from 'src/app/apiServices/facility-api.service';

@Component({
  selector: 'app-cabins-report',
  templateUrl: './cabins-report.component.html',
  styleUrls: ['./cabins-report.component.scss']
})
export class CabinsReportComponent implements OnInit {
  public isUnallocatedReport: boolean = true;
  public cities: any[] = [];
  public buildings: any[] = [];
  public facilities: any[] = [];
  public reportForm: any;
  public results: any[] = [];


  constructor(
    private readonly fb: FormBuilder,
    private readonly cityService: CityApiServiceService,
    private readonly buildingService: BuildingApiService,
    private readonly facilityService: FacilityApiService,
    private readonly cabinService: CabinApiService
  ) {}

  ngOnInit() {
    this.cityService.getApiCity().subscribe((city) => {
      this.cities = city as unknown as any[];

      this.buildingService.getApiBuilding().subscribe((building) => {
        this.buildings = building as unknown as any[];

        this.facilityService.getApiFacility().subscribe((facility) => {
          this.facilities = facility as unknown as any[];
        });

      });

    });  
  
    this.reportForm = this.fb.group({
      isUnallocatedReport: this.isUnallocatedReport,
      cityCode: '',
      buildingCode: '',
      facilityName: '',
      floorNumber: '',
    });
  }

  onRadioChange(status: boolean) {
    this.isUnallocatedReport = status;
  }

  onSubmit() {
    // const formData = this.reportForm.value;
    // const request: any = {
    //   isUnallocatedReport: this.isUnallocatedReport,
    //   cityCode: formData.cityCode,
    //   buildingCode: formData.buildingCode,
    //   facilityName: formData.facilityName,
    //   floorNumber: formData.floorNumber,
    // };
    // console.log(request);
    // this.cabinService.getApiCabinRooms(request).subscribe((result) => {
    //   this.results = result as unknown as any[];
    // });

    const cityCode = this.reportForm.controls.cityCode.value;
    const buildingCode = this.reportForm.controls.buildingCode.value;
    const facilityName = this.reportForm.controls.facilityName.value;
    const floorNumber = this.reportForm.controls.floorNumber.value;
    const isUnallocatedReport = this.isUnallocatedReport;

    this.cabinService.getApiCabinsReport(isUnallocatedReport,cityCode,buildingCode,facilityName,floorNumber).subscribe((result) => {
      this.results = result as unknown as any[];
    });  
  }
}
