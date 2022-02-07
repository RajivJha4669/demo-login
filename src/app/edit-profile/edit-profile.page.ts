import { Component, OnInit } from '@angular/core';

type LookingFor = "FESTANSTELLUNG" | "PROJEKT";
type AvailableForPeriod = "BEFRISTET" | "UNBEFRISTET";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  public lookinFor: LookingFor = "FESTANSTELLUNG";
  public availableForPeriod: AvailableForPeriod = "BEFRISTET";
  constructor() { }

  ngOnInit() {
  }

}
