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
    var MangadetailComponent;
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
            MangadetailComponent = (function () {
                function MangadetailComponent(manga, router, routerParams) {
                    this.manga = manga;
                    this.router = router;
                    this.routerParams = routerParams;
                    this.id = this.routerParams.get('id');
                    console.log(this.id);
                    this.getMangaById(this.id);
                    this.getChapterlist(this.id);
                    this.getObject();
                }
                MangadetailComponent.prototype.getObject = function () {
                    var _this = this;
                    this.manga.getObject()
                        .subscribe(function (data) {
                        _this.manga_list = data.data;
                        console.log(_this.manga_list);
                    }, function (err) { return alert(err); }, function () { return console.log('get manga list sucessful!'); });
                };
                MangadetailComponent.prototype.getMangaById = function (id) {
                    var _this = this;
                    this.manga.getMangaById(id)
                        .subscribe(function (data) {
                        _this.manga_detail = data.data[0];
                        _this.name = _this.manga_detail.name;
                        _this.author = _this.manga_detail.author;
                        _this.category = _this.getCategorylist(_this.manga_detail.category_id);
                        _this.country = _this.manga_detail.country;
                        _this.publish_date = _this.manga_detail.publish_date.slice(0, 10);
                        ;
                        _this.review = _this.manga_detail.review;
                        _this.image_link = _this.manga_detail.image_link;
                    }, function (err) { return alert(err); }, function () { return console.log('get manga detail sucessful!'); });
                };
                MangadetailComponent.prototype.getCategorylist = function (category_id) {
                    var _this = this;
                    this.manga.getCategorylist()
                        .subscribe(function (data) {
                        _this.category_list = data.data;
                        console.log(_this.category_list);
                        for (var i = _this.category_list.length - 1; i >= 0; i--) {
                            if (_this.category_list[i].category_id == category_id) {
                                console.log(_this.category_list[i].name);
                                return _this.category = _this.category_list[i].name;
                            }
                        }
                    }, function (err) { return alert(err); }, function () { return console.log('get category list sucessful!'); });
                };
                MangadetailComponent.prototype.getChapterlist = function (id) {
                    var _this = this;
                    this.manga.getChapterlist(id)
                        .subscribe(function (data) {
                        _this.chapter_list = data.data;
                    }, function (err) { return alert(err); }, function () { return console.log('get list chapter sucessful!'); });
                };
                MangadetailComponent.prototype.read = function () {
                    if (this.chap == null || this.chap == "") {
                        this.chap = 1;
                    }
                    else {
                        for (var i = this.chapter_list.length - 1; i >= 0; i--) {
                            if (this.chapter_list[i].name == this.chap)
                                this.chap = this.chapter_list[i].chapter_id;
                        }
                    }
                    this.router.navigate(['Read', { id: this.id, chap: this.chap }]);
                };
                MangadetailComponent.prototype.reads = function (chaps) {
                    this.router.navigate(['Read', { id: this.id, chap: chaps }]);
                };
                MangadetailComponent.prototype.home = function () {
                    this.router.navigate(['Home']);
                };
                MangadetailComponent.prototype.detail = function (id) {
                    this.router.navigate(['Detail', { id: id }]);
                };
                MangadetailComponent = __decorate([
                    core_1.Component({
                        selector: 'manga-detail',
                        templateUrl: 'app/manga-detail/manga-detail.html',
                        styleUrls: ['app/manga-detail/manga-detail-style.css'],
                        directives: [router_2.ROUTER_DIRECTIVES],
                        providers: [manga_service_1.Mangas]
                    }), 
                    __metadata('design:paramtypes', [manga_service_1.Mangas, router_1.Router, router_3.RouteParams])
                ], MangadetailComponent);
                return MangadetailComponent;
            }());
            exports_1("MangadetailComponent", MangadetailComponent);
        }
    }
});
//# sourceMappingURL=manga-detail.component.js.map