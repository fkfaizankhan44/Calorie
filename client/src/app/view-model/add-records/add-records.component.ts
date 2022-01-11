import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-records',
  templateUrl: './../../view/add-records/add-records.component.html',
  styleUrls: ['./../../view/add-records/add-records.component.css']
})



export class AddRecordsComponent implements OnInit {

  foods: any[]
  mets: any[]
  calorieOUT: number
  calorieIN: number
  netCalorie: number
  userBmr: number


  constructor() {
    this.foods = []
    this.mets = []
    this.calorieIN = 0
    this.calorieOUT = 0
    this.netCalorie = 0
    this.userBmr = 0



  }

  ngOnInit(): void {
  }
  postData() {
    this.netCalorie = this.calorieIN - this.calorieOUT - this.userBmr
  }

  addFood(newFood: any) {

    this.foods = newFood
    for (let food of this.foods) {
      this.userBmr = food.userBmr
    }
  }
  addCalorieIn(newCalorieIN: number) {
    this.calorieIN = newCalorieIN

  }

  addMet(newMet: any) {
    this.mets = newMet
  }
  addCalorieOut(newCalorieOUT: number) {
    this.calorieOUT = newCalorieOUT
  }

}
