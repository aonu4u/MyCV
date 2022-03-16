import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openFacebook() {
    window.open("https://www.facebook.com/anurag.ratna.54","_blank")
  }

  openInstagram() {
    window.open("https://www.instagram.com/anurag.r19","_blank")
  }

  openLinkedin() {
    window.open("https://www.linkedin.com/in/anurag-ratna-458b8baa","_blank")
  }
}
