import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    speed: 400
  };

  constructor(
    private router: Router,
  ) { }

  ngOnInit() { }

  public goToLogin() {
    this.router.navigate(['auth']);
  }

}
