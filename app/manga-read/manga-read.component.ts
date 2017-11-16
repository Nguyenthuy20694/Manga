import {Component} from 'angular2/core';
import {RouteData} from 'angular2/router';
import {Router} from 'angular2/router';
import { RouteConfig, Route, ROUTER_DIRECTIVES} from 'angular2/router';
import { Mangas } from '../Mangas/manga.service';
import {RouteParams} from 'angular2/router';


@Component({
    selector: 'manga-read',
    templateUrl: 'app/manga-read/manga-read.html',
    styleUrls: ['app/manga-read/manga-read-style.css'],
     directives: [ROUTER_DIRECTIVES] ,
     providers: [Mangas]
})

export class MangareadComponent {
	public chap:any;
    public id:any;
    public chapters:any;
     public mangas:any;
     public chapter_list: any;
     public chaps:any;
     public number:any;
     public num:number;
     public publish_date:any;
      public manga_name:any;
      public manga_id:any; 
       public author:any;
       public category:any;
       public country:any;
       public image_link:any;
       public review: any;
       public chapp:any;
       public chapter_name: any;
       public chapter_image_link: any;
       public chapter_image: any;
       public image: any;
        public firstchap=false;
        public lastchap=false;
 
   constructor(public manga: Mangas, public router : Router,public routerParams: RouteParams) {
        this.id = this.routerParams.get('id');
         this.number=this.chap = this.routerParams.get('chap');
         console.log(this.id);
         console.log(this.chap);
         this.num=  parseInt(this.number);
         this.getChapterlist(this.id);
         this.getChapter(this.id,this.chap);
         this.getMangaById(this.id);
         this.getlistImage(this.id,this.chap);
         
         
        
    } 
    getChapter(id,chap){
          this.manga.getChapter(id,chap)
                .subscribe(
                    data => {
                        this.chapters = data.data[0];            
                       this.chapter_name= this.chapters.name;
                       this.chapter_image_link= this.chapters.image_link;
                       console.log(this.chapters);
                     },
                    err => console.log(err),
                    () => console.log('get chapter detail successful')
                )
    }
    getMangaById(id) {
        this.manga.getMangaById(id)
        .subscribe(data => {
            this.mangas = data.data[0];
            console.log(this.mangas.author);
            this.manga_id = this.mangas.manga_id;
            this.manga_name = this.mangas .name;
            this.author = this.mangas .author;
            this.category = this.mangas .category;
            this.country = this.mangas .country;
            this.publish_date = this.mangas .publish_date.slice(0,10);;
            this.review = this.mangas .review;
            this.image_link = this.mangas.image_link;
            if(this.num == this.chapter_list.length) this.lastchap = true;
            if(this.num == 1) this. firstchap = true;
              
        },
        err => alert(err),
        () => console.log('get manga detail sucessful!'))

    }
    getlistImage(id,chap) {
        this.manga.getlistImage(id,chap)
        .subscribe(data => {
            this.chapter_image = data.data;
        },
        err => alert(err),
        () => console.log('get list image of chapter sucessful!'))

    }
    getChapterlist(id) {
        this.manga.getChapterlist(id)
        .subscribe(data => {
            this.chapter_list = data.data;      
        },
        err => alert(err),
        () => console.log('get list chapter sucessful!'))

    }
    chapter(){
        if(this.chaps == null || this.chaps =="") {
            this.chaps = 1;
           }
           else {
            for(let i =this.chapter_list.length -1; i>=0;i--){
                if(this.chapter_list[i].name == this.chaps)
                this.chaps = this.chapter_list[i].chapter_id;   
            }
        }
       this.router.navigate(['Read',{id: this.id,chap: this.chaps}]);


   }
         previous(){ 
              
               this.num=  this.num -1;
               if(this.num == 0) this.num =1;
               this.router.navigate(['Read',{id: this.id,chap: this.num}]);
           }
           next(){
                this.num=  this.num +1;
               this.router.navigate(['Read',{id: this.id,chap: this.num}]);
           }
           home(){
         this.router.navigate(['Home']);
    }
      detail(id){
             this.router.navigate(['Detail',{id: id}]);
        }
}
