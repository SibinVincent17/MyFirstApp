 
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})

export class ReactiveformComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm:FormGroup
  constructor() {}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null),
      gender: new FormControl('male'),
    });
  }

  onFormSubmit() {
    console.log(this.signupForm);
  }

  

}

