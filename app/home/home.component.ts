import {Component} from 'angular2/core';
import {RouteData} from 'angular2/router';
import {Router} from 'angular2/router';
import {Http, Response} from 'angular2/http';
import { RouteConfig, Route, ROUTER_DIRECTIVES} from 'angular2/router';
import { Mangas } from '../Mangas/manga.service';
import {RouteParams} from 'angular2/router';
// import { HeaderComponent } from '../header/header.component';
// import { FooterComponent } from '../footer/footer.component';

@Component({
    selector: 'home',
    templateUrl: 'app/home/home.html',
    styleUrls: ['app/res/style.css'],
    directives: [ROUTER_DIRECTIVES] ,
    providers: [Mangas]
})

export class HomeComponent {
    output: any;
    public storylist = [];
    public category_id: any;
    public search_keyword: any;
    public have_result= false;
    public id:any;
    public mangas={};
    public field:any;
    public cate:any;
    public name:any;
    // public login='false';
    // public logins = false;
    public category_list: any;
    constructor(public manga:Mangas, public router : Router,public routerParams: RouteParams) {
        
        // this.login = sessionStorage.getItem('login');
        // console.log(typeof(this.login));
        // if(this.login == 'true') this.logins= true;
        // console.log(typeof(this.logins));
        if(this.routerParams.get('category_id')){
        this.category_id = this.routerParams.get('category_id');
        this.getMangaBycate(this.category_id);
        } else if(this.routerParams.get('search_keyword')){
            this.search_keyword = this.routerParams.get('search_keyword');
            this.search(this.search_keyword);
            } 
        else this.getObject();    
        }
        getObject(){
            this.manga.getObject()
            .subscribe(data => {
                this.output = data.data;
                if(this.output != null){
                    this.have_result = true ;
               }
            },
            err => alert(err),
            () => console.log('get manga list sucessful!'))
        }
        getMangaBycate(category_id){
            this.manga.getMangaBycate(category_id)
                .subscribe(
                    data =>{ this.output = data.data
                         console.log(this.output);
                         if(this.output != null){
                            this.have_result = true ;
                       }
                         },
                    err => console.log(err),
                    () => console.log('get manga list by category sucessful!'))
        
          }
          search(search_keyword){
            this.manga.search(search_keyword)
                .subscribe(
                    data =>{ this.output = data.data
                         console.log(this.output);
                         if(this.output != null){
                            this.have_result = true 
                         }
                         },
                    err => console.log(err),
                    () => console.log('search manga by keyword!'))
        
          }
        detail(id){
             this.router.navigate(['Detail',{id: id}]);
        }
        
   }


