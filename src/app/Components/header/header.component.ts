import { Component, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {

  scrollObservable: Observable<Event>
  scrollSubscription: Subscription

  resizeObservable: Observable<Event>
  resizeSubscription: Subscription

  showNav = window.innerWidth > 1199

  components = [
    {
      name: 'Home',
      sectionId: 'home',
      active: false,
      menuIconClass: 'bx bx-home'
    },
    {
      name: 'About',
      sectionId: 'about',
      active: false,
      menuIconClass: 'bx bx-user'
    },
    {
      name: 'Skills',
      sectionId: 'skills',
      active: false,
      menuIconClass: 'bi bi-tools'
    },
    {
      name: 'Resume',
      sectionId: 'resume',
      active: false,
      menuIconClass: 'bx bx-file-blank'
    },
    {
      name: 'Portfolio',
      sectionId: 'portfolio',
      active: false,
      menuIconClass: 'bx bx-book-content'
    },
    {
      name: 'Contact',
      sectionId: 'contact',
      active: false,
      menuIconClass: 'bx bx-envelope'
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.updateComponents(this.components)
    this.resizeObservable = fromEvent(window,'resize')
    this.resizeSubscription = this.resizeObservable.subscribe(() => {
      this.updateComponents(this.components)
      this.showNav = window.innerWidth > 1199
    })

    this.scrollObservable = fromEvent(window,'scroll')
    this.scrollSubscription = this.scrollObservable.subscribe(() => {
      this.updateComponents(this.components)
      console.log(this.components)
    })
  }

  ngOnDestroy(): void {
    this.resizeSubscription.unsubscribe()
    this.scrollSubscription.unsubscribe()
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

  updateComponents(components: any): void {
    components.forEach((component: any,index: number) => {
      let componentElement = document.getElementById(component.sectionId)
      let positionY = componentElement?.getBoundingClientRect().y
      component.active = positionY !== undefined && positionY <= (2*(window.innerHeight)/5)
      if(index > 0 && component.active) components[index-1].active = false
    });
  }
}
