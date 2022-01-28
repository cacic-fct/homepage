import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./page-home/page-home.module').then((m) => m.PageHomePageModule),
  },
  {
    path: 'transparencia',
    loadChildren: () =>
      import('./page-openness/page-openness.module').then(
        (m) => m.PageOpennessPageModule
      ),
  },
  {
    path: 'sobre',
    loadChildren: () =>
      import('./page-about-app/page-about-app.module').then(
        (m) => m.PageAboutAppPageModule
      ),
  },
  {
    path: 'privacidade',
    loadChildren: () =>
      import('./page-privacy-policy/page-privacy-policy.module').then(
        (m) => m.PagePrivacyPolicyPageModule
      ),
  },
  {
    path: 'licenses',
    loadChildren: () =>
      import('./page-licenses/page-licenses.module').then(
        (m) => m.PageLicensesPageModule
      ),
  },
  {
    path: 'pandemia',
    loadChildren: () =>
      import('./page-covid19/page-covid19.module').then(
        (m) => m.PageCovid19PageModule
      ),
  },
  {
    path: 'links',
    loadChildren: () =>
      import('./page-link-tree/page-link-tree.module').then(
        (m) => m.PageLinkTreePageModule
      ),
  },
  {
    path: 'calouros',
    loadChildren: () =>
      import('./page-calouros/page-calouros.module').then(
        (m) => m.PageCalourosPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
