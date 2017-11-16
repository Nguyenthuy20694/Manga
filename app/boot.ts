// import {disableDeprecatedForms, provideForms} from '@angular/forms'; 
import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {FooterComponent} from './footer/footer.component'
import {HeaderComponent} from './header/header.component'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS } from 'angular2/http';

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);
// bootstrap(AppComponent, [disableDeprecatedForms(), provideForms(),ROUTER_PROVIDERS, HTTP_PROVIDERS]);