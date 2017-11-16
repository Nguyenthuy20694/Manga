import {Component} from 'angular2/core';
import {RouteData} from 'angular2/router';
import {Router} from 'angular2/router';
import { RouteConfig, Route, ROUTER_DIRECTIVES} from 'angular2/router';
import { Mangas } from '../Mangas/manga.service';
import {RouteParams} from 'angular2/router';


@Component({
    selector: 'signup',
    templateUrl: 'app/signup/signup.html',
    styleUrls: ['app/signin/signin.css'],
     directives: [ROUTER_DIRECTIVES] ,
     providers: [Mangas]
})

export class SignupComponent {
    public email:any;
    public name:any;
    public address:any;
    public password:any;
    public password_confirm:any;
    public user={};
    public output:any;
   constructor(public manga: Mangas, public router : Router,public routerParams: RouteParams) {
        
    } 
    signup(){
        if(this.password == this.password_confirm)
        {
        this.user['email'] = this.email;
        this.user['name'] = this.name;
        this.user['address'] = this.address;
        this.user['password'] = this.password;
        console.log(this.user);
        this.register(this.user);
        }
        else window.alert("Your password and confirmation password do not match.");
    }
    register(user){
        this.manga.register(user)
        .subscribe(data => {
            this.output = data;
            console.log(this.output);
            if(this.output.status_code == 400)
            window.alert(this.output.message);
            else  
            {
                window.alert(this.output.message);
                this.router.navigate(['Signin']);
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
