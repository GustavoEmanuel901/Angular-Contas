import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Months from 'src/app/utils/Months';

@Component({
  selector: 'app-inital',
  templateUrl: './inital.component.html',
  styleUrls: ['./inital.component.css']
})
export class InitalComponent implements OnInit {

  months = Months

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToList(key: string): void {
    this.router.navigate([`/list/${key}`])
  }
}
