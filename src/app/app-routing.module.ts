import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '', component: DemoComponent, pathMatch: 'full'
  },
  {
    path: 'demo', component: DemoComponent,
    children:[
      
        {
          path: 'child-a', component: ChildAComponent
        },
        {
          path: 'child-b', component: ChildBComponent
        },
      
    ]
  },
  {
    path: 'app-customer-list', component: CustomerListComponent, canActivate: [AuthGuard]
  },
  {
    path: '**', component: ErrorPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
