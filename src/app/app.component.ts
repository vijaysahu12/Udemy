import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AnimateList, AnimateLeftToRight, ScaleAnimation, UpAndDown, SlideBarMenu, PopUp } from 'src/Animation/Animation';
import { AuthService } from './Service/AuthService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [SlideBarMenu ]
})
export class AppComponent {
  menuState = 'out';
  AppBodyStyle: string;
  SideMenuStyle: string;
  sideMenuOpenCloseIcon = '&#9776;';
  headers: any;
  // url = 'http://localhost:8965/api/AuthenticateUser';
  url =   'http://localhost:44390/api/AuthenticateUser';
  urlGet = 'https://localhost:44390/api/Values/';
  pageName = 'Home';
  loggedInUserDetail: any;
  // urlDet = 'https://localhost:44390/api/AccountGetDetails';
  // urlPost = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private _http: HttpClient, private auth: AuthService) {

    console.log('APPComponet constructor caled ');
    this.GetLoggedInUserDetails();

    // this.headers = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     'Authorization': 'my-auth-token'
    //   })
    // };
    // this._http.get(this.url, this.headers).subscribe(() => {
    //   console.log('Http Call is sucess from component');
    // }, (error) => {
    //   console.log('Http call is faild from component');
    // });
  }// constructor end block

  GetLoggedInUserDetails() {
    this.loggedInUserDetail =   this.auth.getLoggedInUser();

    console.log("LoggedInDetails: " +  this.loggedInUserDetail);
  }
  GetPageName(event: string ) {

    console.log( 'Caught the event: ' + event);

    this.pageName = event;
  }
  toggleMenu() {
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

  openNav() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';

    console.log(this.menuState);
  }

  closeNav() {
    this.sideMenuOpenCloseIcon = '&#9778;';
    this.SideMenuStyle = '0';
    this.AppBodyStyle = '0';
  }

  SideMenuAnimateDone() {
    alert('vijay');
  }
}
// prepareRoute(outlet: RouterOutlet){
//   return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
// }
