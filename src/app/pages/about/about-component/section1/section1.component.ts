import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faCircle, faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss']
})
export class Section1Component implements OnInit {
  faArrow = faCircleArrowLeft;
  faArrow2 = faCircleArrowRight;
  faCircle= faCircle;
  Formgroup: any;
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name:['', [Validators.required,Validators.minLength(2)]],
      lastName:['', [Validators.required, Validators.minLength(3)]],
      tel: [''],
      email:['', [Validators.required, Validators.email]]
    })
  }
  onSubmit(form: FormGroup) {
    if(this.myForm.invalid){
      alert('Oops, something heppend wrong! Please Check!')
    }
  }


}
