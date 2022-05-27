import { Component, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {

  resizeObservable: Observable<Event>
  resizeSubscription: Subscription

  showNav = window.innerWidth > 1199

  constructor() { }

  ngOnInit(): void {
    this.resizeObservable = fromEvent(window,'resize')
    this.resizeSubscription = this.resizeObservable.subscribe(() => {
      this.showNav = window.innerWidth > 1199
    })
  }

  ngOnDestroy(): void {
    this.resizeSubscription.unsubscribe()
  }

  openFacebook(): void {
    window.open("https://www.facebook.com/anurag.ratna.54","_blank")
  }

  openInstagram(): void {
    window.open("https://www.instagram.com/anurag.r19","_blank")
  }

  openLinkedin(): void {
    window.open("https://www.linkedin.com/in/anurag-ratna-458b8baa","_blank")
  }

  openSideNav(): void {
    this.showNav = !(this.showNav)
  }

  onMenuClick(): void {
    if(window.innerWidth <= 1199 && this.showNav) this.showNav = false 
  }
}
