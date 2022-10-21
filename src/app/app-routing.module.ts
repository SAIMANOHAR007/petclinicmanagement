import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SaveNewemployeeComponent } from './save-newemployee/save-newemployee.component';

const routes: Routes = [
  {path:"employees",component:EmployeeListComponent},
  {path:"save-newemployee",component:SaveNewemployeeComponent},
  {path:'',redirectTo:"employees",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
