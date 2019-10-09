import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  { path: 'auth/login', loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginPageModule) },
  { path: 'auth/signUp', loadChildren: () => import('./pages/auth/signup/signup.module').then(m => m.SignUpPageModule) },

  { path: 'auth/forgot-password', loadChildren: () => import('./pages/auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule) },
  { path: 'app', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) },


  { path: 'contact-card', loadChildren: () => import('./pages/old-pages/contact-card/contact-card.module').then(m => m.ContactCardPageModule) },
  // tslint:disable-next-line:max-line-length
  { path: 'forms-and-validations', loadChildren: () => import('./pages/old-pages/forms/validations/forms-validations.module').then(m => m.FormsValidationsPageModule) },
  { path: 'forms-filters', loadChildren: () => import('./pages/old-pages/forms/filters/forms-filters.module').then(m => m.FormsFiltersPageModule) },
  { path: 'page-not-found', loadChildren: () => import('./pages/auth/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) },
  { path: 'showcase', loadChildren: () => import('./pages/old-pages/showcase/showcase.module').then(m => m.ShowcasePageModule) },
  { path: 'firebase', loadChildren: () => import('./pages/old-pages/firebase/firebase-integration.module').then(m => m.FirebaseIntegrationModule) },
  { path: 'maps', loadChildren: () => import('./pages/user-pages/maps/maps.module').then(m => m.MapsPageModule) },
  { path: 'video-playlist', loadChildren: () => import('./video-playlist/video-playlist.module').then(m => m.VideoPlaylistPageModule) },
  { path: '**', redirectTo: 'page-not-found' },
  { path: 'getting-started', loadChildren: () => import('./pages/old-pages/getting-started/getting-started.module').then(m => m.GettingStartedPageModule) }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
