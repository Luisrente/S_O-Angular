import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './component/list/list.component';

const routes: Routes = [
  //{ path: 'private', component: PrivateComponent, canActivate: [AuthGuard] },
  { path: 'proceso', component: ListComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'proceso' }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
