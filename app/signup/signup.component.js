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
    var SignupComponent;
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
            SignupComponent = (function () {
                function SignupComponent(manga, router, routerParams) {
                    this.manga = manga;
                    this.router = router;
                    this.routerParams = routerParams;
                    this.user = {};
                }
                SignupComponent.prototype.signup = function () {
                    if (this.password == this.password_confirm) {
                        this.user['email'] = this.email;
                        this.user['name'] = this.name;
                        this.user['address'] = this.address;
                        this.user['password'] = this.password;
                        console.log(this.user);
                        this.register(this.user);
                    }
                    else
                        window.alert("Your password and confirmation password do not match.");
                };
                SignupComponent.prototype.register = function (user) {
                    var _this = this;
                    this.manga.register(user)
                        .subscribe(function (data) {
                        _this.output = data;
                        console.log(_this.output);
                        if (_this.output.status_code == 400)
                            window.alert(_this.output.message);
                        else {
                            window.alert(_this.output.message);
                            _this.router.navigate(['Signin']);
                        }
                    }, function (err) { return alert(err); });
                };
                SignupComponent.prototype.quit = function () {
                    this.router.navigate(['Home']);
                };
                SignupComponent = __decorate([
                    core_1.Component({
                        selector: 'signup',
                        templateUrl: 'app/signup/signup.html',
                        styleUrls: ['app/signin/signin.css'],
                        directives: [router_2.ROUTER_DIRECTIVES],
                        providers: [manga_service_1.Mangas]
                    }), 
                    __metadata('design:paramtypes', [manga_service_1.Mangas, router_1.Router, router_3.RouteParams])
                ], SignupComponent);
                return SignupComponent;
            }());
            exports_1("SignupComponent", SignupComponent);
        }
    }
});
//# sourceMappingURL=signup.component.js.map