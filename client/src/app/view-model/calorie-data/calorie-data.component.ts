import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Calorie } from 'src/app/interface/calorie/calorie.model';
import { CalorieService } from 'src/app/model/calorie/calorie.service';
import { MatDialog } from '@angular/material/dialog';
import { CalorieInComponent } from '../calorie-in/calorie-in.component';
import { UserService } from 'src/app/model/user/user.service';
import { CalenderComponent } from '../calendar/calender.component';

import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calorie-data',
  templateUrl: './../../view/calorie-data/calorie-data.component.html',
  styleUrls: ['./../../view/calorie-data/calorie-data.component.css']
})
export class CalorieDataComponent implements OnInit {

  @Output() newFoodEvent = new EventEmitter<any[]>();

  @Output() newCalorieINEvent = new EventEmitter<number>();

  foods!: Calorie[]
  userId: any;
  userName: any;
  userWeight: any;
  routeData: any;
  userBmr: any;
  calorieIN: number;
  is_calender: string | boolean

  constructor(private _activatedRoute: ActivatedRoute, private _calorieService: CalorieService, private _matDialog: MatDialog, private _userService: UserService) {
    this.foods = []
    this.calorieIN = 0
    this.is_calender = false
  }
  ngOnInit(): void {



    this.routeData = this._activatedRoute.snapshot.params
    this.is_calender = this.routeData.calender
    if (this.is_calender === "false") {
      this.is_calender = false
    } else {
      this.is_calender = true
    }
    if (this.is_calender) {
      const data = { userId: this.routeData.id }
      const value = JSON.stringify(data)
      this.getFood(value);
    }


    if (this.routeData) {
      this._userService.getUserById(this.routeData.id).subscribe(users => {
        for (let user of users) {
          this.userId = user._id
          this.userName = user.name
          this.userBmr = user.bmr
        }
      })
    }
    this._matDialog.afterAllClosed.subscribe((foods: any) => {
      if (foods && Object.keys(foods).length !== 0) {
        if (foods.key === "foods") {


          this.foods.splice(0, 0, ...[foods.data])
          let cal = 0
          for (let i of this.foods) {
            cal = cal + i.calories
            this.calorieIN = cal
          }
        }
        if (foods.key === "cal") {
          this.calorieIN = 0
          const data1 = new Date(foods.data.recordsDate as any)
          const startDate = data1.setHours(0, 0, 0, 0)
          const endDate = data1.setHours(23, 59, 59, 999)
          const data2 = {
            startDate: startDate,
            endDate: endDate
          }
          const data3 = { creationDate: data2, userId: foods.data.userId }
          const value = JSON.stringify(data3)
          if (value) {
            this.getFood(value)
          }
        }

      }

      this._matDialog.closeAll();
    })

  }
  getFood(data?: any) {
    this._calorieService.getCalorieInfo(data).subscribe(foods => {
      this.foods = foods
      let cal = 0
      for (let i of this.foods) {
        cal = cal + i.calories
        this.calorieIN = cal
      }
    });
  }
  openDialog() {
    this._matDialog.open(CalorieInComponent, {
      data: [
        this.userId = this.userId,
        this.userName = this.userName,
        this.userBmr = this.userBmr
      ]
    });
  }
  deleteData(_id: any, i: number) {

    if (_id) {
      this._calorieService.deleteCalorieInfo(_id).subscribe(foods => {
        this.foods.splice(i, 1)
      })

    }
    else {
      this.foods.splice(i, 1)

    }
  }
  viewRecords() {
    this._matDialog.open(CalenderComponent, {});
  }
  sendData() {
    this.newFoodEvent.emit(this.foods)
    this.newCalorieINEvent.emit(this.calorieIN)
    alert("Send Data Successfully!!!")
  }
}
