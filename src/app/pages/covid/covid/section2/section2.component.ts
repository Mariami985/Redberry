import { Component, OnInit } from '@angular/core';
import { MainData } from 'src/app/modules/main-data';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss']
})
export class Section2Component implements OnInit {

  public data: MainData[] = [
    {
      title: "redberry covid policies",
      longText: "As this infamous pandemic took over the world, we adjusted our working practices so that our employees can be as safe and comfortable as possible. We have a hybrid work environment, so you can either work from home or visit our lovely office on Sairme Street. If it was up to us, we would love you to see us in the office because we think face-to-face communications > Zoom meetings. Both on the fun and productivity scales. "
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
