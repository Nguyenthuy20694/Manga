import {Component} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import { HomeComponent } from './home/home.component';
import { MangadetailComponent } from './manga-detail/manga-detail.component';
import { MangareadComponent } from './manga-read/manga-read.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {Router} from 'angular2/router';
import { RouteConfig, Route, ROUTER_DIRECTIVES} from 'angular2/router';
import { Mangas } from './Mangas/manga.service';
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html',
    styleUrls: ['app/res/style.css'],
    directives: [ROUTER_DIRECTIVES,HeaderComponent,FooterComponent] ,
     providers: [Mangas]
})
@RouteConfig([
    new Route({path: '/signin', component: SigninComponent, name: 'Signin' }),
    new Route({path: '/signup', component: SignupComponent, name: 'Signup' }),
    new Route({path: '/home', component: HomeComponent, name: 'Home' }),
    new Route({path: '/detail', component: MangadetailComponent, name: 'Detail' }),
    new Route({path: '/read', component: MangareadComponent, name: 'Read' }),
    new Route({path: '/', component: HomeComponent, name: 'Home',useAsDefault:true }),

])


export class AppComponent {
      
    constructor(public manga: Mangas) {
 
    }
}
