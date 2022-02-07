import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-up-professional',
  templateUrl: './set-up-professional.page.html',
  styleUrls: ['./set-up-professional.page.scss'],
})
export class SetUpProfessionalPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  public changeProfilePhoto() {
    this.router.navigate(['profile-photo']);
  }

}
