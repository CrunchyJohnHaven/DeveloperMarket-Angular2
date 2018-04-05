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

module.exports = ".main-header {\n    background-image: url('CPUBackground.551bbe77ee6695c5887c.jpg');\n    height: 500px;\n    background-size: cover;\n    background-size: auto contain;\n    position: top center;\n    background-attachment: fixed;\n    min-height: 300px;\n    /* background: no-repeat; */\n    /* z-index: 3; */\n}\n.logo {\n    min-height: 490px; \n    min-width: 300px;\n    background-image: url('profile2PNG.32c7157a88b81dccc23c.png');\n    background-repeat: no-repeat;\n    background-position: center;\n    margin-top: -15px;\n    top: 50%;\n  }\n.about-me {\n    background-position: center;\n    display: inline;\n    margin-left: 80px;\n  }\n.content {\n    background-color: white;\n    background-size: cover;\n    display: inline-block;\n}\n.about-me {\n    display: inline-block;\n    height: 460px;\n    background-size: cover;\n    background-size: auto contain;\n    position: top center;\n    background-attachment: fixed;\n    min-height: 300px;\n    font-style: normal;\n    font-size: 15px;\n}\n.pic2 {\n    display: inline-block;\n    min-height: 300px;\n    min-width: 310px;\n    background-image: url('profilePNG.dcbdd7da7a18ba62eba2.png');\n    background-repeat: no-repeat;\n    background-position: top left;\n    margin-left: 220px;\n    margin-top: 55px;\n    margin-bottom: -20px;\n    top: 50%;\n}\n.content {\n    margin-top: -15px;\n    position: top center;\n    margin-top: 0%;\n    height: 30%;\n    width: 50%;\n    background-color: white;\n    display: inline-block;\n}\ndiv p {\n    font-size: 15px;\n    font-style: normal;\n}\narticle {\n    margin-top: 0px;\n}\n\n\n\n"

/***/ }),

