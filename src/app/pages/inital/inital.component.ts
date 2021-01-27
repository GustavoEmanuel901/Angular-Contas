import { Component, OnInit } from '@angular/core';
import Months from 'src/app/utils/Months';

@Component({
  selector: 'app-inital',
  templateUrl: './inital.component.html',
  styleUrls: ['./inital.component.css']
})
export class InitalComponent implements OnInit {

  months = Months

  constructor() { }

  ngOnInit(): void {
  }

}
