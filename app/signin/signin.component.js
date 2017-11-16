System.register(['angular2/core', 'angular2/router', '../Mangas/manga.service', '../header/header.component', '../footer/footer.component'], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, manga_service_1, router_3, header_component_1, footer_component_1;
    var SigninComponent;
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
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            }],
        execute: function() {
            SigninComponent = (function () {
                function SigninComponent(manga, router, routerParams) {
                    this.manga = manga;
                    this.router = router;
                    this.routerParams = routerParams;
                    this.user = {};
                }
                SigninComponent.prototype.signin = function () {
                    this.user['email'] = this.email;
                    this.user['password'] = this.password;
                    console.log(this.user);
                    this.login(this.user);
                };
                SigninComponent.prototype.login = function (user) {
                    var _this = this;
                    this.manga.login(user)
                        .subscribe(function (data) {
                        _this.output = data;
                        console.log(_this.output);
                        if (_this.output.status_code == 400)
                            window.alert(_this.output.message);
                        else {
                            window.alert(_this.output.message);
                            _this.logins = true;
                            sessionStorage.setItem('login', _this.logins);
                            _this.router.navigate(['Home']);
                        }
                    }, function (err) { return alert(err); });
                };
                SigninComponent.prototype.quit = function () {
                    this.router.navigate(['Home']);
                };
                SigninComponent = __decorate([
                    core_1.Component({
                        selector: 'signin',
                        templateUrl: 'app/signin/signin.html',
                        styleUrls: ['app/signin/signin.css'],
                        directives: [router_2.ROUTER_DIRECTIVES, header_component_1.HeaderComponent, footer_component_1.FooterComponent],
                        providers: [manga_service_1.Mangas]
                    }), 
                    __metadata('design:paramtypes', [manga_service_1.Mangas, router_1.Router, router_3.RouteParams])
                ], SigninComponent);
                return SigninComponent;
            }());
            exports_1("SigninComponent", SigninComponent);
        }
    }
});
//# sourceMappingURL=signin.component.js.map