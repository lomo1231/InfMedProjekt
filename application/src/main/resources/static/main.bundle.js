webpackJsonp([0,3],{

/***/ 343:
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var User_1 = __webpack_require__(541);
var user_service_1 = __webpack_require__(542);
var DashboardComponent = (function () {
    function DashboardComponent() {
        this.model = new User_1.User();
        this.userService = new user_service_1.UserService(null);
    }
    DashboardComponent.prototype.onLoginClick = function () {
        console.log(this.model.username + " " + this.model.password);
        console.log(this.userService.login(this.model.username, this.model.password));
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            template: __webpack_require__(758),
            styles: [__webpack_require__(754)]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map

/***/ },

/***/ 344:
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var patient_list_1 = __webpack_require__(543);
var DataService = (function () {
    function DataService() {
    }
    DataService.prototype.getPatients = function () {
        return Promise.resolve(patient_list_1.PATIENTS);
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map

/***/ },

/***/ 345:
/***/ function(module, exports, __webpack_require__) {

"use strict";
// -------------------------------------------------------------------------------
//                    WIDOK LEKARZA
// -------------------------------------------------------------------------------
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
__webpack_require__(405);
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(222);
var common_1 = __webpack_require__(6);
var data_service_1 = __webpack_require__(344);
var Temp1Component = (function () {
    function Temp1Component(dataService, route, location) {
        this.dataService = dataService;
        this.route = route;
        this.location = location;
        //-----notifications----------
        this.showAlert = false;
    }
    Temp1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getPatients()
            .then(function (patients) { return _this.patients = patients; });
    };
    Temp1Component.prototype.select = function (patient) {
        this.selected = patient;
    };
    Temp1Component.prototype.show = function () {
        this.showAlert = true;
    };
    Temp1Component.prototype.onClose = function (reason) {
        console.log("Alert closed by " + reason);
        this.showAlert = false;
    };
    Temp1Component = __decorate([
        core_1.Component({
            selector: 'my-temp1',
            template: __webpack_require__(759),
            styles: [__webpack_require__(755)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof data_service_1.DataService !== 'undefined' && data_service_1.DataService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object, (typeof (_c = typeof common_1.Location !== 'undefined' && common_1.Location) === 'function' && _c) || Object])
    ], Temp1Component);
    return Temp1Component;
    var _a, _b, _c;
}());
exports.Temp1Component = Temp1Component;
//# sourceMappingURL=doctor.component.js.map

/***/ },

/***/ 346:
/***/ function(module, exports, __webpack_require__) {

"use strict";
// -------------------------------------------------------------------------------
//                    WIDOK PACJENTA
// -------------------------------------------------------------------------------
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
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(222);
var PatientComponent = (function () {
    function PatientComponent(router) {
        this.router = router;
        //mock data na potrzeby prezentacji
        this.Ja = { id: 1, fullname: 'Jakub Lubas', pulse: 75, accelerometer: false };
        this.open = true;
        this.openClick1 = false;
    }
    PatientComponent.prototype.change = function (placement) {
        this.open = true;
        this.placement = placement;
    };
    PatientComponent = __decorate([
        core_1.Component({
            selector: 'temp2',
            template: __webpack_require__(760),
            styles: [__webpack_require__(756)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object])
    ], PatientComponent);
    return PatientComponent;
    var _a;
}());
exports.PatientComponent = PatientComponent;
//# sourceMappingURL=patient.component.js.map

/***/ },

/***/ 420:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 420;


/***/ },

/***/ 421:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
__webpack_require__(545);
var platform_browser_dynamic_1 = __webpack_require__(509);
var core_1 = __webpack_require__(0);
var environment_1 = __webpack_require__(544);
var app_module_1 = __webpack_require__(540);
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ },

/***/ 538:
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(222);
var dashboard_component_1 = __webpack_require__(343);
var patient_component_1 = __webpack_require__(346);
var doctor_component_1 = __webpack_require__(345);
var routes = [
    { path: '', component: dashboard_component_1.DashboardComponent },
    { path: 'temp1', component: doctor_component_1.Temp1Component },
    { path: 'temp2', component: patient_component_1.PatientComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map

/***/ },

/***/ 539:
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var AppComponent = (function () {
    function AppComponent() {
        this.singleModel = '1';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__(757),
            styles: [__webpack_require__(753)],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map

/***/ },

/***/ 540:
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(153);
var forms_1 = __webpack_require__(142);
var app_component_1 = __webpack_require__(539);
var dashboard_component_1 = __webpack_require__(343);
var doctor_component_1 = __webpack_require__(345);
var patient_component_1 = __webpack_require__(346);
var data_service_1 = __webpack_require__(344);
var app_routing_module_1 = __webpack_require__(538);
var ng_lightning_1 = __webpack_require__(728);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                ng_lightning_1.NglModule.forRoot()
            ],
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                doctor_component_1.Temp1Component,
                patient_component_1.PatientComponent
            ],
            providers: [data_service_1.DataService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ },

/***/ 541:
/***/ function(module, exports) {

"use strict";
/**
 * Created by Kamil on 15-Jan-17.
 */
"use strict";
var User = (function () {
    function User() {
    }
    ;
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map

/***/ },

/***/ 542:
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
// user.service.ts
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(505);
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.loggedIn = false;
        this.loggedIn = !!localStorage.getItem('auth_token');
    }
    UserService.prototype.login = function (email, password) {
        if (email == password && (email == 'admin' || password == 'patient')) {
            localStorage.setItem('auth_token', 'true');
            this.loggedIn = true;
            return true;
        }
        else {
            return false;
        }
    };
    UserService.prototype.logout = function () {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
    };
    UserService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], UserService);
    return UserService;
    var _a;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map

/***/ },

/***/ 543:
/***/ function(module, exports) {

"use strict";
"use strict";
//---------------mock----------------
exports.PATIENTS = [
    { id: 1, fullname: 'Jan Kowalski', pulse: 120, accelerometer: false },
    { id: 2, fullname: 'Piotr Nowak', pulse: 150, accelerometer: false },
    { id: 3, fullname: 'Grażyna Grażyna', pulse: 170, accelerometer: true },
    { id: 4, fullname: 'Jan Nowak', pulse: 120, accelerometer: false },
    { id: 5, fullname: 'Piotr Kowalski', pulse: 150, accelerometer: true },
    { id: 6, fullname: 'Katarzyna Katarzyna', pulse: 170, accelerometer: false },
];
//# sourceMappingURL=patient-list.js.map

/***/ },

/***/ 544:
/***/ function(module, exports) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
"use strict";
exports.environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ },

/***/ 545:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
__webpack_require__(559);
__webpack_require__(552);
__webpack_require__(548);
__webpack_require__(554);
__webpack_require__(553);
__webpack_require__(551);
__webpack_require__(550);
__webpack_require__(558);
__webpack_require__(547);
__webpack_require__(546);
__webpack_require__(556);
__webpack_require__(549);
__webpack_require__(557);
__webpack_require__(555);
__webpack_require__(560);
__webpack_require__(798);
//# sourceMappingURL=polyfills.js.map

/***/ },

/***/ 753:
/***/ function(module, exports) {

module.exports = "\r\n.header{\r\n  background-image: url(\"../assets/img/header.png\");\r\n  width:451px;\r\n  height:206px;\r\n  margin: auto;\r\n}\r\n"

/***/ },

/***/ 754:
/***/ function(module, exports) {

module.exports = "\r\n.login-page {\r\n  width: 360px;\r\n  padding: 8% 0 0;\r\n  margin: auto;\r\n}\r\n.form {\r\n  position: relative;\r\n  z-index: 1;\r\n  background: #FFFFFF;\r\n  max-width: 360px;\r\n  margin: 0 auto 100px;\r\n  padding: 45px;\r\n  text-align: center;\r\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\r\n}\r\n.form input {\r\n  font-family: \"Roboto\", sans-serif;\r\n  outline: 0;\r\n  background: #f2f2f2;\r\n  width: 100%;\r\n  border: 0;\r\n  margin: 0 0 15px;\r\n  padding: 15px;\r\n  box-sizing: border-box;\r\n  font-size: 13px;\r\n}\r\n.form button {\r\n  font-family: \"Roboto\", sans-serif;\r\n  text-transform: uppercase;\r\n  outline: 0;\r\n  background-color: lightcoral;\r\n  width: 100%;\r\n  border: 0;\r\n  padding: 15px;\r\n  color: #FFFFFF;\r\n  font-size: 14px;\r\n  cursor: pointer;\r\n}\r\n.form button:hover,.form button:active,.form button:focus {\r\n  background-color: tomato;\r\n}\r\n.form .message {\r\n  margin: 15px 0 0;\r\n  color: #b3b3b3;\r\n  font-size: 12px;\r\n}\r\n.form .message a {\r\n  color: #3F51B5;\r\n  text-decoration: none;\r\n}\r\n.form .register-form {\r\n  display: none;\r\n}\r\n.container {\r\n  position: relative;\r\n  z-index: 1;\r\n  max-width: 300px;\r\n  margin: 0 auto;\r\n}\r\n.container:before, .container:after {\r\n  content: \"\";\r\n  display: block;\r\n  clear: both;\r\n}\r\n.container .info {\r\n  margin: 50px auto;\r\n  text-align: center;\r\n}\r\n.container .info h1 {\r\n  margin: 0 0 15px;\r\n  padding: 0;\r\n  font-size: 36px;\r\n  font-weight: 300;\r\n  color: #1a1a1a;\r\n}\r\n.container .info span {\r\n  color: #4d4d4d;\r\n  font-size: 12px;\r\n}\r\n.container .info span a {\r\n  color: #000000;\r\n  text-decoration: none;\r\n}\r\n.container .info span .fa {\r\n  color: #EF3B3A;\r\n}\r\n"

/***/ },

/***/ 755:
/***/ function(module, exports) {

module.exports = "\r\n.container {\r\n  background: #FFFFFF;\r\n  max-width: 860px;\r\n  margin: 0 auto 100px;\r\n  padding: 45px;\r\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1), 0 5px 5px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.list-group-item {\r\n  cursor: pointer;\r\n}\r\n\r\n.list-group-item:hover {\r\n  background-color: lightcoral;\r\n}\r\n\r\n"

/***/ },

/***/ 756:
/***/ function(module, exports) {

module.exports = ".container  {\r\n  background: #FFFFFF;\r\n  max-width: 860px;\r\n  margin: 0 auto 100px;\r\n  padding: 45px;\r\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1), 0 5px 5px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n.info\r\n{\r\n  float: right;\r\n}\r\n"

/***/ },

/***/ 757:
/***/ function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n<div class=\"header\"></div>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n\r\n<! lnki TYLKO pomocnicze->\r\n<ul>\r\n  <li><a href=\"/index.html\">Home</a></li>\r\n  <li><a routerLink=\"/temp1\" routerLinkActive=\"active\">Doctor</a></li>\r\n  <li><a routerLink=\"/temp2\" routerLinkActive=\"active\">Patient</a></li>\r\n</ul>\r\n\r\n\r\n"

/***/ },

/***/ 758:
/***/ function(module, exports) {

module.exports = "\r\n\r\n<div class = \"row\">\r\n  <div class=\"form\">\r\n    <form class=\"login-form\" id=\"loginForm\">\r\n      <input type=\"text\" name=\"username\" [(ngModel)]=\"model.username\" placeholder=\"Nazwa użytkownika\"/>\r\n      <input type=\"password\" name=\"password\" [(ngModel)]=\"model.password\" placeholder=\"Hasło\"/>\r\n      <button (click)=\"onLoginClick()\">zaloguj</button>\r\n      <p class=\"message\">W celu utworzenia konta skontaktuj się z  <a href=\"#\">Administratorem</a></p>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ },

/***/ 759:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\r\n\r\n  <div class=\"slds-notify_container\">\r\n    <ngl-notification *ngIf=\"showAlert\" type=\"alert\" severity=\"error\"\r\n                      (nglNotificationClose)=\"onClose($event)\" timeout=\"4000\" class=\"slds-theme--alert-texture\">\r\n      <h2>Uwaga! Wystąpiły problemy z pacjentem, sprawdź panel doktora!</h2>\r\n    </ngl-notification>\r\n  </div>\r\n\r\n  <div class=\"container\">\r\n\r\n    <div class=\"hello\">Witamy, doktorze Kowalski.</div>\r\n\r\n    <div class=\"patient-list\">\r\n\r\n      <div class=\"title\">Lista Pacjentów:</div>\r\n      <ul class=\"list-group\">\r\n        <li *ngFor=\"let patient of patients\" (click)=\"select(patient)\" class=\"list-group-item\">\r\n\r\n          <span>{{patient.fullname}}</span>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n\r\n    <div class=\"patient-detail\" *ngIf=\"selected\">\r\n\r\n      <div align=\"right\" style=\"float: right\" id=\"patientPanelClose\" (click)=\"select();\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-toggle=\"tooltip\" title=\"Close\">\r\n          <span style=\"font-size: 10pt; color: #990308\">X</span>\r\n        </button>\r\n      </div>\r\n\r\n      <div class=\"title\">Szczegółowe informacje:</div>\r\n      <div class=\"head\">\r\n        {{selected.fullname}}\r\n      </div>\r\n\r\n      <ul class=\"details\">\r\n\r\n      <li>\r\n        <ngl-badge>Puls:</ngl-badge>\r\n        {{selected.pulse}}\r\n\r\n          <ngl-badge *ngIf=\"selected.pulse>120\" type=\"error\">!</ngl-badge>\r\n\r\n      </li>\r\n\r\n      <li>\r\n        <ngl-badge>Stabilność:</ngl-badge>\r\n        <ngl-badge *ngIf=\"!selected.accelerometer\" type=\"success\">pozycja pacjenta - ok</ngl-badge>\r\n        <ngl-badge *ngIf=\"selected.accelerometer\" type=\"error\">pacjent się przewrócił!</ngl-badge>\r\n      </li>\r\n\r\n      </ul>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n    <div class=\"footer\"></div>\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n<span (click)=\"show()\" style=\"cursor:pointer;\">pokaz alert</span>\r\n\r\n\r\n\r\n"

/***/ },

/***/ 760:
/***/ function(module, exports) {

module.exports = "<template #tip2><p style=\"font-size:12px;\">Panel wyświetla aktualne informacje o stanie Twojego pulsu i pozycji.</p> </template>\r\n\r\n\r\n<div class=\"row\">\r\n\r\n  <div class=\"container\">\r\n    <span class=\"hello\">Witamy, Panie {{Ja.fullname}}.</span>\r\n\r\n    <div class=\"info\"> <button type=\"button\" nglButton=\"neutral\" [nglPopover]=\"tip2\" nglPopoverTheme=\"info\" [nglOpen]=\"openClick1\" (click)=\"openClick1 = !openClick1\">?</button></div>\r\n    <div class=\"title\">Szczegółowe informacje:</div>\r\n    <div class=\"head\">\r\n      {{Ja.fullname}}\r\n    </div>\r\n\r\n    <ul class=\"details\">\r\n\r\n      <li>\r\n        <ngl-badge>Puls:</ngl-badge>\r\n        {{Ja.pulse}}\r\n\r\n        <ngl-badge *ngIf=\"Ja.pulse>120\" type=\"error\">!</ngl-badge>\r\n\r\n      </li>\r\n      <br/>\r\n      <li>\r\n        <ngl-badge>Stabilność:</ngl-badge>\r\n        <ngl-badge *ngIf=\"!Ja.accelerometer\" type=\"success\">Twoja pozycja - ok</ngl-badge>\r\n        <ngl-badge *ngIf=\"Ja.accelerometer\" type=\"error\">podnieś sie!</ngl-badge>\r\n      </li>\r\n\r\n    </ul>\r\n\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ },

/***/ 799:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(421);


/***/ }

},[799]);
//# sourceMappingURL=main.bundle.map