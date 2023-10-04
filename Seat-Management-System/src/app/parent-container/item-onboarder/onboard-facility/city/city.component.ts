import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CityLookUpDTO } from 'src/api/models';
import { CityApiServiceService } from 'src/app/apiServices/city-api-service.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit{


    cityForm: any;
  
    constructor(
      private readonly cityService: CityApiServiceService,
      private readonly fb: FormBuilder,
    ) {}
  
    ngOnInit() {
  
      this.cityForm = this.fb.group({
        cityName: '',
        cityCode: ''
      }); 
    }
  
    onSubmit() {
      const formData = this.cityForm.value;
      const reponse: CityLookUpDTO={
        cityName: formData.cityName,
        cityCode: formData.cityCode
      }
  
      console.log(reponse)
      this.cityService.postApiCity(reponse).subscribe();
    }
  
  }
  
