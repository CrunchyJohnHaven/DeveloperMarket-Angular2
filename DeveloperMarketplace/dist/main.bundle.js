webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/aboutme/aboutme.component.css":
/***/ (function(module, exports) {

module.exports = ".main-header {\n    background-image: url('CPUBackground.551bbe77ee6695c5887c.jpg');\n    height: 500px;\n    background-size: cover;\n    background-size: auto contain;\n    position: top center;\n    background-attachment: fixed;\n    /* background: no-repeat; */\n    /* z-index: 3; */\n}\n.logo {\n    min-height: 300px; \n    min-width: 300px;\n    background-image: url('300Logo.6aee8e28d88e7e08acbd.png');\n    background-repeat: no-repeat;\n    background-position: center;\n    margin-top: -15px;\n    top: 50%;\n  }\n.content {\n    background-color: #b8b8b8;\n    background-size: cover;\n}"

/***/ }),

/***/ "./src/app/aboutme/aboutme.component.html":
/***/ (function(module, exports) {

module.exports = "  <header class=\"main-header\">\n  </header>\n\n  <div class=\"content\">\n    <section class=\"section-dark\">\n      <article class=\"my-story\">\n        <div class=\"logo\"></div>\n        <h1>Hi, I'm John</h1>\n        <hr>\n        <p>I am a freelance developer working in multiple front to back-end web frameworks as well as iOS mobile. I bring the communication skills, meticulous nature, and high-standard I learned as an Army Ranger Captain to each and every project to which I commit myself.</p>\n        <hr>\n      </article>\n    </section>\n\n      <section>\n        <article class=\"coding-fun\">\n          <h1>\"Here Are Some Of My Past Projects\"</h1>\n        </article>\n      </section>\n\n    <section>\n      <article class=\"youtube-videos\">\n        <h1>Youtube Videos</h1>\n        <div class=\"ui link cards\">\n          <div class=\"card\">\n              <link rel=\"stylesheet\" type=\"text/css\" href=\"semantic/dist/semantic.min.css\">\n              <script\n                src=\"https://code.jquery.com/jquery-3.1.1.min.js\"\n                integrity=\"sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=\"\n                crossorigin=\"anonymous\"></script>\n              <script src=\"semantic/dist/semantic.min.js\"></script>\n          </div>\n        </div>\n      </article>\n    </section>\n  </div>\n\n  \n  \n  \n  \n  <!-- <div class=\"section white\">\n    <div class=\"row container\">\n      <h2 class=\"header\">Parallax</h2>\n      <p class=\"grey-text text-darken-3 lighten-3\">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>\n    </div>\n  </div>\n  <div class=\"parallax-container\">\n    <div class=\"parallax\"><img src=\"../../assets/CPUBackground.jpg\"></div>\n  </div> -->\n\n  <!-- <nav class=\"white\">\n    <div class=\"nav-wrapper\">\n      <a *ngIf=\"wedding\" href=\"#\" class=\"page-title black-text\">{{wedding.name | uppercase}}</a>\n      <a materialize=\"sideNav\" [materializeParams]=\"sidenavParams\" [materializeActions]=\"sidenavActions\"\n      data-activates=\"nav-mobile\" class=\"button-collapse hide-on-large-only\">\n      <i class=\"material-icons grey-text\">menu</i>\n      </a>\n      <ul id=\"nav-mobile\" class=\"side-nav\">\n        <li>\n          <a><i class=\"material-icons\" (click)=\"close()\">close</i></a>\n        </li>\n        <li *ngFor=\"let menuItem of menuItems\" routerLinkActive=\"active\"><a class=\"black-text [routerLink]=\"menuItem.route\">{{ menuItem.name | uppercase }}</a></li>\n      </ul>\n      <ul id=\"nav-mobile\" class=\"side-nav\">\n        <li>\n          <a><i class=\"material-icons\" (click)=\"close()\">close</i></a>\n        </li>\n        <li *ngFor=\"menuItem of menuItems\" routerLinkActive=\"active\"><a class=\"black-text\" [routerLink]=\"menuItem.route\" (click)=\"close()\">{{menuITem.name | uppercase }}</a></li>\n        <div class=\"divider\">\n        </div>\n      </ul>\n    </div>\n  </nav>\n   -->"

/***/ }),

/***/ "./src/app/aboutme/aboutme.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
// import { ng2Parallax  } from '<pathTo>/ng2-parallax/parallax.directive';
var AboutmeComponent = /** @class */ (function () {
    function AboutmeComponent(_httpService) {
        this._httpService = _httpService;
    }
    AboutmeComponent.prototype.ngOnInit = function () {
    };
    AboutmeComponent = __decorate([
        core_1.Component({
            selector: 'app-aboutme',
            template: __webpack_require__("./src/app/aboutme/aboutme.component.html"),
            styles: [__webpack_require__("./src/app/aboutme/aboutme.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], AboutmeComponent);
    return AboutmeComponent;
}());
exports.AboutmeComponent = AboutmeComponent;


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-header></app-header>\n<app-aboutme></app-aboutme>\n<router-outlet></router-outlet>\n\n\n\n\n\n\n\n\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
// import { MaterializeModule } from "angular2-materialize";
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var header_component_1 = __webpack_require__("./src/app/header/header.component.ts");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var aboutme_component_1 = __webpack_require__("./src/app/aboutme/aboutme.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                aboutme_component_1.AboutmeComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
            ],
            providers: [http_service_1.HttpService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n  background-attachment: fixed;\n  min-height: 1100px;\n  margin-bottom: 0px;\n  background-image: url('GearFlagB.587576a6fc5c996a72ef.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  grey: white;\n  text-shadow: black 0.3em 0.3em 0.3em;\n}\n\n.title {\n  color: #feff00;\n  font-style: italic;\n  font-family: cursive;\n  font-size: 50px;\n  padding-top: 120px;\n  border-bottom: 1px solid #FFFFFF;\n  border-bottom-color: rgba(255,255,255,0.35);\n  display: inline-block;\n}\n\n.subtitle {\n  font-size: 28px;\n  color: #feff00;\n  font-style: italic;\n}\n\n.logo {\n  min-height: 300px; \n  min-width: 300px;\n  background-image: url('300Logo.6aee8e28d88e7e08acbd.png');\n  background-repeat: no-repeat;\n  background-position: center;\n  margin-top: -15px;\n  top: 50%;\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <div class=\"text-center project-referal\">\n    <div class=\"title text-center\">John Haven Bradley</div>\n    <div class=\"subtitle\"><p>Fullstack Web and Mobile App Developer</p></div>\n    <!-- <div class=\"logo\"></div> -->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('********* HEADER **********');
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_httpService) {
        this._httpService = _httpService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "./src/app/http.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('********* HTTP **********');
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
        this.errors = {};
    }
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map