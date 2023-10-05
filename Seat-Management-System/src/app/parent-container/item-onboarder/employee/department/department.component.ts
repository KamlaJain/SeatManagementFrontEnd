import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DepartmentApiService } from 'src/app/apiServices/department-api.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit{


  departmentForm: any;

  constructor(
    private readonly departmentService: DepartmentApiService,
    private readonly fb: FormBuilder,
  ) {}

  ngOnInit() {

    this.departmentForm = this.fb.group({
      departmentName: '',
    }); 
  }

  onSubmit() {
    const departmentName: string = this.departmentForm.get('departmentName').value;
    console.log(departmentName)
    this.departmentService.postApiDepartment(departmentName).subscribe({
      next: () => {
        window.alert('Success');
      },
      error: (errorDetails) => {
        window.alert(errorDetails.error);
      },
    });
  }

}
