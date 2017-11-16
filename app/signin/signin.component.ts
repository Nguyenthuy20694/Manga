import {Component} from 'angular2/core';
import {RouteData} from 'angular2/router';
import {Router} from 'angular2/router';
import { RouteConfig, Route, ROUTER_DIRECTIVES} from 'angular2/router';
import { Mangas } from '../Mangas/manga.service';
import {RouteParams} from 'angular2/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
    selector: 'signin',
    templateUrl: 'app/signin/signin.html',
    styleUrls: ['app/signin/signin.css'],
    directives: [ROUTER_DIRECTIVES,HeaderComponent,FooterComponent] ,
     providers: [Mangas]
})

export class SigninComponent {
    public email:any;
    public name:any;
    public password:any;
    public user={};
    public output:any;
    public logins: any;
   constructor(public manga: Mangas, public router : Router,public routerParams: RouteParams) {
        
    } 
    signin(){
        this.user['email'] = this.email;
        this.user['password'] = this.password;
        console.log(this.user);
        this.login(this.user);
       
    }
    login(user){
        this.manga.login(user)
        .subscribe(data => {
            this.output = data;
            console.log(this.output);
            if(this.output.status_code == 400)
            window.alert(this.output.message);
            else  
            {
                window.alert(this.output.message);
                this.logins=true;
                sessionStorage.setItem('login',this.logins);
                this.router.navigate(['Home']);
            }
        },
        err => alert(err),
        
        // () => console.log('User signup sucessful!')
    )
    
    
    }
    quit(){
         this.router.navigate(['Home']);
    }
   
}
