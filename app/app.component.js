System.register(['angular2/core', './home/home.component', './manga-detail/manga-detail.component', './manga-read/manga-read.component', './signin/signin.component', './signup/signup.component', './header/header.component', './footer/footer.component', 'angular2/router', './Mangas/manga.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, home_component_1, manga_detail_component_1, manga_read_component_1, signin_component_1, signup_component_1, header_component_1, footer_component_1, router_1, manga_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (manga_detail_component_1_1) {
                manga_detail_component_1 = manga_detail_component_1_1;
            },
            function (manga_read_component_1_1) {
                manga_read_component_1 = manga_read_component_1_1;
            },
            function (signin_component_1_1) {
                signin_component_1 = signin_component_1_1;
            },
            function (signup_component_1_1) {
                signup_component_1 = signup_component_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (manga_service_1_1) {
                manga_service_1 = manga_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(manga) {
                    this.manga = manga;
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.html',
                        styleUrls: ['app/res/style.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent, footer_component_1.FooterComponent],
                        providers: [manga_service_1.Mangas]
                    }),
                    router_1.RouteConfig([
                        new router_1.Route({ path: '/signin', component: signin_component_1.SigninComponent, name: 'Signin' }),
                        new router_1.Route({ path: '/signup', component: signup_component_1.SignupComponent, name: 'Signup' }),
                        new router_1.Route({ path: '/home', component: home_component_1.HomeComponent, name: 'Home' }),
                        new router_1.Route({ path: '/detail', component: manga_detail_component_1.MangadetailComponent, name: 'Detail' }),
                        new router_1.Route({ path: '/read', component: manga_read_component_1.MangareadComponent, name: 'Read' }),
                        new router_1.Route({ path: '/', component: home_component_1.HomeComponent, name: 'Home', useAsDefault: true }),
                    ]), 
                    __metadata('design:paramtypes', [manga_service_1.Mangas])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map