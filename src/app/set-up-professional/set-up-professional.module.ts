import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetUpProfessionalPageRoutingModule } from './set-up-professional-routing.module';

import { SetUpProfessionalPage } from './set-up-professional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetUpProfessionalPageRoutingModule
  ],
  declarations: [SetUpProfessionalPage]
})
export class SetUpProfessionalPageModule {}
