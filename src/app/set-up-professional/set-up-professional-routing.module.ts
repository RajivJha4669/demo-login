import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetUpProfessionalPage } from './set-up-professional.page';

const routes: Routes = [
  {
    path: '',
    component: SetUpProfessionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetUpProfessionalPageRoutingModule {}
