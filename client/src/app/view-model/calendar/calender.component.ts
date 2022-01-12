import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-calender',
  templateUrl: './../../view/calendar/calender.component.html',
  styleUrls: ['./../../view/calendar/calender.component.css']
})
export class CalenderComponent implements OnInit {


  title = "Calorie Records"
  recordsForm: FormGroup
  recordsDate: Date
  data1: any
  constructor(

    @Inject(MAT_DIALOG_DATA) public data: any[],
    private _frmBuilder: FormBuilder,
    private _matDialog: MatDialog) {

    this.data1 = data[0]
    this.recordsDate = new Date()
    this.recordsForm = this._frmBuilder.group(
      {
        recordsDate: new FormControl()
      }
    )

  }

  ngOnInit(): void {
  }

  postData() {
    const data = this.recordsForm.value
    data.userId = this.data1
    const keyObject = { key: "cal", data: data }
    this._matDialog._getAfterAllClosed().next(keyObject as any);
    this._matDialog.closeAll();
  }

}
