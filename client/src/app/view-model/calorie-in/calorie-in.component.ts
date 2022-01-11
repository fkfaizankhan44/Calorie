import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/interface/food-data/food.model';
import { FoodService } from 'src/app/model/food-data/food.service';
import { CalorieService } from 'src/app/model/calorie/calorie.service';
import { UserService } from 'src/app/model/user/user.service';
import { user } from 'src/app/interface/user/user';

import { FormGroup, FormBuilder, FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-calorie-in',
  templateUrl: './../../view/calorie-in/calorie-in.component.html',
  styleUrls: ['./../../view/calorie-in/calorie-in.component.css']
})

export class CalorieInComponent implements OnInit {
  title = "User Registration";
  calorieForm: FormGroup;
  food_group: string[]
  serving_description: number
  food_name: string[]
  foodNames: string[]
  foodGroup: string[]
  foods: Food[]
  FoodGroup: any;
  getId: any;
  FoodName: string[];
  ServingDescription: any;
  calorie: number;
  fat: number;
  carbohydrate: number;
  id: number;
  protein: number;
  userIds: any;
  users: user[];
  userId: string;
  userName: string;
  userBmr: number


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any[],

    private frmBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private foodService: FoodService, private calorieService: CalorieService, private userService: UserService, private matDialog: MatDialog) {
    this.food_group = []
    this.foodGroup = []
    this.foodNames = []
    this.food_name = []
    this.FoodName = []
    this.calorie = 0
    this.fat = 0
    this.carbohydrate = 0
    this.id = 0
    this.protein = 0

    this.users = []

    this.userId = data[0]
    this.userName = data[1]
    this.userBmr = data[2]

    this.serving_description = 0
    this.calorieForm = frmBuilder.group(
      {
        id: new FormControl(0),
        name: new FormControl(''),
        food_group: new FormControl(''),
        calories: new FormControl(0),
        fat: new FormControl(0),
        protein: new FormControl(0),
        carbohydrate: new FormControl(0),
        serving_description: new FormControl(''),
        meal: new FormControl(''),
      }
    );

    this.foods = Object.assign([], new Food())
  }

  getFood() {
    this.foodService.getFoodInfo().subscribe(foods => {
      for (let food of foods) {
        this.food_group.push(food.food_group)
      }
      this.foodGroup = [...(new Set(this.food_group))]
    });

  }


  ngOnInit(): void {
    this.getFood();
  }
  foodData(calorieForm: any) {
    this.FoodGroup = calorieForm.controls.food_group.value
    this.getId = this.FoodGroup

    this.foodService.getFoodGroup(this.getId).subscribe(foods => {
      for (let food of foods) {
        this.food_name.push(food.name)
      }
      this.foodNames = [...(new Set(this.food_name))]
    });

  }
  foodName(calorieForm: any) {
    this.FoodName = calorieForm.controls.name.value
    this.getId = this.FoodName
    this.foodService.getFoodName(this.getId).subscribe(foods => {
      this.foods = foods
      for (let food of foods) {
        this.calorie = food.calories
        this.fat = food.fat
        this.protein = food.protein
        this.id = food.id
        this.carbohydrate = food.carbohydrate
      }
    });
  }
  postData() {
    const serving = this.calorieForm.value.serving_description
    this.calorieForm.patchValue({
      calories: this.calorie * serving,
      fat: this.fat,
      protein: this.protein,
      carbohydrate: this.carbohydrate,
      id: this.id
    })
    var data = this.calorieForm.value
    data.userId = this.userId
    data.userName = this.userName
    data.userBmr = this.userBmr
    this.calorieService.postCalorieInfo(data).subscribe(foods => {
      this.foods = foods
    });
    const keyObject = { key: "foods", data: data }
    this.matDialog._getAfterAllClosed().next(keyObject as any);
    this.matDialog.closeAll();
  }
}
