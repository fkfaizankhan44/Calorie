import { Component, EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetValue } from 'src/app/interface/met/met-value.model';


import { MetValueService } from 'src/app/model/met/met-value.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MetValueComponent } from '../met-value/met-value.component';
import { UserService } from 'src/app/model/user/user.service';
import { User } from 'src/app/interface/user/user.model'
import { CalenderComponent } from '../calendar/calender.component';


@Injectable()
@Component({
  selector: 'app-met-value-data',
  templateUrl: './../../view/met-value-data/met-value-data.component.html',
  styleUrls: ['./../../view/met-value-data/met-value-data.component.css']
})
export class MetValueDataComponent implements OnInit {

  @Output() newMetEvent = new EventEmitter<any[]>();

  @Output() newCalorieOUTEvent = new EventEmitter<number>();


  mets: MetValue[]
  metValue: any
  routeData: any;
  userId: string;
  userName: string;
  userWeight: number;
  users: User[];
  userBmr: any;
  calorieOUT: number;
  is_calender: string | boolean

  constructor(private activatedRoute: ActivatedRoute, private metValueService: MetValueService, private router: Router, public matDialog: MatDialog, private userService: UserService) {
    this.mets = []
    this.users = Object.assign([], new User())
    this.userWeight = 0
    this.userId = ""
    this.userName = ""
    this.calorieOUT = 0
    this.routeData = activatedRoute.snapshot.params
    this.is_calender = false


    if (this.routeData) {
      this.userService.getUserById(this.routeData.id).subscribe(users => {
        this.users = users
        for (let user of users) {
          this.userId = user._id
          this.userName = user.name
          this.userWeight = user.weight
          this.userBmr = user.bmr
        }
      })
    }
  }
  openDialog() {
    this.matDialog.open(MetValueComponent, {
      data: [
        this.userId = this.userId,
        this.userName = this.userName,
        this.userWeight = this.userWeight,
        this.userBmr = this.userBmr
      ]
    });
  }
  ngOnInit() {

    this.routeData = this.activatedRoute.snapshot.params
    this.is_calender = (this.routeData.calender)
    if (this.is_calender === "true") {
      this.is_calender = true
    } else {
      this.is_calender = false
    }

    if (this.is_calender) {
      const data = { userId: this.routeData.id }
      const value = JSON.stringify(data)
      this.getMet(value);
    }

    this.matDialog.afterAllClosed.subscribe((mets: any) => {
      if (mets && Object.keys(mets).length !== 0) {

        if (mets.key === "met") {
          this.mets.splice(0, 0, ...[mets.data])
          this.calorieOut()
          let cal = 0
          for (let i of this.mets) {

            cal = cal + i.calorieOut
            this.calorieOUT = cal

          }
        }

        if (mets.key === "cal") {
          this.calorieOUT = 0
          const data1 = new Date(mets.data.recordsDate as any)
          const startDate = data1.setHours(0, 0, 0, 0)
          const endDate = data1.setHours(23, 59, 59, 999)

          const data2 = {
            startDate: startDate,
            endDate: endDate
          }
          const data3 = { creationDate: data2, userId: mets.data.userId }
          const value = JSON.stringify(data3)
          if (value) {
            this.getMet(value)
          }
        }
      }

      this.matDialog.closeAll();
    })

  }

  getMet(data?: any) {
    this.metValueService.getMetValueInfo(data).subscribe(mets => {
      this.mets = mets
      let cal = 0
      for (let i of this.mets) {

        cal = cal + i.calorieOut
        this.calorieOUT = cal

      }
      this.calorieOut()
    });

  }
  calorieOut() {

    this.mets.forEach((data) => {
      data.calorieOut = (data.met * data.userWeight * (data.duration) / 60)
    })

  }


  addActivity() {
    this.router.navigate(['/met-value'])
  }

  deleteData(_id: any, i: number) {
    if (_id) {
      this.metValueService.deleteMetValueInfo(_id).subscribe(mets => {
        this.mets.splice(i, 1)
      })
    }
    else {
      this.mets.splice(i, 1)

    }
  }

  viewRecords() {
    this.matDialog.open(CalenderComponent, { data: [this.routeData.id] });
  }
  sendData() {
    this.newMetEvent.emit(this.mets)
    this.newCalorieOUTEvent.emit(this.calorieOUT)
    alert("Send data SuccessFully!!!")
  }
}