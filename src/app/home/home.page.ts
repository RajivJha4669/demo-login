import { Component } from '@angular/core';
import { SegmentButtons } from './type/segment-buttons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public selectedSegment: SegmentButtons = "ARBEITNEHMER"

  constructor() { }

}
