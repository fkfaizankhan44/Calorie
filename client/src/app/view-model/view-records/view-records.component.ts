import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-view-records',
  templateUrl: './../../view/view-records/view-records.component.html',
  styleUrls: ['./../../view/view-records/view-records.component.css']
})

export class ViewRecordsComponent implements OnInit {

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
    this.postData()
  }
  postData() {
    this.netCalorie = this.calorieIN - this.calorieOUT - this.userBmr
  }

  addFood(newFood: any) {
    this.foods = newFood
    let cal = 0
    for (let i of this.foods) {
      cal = cal + i.calories
      this.calorieIN = cal
      this.userBmr = i.userBmr
    }
  }
  addMet(newMet: any) {
    this.mets = newMet
    let cal = 0
    for (let i of this.mets) {
      cal = cal + i.calorieOut
      this.calorieOUT = cal
    }
  }
}
