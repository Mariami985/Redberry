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
      title: "A bit about our battles",
      longText: "As we said, Redberry has been on the field for quite some time now, and we have touched and embraced a variety of programming languages, technologies, philosophies, and frameworks. We are battle-tested in PHP Laravel Stack with Vue.js, refined in React, and allies with Serverside technologies like Docker and Kubernetes, and now we have set foot in the web3 industry."
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
