import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedComponent } from './completed/completed.component';
import { PastDueComponent } from './past-due/past-due.component';
import { TodayComponent } from './today/today.component';

const routes: Routes = [
  {
    path: '',
    component: TodayComponent
  },
  {
    path: 'today',
    component: TodayComponent
  },
  {
    path: 'completed',
    component: CompletedComponent
  },
  {
    path: 'past-due',
    component: PastDueComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
