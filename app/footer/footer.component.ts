import {Component} from 'angular2/core';
import {RouteData} from 'angular2/router';
import {Router} from 'angular2/router';
import { RouteConfig, Route, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'my-footer',
    templateUrl: 'app/footer/footer.html',
    styleUrls: ['app/footer/footer-style.css'],
     directives: [ROUTER_DIRECTIVES] 
})

export class FooterComponent {
	
   constructor(public router: Router) {
        
    }
    
    
}
