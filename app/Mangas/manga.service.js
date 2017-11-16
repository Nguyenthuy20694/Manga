System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var Mangas;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            Mangas = (function () {
                function Mangas(http) {
                    this.http = http;
                    this.baseUrl = "http://localhost:8000/manga";
                    this.basePostUrl = "http://localhost:8000/manga/search";
                    this.user_url = "http://localhost:8000/user";
                    this.storylist = [];
                    this.list = null;
                    //this.getObject();
                }
                Mangas.prototype.getObject = function () {
                    console.log('[DEBUG] get manga list');
                    return this.http.get(this.baseUrl)
                        .map(function (res) { return res.json(); });
                };
                Mangas.prototype.getCategorylist = function () {
                    console.log('[DEBUG] get category list');
                    return this.http.get(this.baseUrl + '/category')
                        .map(function (res) { return res.json(); });
                };
                Mangas.prototype.getMangaById = function (id) {
                    console.log("[DEBUG] get manga by manga id");
                    var params = new http_1.URLSearchParams();
                    params.append('_id', id);
                    return this.http.get(this.baseUrl + '/' + id + '/')
                        .map(function (res) { return res.json(); });
                };
                Mangas.prototype.getChapterlist = function (id) {
                    console.log("[DEBUG] get chapter list of manga");
                    var params = new http_1.URLSearchParams();
                    params.append('_id', id);
                    return this.http.get(this.baseUrl + '/' + id + '/' + 'chapter')
                        .map(function (res) { return res.json(); });
                };
                Mangas.prototype.getMangaBycate = function (id) {
                    console.log("[DEBUG] get manga by manga cate");
                    var params = new http_1.URLSearchParams();
                    params.append('_id', id);
                    return this.http.get(this.baseUrl + '/category/' + id)
                        .map(function (res) { return res.json(); });
                };
                Mangas.prototype.search = function (keyword) {
                    console.log("[DEBUG] search manga by keyword");
                    var params = new http_1.URLSearchParams();
                    params.append('_id', keyword);
                    return this.http.get(this.baseUrl + '/' + keyword + '/search')
                        .map(function (res) { return res.json(); });
                };
                Mangas.prototype.getChapter = function (id, chap_id) {
                    console.log("[DEBUG] get chapter by chapter id ");
                    return this.http.get(this.baseUrl + '/chapter/' + chap_id).map(function (res) { return res.json(); });
                };
                Mangas.prototype.getlistImage = function (id, chap_id) {
                    console.log("[DEBUG] get list image by chapter id");
                    var params = new http_1.URLSearchParams();
                    params.append('_id', chap_id);
                    return this.http.get(this.baseUrl + '/chapter/' + chap_id + '/' + 'image')
                        .map(function (res) { return res.json(); });
                };
                Mangas.prototype.register = function (user) {
                    console.log('[DEBUG] User Signup');
                    var headers = new http_1.Headers();
                    headers.append("Content-Type", "application/json");
                    return this.http.post(this.user_url + '/signup', JSON.stringify(user), {
                        headers: headers
                    }).map(function (res) { return res.json(); });
                };
                Mangas.prototype.login = function (user) {
                    console.log('[DEBUG] User Signup');
                    var headers = new http_1.Headers();
                    headers.append("Content-Type", "application/json");
                    return this.http.post(this.user_url + '/signin', JSON.stringify(user), {
                        headers: headers
                    }).map(function (res) { return res.json(); });
                };
                Mangas = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], Mangas);
                return Mangas;
            }());
            exports_1("Mangas", Mangas);
        }
    }
});
//# sourceMappingURL=manga.service.js.map