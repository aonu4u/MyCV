import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls:['./home.component.css']
})
export class HomeComponent implements OnInit {

  texts = ["Developer","Artist"]
  count = 0
  index = 0
  currentText = ""
  letter = ""

  constructor() { }

  ngOnInit(): void {
    if(this.count === this.texts.length)  this.count = 0
    this.currentText = this.texts[this.count];
    this.letter = this.currentText.slice(0,++this.index)
    if(this.letter.length === this.currentText.length){
      this.count++
      this.index = 0
    }
    setTimeout(this.ngOnInit,400)
  }
}
