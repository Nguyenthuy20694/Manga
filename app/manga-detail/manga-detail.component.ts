import {Component} from 'angular2/core';
import {RouteData} from 'angular2/router';
import {Router} from 'angular2/router';
import {Http, Response} from 'angular2/http';
import { RouteConfig, Route, ROUTER_DIRECTIVES} from 'angular2/router';
import { Mangas } from '../Mangas/manga.service';
import {RouteParams} from 'angular2/router';

@Component({
    selector: 'manga-detail',
    templateUrl: 'app/manga-detail/manga-detail.html',
    styleUrls: ['app/manga-detail/manga-detail-style.css'],
     directives: [ROUTER_DIRECTIVES] ,
     providers: [Mangas]
})

export class MangadetailComponent {
    manga_list: any;
    manga_detail: any;
    chapter_list: any;
	public id:any;
    public chap:any;
    public admin:any;
    public name:any;
    public author:any;
    public category:any;
    public country:any;
    public publish_date:any;
    public review:any;
    public image_link:any;
    public category_list: any;

       
   constructor(public manga: Mangas, public router : Router,public routerParams: RouteParams) {
        this.id= this.routerParams.get('id');
        console.log(this.id);
        this.getMangaById(this.id);
        this.getChapterlist(this.id);
        this.getObject();
    }
    getObject(){
        this.manga.getObject()
        .subscribe(data => {
            this.manga_list = data.data;
            console.log(this.manga_list);
        },
        err => alert(err),
        () => console.log('get manga list sucessful!'))
    }
    getMangaById(id) {
            this.manga.getMangaById(id)
            .subscribe(data => {
                this.manga_detail = data.data[0];
                this.name = this.manga_detail.name;
                this.author = this.manga_detail.author;
                this.category = this.getCategorylist(this.manga_detail.category_id);
                this.country = this.manga_detail.country;
                this.publish_date = this.manga_detail.publish_date.slice(0,10);;
                this.review = this.manga_detail.review;
                this.image_link = this.manga_detail.image_link;  
            },
            err => alert(err),
            () => console.log('get manga detail sucessful!'))

        }
        getCategorylist(category_id){
            this.manga.getCategorylist()
            .subscribe(data => {
                this.category_list = data.data;
                console.log(this.category_list);
                for(let i =this.category_list.length -1; i>=0;i--){
                    if(this.category_list[i].category_id == category_id)
                    {
                    console.log(this.category_list[i].name);
                    return this.category  = this.category_list[i].name;   
                    }
                }
            },
            err => alert(err),
            () => console.log('get category list sucessful!'))
        }
        getChapterlist(id) {
            this.manga.getChapterlist(id)
            .subscribe(data => {
                this.chapter_list = data.data;           
                  
            },
            err => alert(err),
            () => console.log('get list chapter sucessful!'))

        }
     
    read(){     
         if(this.chap == null || this.chap =="") {
             this.chap = 1;
            }
            else{
             for(let i =this.chapter_list.length -1; i>=0;i--){
                 if(this.chapter_list[i].name == this.chap)
                 this.chap = this.chapter_list[i].chapter_id;   
             }
            }
        this.router.navigate(['Read',{id: this.id,chap: this.chap}]);
        
    }
    
     reads(chaps){     
          this.router.navigate(['Read',{id: this.id,chap: chaps}]);
    }
                
    home(){
         this.router.navigate(['Home']);
    }
    detail(id){
        this.router.navigate(['Detail',{id: id}]);
   }
}
