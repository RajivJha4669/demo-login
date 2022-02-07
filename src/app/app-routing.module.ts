import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './shared/component/intro/intro.component';
import { LayoutComponent } from './shared/component/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'layout',
    component: LayoutComponent
  },
  {
    path: 'intro',
    component: IntroComponent
  },  {
    path: 'set-up-professional',
    loadChildren: () => import('./set-up-professional/set-up-professional.module').then( m => m.SetUpProfessionalPageModule)
  },
  {
    path: 'profile-photo',
    loadChildren: () => import('./profile-photo/profile-photo.module').then( m => m.ProfilePhotoPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
