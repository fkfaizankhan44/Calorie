import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/interface/food-data/food.model';
import { FoodService } from 'src/app/model/food-data/food.service';

@Component({
  selector: 'app-food-data',
  templateUrl: './../../view/food-data/food-data.component.html',
  styleUrls: ['./../../view/food-data/food-data.component.css']
})
export class FoodDataComponent implements OnInit {

  foods: Food[]

  constructor(private activatedRoute: ActivatedRoute, private foodService: FoodService) {
    this.foods = Object.assign([], new Food())
    console.log(this.foods)

    this.getFood();

  }

  getFood() {
    this.foodService.getFoodInfo().subscribe(foods => {
      this.foods = foods

      console.log(this.foods)
      console.log(foods)

    });

  }

  ngOnInit(): void {
  }

}
