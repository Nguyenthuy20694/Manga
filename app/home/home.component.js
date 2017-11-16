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
    var core_1, router_1, router_2, manga_service_1, router_3;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
                router_3 = router_1_1;
            },
            function (manga_service_1_1) {
                manga_service_1 = manga_service_1_1;
            }],
        execute: function() {
            // import { HeaderComponent } from '../header/header.component';
            // import { FooterComponent } from '../footer/footer.component';
            HomeComponent = (function () {
                function HomeComponent(manga, router, routerParams) {
                    this.manga = manga;
                    this.router = router;
                    this.routerParams = routerParams;
                    this.storylist = [];
                    this.have_result = false;
                    this.mangas = {};
                    // this.login = sessionStorage.getItem('login');
                    // console.log(typeof(this.login));
                    // if(this.login == 'true') this.logins= true;
                    // console.log(typeof(this.logins));
                    if (this.routerParams.get('category_id')) {
                        this.category_id = this.routerParams.get('category_id');
                        this.getMangaBycate(this.category_id);
                    }
                    else if (this.routerParams.get('search_keyword')) {
                        this.search_keyword = this.routerParams.get('search_keyword');
                        this.search(this.search_keyword);
                    }
                    else
                        this.getObject();
                }
                HomeComponent.prototype.getObject = function () {
                    var _this = this;
                    this.manga.getObject()
                        .subscribe(function (data) {
                        _this.output = data.data;
                        if (_this.output != null) {
                            _this.have_result = true;
                        }
                    }, function (err) { return alert(err); }, function () { return console.log('get manga list sucessful!'); });
                };
                HomeComponent.prototype.getMangaBycate = function (category_id) {
                    var _this = this;
                    this.manga.getMangaBycate(category_id)
                        .subscribe(function (data) {
                        _this.output = data.data;
                        console.log(_this.output);
                        if (_this.output != null) {
                            _this.have_result = true;
                        }
                    }, function (err) { return console.log(err); }, function () { return console.log('get manga list by category sucessful!'); });
                };
                HomeComponent.prototype.search = function (search_keyword) {
                    var _this = this;
                    this.manga.search(search_keyword)
                        .subscribe(function (data) {
                        _this.output = data.data;
                        console.log(_this.output);
                        if (_this.output != null) {
                            _this.have_result = true;
                        }
                    }, function (err) { return console.log(err); }, function () { return console.log('search manga by keyword!'); });
                };
                HomeComponent.prototype.detail = function (id) {
                    this.router.navigate(['Detail', { id: id }]);
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        templateUrl: 'app/home/home.html',
                        styleUrls: ['app/res/style.css'],
                        directives: [router_2.ROUTER_DIRECTIVES],
                        providers: [manga_service_1.Mangas]
                    }), 
                    __metadata('design:paramtypes', [manga_service_1.Mangas, router_1.Router, router_3.RouteParams])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map