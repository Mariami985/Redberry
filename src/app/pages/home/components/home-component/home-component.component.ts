import { Component, OnInit } from '@angular/core';
import { MainData } from 'src/app/modules/main-data';


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {

  public data: MainData[] = [
    {
      title: " start questionnaire",
      longText: "  submitted applications"
    }
  ]

  constructor() { 
  }

  ngOnInit(): void {
  }

}
