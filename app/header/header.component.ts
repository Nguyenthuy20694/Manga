import {Component} from 'angular2/core';
import {RouteData} from 'angular2/router';
import {Router} from 'angular2/router';
import { RouteConfig, Route, ROUTER_DIRECTIVES} from 'angular2/router';
import { Mangas } from '../Mangas/manga.service';

@Component({
    selector: 'my-header',
    templateUrl: 'app/header/header.html',
    styleUrls: ['app/res/style.css'],
     directives: [ROUTER_DIRECTIVES],
     providers: [Mangas]
})

export class HeaderComponent {
    public search_keyword="";
    public storylist= [];
    public login='false';
    public logins = false;
    public category_list: any;
   constructor(public manga: Mangas, public router : Router) {
    this.login = sessionStorage.getItem('login');
    console.log(typeof(this.login));
    if(this.login == 'true') this.logins= true;
    console.log(this.logins);
    this.getCategorylist();
    }

    getCategorylist(){
        this.manga.getCategorylist()
        .subscribe(data => {
            this.category_list = data.data;
            console.log(this.category_list);
        },
        err => alert(err),
        () => console.log('get category list sucessful!'))
    }
    search(search_keyword){
        this.router.navigate(['Home',{search_keyword: search_keyword}]);
        this.search_keyword="";
    }
    filtermanga(category_id){
        this.router.navigate(['Home',{category_id: category_id}]);    
    }
  
   home(){
       this.router.navigate(['Home']);
   }
   signin(){
    this.router.navigate(['Signin']);
   }
   signup(){
    this.router.navigate(['Signup']);
   }
   signout(){
          sessionStorage.removeItem('login');
          this.router.navigate(['Home']);
   }
}
