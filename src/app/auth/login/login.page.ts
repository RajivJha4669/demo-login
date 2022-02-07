import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SegmentButtons } from './type/segment-buttons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public selectedSegment: SegmentButtons = "ARBEITNEHMER";

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  public createAccount() {
    this.router.navigate(['auth/register']);
  }

}
