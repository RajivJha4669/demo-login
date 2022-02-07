import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  public title: string;
  public subtitle: string;
  count = 0;
  constructor(
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.getDataFromExtras();
  }

  private getDataFromExtras() {
    const state = history.state;
    if (state.navigationId > 1) {
      this.title = state.title;
      this.subtitle = state.subtitle;
      this.count++
    } else {
      this.location.back();
    }
  }

  public next() {
    if (this.count === 1) {
      this.title = 'PROFIL EINRICHTEN';
      this.subtitle = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.';
      this.count++
    } else {
      this.router.navigate(['set-up-professional']);
    }
  }
}
