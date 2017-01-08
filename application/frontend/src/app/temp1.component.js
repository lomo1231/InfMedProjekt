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
require('rxjs/add/operator/switchMap');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var data_service_1 = require('../data_service/data.service');
var Temp1Component = (function () {
    function Temp1Component(dataService, route, location) {
        this.dataService = dataService;
        this.route = route;
        this.location = location;
    }
    Temp1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getPatients()
            .then(function (patients) { return _this.patients = patients; });
    };
    Temp1Component.prototype.select = function (patient) { this.selected = patient; };
    Temp1Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-temp1',
            templateUrl: 'temp1.component.html',
            styleUrls: ['temp1.component.css']
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, router_1.ActivatedRoute, common_1.Location])
    ], Temp1Component);
    return Temp1Component;
}());
exports.Temp1Component = Temp1Component;
//# sourceMappingURL=temp1.component.js.map