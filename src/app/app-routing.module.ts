import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './components/form.component';
import { SubmitComponent } from './components/submit.component';

const ROUTES: Routes = [
  { path: '', component: FormComponent },
  { path: 'form', component: FormComponent },
  { path: 'submit', component: SubmitComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],   
  exports: [RouterModule]
})
export class AppRoutingModule { }

// 