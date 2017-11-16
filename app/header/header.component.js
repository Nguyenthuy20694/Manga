System.register(['angular2/core', 'angular2/router', '../Mangas/manga.service'], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, manga_service_1;
    var HeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (manga_service_1_1) {
                manga_service_1 = manga_service_1_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent(manga, router) {
                    this.manga = manga;
                    this.router = router;
                    this.search_keyword = "";
                    this.storylist = [];
                    this.login = 'false';
                    this.logins = false;
                    this.login = sessionStorage.getItem('login');
                    console.log(typeof (this.login));
                    if (this.login == 'true')
                        this.logins = true;
                    console.log(this.logins);
                    this.getCategorylist();
                }
                HeaderComponent.prototype.getCategorylist = function () {
                    var _this = this;
                    this.manga.getCategorylist()
                        .subscribe(function (data) {
                        _this.category_list = data.data;
                        console.log(_this.category_list);
                    }, function (err) { return alert(err); }, function () { return console.log('get category list sucessful!'); });
                };
                HeaderComponent.prototype.search = function (search_keyword) {
                    this.router.navigate(['Home', { search_keyword: search_keyword }]);
                    this.search_keyword = "";
                };
                HeaderComponent.prototype.filtermanga = function (category_id) {
                    this.router.navigate(['Home', { category_id: category_id }]);
                };
                HeaderComponent.prototype.home = function () {
                    this.router.navigate(['Home']);
                };
                HeaderComponent.prototype.signin = function () {
                    this.router.navigate(['Signin']);
                };
                HeaderComponent.prototype.signup = function () {
                    this.router.navigate(['Signup']);
                };
                HeaderComponent.prototype.signout = function () {
                    sessionStorage.removeItem('login');
                    this.router.navigate(['home']);
                };
                HeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'my-header',
                        templateUrl: 'app/header/header.html',
                        styleUrls: ['app/res/style.css'],
                        directives: [router_2.ROUTER_DIRECTIVES],
                        providers: [manga_service_1.Mangas]
                    }), 
                    __metadata('design:paramtypes', [manga_service_1.Mangas, router_1.Router])
                ], HeaderComponent);
                return HeaderComponent;
            }());
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});
//# sourceMappingURL=header.component.js.map