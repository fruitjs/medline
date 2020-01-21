import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { FormsComponent } from './forms/forms.component';


const routes: Routes = [{
  path: '', component: FormsComponent
}, {
  path: 'thank-you', component: ThankYouComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
