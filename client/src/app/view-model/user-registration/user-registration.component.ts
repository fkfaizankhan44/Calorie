import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';

import { Router, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { user } from 'src/app/interface/user/user'
import { UserService } from 'src/app/model/user/user.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-registration',
  templateUrl: './../../view/user-registration/user-registration.component.html',
  styleUrls: ['./../../view/user-registration/user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  title = "User Registration";
  userForm: FormGroup;
  allUsers: Observable<user[]> | undefined
  userIdToUpdate = null;
  message = null;

  userData: any;
  users: user[] = []
  name: any;
  bmr: number = 0;

  constructor(private frmBuilder: FormBuilder, private router: Router, private userService: UserService, private matDialog: MatDialog) {
    this.userForm = frmBuilder.group(
      {
        name: new FormControl(),
        weight: new FormControl(),
        height: new FormControl(),
        gender: new FormControl(),
        age: new FormControl(),
        dob: new FormControl()
      }
    );
  }
  ngOnInit(): void {
    this.userForm = this.frmBuilder.group(
      {
        name: ['', [Validators.required]],
        weight: ['', [Validators.required]],
        height: ['', [Validators.required]],
        gender: ['', [Validators.required]],
        age: ['', [Validators.required]],
        dob: ['', [Validators.required]]
      })
  }
  postData() {
    const data = this.userForm.value
    if (data.gender === "Male") {
      data.bmr = (66.4730 + (13.7516 * (data.weight)) + (5.0033 * 30.48 * (data.height)) - (6.7550 * (data.age)))
    }
    else {
      data.bmr = (665.0955 + (9.5634 * (data.weight)) + (1.8496 * 30.48 * (data.height)) - (4.6756 * (data.age)))
    }
    this.userService.postUsersInfo(data).subscribe(users => {
      this.users = users
      this.matDialog._getAfterAllClosed().next(users as any);
    });
    this.matDialog.closeAll();
    this.resetForm();
  }
  resetForm() {
    this.userForm.reset();
  }
}
