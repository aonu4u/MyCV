import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  emailServiceId = 'contact-service'
  emailTemplateId = 'contact-message-template'
  emailJsPublicKey = 'JuavHv18Nr6OlItcB'

  constructor() { }

  sendMessage(contactFormData: any) {
    return emailjs.send(this.emailServiceId,this.emailTemplateId,contactFormData,this.emailJsPublicKey)
  }
}
