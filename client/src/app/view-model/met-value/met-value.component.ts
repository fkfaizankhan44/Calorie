import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Met } from 'src/app/interface/met-data/met.model';
import { MetService } from 'src/app/model/met-data/met.service';
import { user } from 'src/app/interface/user/user';
import { UserService } from 'src/app/model/user/user.service';
import { MetValueService } from 'src/app/model/met/met-value.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-met-value',
  templateUrl: './../../view/met-value/met-value.component.html',
  styleUrls: ['./../../view/met-value/met-value.component.css']
})
export class MetValueComponent implements OnInit {
  title = "Activity Registration";
  metValueForm: FormGroup;

  mets: Met[]
  activity_name: string[];
  activityName: string[];
  activity: string[];
  getId: any;
  specific_motion: string[];
  specificMotion: any = []
  motion: any;
  id: number = 0;
  userIds: any;
  userId: string;
  userName: string;
  userWeight: number;
  userBmr: number;
  users: user[];
  data1: any


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any[],
    private _matDialog: MatDialog,
    private _frmBuilder: FormBuilder,
    private _metService: MetService,
    private _metValueService: MetValueService
  ) {
    this.activity_name = []
    this.activityName = []
    this.specific_motion = []
    this.activity = []

    this.userId = ""
    this.userWeight = 0
    this.userName = ""
    this.users = []


    this.userId = data[0]
    this.userName = data[1]
    this.userWeight = data[2]
    this.userBmr = data[3]



    this.metValueForm = this._frmBuilder.group(
      {
        id: new FormControl(0),
        activity: new FormControl(""),
        specific_motion: new FormControl(""),
        met: new FormControl(0),
        duration: new FormControl(),
      }
    );

    this.mets = Object.assign([], new Met())
    this.getMet();

  }
  ngOnInit(): void {
  }

  getMet() {
    this._metService.getMetInfo().subscribe(mets => {
      this.mets = mets
      for (let met of mets) {
        this.activity_name.push(met.activity)
      }
      this.activityName = [...(new Set(this.activity_name))]
    });

  }


  activityData(metValueForm: any) {
    this.activity = metValueForm.controls.activity.value
    this.getId = this.activity
    this.specificMotion = Object.assign([], new Met())
    this._metService.getActivity(this.getId).subscribe(mets => {
      this.specificMotion = mets
      for (let met of mets) {
        this.specific_motion.push(met.specific_motion)
        this.id = met.id
      }
      this.specificMotion = [...(new Set(this.specific_motion))]

    });

  }
  getMotionData(metValueForm: any) {
    this.motion = metValueForm.controls.specific_motion.value
    this.getId = this.motion
    this._metService.getMotion(this.getId).subscribe(mets => {
      this.mets = mets
      for (let met of mets) {
        this.id = met.id
      }

    });
  }

  postData() {
    this.metValueForm.patchValue({
      id: this.id,
    })
    const data = this.metValueForm.value
    data.userId = this.userId
    data.userName = this.userName
    data.userWeight = this.userWeight


    data.calorieOut = (data.met * data.userWeight * (data.duration) / 60)
    this._metValueService.postMetValueInfo(data).subscribe(mets => { mets });
    const keyObject = { key: "met", data: data }
    this._matDialog._getAfterAllClosed().next(keyObject as any);
    this._matDialog.closeAll();
  }
}
