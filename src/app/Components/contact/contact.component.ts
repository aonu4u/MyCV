import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from 'src/app/Services/contact.service';
import { NgbModal, NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  contactform: FormGroup
  dialogTitle = ''
  dialogMsg = ''
  messageSent = false
  isSendingMsg = false

  constructor(private fb: FormBuilder, private contactService: ContactService, private modalService: NgbModal, private progressBarConfig: NgbProgressbarConfig) {
    this.contactform = this.fb.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      subject:['',Validators.required],
      message:['',Validators.required]
    })

    progressBarConfig.max = 1000;
    progressBarConfig.striped = true;
    progressBarConfig.animated = true;
    progressBarConfig.type = 'info';
    progressBarConfig.height = '20px';
  }

  ngOnInit(): void {}

  onSubmit(dialog: any): void {
    this.isSendingMsg = true
    this.dialogTitle = 'Sending...'
    this.modalService.open(dialog, {centered: true})
    this.contactService.sendMessage(this.contactform.value).then(
      (res) => {
        if(res.status === 200) {
          this.isSendingMsg = false
          this.messageSent = true
          this.dialogTitle = 'Success!!'
          this.dialogMsg = 'Your message has been sent successfully.'
        }
      },
      (err) => {
        this.isSendingMsg = false
        this.messageSent = false
        this.dialogTitle = 'Error!!'
        this.dialogMsg = 'Your message could not be delivered due to technical issue.'
      }
    )
  }
}