import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutExtras } from 'src/app/shared/interface/layout.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  public togglePassword(input: HTMLInputElement) {
    input.type = input.type === 'text' ? 'password' : 'text';
  }

  public open() {
    const extras: LayoutExtras = {
      state: {
        title: 'ACCOUNT VERIFIZIEREN',
        subtitle: ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
        showBG: false
      }
    }
    this.router.navigate(['layout'], extras);
  }
}
