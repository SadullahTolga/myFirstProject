import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateAddComponent } from './features/candidate/candidate-add/candidate-add/candidate-add.component';

const routes: Routes = [

  {path:"candidate-add",component:CandidateAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
