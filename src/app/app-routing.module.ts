import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CSharpComponent } from './Components/csharp/csharp.component';
import { AspcoreComponent } from './Components/aspcore/aspcore.component';
import { AngularComponent } from './Components/angular/angular.component';
import { WpfComponent } from './Components/wpf/wpf.component';
import { AspmvcComponent } from './Components/aspmvc/aspmvc.component';
import { JqueryComponent } from './Components/jquery/jquery.component';
import { MssqlComponent } from './Components/mssql/mssql.component';
import { FirebaseComponent } from './Components/firebase/firebase.component';
import { EmployeeSettingComponent } from './Components/employee-setting/employee-setting.component';
import { CalenderComponent } from './Components/calender/calender.component';
import { TableAnimationComponent } from './Components/table-animation/table-animation.component';
import { UnauthorisedComponent } from './Components/unauthorised/unauthorised.component';
import { DragAndDropComponent } from './Components/drag-and-drop/drag-and-drop.component';
import { RetrospectiveComponent } from './Components/retrospective/retrospective.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Home/:id', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'Calendar', component: CalenderComponent },
  { path: 'EmployeeSetting', component: EmployeeSettingComponent },
  { path: 'CSharp', component: CSharpComponent },
  { path: 'Core', component: AspcoreComponent },
  { path: 'Angular', component: AngularComponent },
  { path: 'Wpf', component: WpfComponent },
  { path: 'aspmvc', component: AspmvcComponent },
  { path: 'jquery', component: JqueryComponent },
  { path: 'mssql', component: MssqlComponent },
  { path: 'firebase', component: FirebaseComponent },
  { path: 'tableAnimation', component: TableAnimationComponent },
  { path: 'unauth', component: UnauthorisedComponent },
  { path: 'dragAndDrop', component: DragAndDropComponent },
  { path: 'retrospective', component: RetrospectiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
