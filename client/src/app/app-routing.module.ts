import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CalorieDataComponent } from './view-model/calorie-data/calorie-data.component';
import { CalorieInComponent } from './view-model/calorie-in/calorie-in.component';
import { UserRegistrationComponent } from './view-model/user-registration/user-registration.component';
import { UserDataComponent } from './view-model/user-data/user-data.component';
import { MetValueComponent } from './view-model/met-value/met-value.component';
import { MetValueDataComponent } from './view-model/met-value-data/met-value-data.component';
import { ViewRecordsComponent } from './view-model/view-records/view-records.component';
import { AddRecordsComponent } from './view-model/add-records/add-records.component';

const routes: Routes = [
  { path: "", redirectTo: "user-data", pathMatch: "full" },

  { path: "calorie-data", component: CalorieDataComponent },
  { path: "calorie-in", component: CalorieInComponent },
  { path: "calorie-data/:id", component: CalorieDataComponent },

  { path: "met-value-data", component: MetValueDataComponent },
  { path: "met-value", component: MetValueComponent },
  { path: "met-value-data/:id", component: MetValueDataComponent },

  { path: "user-data", component: UserDataComponent },
  { path: "user-registration", component: UserRegistrationComponent },
  { path: "user-data/:id", component: UserDataComponent },

  { path: "view-records", component: ViewRecordsComponent },
  { path: "view-records/:id/:calender", component: ViewRecordsComponent },

  { path: "add-records", component: AddRecordsComponent },
  { path: "add-records/:id/:calender", component: AddRecordsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
