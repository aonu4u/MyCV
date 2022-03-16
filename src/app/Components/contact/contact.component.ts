import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactform: FormGroup

  constructor(private fb:FormBuilder) {
    this.contactform = this.fb.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      subject:['',Validators.required],
      message:['',Validators.required]
    })
  }

  ngOnInit(): void {}

  onSubmit() {
    alert('Message recieved!!!')
    console.log(this.contactform.value)
  }

}
