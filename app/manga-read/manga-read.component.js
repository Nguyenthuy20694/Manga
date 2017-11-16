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
    var MangareadComponent;
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
            MangareadComponent = (function () {
                function MangareadComponent(manga, router, routerParams) {
                    this.manga = manga;
                    this.router = router;
                    this.routerParams = routerParams;
                    this.firstchap = false;
                    this.lastchap = false;
                    this.id = this.routerParams.get('id');
                    this.number = this.chap = this.routerParams.get('chap');
                    console.log(this.id);
                    console.log(this.chap);
                    this.num = parseInt(this.number);
                    this.getChapterlist(this.id);
                    this.getChapter(this.id, this.chap);
                    this.getMangaById(this.id);
                    this.getlistImage(this.id, this.chap);
                }
                MangareadComponent.prototype.getChapter = function (id, chap) {
                    var _this = this;
                    this.manga.getChapter(id, chap)
                        .subscribe(function (data) {
                        _this.chapters = data.data[0];
                        _this.chapter_name = _this.chapters.name;
                        _this.chapter_image_link = _this.chapters.image_link;
                        console.log(_this.chapters);
                    }, function (err) { return console.log(err); }, function () { return console.log('get chapter detail successful'); });
                };
                MangareadComponent.prototype.getMangaById = function (id) {
                    var _this = this;
                    this.manga.getMangaById(id)
                        .subscribe(function (data) {
                        _this.mangas = data.data[0];
                        console.log(_this.mangas.author);
                        _this.manga_id = _this.mangas.manga_id;
                        _this.manga_name = _this.mangas.name;
                        _this.author = _this.mangas.author;
                        _this.category = _this.mangas.category;
                        _this.country = _this.mangas.country;
                        _this.publish_date = _this.mangas.publish_date.slice(0, 10);
                        ;
                        _this.review = _this.mangas.review;
                        _this.image_link = _this.mangas.image_link;
                        if (_this.num == _this.chapter_list.length)
                            _this.lastchap = true;
                        if (_this.num == 1)
                            _this.firstchap = true;
                    }, function (err) { return alert(err); }, function () { return console.log('get manga detail sucessful!'); });
                };
                MangareadComponent.prototype.getlistImage = function (id, chap) {
                    var _this = this;
                    this.manga.getlistImage(id, chap)
                        .subscribe(function (data) {
                        _this.chapter_image = data.data;
                    }, function (err) { return alert(err); }, function () { return console.log('get list image of chapter sucessful!'); });
                };
                MangareadComponent.prototype.getChapterlist = function (id) {
                    var _this = this;
                    this.manga.getChapterlist(id)
                        .subscribe(function (data) {
                        _this.chapter_list = data.data;
                    }, function (err) { return alert(err); }, function () { return console.log('get list chapter sucessful!'); });
                };
                MangareadComponent.prototype.chapter = function () {
                    if (this.chaps == null || this.chaps == "") {
                        this.chaps = 1;
                    }
                    else {
                        for (var i = this.chapter_list.length - 1; i >= 0; i--) {
                            if (this.chapter_list[i].name == this.chaps)
                                this.chaps = this.chapter_list[i].chapter_id;
                        }
                    }
                    this.router.navigate(['Read', { id: this.id, chap: this.chaps }]);
                };
                MangareadComponent.prototype.previous = function () {
                    this.num = this.num - 1;
                    if (this.num == 0)
                        this.num = 1;
                    this.router.navigate(['Read', { id: this.id, chap: this.num }]);
                };
                MangareadComponent.prototype.next = function () {
                    this.num = this.num + 1;
                    this.router.navigate(['Read', { id: this.id, chap: this.num }]);
                };
                MangareadComponent.prototype.home = function () {
                    this.router.navigate(['Home']);
                };
                MangareadComponent.prototype.detail = function (id) {
                    this.router.navigate(['Detail', { id: id }]);
                };
                MangareadComponent = __decorate([
                    core_1.Component({
                        selector: 'manga-read',
                        templateUrl: 'app/manga-read/manga-read.html',
                        styleUrls: ['app/manga-read/manga-read-style.css'],
                        directives: [router_2.ROUTER_DIRECTIVES],
                        providers: [manga_service_1.Mangas]
                    }), 
                    __metadata('design:paramtypes', [manga_service_1.Mangas, router_1.Router, router_3.RouteParams])
                ], MangareadComponent);
                return MangareadComponent;
            }());
            exports_1("MangareadComponent", MangareadComponent);
        }
    }
});
//# sourceMappingURL=manga-read.component.js.map