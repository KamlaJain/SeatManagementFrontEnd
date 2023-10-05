import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DepartmentApiService } from 'src/app/apiServices/department-api.service';
import { EmployeeApiService } from 'src/app/apiServices/employee-api.service';
import { EmployeeDTO } from 'src/app/models/employee-dto';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  public employeeForm: any;
  public departments: any[] = [];

  constructor(
    private readonly fb: FormBuilder,
    private readonly departmentService: DepartmentApiService,
    private readonly employeeService: EmployeeApiService,
  ) {}

  ngOnInit() {
    this.departmentService.getApiDepartment().subscribe((departments) => {
      this.departments = departments as unknown as any[];
    });
    this.createNewForm();
  }

  createNewForm() {
    this.employeeForm = this.fb.group({
      departmentId: '',
      employeeName: '',
    });
  }
  onSubmit() {
    const formData = this.employeeForm.value;
    const request: EmployeeDTO = {
      departmentId: formData.departmentId,
      employeeName: formData.employeeName,
    };
    this.employeeService.postApiEmployee(request).subscribe({
      next: () => {
        window.alert('Success');
      },
      error: (errorDetails) => {
        window.alert(errorDetails.error);
      },
    });
    this.createNewForm();
  }
}
