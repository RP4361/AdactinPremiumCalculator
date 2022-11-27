import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { title } from 'process';
import { UserpremiumComponent } from 'src/module/userpremium/userpremium/userpremium.component';
import { AppComponent } from './app.component';

const routes: Routes = [
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
