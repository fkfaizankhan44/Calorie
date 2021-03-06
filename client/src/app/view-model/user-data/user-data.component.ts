import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/model/user/user.service';
import { User } from 'src/app/interface/user/user.model';
import { Router } from '@angular/router';
import { user } from 'src/app/interface/user/user';
import { UserRegistrationComponent } from '../user-registration/user-registration.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-user-data',
  templateUrl: './../../view/user-data/user-data.component.html',
  styleUrls: ['./../../view/user-data/user-data.component.css']
})

export class UserDataComponent implements OnInit {
  users: User[]
  id: string = "";



  allUsers: Observable<user[]> | undefined
  constructor(private _userService: UserService, private _router: Router, private _matDialog: MatDialog) {
    this.users = Object.assign([], new User())
  }
  ngOnInit(): void {
    this._matDialog.afterAllClosed.subscribe((users: any) => {
      if (users && Object.keys(users).length !== 0) {
        this.users.splice(0, 0, ...[users])

        this.calculateBmr();
      }
      this._matDialog.closeAll();
    })
    this.getUsers();

  }

  calculateBmr() {
    this.users.forEach((data) => {
      if (data.gender === "Male") {
        data.bmr = (66.4730 + (13.7516 * (data.weight)) + (5.0033 * 30.48 * (data.height)) - (6.7550 * (data.age)))
      }
      else {
        data.bmr = (665.0955 + (9.5634 * (data.weight)) + (1.8496 * 30.48 * (data.height)) - (4.6756 * (data.age)))
      }
    })
  }


  getUsers() {
    this._userService.getUsersInfo().subscribe(users => {
      this.users = users
      // console.log(users)
      for (let user of users) {
        this.id = user._id
      }
      this.calculateBmr();
    });
  }
  deleteUser(_id: any, i: number) {
    this._userService.deleteUserInfo(_id).subscribe(users => {
      this.users.splice(i, 1)
    })
  }

  updateUser(_id: any) {
    const userData = this._userService.getUserById(_id).subscribe(users => {
      this.users = users
    })

    this._userService.updateUsersInfo(_id).subscribe(users => {
      this.users = users
    })
  }
  addUser() {
    this._router.navigate(['user-registration'])
  }
  addRecords(_id: any, calender: false) {
    this._router.navigate(['add-records', _id, calender])
  }
  viewRecords(_id: any, calender: true) {
    this._router.navigate(['view-records', _id, calender])
  }



  openDialog() {
    this._matDialog.open(UserRegistrationComponent, {
      data: [
      ]
    });

  }
}
