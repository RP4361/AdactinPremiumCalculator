import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { title } from 'process';
import { UserpremiumComponent } from 'src/module/userpremium/userpremium/userpremium.component';

const routes: Routes = [
// {
//   path:'premium',
//   loadChildren: () => import('../module/userpremium/userpremium.module').then(m => m.UserpremiumModule),
//   data: { title: 'PremiumCalculator' }
// }
//,
{
  path:'premium',
  data: { title: 'PremiumCalculator' },
  component : UserpremiumComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
