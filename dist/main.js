(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _note_center_note_center_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./note-center/note-center.component */ "./src/app/note-center/note-center.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'notes', component: _note_center_note_center_component__WEBPACK_IMPORTED_MODULE_2__["NoteCenterComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\n  <!-- Brand/logo -->\n  <a class=\"navbar-brand\" href=\"#\">Notepad</a>\n  \n  <!-- Links -->\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/notes\" routerLinkActive=\"active\">Notes</a>\n    </li>\n  </ul>\n</nav>\n<div class=\"container\" style=\"margin: 20px\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'notepad';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _note_center_note_center_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./note-center/note-center.component */ "./src/app/note-center/note-center.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _note_list_note_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./note-list/note-list.component */ "./src/app/note-list/note-list.component.ts");
/* harmony import */ var _note_detail_note_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./note-detail/note-detail.component */ "./src/app/note-detail/note-detail.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _note_center_note_center_component__WEBPACK_IMPORTED_MODULE_4__["NoteCenterComponent"],
                _note_list_note_list_component__WEBPACK_IMPORTED_MODULE_6__["NoteListComponent"],
                _note_detail_note_detail_component__WEBPACK_IMPORTED_MODULE_7__["NoteDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_9__["HttpModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1>Notepad</h1>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/note-center/note-center.component.css":
/*!*******************************************************!*\
  !*** ./src/app/note-center/note-center.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/note-center/note-center.component.html":
/*!********************************************************!*\
  !*** ./src/app/note-center/note-center.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-9\">\n        <div *ngIf=\"!hidenewNote\">\n          \n            <h2>New Note</h2>\n            <form #form=\"ngForm\" (ngSubmit)=\"onSubmitAddValue(form.value)\" class=\"well\">\n                  <div class=\"form-group\">\n                      <label>Title</label>\n                      <input type=\"text\" class=\"form-control\" required name=\"title\" ngModel>\n                  </div>\n                  <div class=\"form-group\">\n                      <label>Timing</label>\n                      <input type=\"text\" class=\"form-control\" required name=\"timing\" ngModel>\n                  </div>\n                  <div class=\"form-group\">\n                      <label>Description</label>\n                      <div class=\"form-group\">\n                            <textarea class=\"form-control\" required rows=\"5\" name=\"description\" ngModel>\n                                </textarea>\n                        </div>\n                  </div>\n                  <button type=\"submit\" class=\"btn btn-success\">Save</button>\n            </form>\n        </div>\n        <note-detail (updateNoteEvent)=\"onUpdateNoteEvent($event)\" \n        (deleteNoteEvent)=\"onDeleteNoteEvent($event)\"\n         *ngIf=\"selectedNote && hidenewNote\" \n         [note]=\"selectedNote\"></note-detail>\n    </div>\n    <div class=\"col-sm-3\">\n        <button (click)=\"newNote()\" style=\"margin-bottom:2px;\" type=\"button\" class=\"btn btn-success btn-block\"> + New Note </button>\n        <note-list (SelectNote)=\"onSelectNote($event)\" [notes]='notes'></note-list>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/note-center/note-center.component.ts":
/*!******************************************************!*\
  !*** ./src/app/note-center/note-center.component.ts ***!
  \******************************************************/
/*! exports provided: NoteCenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteCenterComponent", function() { return NoteCenterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _note_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../note.service */ "./src/app/note.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NoteCenterComponent = /** @class */ (function () {
    // times : Date = new Date();
    // public ntime = this.times.toISOString().substring(0, 10);
    function NoteCenterComponent(_noteService) {
        this._noteService = _noteService;
        this.hidenewNote = true;
    }
    NoteCenterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._noteService.getNotes()
            .subscribe(function (resNoteData) { return _this.notes = resNoteData; });
    };
    NoteCenterComponent.prototype.onSelectNote = function (note) {
        this.selectedNote = note;
        this.hidenewNote = true;
        console.log(this.selectedNote);
    };
    NoteCenterComponent.prototype.onSubmitAddValue = function (note) {
        var _this = this;
        this._noteService.addNote(note)
            .subscribe(function (resNewNote) {
            // This code is mainly used for updated notes show in UI 
            _this.notes.push(resNewNote);
            _this.hidenewNote = true;
            _this.selectedNote = resNewNote;
        });
    };
    NoteCenterComponent.prototype.onUpdateNoteEvent = function (note) {
        this._noteService.updateNote(note)
            .subscribe(function (resUpdateNote) { return note = resUpdateNote; });
        this.selectedNote = null;
    };
    ;
    NoteCenterComponent.prototype.onDeleteNoteEvent = function (note) {
        var noteArray = this.notes;
        this._noteService.deleteNote(note)
            .subscribe(function (resDeletedNote) {
            for (var i = 0; i < noteArray.length; i++) {
                if (noteArray[i]._id === note._id) {
                    noteArray.splice(i, 1);
                }
            }
        });
        this.selectedNote = null;
    };
    ;
    NoteCenterComponent.prototype.newNote = function () {
        this.hidenewNote = false;
    };
    NoteCenterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-note-center',
            template: __webpack_require__(/*! ./note-center.component.html */ "./src/app/note-center/note-center.component.html"),
            styles: [__webpack_require__(/*! ./note-center.component.css */ "./src/app/note-center/note-center.component.css")],
            providers: [_note_service__WEBPACK_IMPORTED_MODULE_2__["NoteService"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [_note_service__WEBPACK_IMPORTED_MODULE_2__["NoteService"]])
    ], NoteCenterComponent);
    return NoteCenterComponent;
}());



