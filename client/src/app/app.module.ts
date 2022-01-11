import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { CalorieDataComponent } from './view-model/calorie-data/calorie-data.component';
import { CalorieInComponent } from './view-model/calorie-in/calorie-in.component';
import { FoodDataComponent } from './view-model/food-data/food-data.component';
import { MetDataComponent } from './view-model/met-data/met-data.component';

import { UserRegistrationComponent } from './view-model/user-registration/user-registration.component';
import { UserDataComponent } from './view-model/user-data/user-data.component';
import { MetValueComponent } from './view-model/met-value/met-value.component';
import { MetValueDataComponent } from './view-model/met-value-data/met-value-data.component';

import { CalenderComponent } from './view-model/calendar/calender.component';
import { ViewRecordsComponent } from './view-model/view-records/view-records.component';
import { AddRecordsComponent } from './view-model/add-records/add-records.component';





import { MetService } from './model/met-data/met.service';
import { FoodService } from './model/food-data/food.service';
import { CalorieService } from './model/calorie/calorie.service';
import { UserService } from './model/user/user.service';
import { MetValueService } from './model/met/met-value.service';

@NgModule({
  declarations: [
    AppComponent,
    CalorieDataComponent,
    CalorieInComponent,
    FoodDataComponent,
    MetDataComponent,
    MetValueComponent,
    MetValueDataComponent,
    UserDataComponent,
    UserRegistrationComponent,
    CalenderComponent,
    ViewRecordsComponent,
    AddRecordsComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule

  ],
  providers: [MetService, FoodService, CalorieService, UserService, MetValueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
