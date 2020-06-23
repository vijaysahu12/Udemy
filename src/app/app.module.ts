import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { CSharpComponent } from './Components/csharp/csharp.component';
import { AspcoreComponent } from './Components/aspcore/aspcore.component';
import { AngularComponent } from './Components/angular/angular.component';
import { WpfComponent } from './Components/wpf/wpf.component';
import { AspmvcComponent } from './Components/aspmvc/aspmvc.component';
import { JqueryComponent } from './Components/jquery/jquery.component';
import { MssqlComponent } from './Components/mssql/mssql.component';
import { FirebaseComponent } from './Components/firebase/firebase.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from './Service/interceptors';
import { AlertComponent } from './Components/Common/alert/alert.component';
import { EmployeeSettingComponent } from './Components/employee-setting/employee-setting.component';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { SideMenuComponent } from './Components/side-menu/side-menu.component';
import { CalenderComponent } from './Components/calender/calender.component';
import { AuthService } from './Service/AuthService';
import { LoadingSpinnerComponent } from './Components/Shared/loading-spinner/loading-spinner.component';
import { HeaderComponent } from './Components/Shared/header/header.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { TableAnimationComponent } from './Components/table-animation/table-animation.component';
import { UnauthorisedComponent } from './Components/unauthorised/unauthorised.component';
import { DragAndDropComponent } from './Components/drag-and-drop/drag-and-drop.component';
import { RetrospectiveComponent } from './Components/retrospective/retrospective.component';
import { EventListnerComponent } from './Components/event-listner/event-listner.component';
import { DatePipe } from '@angular/common';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CSharpComponent,
    AspcoreComponent,
    AngularComponent,
    WpfComponent,
    AspmvcComponent,
    JqueryComponent,
    MssqlComponent,
    FirebaseComponent,
    AlertComponent,
    EmployeeSettingComponent,
    EmployeeListComponent,
    SideMenuComponent,
    CalenderComponent,
    LoadingSpinnerComponent,
    HeaderComponent,
    TableAnimationComponent,
    UnauthorisedComponent,
    DragAndDropComponent,
    RetrospectiveComponent,
    EventListnerComponent,
  ],
  imports: [
    NgbModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgSelectModule ,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    DatePipe
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: MyInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