/***/ }),

/***/ "./src/app/note-detail/note-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/note-detail/note-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/note-detail/note-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/note-detail/note-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div>\n        <!-- <iframe width=\"100%\" height=\"300\" [src]=\"note.url | safe\"></iframe> -->\n    </div>\n    <form>\n        <div *ngIf=\"editTitle\" class=\"form-group\">\n            <input type=\"input\" class=\"form-control\" name=\"title\" required placeholder=\"title\" \n            [(ngModel)]=\"note.title\">\n        </div>\n        <h3 *ngIf=\"!editTitle\" (click)=\"onTitleClick()\">{{note.title}}</h3>\n        <div class=\"form-group\">\n            <input type=\"input\" class=\"form-control\" name=\"timing\" required placeholder=\"Timing\" \n            [(ngModel)]=\"note.timing\">\n        </div>\n        <div class=\"form-group\">\n            <textarea class=\"form-control\" rows=\"5\" name=\"desc\" [(ngModel)]=\"note.description\">\n                </textarea>\n        </div>\n        <button type=\"button\" (click)=\"updateNote()\" class=\"btn btn-primary\">Update</button>\n        <button type=\"button\" (click)=\"deleteNote()\" class=\"btn btn-danger\">Delete</button>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/note-detail/note-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/note-detail/note-detail.component.ts ***!
  \******************************************************/
/*! exports provided: NoteDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteDetailComponent", function() { return NoteDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoteDetailComponent = /** @class */ (function () {
    function NoteDetailComponent() {
        this.editTitle = false;
        this.updateNoteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteNoteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NoteDetailComponent.prototype.ngOnInit = function () {
    };
    NoteDetailComponent.prototype.ngOnChanges = function () {
        this.editTitle = false;
    };
    NoteDetailComponent.prototype.onTitleClick = function () {
        this.editTitle = true;
    };
    NoteDetailComponent.prototype.updateNote = function () {
        this.updateNoteEvent.emit(this.note);
    };
    NoteDetailComponent.prototype.deleteNote = function () {
        this.deleteNoteEvent.emit(this.note);
    };
    NoteDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'note-detail',
            template: __webpack_require__(/*! ./note-detail.component.html */ "./src/app/note-detail/note-detail.component.html"),
            styles: [__webpack_require__(/*! ./note-detail.component.css */ "./src/app/note-detail/note-detail.component.css")],
            inputs: ['note'],
            outputs: ['updateNoteEvent', 'deleteNoteEvent']
        }),
        __metadata("design:paramtypes", [])
    ], NoteDetailComponent);
    return NoteDetailComponent;
}());



/***/ }),

/***/ "./src/app/note-list/note-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/note-list/note-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/note-list/note-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/note-list/note-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group\">\n    <li class=\"list-group-item\" (click)=\"onSelect(note)\" *ngFor=\"let note of notes\"><a>{{note.title}}</a></li>\n</ul>"

/***/ }),

/***/ "./src/app/note-list/note-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/note-list/note-list.component.ts ***!
  \**************************************************/
/*! exports provided: NoteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteListComponent", function() { return NoteListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoteListComponent = /** @class */ (function () {
    function NoteListComponent() {
        this.SelectNote = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NoteListComponent.prototype.ngOnInit = function () {
    };
    NoteListComponent.prototype.onSelect = function (not) {
        this.SelectNote.emit(not);
    };
    NoteListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'note-list',
            template: __webpack_require__(/*! ./note-list.component.html */ "./src/app/note-list/note-list.component.html"),
            styles: [__webpack_require__(/*! ./note-list.component.css */ "./src/app/note-list/note-list.component.css")],
            inputs: ['notes'],
            outputs: ['SelectNote']
        }),
        __metadata("design:paramtypes", [])
    ], NoteListComponent);
    return NoteListComponent;
}());



/***/ }),

/***/ "./src/app/note.service.ts":
/*!*********************************!*\
  !*** ./src/app/note.service.ts ***!
  \*********************************/
/*! exports provided: NoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteService", function() { return NoteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NoteService = /** @class */ (function () {
    function NoteService(_http) {
        this._http = _http;
        /**
         * Select, Insert, Update, Delete
         * connection url
         */
        this._getUrl = "/api/note";
        this._postUrl = "/api/note";
        this._putUrl = "/api/note/";
        this._deleteUrl = "/api/note/";
    }
    NoteService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    /**
     * method to get data from the db
     */
    NoteService.prototype.getNotes = function () {
        return this._http.get(this._getUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    /**
     * MEthod to insert data into db
     */
    NoteService.prototype.addNote = function (note) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this._http.post(this._postUrl, JSON.stringify(note), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    /**
     * Method to update data into db
     */
    NoteService.prototype.updateNote = function (note) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this._http.put(this._putUrl + note._id, JSON.stringify(note), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    /**
     * Method to delete data into db
     */
    NoteService.prototype.deleteNote = function (note) {
        return this._http.delete(this._deleteUrl + note._id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    NoteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], NoteService);
    return NoteService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\MeanStack\notepad\notepad\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map