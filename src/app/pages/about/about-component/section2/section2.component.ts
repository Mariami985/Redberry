import { Component, OnInit } from '@angular/core';

interface DataInterface {
  title: string,
  text:string,
}


@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss']
})
export class Section2Component implements OnInit {

  public data:DataInterface[]=[
    {
      title: "Redberry Origins",
      text: "ou watch “What? Where? When?” Yeah. Our founders used to play it.  That's where they got a question about a famous American author and screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the exact name and he answered Ray Redberry. And at that moment, a name for a yet to be born company was inspired - Redberry"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
