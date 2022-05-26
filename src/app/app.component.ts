import { Component, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  isSmallScreen = window.innerWidth <= 1199
  resizeObservable: Observable<Event>
  resizeSubscription: Subscription

  constructor() {}

  ngOnInit(): void {
    this.resizeObservable = fromEvent(window,'resize')
    this.resizeSubscription = this.resizeObservable.subscribe(() => {
      this.isSmallScreen = window.innerWidth <= 1199
    })
  }

  ngOnDestroy(): void {
    this.resizeSubscription.unsubscribe()
  }
}
