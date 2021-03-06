import { Component, OnInit } from '@angular/core';
import { faCircle, faCircleArrowLeft, faCircleArrowRight, faCircleChevronDown, faCircleMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss']
})
export class Section1Component implements OnInit {
  faArrow = faCircleArrowLeft;
  faArrow2 = faCircleArrowRight;
  faCircle= faCircle;
  faArrow3 = faCircleChevronDown;
  faCircleM = faCircleMinus;

  constructor() { }

  ngOnInit(): void {
  }

}
