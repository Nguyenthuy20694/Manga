import { Inject, Injectable } from 'angular2/core';
import { Http, Headers, URLSearchParams, Response} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Mangas {
   public baseUrl = "http://localhost:8000/manga";
    public basePostUrl = "http://localhost:8000/manga/search";
    public user_url = "http://localhost:8000/user";
    
    constructor(public http: Http) {
        //this.getObject();
    }
  
    public storylist = [];
    public data;
    private list = null;
    getObject() {
        console.log('[DEBUG] get manga list');
        
        return this.http.get(this.baseUrl)
        .map((res : Response) => res.json());
    } 
    getCategorylist() {
        console.log('[DEBUG] get category list');
        
        return this.http.get(this.baseUrl + '/category')
        .map((res : Response) => res.json());
    } 
    getMangaById(id: any) {
        console.log("[DEBUG] get manga by manga id");
        let params = new URLSearchParams();
        params.append('_id', id);
        return this.http.get(this.baseUrl + '/' + id + '/')
        .map((res : Response) => res.json());
    }  
    getChapterlist(id: any) {
        console.log("[DEBUG] get chapter list of manga");
        let params = new URLSearchParams();
        params.append('_id', id);
        return this.http.get(this.baseUrl + '/' + id + '/'+ 'chapter')
        .map((res : Response) => res.json());
    }  
    getMangaBycate(id:any) {
         console.log("[DEBUG] get manga by manga cate");
         let params = new URLSearchParams();
         params.append('_id', id);
         return this.http.get(this.baseUrl + '/category/' + id)
         .map((res : Response) => res.json()
        );
    }  
    search(keyword: any) {
        console.log("[DEBUG] search manga by keyword");
        let params = new URLSearchParams();
        params.append('_id',keyword);
        return this.http.get(this.baseUrl+ '/' + keyword + '/search' )
        .map((res : Response) => res.json());
   }  
   getChapter(id:any,chap_id:any){
         console.log("[DEBUG] get chapter by chapter id ");
        return this.http.get(this.baseUrl + '/chapter/' + chap_id).map(res => res.json());
   }
   getlistImage(id:any,chap_id:any){
    console.log("[DEBUG] get list image by chapter id");
    let params = new URLSearchParams();
    params.append('_id', chap_id);
    return this.http.get(this.baseUrl + '/chapter/' + chap_id + '/'+ 'image')
    .map((res : Response) => res.json());
   }
   register(user: any) {
    console.log('[DEBUG] User Signup');
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.post(this.user_url+ '/signup', JSON.stringify(user), {
        headers: headers
    }).map((res : Response) => res.json());
} 
   login(user: any) {
    console.log('[DEBUG] User Signup');
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.post(this.user_url+ '/signin', JSON.stringify(user), {
        headers: headers
    }).map((res : Response) => res.json());
} 
       
}