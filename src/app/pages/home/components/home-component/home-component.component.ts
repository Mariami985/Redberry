import { Component, OnInit } from '@angular/core';

interface DataInterface{
  text:string,
  longText:string
}



@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {

  public data:DataInterface[] = [
    {
      text: " start questionnaire",
      longText: "  submitted applications"
    }
  ]

  constructor() { 
  }

  ngOnInit(): void {
  }

}