/***/ "./src/app/aboutme/aboutme.component.html":
/***/ (function(module, exports) {

module.exports = "  <header class=\"main-header\">\n      <div class=\"logo\"></div>\n  </header>\n\n<div class=\"about-me\">\n  <div class=\"pic2\"></div>\n  <div class=\"content\">\n      <section class=\"section-dark\">\n          <article class=\"my-story\">\n            <h1>Hi, I'm John</h1>\n            <hr>\n            <p>I'm a software engineer and freelance web and mobile app developer passionate about building sophisticated yet accessible programs to meet the needs of the end user. Through obtaining a bachelors in literature, a degree in military science at Georgetown, and serving as a Army engineer and an Army Ranger for four years, I gained extensive analytical and project management skills, and an ability to solve technical challenges with precision. Having studied software engineering both academically and as an obsession, I left the military and moved to Silicon Valley to practice development at the highest level. If you need a developer for your project, I would love to hear about it.</p>\n            <hr>\n          </article>\n          <div class=\"row center\">\n              <div class=\"col m3 s6 btn_links\">\n                <a [href]=\"userInfo['githubAccount']\" class=\"btn btn-primary\" target=\"_blank\">See project on Github</a>              </div>\n          </div>\n      </section>\n  </div>\n</div>\n\n"

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
var AboutmeComponent = /** @class */ (function () {
    function AboutmeComponent(_httpService) {
        this._httpService = _httpService;
    }
    AboutmeComponent.prototype.ngOnInit = function () {
        this.userInfo = this._httpService.getUserInfo();
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

module.exports = "/*\n* Skeleton V2.0.4\n* Copyright 2014, Dave Gamache\n* www.getskeleton.com\n* Free to use under the MIT license.\n* http://www.opensource.org/licenses/mit-license.php\n* 12/29/2014\n*/\n\n\n/* Table of contents\n––––––––––––––––––––––––––––––––––––––––––––––––––\n- Grid\n- Base Styles\n- Typography\n- Links\n- Buttons\n- Forms\n- Lists\n- Code\n- Tables\n- Spacing\n- Utilities\n- Clearing\n- Media Queries\n*/\n\n\n/* Grid\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n\n\n.container {\n    position: relative;\n    width: 100%;\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 0 20px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n\n\n.column,\n  .columns {\n    width: 100%;\n    float: left;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n\n\n/* For devices larger than 400px */\n\n\n@media (min-width: 400px) {\n    .container {\n      width: 85%;\n      padding: 0; }\n  }\n\n\n/* For devices larger than 550px */\n\n\n@media (min-width: 550px) {\n    .container {\n      width: 80%; }\n    .column,\n    .columns {\n      margin-left: 4%; }\n    .column:first-child,\n    .columns:first-child {\n      margin-left: 0; }\n  \n    .one.column,\n    .one.columns                    { width: 4.66666666667%; }\n    .two.columns                    { width: 13.3333333333%; }\n    .three.columns                  { width: 22%;            }\n    .four.columns                   { width: 30.6666666667%; }\n    .five.columns                   { width: 39.3333333333%; }\n    .six.columns                    { width: 48%;            }\n    .seven.columns                  { width: 56.6666666667%; }\n    .eight.columns                  { width: 65.3333333333%; }\n    .nine.columns                   { width: 74.0%;          }\n    .ten.columns                    { width: 82.6666666667%; }\n    .eleven.columns                 { width: 91.3333333333%; }\n    .twelve.columns                 { width: 100%; margin-left: 0; }\n  \n    .one-third.column               { width: 30.6666666667%; }\n    .two-thirds.column              { width: 65.3333333333%; }\n  \n    .one-half.column                { width: 48%; }\n  \n    /* Offsets */\n    .offset-by-one.column,\n    .offset-by-one.columns          { margin-left: 8.66666666667%; }\n    .offset-by-two.column,\n    .offset-by-two.columns          { margin-left: 17.3333333333%; }\n    .offset-by-three.column,\n    .offset-by-three.columns        { margin-left: 26%;            }\n    .offset-by-four.column,\n    .offset-by-four.columns         { margin-left: 34.6666666667%; }\n    .offset-by-five.column,\n    .offset-by-five.columns         { margin-left: 43.3333333333%; }\n    .offset-by-six.column,\n    .offset-by-six.columns          { margin-left: 52%;            }\n    .offset-by-seven.column,\n    .offset-by-seven.columns        { margin-left: 60.6666666667%; }\n    .offset-by-eight.column,\n    .offset-by-eight.columns        { margin-left: 69.3333333333%; }\n    .offset-by-nine.column,\n    .offset-by-nine.columns         { margin-left: 78.0%;          }\n    .offset-by-ten.column,\n    .offset-by-ten.columns          { margin-left: 86.6666666667%; }\n    .offset-by-eleven.column,\n    .offset-by-eleven.columns       { margin-left: 95.3333333333%; }\n  \n    .offset-by-one-third.column,\n    .offset-by-one-third.columns    { margin-left: 34.6666666667%; }\n    .offset-by-two-thirds.column,\n    .offset-by-two-thirds.columns   { margin-left: 69.3333333333%; }\n  \n    .offset-by-one-half.column,\n    .offset-by-one-half.columns     { margin-left: 52%; }\n  \n  }\n\n\n/* Base Styles\n  –––––––––––––––––––––––––––––––––––––––––––––––––– */\n\n\n/* NOTE\n  html is set to 62.5% so that all the REM measurements throughout Skeleton\n  are based on 10px sizing. So basically 1.5rem = 15px :) */\n\n\nhtml {\n    font-size: 62.5%; }\n\n\nbody {\n    font-size: 1.5em; /* currently ems cause chrome bug misinterpreting rems on body element */\n    line-height: 1.6;\n    font-weight: 400;\n    font-family: \"Raleway\", \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    color: #222; }\n\n\n/* Typography\n  –––––––––––––––––––––––––––––––––––––––––––––––––– */\n\n\nh1, h2, h3, h4, h5, h6 {\n    margin-top: 0;\n    margin-bottom: 2rem;\n    font-weight: 300; }\n\n\nh1 { font-size: 4.0rem; line-height: 1.2;  letter-spacing: -.1rem;}\n\n\nh2 { font-size: 3.6rem; line-height: 1.25; letter-spacing: -.1rem; }\n\n\nh3 { font-size: 3.0rem; line-height: 1.3;  letter-spacing: -.1rem; }\n\n\nh4 { font-size: 2.4rem; line-height: 1.35; letter-spacing: -.08rem; }\n\n\nh5 { font-size: 1.8rem; line-height: 1.5;  letter-spacing: -.05rem; }\n\n\nh6 { font-size: 1.5rem; line-height: 1.6;  letter-spacing: 0; }\n\n\n/* Larger than phablet */\n\n\n@media (min-width: 550px) {\n    h1 { font-size: 5.0rem; }\n    h2 { font-size: 4.2rem; }\n    h3 { font-size: 3.6rem; }\n    h4 { font-size: 3.0rem; }\n    h5 { font-size: 2.4rem; }\n    h6 { font-size: 1.5rem; }\n  }\n\n\np {\n    margin-top: 0; }\n\n\n/* Links\n  –––––––––––––––––––––––––––––––––––––––––––––––––– */\n\n\na {\n    color: #1EAEDB; }\n\n\na:hover {\n    color: #0FA0CE; }\n\n\n/* Buttons\n  –––––––––––––––––––––––––––––––––––––––––––––––––– */\n\n\n.button,\n  button,\n  input[type=\"submit\"],\n  input[type=\"reset\"],\n  input[type=\"button\"] {\n    display: inline-block;\n    height: 38px;\n    padding: 0 30px;\n    color: #555;\n    text-align: center;\n    font-size: 11px;\n    font-weight: 600;\n    line-height: 38px;\n    letter-spacing: .1rem;\n    text-transform: uppercase;\n    text-decoration: none;\n    white-space: nowrap;\n    background-color: transparent;\n    border-radius: 4px;\n    border: 1px solid #bbb;\n    cursor: pointer;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n\n\n.button:hover,\n  button:hover,\n  input[type=\"submit\"]:hover,\n  input[type=\"reset\"]:hover,\n  input[type=\"button\"]:hover,\n  .button:focus,\n  button:focus,\n  input[type=\"submit\"]:focus,\n  input[type=\"reset\"]:focus,\n  input[type=\"button\"]:focus {\n    color: #333;\n    border-color: #888;\n    outline: 0; }\n\n\n.button.button-primary,\n  button.button-primary,\n  input[type=\"submit\"].button-primary,\n  input[type=\"reset\"].button-primary,\n  input[type=\"button\"].button-primary {\n    color: #FFF;\n    background-color: #33C3F0;\n    border-color: #33C3F0; }\n\n\n.button.button-primary:hover,\n  button.button-primary:hover,\n  input[type=\"submit\"].button-primary:hover,\n  input[type=\"reset\"].button-primary:hover,\n  input[type=\"button\"].button-primary:hover,\n  .button.button-primary:focus,\n  button.button-primary:focus,\n  input[type=\"submit\"].button-primary:focus,\n  input[type=\"reset\"].button-primary:focus,\n  input[type=\"button\"].button-primary:focus {\n    color: #FFF;\n    background-color: #1EAEDB;\n    border-color: #1EAEDB; }\n\n\n/* Forms\n  –––––––––––––––––––––––––––––––––––––––––––––––––– */\n\n\ninput[type=\"email\"],\n  input[type=\"number\"],\n  input[type=\"search\"],\n  input[type=\"text\"],\n  input[type=\"tel\"],\n  input[type=\"url\"],\n  input[type=\"password\"],\n  textarea,\n  select {\n    height: 38px;\n    padding: 6px 10px; /* The 6px vertically centers text on FF, ignored by Webkit */\n    background-color: #fff;\n    border: 1px solid #D1D1D1;\n    border-radius: 4px;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n\n\n/* Removes awkward default styles on some inputs for iOS */\n\n\ninput[type=\"email\"],\n  input[type=\"number\"],\n  input[type=\"search\"],\n  input[type=\"text\"],\n  input[type=\"tel\"],\n  input[type=\"url\"],\n  input[type=\"password\"],\n  textarea {\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none; }\n\n\ntextarea {\n    min-height: 65px;\n    padding-top: 6px;\n    padding-bottom: 6px; }\n\n\ninput[type=\"email\"]:focus,\n  input[type=\"number\"]:focus,\n  input[type=\"search\"]:focus,\n  input[type=\"text\"]:focus,\n  input[type=\"tel\"]:focus,\n  input[type=\"url\"]:focus,\n  input[type=\"password\"]:focus,\n  textarea:focus,\n  select:focus {\n    border: 1px solid #33C3F0;\n    outline: 0; }\n\n\nlabel,\n  legend {\n    display: block;\n    margin-bottom: .5rem;\n    font-weight: 600; }\n\n\nfieldset {\n    padding: 0;\n    border-width: 0; }\n\n\ninput[type=\"checkbox\"],\n  input[type=\"radio\"] {\n    display: inline; }\n\n\nlabel > .label-body {\n    display: inline-block;\n    margin-left: .5rem;\n    font-weight: normal; }\n\n\n/* Lists\n  –––––––––––––––––––––––––––––––––––––––––––––––––– */\n\n\nul {\n    list-style: circle inside; }\n\n\nol {\n    list-style: decimal inside; }\n\n\nol, ul {\n    padding-left: 0;\n    margin-top: 0; }\n\n\nul ul,\n  ul ol,\n  ol ol,\n  ol ul {\n    margin: 1.5rem 0 1.5rem 3rem;\n    font-size: 90%; }\n\n\nli {\n    margin-bottom: 1rem; }\n\n\n/* Code\n  –––––––––––––––––––––––––––––––––––––––––––––––––– */\n\n\ncode {\n    padding: .2rem .5rem;\n    margin: 0 .2rem;\n    font-size: 90%;\n    white-space: nowrap;\n    background: #F1F1F1;\n    border: 1px solid #E1E1E1;\n    border-radius: 4px; }\n\n\npre > code {\n    display: block;\n    padding: 1rem 1.5rem;\n    white-space: pre; }\n\n\n/* Tables\n  –––––––––––––––––––––––––––––––––––––––––––––––––– */\n\n\nth,\n  td {\n    padding: 12px 15px;\n    text-align: left;\n    border-bottom: 1px solid #E1E1E1; }\n\n\nth:first-child,\n  td:first-child {\n    padding-left: 0; }\n\n\nth:last-child,\n  td:last-child {\n    padding-right: 0; }\n\n\n/* Spacing\n  –––––––––––––––––––––––––––––––––––––––––––––––––– */\n\n\nbutton,\n  .button {\n    margin-bottom: 1rem; }\n\n\ninput,\n  textarea,\n  select,\n  fieldset {\n    margin-bottom: 1.5rem; }\n\n\npre,\n  blockquote,\n  dl,\n  figure,\n  table,\n  p,\n  ul,\n  ol,\n  form {\n    margin-bottom: 2.5rem; }\n\n\n/* Utilities\n  –––––––––––––––––––––––––––––––––––––––––––––––––– */\n\n\n.u-full-width {\n    width: 100%;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n\n\n.u-max-full-width {\n    max-width: 100%;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n\n\n.u-pull-right {\n    float: right; }\n\n\n.u-pull-left {\n    float: left; }\n\n\n/* Misc\n  –––––––––––––––––––––––––––––––––––––––––––––––––– */\n\n\nhr {\n    margin-top: 3rem;\n    margin-bottom: 3.5rem;\n    border-width: 0;\n    border-top: 1px solid #E1E1E1; }\n\n\n/* Clearing\n  –––––––––––––––––––––––––––––––––––––––––––––––––– */\n\n\n/* Self Clearing Goodness */\n\n\n.container:after,\n  .row:after,\n  .u-cf {\n    content: \"\";\n    display: table;\n    clear: both; }\n\n\n/* Media Queries\n  –––––––––––––––––––––––––––––––––––––––––––––––––– */\n\n\n/*\n  Note: The best way to structure the use of media queries is to create the queries\n  near the relevant code. For example, if you wanted to change the styles for buttons\n  on small devices, paste the mobile query code up in the buttons section and style it\n  there.\n  */\n\n\n/* Larger than mobile */\n\n\n@media (min-width: 400px) {}\n\n\n/* Larger than phablet (also point when grid becomes active) */\n\n\n@media (min-width: 550px) {}\n\n\n/* Larger than tablet */\n\n\n@media (min-width: 750px) {}\n\n\n/* Larger than desktop */\n\n\n@media (min-width: 1000px) {}\n\n\n/* Larger than Desktop HD */\n\n\n@media (min-width: 1200px) {}\n\n\n/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n\n\nhtml {\n    font-family: sans-serif; /* 1 */\n    -ms-text-size-adjust: 100%; /* 2 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n  }\n\n\n/**\n   * Remove default margin.\n   */\n\n\nbody {\n    margin: 0;\n  }\n\n\n/* HTML5 display definitions\n     ========================================================================== */\n\n\n/**\n   * Correct `block` display not defined for any HTML5 element in IE 8/9.\n   * Correct `block` display not defined for `details` or `summary` in IE 10/11\n   * and Firefox.\n   * Correct `block` display not defined for `main` in IE 11.\n   */\n\n\narticle,\n  aside,\n  details,\n  figcaption,\n  figure,\n  footer,\n  header,\n  hgroup,\n  main,\n  menu,\n  nav,\n  section,\n  summary {\n    display: block;\n  }\n\n\n/**\n   * 1. Correct `inline-block` display not defined in IE 8/9.\n   * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n   */\n\n\naudio,\n  canvas,\n  progress,\n  video {\n    display: inline-block; /* 1 */\n    vertical-align: baseline; /* 2 */\n  }\n\n\n/**\n   * Prevent modern browsers from displaying `audio` without controls.\n   * Remove excess height in iOS 5 devices.\n   */\n\n\naudio:not([controls]) {\n    display: none;\n    height: 0;\n  }\n\n\n/**\n   * Address `[hidden]` styling not present in IE 8/9/10.\n   * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n   */\n\n\n[hidden],\n  template {\n    display: none;\n  }\n\n\n/* Links\n     ========================================================================== */\n\n\n/**\n   * Remove the gray background color from active links in IE 10.\n   */\n\n\na {\n    background-color: transparent;\n  }\n\n\n/**\n   * Improve readability when focused and also mouse hovered in all browsers.\n   */\n\n\na:active,\n  a:hover {\n    outline: 0;\n  }\n\n\n/* Text-level semantics\n     ========================================================================== */\n\n\n/**\n   * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n   */\n\n\nabbr[title] {\n    border-bottom: 1px dotted;\n  }\n\n\n/**\n   * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n   */\n\n\nb,\n  strong {\n    font-weight: bold;\n  }\n\n\n/**\n   * Address styling not present in Safari and Chrome.\n   */\n\n\ndfn {\n    font-style: italic;\n  }\n\n\n/**\n   * Address variable `h1` font-size and margin within `section` and `article`\n   * contexts in Firefox 4+, Safari, and Chrome.\n   */\n\n\nh1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n\n\n/**\n   * Address styling not present in IE 8/9.\n   */\n\n\nmark {\n    background: #ff0;\n    color: #000;\n  }\n\n\n/**\n   * Address inconsistent and variable font size in all browsers.\n   */\n\n\nsmall {\n    font-size: 80%;\n  }\n\n\n/**\n   * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n   */\n\n\nsub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n\n\nsup {\n    top: -0.5em;\n  }\n\n\nsub {\n    bottom: -0.25em;\n  }\n\n\n/* Embedded content\n     ========================================================================== */\n\n\n/**\n   * Remove border when inside `a` element in IE 8/9/10.\n   */\n\n\nimg {\n    border: 0;\n  }\n\n\n/**\n   * Correct overflow not hidden in IE 9/10/11.\n   */\n\n\nsvg:not(:root) {\n    overflow: hidden;\n  }\n\n\n/* Grouping content\n     ========================================================================== */\n\n\n/**\n   * Address margin not present in IE 8/9 and Safari.\n   */\n\n\nfigure {\n    margin: 1em 40px;\n  }\n\n\n/**\n   * Address differences between Firefox and other browsers.\n   */\n\n\nhr {\n    -webkit-box-sizing: content-box;\n            box-sizing: content-box;\n    height: 0;\n  }\n\n\n/**\n   * Contain overflow in all browsers.\n   */\n\n\npre {\n    overflow: auto;\n  }\n\n\n/**\n   * Address odd `em`-unit font size rendering in all browsers.\n   */\n\n\ncode,\n  kbd,\n  pre,\n  samp {\n    font-family: monospace, monospace;\n    font-size: 1em;\n  }\n\n\n/* Forms\n     ========================================================================== */\n\n\n/**\n   * Known limitation: by default, Chrome and Safari on OS X allow very limited\n   * styling of `select`, unless a `border` property is set.\n   */\n\n\n/**\n   * 1. Correct color not being inherited.\n   *    Known issue: affects color of disabled elements.\n   * 2. Correct font properties not being inherited.\n   * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n   */\n\n\nbutton,\n  input,\n  optgroup,\n  select,\n  textarea {\n    color: inherit; /* 1 */\n    font: inherit; /* 2 */\n    margin: 0; /* 3 */\n  }\n\n\n/**\n   * Address `overflow` set to `hidden` in IE 8/9/10/11.\n   */\n\n\nbutton {\n    overflow: visible;\n  }\n\n\n/**\n   * Address inconsistent `text-transform` inheritance for `button` and `select`.\n   * All other form control elements do not inherit `text-transform` values.\n   * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n   * Correct `select` style inheritance in Firefox.\n   */\n\n\nbutton,\n  select {\n    text-transform: none;\n  }\n\n\n/**\n   * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n   *    and `video` controls.\n   * 2. Correct inability to style clickable `input` types in iOS.\n   * 3. Improve usability and consistency of cursor style between image-type\n   *    `input` and others.\n   */\n\n\nbutton,\n  html input[type=\"button\"], /* 1 */\n  input[type=\"reset\"],\n  input[type=\"submit\"] {\n    -webkit-appearance: button; /* 2 */\n    cursor: pointer; /* 3 */\n  }\n\n\n/**\n   * Re-set default cursor for disabled elements.\n   */\n\n\nbutton[disabled],\n  html input[disabled] {\n    cursor: default;\n  }\n\n\n/**\n   * Remove inner padding and border in Firefox 4+.\n   */\n\n\nbutton::-moz-focus-inner,\n  input::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n  }\n\n\n/**\n   * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n   * the UA stylesheet.\n   */\n\n\ninput {\n    line-height: normal;\n  }\n\n\n/**\n   * It's recommended that you don't attempt to style these elements.\n   * Firefox's implementation doesn't respect box-sizing, padding, or width.\n   *\n   * 1. Address box sizing set to `content-box` in IE 8/9/10.\n   * 2. Remove excess padding in IE 8/9/10.\n   */\n\n\ninput[type=\"checkbox\"],\n  input[type=\"radio\"] {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n  }\n\n\n/**\n   * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n   * `font-size` values of the `input`, it causes the cursor style of the\n   * decrement button to change from `default` to `text`.\n   */\n\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\n  input[type=\"number\"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n\n\n/**\n   * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n   * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n   *    (include `-moz` to future-proof).\n   */\n\n\ninput[type=\"search\"] {\n    -webkit-appearance: textfield; /* 1 */\n    -webkit-box-sizing: content-box; /* 2 */\n    box-sizing: content-box;\n  }\n\n\n/**\n   * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n   * Safari (but not Chrome) clips the cancel button when the search input has\n   * padding (and `textfield` appearance).\n   */\n\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\n  input[type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n\n/**\n   * Define consistent border, margin, and padding.\n   */\n\n\nfieldset {\n    border: 1px solid #c0c0c0;\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em;\n  }\n\n\n/**\n   * 1. Correct `color` not being inherited in IE 8/9/10/11.\n   * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n   */\n\n\nlegend {\n    border: 0; /* 1 */\n    padding: 0; /* 2 */\n  }\n\n\n/**\n   * Remove default vertical scrollbar in IE 8/9/10/11.\n   */\n\n\ntextarea {\n    overflow: auto;\n  }\n\n\n/**\n   * Don't inherit the `font-weight` (applied by a rule above).\n   * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n   */\n\n\noptgroup {\n    font-weight: bold;\n  }\n\n\n/* Tables\n     ========================================================================== */\n\n\n/**\n   * Remove most spacing between table cells.\n   */\n\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n\ntd,\n  th {\n    padding: 0;\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-header></app-header>\n<app-aboutme></app-aboutme>\n<app-resume></app-resume>\n<app-form></app-form>\n<router-outlet></router-outlet>\n\n\n\n\n\n\n\n\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul> -->"

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
var resume_component_1 = __webpack_require__("./src/app/resume/resume.component.ts");
var form_component_1 = __webpack_require__("./src/app/form/form.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                aboutme_component_1.AboutmeComponent,
                resume_component_1.ResumeComponent,
                form_component_1.FormComponent
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

/***/ "./src/app/form/form.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n    margin: 0 auto;\n    max-width: 1280px;\n}\n.section {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n}\n.container .row {\n    margin-left: -0.75rem;\n    margin-right: -0.75rem;\n}\n.row {\n    margin-top: 0px;\n}\n.justify {\n    text-align: justify\n}\np {\n    line-height: 2rem;\n}\nh5 {\n    font-size: 1.64rem;\n    line-height: 110%;\n    margin-top: 0.82rem; \n    margin-right:0px;\n    margin-bottom:0.656rem; \n    margin-left: 0px;\n}"

/***/ }),

/***/ "./src/app/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"about-section\">\n  <div class=\"section\">\n    <div class=\"row\">\n      <div class=\"col m4 s12 center\">\n        <br>\n      </div>\n      <div class=\"col m8 s12\">\n        <h5>About Me</h5>\n        <p class=\"justify\">\n        </p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/form/form.component.ts":
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
var FormComponent = /** @class */ (function () {
    function FormComponent(_httpService) {
        this._httpService = _httpService;
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent = __decorate([
        core_1.Component({
            selector: 'app-form',
            template: __webpack_require__("./src/app/form/form.component.html"),
            styles: [__webpack_require__("./src/app/form/form.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;


/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n  background-attachment: fixed;\n  min-height: 1100px;\n  margin-bottom: 0px;\n  background-image: url('GearFlagB.587576a6fc5c996a72ef.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  text-shadow: black 0.3em 0.3em 0.3em;\n}\n\n.title {\n  color: #feff00;\n  font-style: italic;\n  font-family: cursive;\n  font-size: 50px;\n  padding-top: 120px;\n  border-bottom: 1px solid #FFFFFF;\n  border-bottom-color: rgba(255,255,255,0.35);\n  display: inline-block;\n}\n\n.subtitle {\n  font-size: 28px;\n  color: #feff00;\n  font-style: italic;\n}\n\n.logo {\n  min-height: 300px; \n  min-width: 300px;\n  background-image: url('300Logo.6aee8e28d88e7e08acbd.png');\n  background-repeat: no-repeat;\n  background-position: center;\n  margin-top: -15px;\n  top: 50%;\n}\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <div class=\"text-center project-referal\">\n    <div class=\"title text-center\">John Haven Bradley</div>\n    <div class=\"subtitle\"><p>Freelance Web and Mobile App Developer</p></div>\n    <!-- <div class=\"logo\"></div> -->\n  </div>\n</div>"

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
Object.defineProperty(exports, "__esModule", { value: true });
console.log('********* HTTP **********');
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HttpService = /** @class */ (function () {
    function HttpService() {
        this.userInfo = {
            githubAccount: "https://github.com/CrunchyJohnHaven"
        };
        // constructor(private _http: HttpClient) { }
    }
    HttpService.prototype.getUserInfo = function () {
        return this.userInfo;
    };
    HttpService = __decorate([
        core_1.Injectable()
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
;


/***/ }),

/***/ "./src/app/resume/resume.component.css":
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n    background-attachment: fixed;\n    min-height: 390px;\n    margin-bottom: 0px;\n    background-image: url('CPUBackground.551bbe77ee6695c5887c.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    grey: white;\n    text-shadow: black 0.3em 0.3em 0.3em;\n  }\n  \n  .title {\n    color: #feff00;\n    font-style: italic;\n    font-family: cursive;\n    font-size: 50px;\n    padding-top: 120px;\n    border-bottom: 1px solid #FFFFFF;\n    border-bottom-color: rgba(255,255,255,0.35);\n    display: inline-block;\n  }\n  \n  .logo {\n    min-height: 300px; \n    min-width: 300px;\n    background-image: url('300Logo.6aee8e28d88e7e08acbd.png');\n    background-repeat: no-repeat;\n    background-position: center;\n    margin-top: -15px;\n    top: 50%;\n  }"

/***/ }),

/***/ "./src/app/resume/resume.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n    <div class=\"text-center project-referal\">\n      <div class=\"title text-center\">Ask Me What I Can Do For Your Project</div>\n      <!-- <div class=\"logo\"></div> -->\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/resume/resume.component.ts":
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
var ResumeComponent = /** @class */ (function () {
    function ResumeComponent(_httpService) {
        this._httpService = _httpService;
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = __decorate([
        core_1.Component({
            selector: 'app-resume',
            template: __webpack_require__("./src/app/resume/resume.component.html"),
            styles: [__webpack_require__("./src/app/resume/resume.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], ResumeComponent);
    return ResumeComponent;
}());
exports.ResumeComponent = ResumeComponent;


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