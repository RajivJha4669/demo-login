import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-photo',
  templateUrl: './profile-photo.page.html',
  styleUrls: ['./profile-photo.page.scss'],
})
export class ProfilePhotoPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  navigateTo() {
    this.router.navigate(['edit-profile']);
  }

}
