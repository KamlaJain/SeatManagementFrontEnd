import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CityApiServiceService } from 'src/app/apiServices/city-api-service.service';
import { CityLookUpDTO } from 'src/app/models/city-look-up-dto';

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
      this.cityService.postApiCity(reponse).subscribe({
        next: () => {
          window.alert('Success');
        },
        error: (errorDetails) => {
          window.alert(errorDetails.error);
        },
      });
    }
  
  }
  
