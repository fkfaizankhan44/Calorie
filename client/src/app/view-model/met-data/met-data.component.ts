import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetService } from 'src/app/model/met-data/met.service';
import { Met } from 'src/app/interface/met-data/met.model';


@Component({
  selector: 'app-met-data',
  templateUrl: './../../view/met-data/met-data.component.html',
  styleUrls: ['./../../view/met-data/met-data.component.css']

})
export class MetDataComponent implements OnInit {
  mets: Met[]

  constructor(private _metService: MetService) {
    this.mets = Object.assign([], new Met())
    console.log(this.mets)

    this.getMet();

  }

  getMet() {
    this._metService.getMetInfo().subscribe(mets => {
      this.mets = mets

      console.log(this.mets)
      console.log(mets)

    });

  }

  ngOnInit(): void {
  }

}
