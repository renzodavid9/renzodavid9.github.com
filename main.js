(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/macbook-pro/Development/genderly-prototype/frontend-client/src/main.ts */"zUnb");


/***/ }),

/***/ "3dzQ":
/*!************************************************!*\
  !*** ./src/app/findings/findings.component.ts ***!
  \************************************************/
/*! exports provided: FindingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindingsComponent", function() { return FindingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_store_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/store/store.service */ "ooDN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function FindingsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hemos identificado en tu documento:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "13");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "expresiones excluyentes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "2/2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "oraciones excluyentes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FindingsComponent {
    constructor(store) {
        this.store = store;
        this.showFindings = false;
    }
    ngOnInit() {
        this.store.getTriggerTextAnalyzed$().subscribe((analyzed) => { this.showFindings = analyzed; });
    }
}
FindingsComponent.ɵfac = function FindingsComponent_Factory(t) { return new (t || FindingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_store_store_service__WEBPACK_IMPORTED_MODULE_1__["StoreService"])); };
FindingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FindingsComponent, selectors: [["app-findings"]], decls: 1, vars: 1, consts: [["class", "findings", 4, "ngIf"], [1, "findings"], [1, "findings__list"], [1, "findings__list-img"], [1, "findings__list-content"], [1, "findings__list-value"]], template: function FindingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FindingsComponent_div_0_Template, 18, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showFindings);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".findings[_ngcontent-%COMP%] {\n  padding: 50px;\n}\n\n.findings__list[_ngcontent-%COMP%] {\n  padding-left: 0;\n  list-style-type: none;\n}\n\n.findings__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 5px;\n  box-shadow: 0 5px 16px -15px #000;\n  color: #2f2f2f;\n  display: flex;\n  overflow: hidden;\n}\n\n.findings__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    ~ li[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.findings__list-img[_ngcontent-%COMP%] {\n  background-color: #8c4c9e;\n  width: 7px;\n}\n\n.findings__list-content[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  padding: 15px;\n}\n\n.findings__list-value[_ngcontent-%COMP%] {\n  color: #8B4C9E;\n  font-size: 25px;\n  font-weight: 700;\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2ZpbmRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxnQkFBQTtBQUFKOztBQUlBO0VBQ0UseUJBQUE7RUFDQSxVQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFERiIsImZpbGUiOiJmaW5kaW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maW5kaW5ncyB7XG4gIHBhZGRpbmc6IDUwcHg7XG59XG5cbi5maW5kaW5nc19fbGlzdCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuXG4gIGxpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAwIDVweCAxNnB4IC0xNXB4ICMwMDA7XG4gICAgY29sb3I6ICMyZjJmMmY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgbGkgfiBsaSB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxufVxuXG4uZmluZGluZ3NfX2xpc3QtaW1nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhjNGM5ZTtcbiAgd2lkdGg6IDdweDtcbn1cblxuLmZpbmRpbmdzX19saXN0LWNvbnRlbnQge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uZmluZGluZ3NfX2xpc3QtdmFsdWUge1xuICBjb2xvcjogIzhCNEM5RTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "7BRp":
/*!**********************************************************!*\
  !*** ./src/app/document-info/document-info.component.ts ***!
  \**********************************************************/
/*! exports provided: DocumentInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentInfoComponent", function() { return DocumentInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DocumentInfoComponent {
    constructor() { }
    ngOnInit() {
    }
}
DocumentInfoComponent.ɵfac = function DocumentInfoComponent_Factory(t) { return new (t || DocumentInfoComponent)(); };
DocumentInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DocumentInfoComponent, selectors: [["app-document-info"]], decls: 3, vars: 0, consts: [[1, "document-info"], ["contenteditable", "true", 1, "document-info__title"]], template: function DocumentInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00BFNoticias o cortinas de humo? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".document-info[_ngcontent-%COMP%] {\n  padding: 50px;\n}\n\n.document-info__title[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #d2d2d2;\n  color: #484848;\n  font-size: 35px;\n  outline: none;\n  padding: 5px 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2RvY3VtZW50LWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBQ0YiLCJmaWxlIjoiZG9jdW1lbnQtaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kb2N1bWVudC1pbmZvIHtcbiAgcGFkZGluZzogNTBweDtcbn1cblxuLmRvY3VtZW50LWluZm9fX3RpdGxlIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkMmQyZDI7XG4gIGNvbG9yOiAjNDg0ODQ4O1xuICBmb250LXNpemU6IDM1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAycHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "GvNj":
/*!******************************************!*\
  !*** ./src/app/popup/popup.component.ts ***!
  \******************************************/
/*! exports provided: PopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return PopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_store_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/store/store.service */ "ooDN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function PopupComponent_ol_5_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3, " ");
} }
function PopupComponent_ol_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PopupComponent_ol_5_li_1_Template, 2, 1, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.message.options);
} }
function PopupComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 3);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r1.message.end, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class PopupComponent {
    constructor(store) {
        this.store = store;
        this.category = '';
        this.message = {};
    }
    set data(newData) {
        this._data = newData;
        if (this._data.id) {
            this.updateValues();
        }
    }
    get data() {
        return this._data;
    }
    ngOnInit() { }
    updateValues() {
        const recommendation = this.store.getRecommendation(this._data.id);
        this.category = recommendation.category;
        this.message = recommendation.message;
        this.message.introWithWord = this.message.intro.replace('#WORD#', this._data.word);
        console.log(recommendation);
    }
}
PopupComponent.ɵfac = function PopupComponent_Factory(t) { return new (t || PopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_store_store_service__WEBPACK_IMPORTED_MODULE_1__["StoreService"])); };
PopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopupComponent, selectors: [["app-popup"]], inputs: { data: "data" }, decls: 7, vars: 4, consts: [[1, "popup"], [1, "popup__title"], [1, "popup__content"], [3, "innerHTML"], [4, "ngIf"], [3, "innerHTML", 4, "ngIf"], [4, "ngFor", "ngForOf"]], template: function PopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PopupComponent_ol_5_Template, 2, 1, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PopupComponent_p_6_Template, 1, 1, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.message.introWithWord, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message.end);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".popup[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0 5px 15px -7px #a5a5a5;\n  margin-top: 5px;\n  overflow-x: hidden;\n  width: 250px;\n}\n\n.popup__title[_ngcontent-%COMP%] {\n  background-color: #8B4C9E;\n  color: #fff;\n  padding: 10px;\n}\n\n[_nghost-%COMP%]     .popup__word {\n  color: #8B4C9E;\n  font-weight: 500;\n}\n\n.popup__content[_ngcontent-%COMP%] {\n  color: #424242;\n  font-size: 12px;\n  max-height: 200px;\n  padding: 10px;\n  overflow: auto;\n}\n\n.popup__content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.popup__content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]    ~ .popup__content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.popup__content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  padding-left: 25px;\n}\n\n.popup__content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    ~ li[_ngcontent-%COMP%] {\n  padding-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3BvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFDRTtFQUNFLFNBQUE7QUFDSjs7QUFDSTtFQUNFLGVBQUE7QUFDTjs7QUFHRTtFQUNFLGtCQUFBO0FBREo7O0FBR0k7RUFDRSxpQkFBQTtBQUROIiwiZmlsZSI6InBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvcHVwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCA1cHggMTVweCAtN3B4ICNhNWE1YTU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB3aWR0aDogMjUwcHg7XG59XG5cbi5wb3B1cF9fdGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEI0QzlFO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5wb3B1cF9fd29yZCB7XG4gIGNvbG9yOiAjOEI0QzlFO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ucG9wdXBfX2NvbnRlbnQge1xuICBjb2xvcjogIzQyNDI0MjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgcCB7XG4gICAgbWFyZ2luOiAwO1xuXG4gICAgJiB+ICYge1xuICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIH1cbiAgfVxuXG4gIG9sIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG5cbiAgICBsaSB+IGxpIHtcbiAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "O0Vk":
/*!*************************************************************************!*\
  !*** ./src/app/services/text-analyzer-service/text-analyzer.service.ts ***!
  \*************************************************************************/
/*! exports provided: TextAnalyzerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAnalyzerService", function() { return TextAnalyzerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TextAnalyzerService {
}
TextAnalyzerService.ɵfac = function TextAnalyzerService_Factory(t) { return new (t || TextAnalyzerService)(); };
TextAnalyzerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TextAnalyzerService, factory: TextAnalyzerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/menu.component */ "TGkX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'genderly-front';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["main[_ngcontent-%COMP%] {\n  height: 100vh;\n  padding: 0 0 0 110px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtBQUNKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgcGFkZGluZzogMCAwIDAgMTEwcHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ "TGkX":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class MenuComponent {
    constructor() { }
    ngOnInit() {
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 20, vars: 0, consts: [[1, "avatar"], ["src", "/assets/avatar.png", "alt", "Avatar", 1, "avatar__image"], ["tabindex", "0", "routerLink", "/home", "routerLinkActive", "active"], [1, "fas", "fa-home"], ["routerLink", "/new", "routerLinkActive", "active"], [1, "far", "fa-file"], ["routerLink", "/config", "routerLinkActive", "active"], [1, "fas", "fa-cog"], ["routerLink", "/logout", "routerLinkActive", "active"], [1, "fas", "fa-sign-out-alt"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Nuevo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Configuraci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Salir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["nav[_ngcontent-%COMP%] {\n  background-color: #8B4C9E;\n  bottom: 0;\n  padding: 50px 0;\n  position: fixed;\n  top: 0;\n  width: 110px;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  align-items: center;\n  background-color: #f7fafc;\n  border-radius: 50%;\n  color: #4b6b94;\n  display: block;\n  display: flex;\n  font-size: 46px;\n  height: 75px;\n  justify-content: center;\n  margin: 0 auto;\n  overflow: hidden;\n  width: 75px;\n}\n\n.avatar__image[_ngcontent-%COMP%] {\n  width: 75px;\n}\n\nol[_ngcontent-%COMP%] {\n  list-style: none;\n  margin-top: 40px;\n  padding: 0;\n}\n\nli[_ngcontent-%COMP%] {\n  align-items: center;\n  border-top: 2px solid #773E88;\n  color: #f7fafc;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  outline: none;\n  padding: 20px 0;\n}\n\nli[_ngcontent-%COMP%]:hover, li[_ngcontent-%COMP%]:focus {\n  background-color: #773E88;\n}\n\nli[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n\nli[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 6px;\n}\n\nli.active[_ngcontent-%COMP%] {\n  background-color: #5C3069;\n  border-top: 2px solid #5C3069;\n}\n\nli.active[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  border-top: 2px solid #5C3069;\n}\n\nli[_ngcontent-%COMP%]:last-child {\n  border-bottom: 2px solid #773E88;\n}\n\nli[_ngcontent-%COMP%]:last-child.active {\n  border-bottom: 2px solid #5C3069;\n}\n\nli[_ngcontent-%COMP%]:first-child {\n  border-top: none;\n}\n\nli[_ngcontent-%COMP%]:first-child.active {\n  border-top: none;\n}\n\n.logo[_ngcontent-%COMP%] {\n  bottom: 5px;\n  left: 4px;\n  position: absolute;\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUNJO0VBQ0ksV0FBQTtBQUNSOztBQUdBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFBSjs7QUFHQTtFQUNJLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBQUo7O0FBRUk7RUFFSSx5QkFBQTtBQURSOztBQUlJO0VBQ0ksZUFBQTtBQUZSOztBQUtJO0VBQ0ksZUFBQTtBQUhSOztBQU1JO0VBQ0kseUJBQUE7RUFDQSw2QkFBQTtBQUpSOztBQU9JO0VBQ0ksNkJBQUE7QUFMUjs7QUFTQTtFQUNJLGdDQUFBO0FBTko7O0FBUUk7RUFDSSxnQ0FBQTtBQU5SOztBQVVBO0VBQ0ksZ0JBQUE7QUFQSjs7QUFTSTtFQUNJLGdCQUFBO0FBUFI7O0FBV0E7RUFDSSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQVJKIiwiZmlsZSI6Im1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4QjRDOUU7XG4gICAgYm90dG9tOiAwO1xuICAgIHBhZGRpbmc6IDUwcHggMDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMTBweDtcbn1cblxuLmF2YXRhciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmYWZjO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBjb2xvcjogIzRiNmI5NDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogNDZweDtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogNzVweDtcblxuICAgICZfX2ltYWdlIHtcbiAgICAgICAgd2lkdGg6IDc1cHg7XG4gICAgfVxufVxuXG5vbCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmxpIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjNzczRTg4O1xuICAgIGNvbG9yOiAjZjdmYWZjO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG5cbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzczRTg4O1xuICAgIH1cblxuICAgIGkge1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICB9XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1QzMwNjk7XG4gICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjNUMzMDY5O1xuICAgIH1cblxuICAgICYuYWN0aXZlICsgJiB7XG4gICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjNUMzMDY5O1xuICAgIH1cbn1cblxubGk6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM3NzNFODg7XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNUMzMDY5O1xuICAgIH1cbn1cblxubGk6Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgfVxufVxuXG4ubG9nb3tcbiAgICBib3R0b206IDVweDtcbiAgICBsZWZ0OiA0cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "TlSY":
/*!**************************************!*\
  !*** ./src/app/new/new.component.ts ***!
  \**************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_store_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/store/store.service */ "ooDN");
/* harmony import */ var _document_info_document_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../document-info/document-info.component */ "7BRp");
/* harmony import */ var _editable_page_editable_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../editable-page/editable-page.component */ "zVuQ");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../button/button.component */ "be9G");
/* harmony import */ var _findings_findings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../findings/findings.component */ "3dzQ");






class NewComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
    }
    triggerAnalyzeText(event) {
        this.store.triggerTextAnalysis();
    }
}
NewComponent.ɵfac = function NewComponent_Factory(t) { return new (t || NewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_store_store_service__WEBPACK_IMPORTED_MODULE_1__["StoreService"])); };
NewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewComponent, selectors: [["app-new"]], decls: 8, vars: 0, consts: [[1, "grid"], [1, "page-container"], ["text", "Analizar texto", "theme", "primary", "extra-classes", "page-container__main-btn", 3, "buttonClickedEvent"]], template: function NewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-document-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-editable-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("buttonClickedEvent", function NewComponent_Template_app_button_buttonClickedEvent_5_listener($event) { return ctx.triggerAnalyzeText($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-findings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_document_info_document_info_component__WEBPACK_IMPORTED_MODULE_2__["DocumentInfoComponent"], _editable_page_editable_page_component__WEBPACK_IMPORTED_MODULE_3__["EditablePageComponent"], _button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"], _findings_findings_component__WEBPACK_IMPORTED_MODULE_5__["FindingsComponent"]], styles: [".grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr minmax(auto, 800px) 1fr;\n  height: 50px;\n  margin: 0 auto;\n}\n\n.page-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  padding: 20px 0;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25ldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxrREFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0YiLCJmaWxlIjoibmV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBtaW5tYXgoYXV0bywgODAwcHgpIDFmcjtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnBhZ2UtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogMjBweCAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4iXX0= */"] });


/***/ }),

/***/ "XjNI":
/*!***********************************************************************************!*\
  !*** ./src/app/services/text-analyzer-service/hardcoded-text-analyzer.service.ts ***!
  \***********************************************************************************/
/*! exports provided: HardCodedTextAnalyzerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HardCodedTextAnalyzerService", function() { return HardCodedTextAnalyzerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _store_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/store.service */ "ooDN");


class HardCodedTextAnalyzerService {
    constructor(store) {
        this.store = store;
        this.notInclusivePhrases = [
            {
                text: 'Los autores interesados',
                matchRegex: new RegExp('(los autores interesados)', 'ig')
            },
            {
                text: 'todos los colombianos',
                matchRegex: new RegExp('(todos los colombianos)', 'ig')
            },
            {
                text: 'indefensos asesinados',
                matchRegex: new RegExp('(indefensos asesinados)', 'ig')
            },
            {
                text: 'y presentados',
                matchRegex: new RegExp('(y presentados)', 'ig')
            },
            {
                text: 'Para que los lectores',
                matchRegex: new RegExp('(Para que los lectores)', 'ig')
            },
            {
                text: 'la suma de muchachos engañados y ejecutados',
                matchRegex: new RegExp('(la suma de muchachos engañados y ejecutados)', 'ig')
            },
            {
                text: 'guerrilleros muertos en combate',
                matchRegex: new RegExp('(guerrilleros muertos en combate)', 'ig')
            }
        ];
        this.recommendationMessages = {
            'general': {
                intro: '<span class="popup__word">“#WORD#”</span> puede tener una connotación excluyente. Se sugieren alternativas de escritura que incorporen un lenguaje con <a href="https://www.un.org/es/gender-inclusive-language/guidelines.shtml" target="_blank" >sensibilidad de genero.</a>',
            }
        };
        this.wordsWithRecomendations = {
            'todos': {
                category: 'Adjetivo indefinido',
                recommendationMessage: 'general',
            },
            'los': {
                category: 'Artículo definido',
                recommendationMessage: 'general',
            },
            'colombianos': {
                category: 'Adjetivo gentilicio',
                recommendationMessage: 'general',
            },
            'presentados': {
                category: 'Participio',
                recommendationMessage: 'general',
            },
            'muchachos': {
                category: 'Sustantivo común',
                recommendationMessage: 'general',
            },
            'engañados': {
                category: 'Participio',
                recommendationMessage: 'general',
            },
            'ejecutados': {
                category: 'Participio',
                recommendationMessage: 'general',
            },
            'indefensos': {
                category: 'Adjetivo calificativo',
                recommendationMessage: 'general',
            },
            'asesinados': {
                category: 'Participio',
                recommendationMessage: 'general',
            },
            'guerrilleros': {
                category: 'Sustantivo común',
                recommendationMessage: 'general',
            },
            'muertos': {
                category: 'Adjetivo calificativo',
                recommendationMessage: 'general',
            },
            'lectores': {
                category: 'Sustantivo común',
                recommendationMessage: 'general',
            },
            'autores': {
                category: 'Sustantivo común',
                recommendationMessage: 'general',
            },
            'interesados': {
                category: 'Adjetivo de valor adverbial',
                recommendationMessage: 'general',
            }
        };
        this.detectHTMLTagRegex = /(<([^>]+)>)/ig;
    }
    analyzeText(text) {
        return new Promise((resolve, rejec) => {
            this.store.cleanRecommendations();
            text = this.cleanText(text);
            const textWithRecommendation = this.getTextWithRecommendation(text);
            this.store.triggerTextAnalyzed();
            setTimeout(() => resolve(textWithRecommendation), 500);
        });
    }
    cleanText(text) {
        return text.replace(this.detectHTMLTagRegex, '');
    }
    getTextWithRecommendation(text) {
        for (const phrase of this.notInclusivePhrases) {
            text = this.getProcessedPhrase(phrase, text);
        }
        return text;
    }
    getProcessedPhrase(phrase, text) {
        const phraseRegex = phrase.matchRegex;
        return text.replace(phraseRegex, (match) => {
            const words = match.split(' ');
            return words.map((word) => this.analyzeWord(word)).join(' ');
        });
    }
    analyzeWord(word) {
        return this.wordsWithRecomendations[word.toLowerCase()] ?
            this.getRecommendedWord(word, this.wordsWithRecomendations[word.toLowerCase()]) :
            word;
    }
    getRecommendedWord(word, recommendation) {
        this.store.insertRecommendationMessage(recommendation.recommendationMessage, this.recommendationMessages[recommendation.recommendationMessage]);
        const recommendationId = this.store.insertRecommendation(recommendation);
        return `<span class="word" data-recommendation-id="${recommendationId}" data-word="${word}">${word}</span>`;
    }
}
HardCodedTextAnalyzerService.ɵfac = function HardCodedTextAnalyzerService_Factory(t) { return new (t || HardCodedTextAnalyzerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_store_store_service__WEBPACK_IMPORTED_MODULE_1__["StoreService"])); };
HardCodedTextAnalyzerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HardCodedTextAnalyzerService, factory: HardCodedTextAnalyzerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu/menu.component */ "TGkX");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new/new.component */ "TlSY");
/* harmony import */ var _editable_page_editable_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editable-page/editable-page.component */ "zVuQ");
/* harmony import */ var _services_text_analyzer_service_text_analyzer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/text-analyzer-service/text-analyzer.service */ "O0Vk");
/* harmony import */ var _services_text_analyzer_service_hardcoded_text_analyzer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/text-analyzer-service/hardcoded-text-analyzer.service */ "XjNI");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./button/button.component */ "be9G");
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./popup/popup.component */ "GvNj");
/* harmony import */ var _document_info_document_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./document-info/document-info.component */ "7BRp");
/* harmony import */ var _findings_findings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./findings/findings.component */ "3dzQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _services_text_analyzer_service_text_analyzer_service__WEBPACK_IMPORTED_MODULE_7__["TextAnalyzerService"],
            useClass: _services_text_analyzer_service_hardcoded_text_analyzer_service__WEBPACK_IMPORTED_MODULE_8__["HardCodedTextAnalyzerService"]
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _new_new_component__WEBPACK_IMPORTED_MODULE_5__["NewComponent"],
        _editable_page_editable_page_component__WEBPACK_IMPORTED_MODULE_6__["EditablePageComponent"],
        _button_button_component__WEBPACK_IMPORTED_MODULE_9__["ButtonComponent"],
        _popup_popup_component__WEBPACK_IMPORTED_MODULE_10__["PopupComponent"],
        _document_info_document_info_component__WEBPACK_IMPORTED_MODULE_11__["DocumentInfoComponent"],
        _findings_findings_component__WEBPACK_IMPORTED_MODULE_12__["FindingsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "be9G":
/*!********************************************!*\
  !*** ./src/app/button/button.component.ts ***!
  \********************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ButtonComponent {
    constructor() {
        this.buttonClickedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.themeClasses = {
            'primary': 'button--primary'
        };
        this.themeClass = 'button--primary';
    }
    ngOnInit() {
        this.themeClass = this.themeClasses[this.theme] || this.themeClass;
    }
    onClick(event) {
        this.buttonClickedEvent.emit(event);
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["app-button"]], inputs: { text: "text", theme: "theme", extraClasses: ["extra-classes", "extraClasses"] }, outputs: { buttonClickedEvent: "buttonClickedEvent" }, decls: 2, vars: 5, consts: [[3, "click"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonComponent_Template_button_click_0_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("button ", ctx.themeClass, " ", ctx.extraClasses, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.text, "\n");
    } }, styles: [".button[_ngcontent-%COMP%] {\n  background: #8B4C9E;\n  border-radius: 7px;\n  border: none;\n  box-shadow: 0 10px 10px -4px #696969;\n  color: #f7fafc;\n  cursor: pointer;\n  display: inline-block;\n  display: inline-block;\n  line-height: 1;\n  outline: none;\n  padding: 1rem 2rem;\n  text-align: center;\n  text-decoration: none;\n}\n.button[_ngcontent-%COMP%]:hover {\n  background-color: #773E88;\n}\n.button[_ngcontent-%COMP%]:active {\n  background-color: #5C3069;\n}\n.page-container__main-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 35px;\n  right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2J1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUNGO0FBQ0U7RUFDRSx5QkFBQTtBQUNKO0FBRUU7RUFDRSx5QkFBQTtBQUFKO0FBSUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBREYiLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICM4QjRDOUU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiAwIDEwcHggMTBweCAtNHB4ICM2OTY5Njk7XG4gIGNvbG9yOiAjZjdmYWZjO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsaW5lLWhlaWdodDogMTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzczRTg4O1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1QzMwNjk7XG4gIH1cbn1cblxuLnBhZ2UtY29udGFpbmVyX19tYWluLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAzNXB4O1xuICByaWdodDogMTVweDtcbn1cblxuIl19 */"] });


/***/ }),

/***/ "ooDN":
/*!*************************************************!*\
  !*** ./src/app/services/store/store.service.ts ***!
  \*************************************************/
/*! exports provided: StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return StoreService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class StoreService {
    constructor() {
        this.triggerAnalysis$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.triggerTextAnalysed$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.recommendationId = 0;
        this.recommendations = [];
        this.messages = {};
    }
    triggerTextAnalysis() {
        this.triggerAnalysis$.next(true);
    }
    getTriggerTextAnalysis$() {
        return this.triggerAnalysis$.asObservable();
    }
    cleanRecommendations() {
        this.recommendationId = 0;
        this.recommendations = [];
        this.messages = {};
    }
    insertRecommendation(recommendation) {
        this.recommendations[this.recommendationId] = recommendation;
        return this.recommendationId++;
    }
    insertRecommendationMessage(key, message) {
        this.messages[key] = message;
    }
    getRecommendation(id) {
        const recommendation = this.recommendations[id];
        const message = this.messages[recommendation['recommendationMessage']];
        return Object.assign(Object.assign({}, recommendation), { message });
    }
    triggerTextAnalyzed(analyzed = true) {
        this.triggerTextAnalysed$.next(analyzed);
    }
    getTriggerTextAnalyzed$() {
        return this.triggerTextAnalysed$.asObservable();
    }
}
StoreService.ɵfac = function StoreService_Factory(t) { return new (t || StoreService)(); };
StoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: StoreService, factory: StoreService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new/new.component */ "TlSY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'new', component: _new_new_component__WEBPACK_IMPORTED_MODULE_2__["NewComponent"] },
    { path: 'config', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'logout', component: _new_new_component__WEBPACK_IMPORTED_MODULE_2__["NewComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zVuQ":
/*!**********************************************************!*\
  !*** ./src/app/editable-page/editable-page.component.ts ***!
  \**********************************************************/
/*! exports provided: EditablePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditablePageComponent", function() { return EditablePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_text_analyzer_service_text_analyzer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/text-analyzer-service/text-analyzer.service */ "O0Vk");
/* harmony import */ var _services_store_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/store/store.service */ "ooDN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../popup/popup.component */ "GvNj");






const _c0 = ["page"];
const _c1 = function (a0, a2, a3) { return { "display": a0, "position": "absolute", "left": a2, "top": a3 }; };
class EditablePageComponent {
    constructor(textAnalyzerService, store, changeDetector) {
        this.textAnalyzerService = textAnalyzerService;
        this.store = store;
        this.changeDetector = changeDetector;
        this.timeToWaitAfterTypingFinish = 1000;
        this.isLoading = false;
        this.recommendations = [];
        this.popupVisible = false;
        this.popupXPos = '0';
        this.popupYPos = '0';
        this.popupData = { word: '', id: null };
    }
    ngOnInit() {
        this.store.getTriggerTextAnalysis$().subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = true;
            yield this.handleTypingFinished();
            this.isLoading = false;
        }));
    }
    ngAfterViewInit() {
        this.addListeners();
    }
    handleTypingFinished() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.popupVisible = false;
            const typedText = (_a = this.page) === null || _a === void 0 ? void 0 : _a.nativeElement.innerHTML;
            const analyzedText = yield this.textAnalyzerService.analyzeText(typedText);
            this.page.nativeElement.innerHTML = analyzedText;
        });
    }
    addListeners() {
        this.page.nativeElement.addEventListener('click', (event) => {
            this.listenPageClick(event);
            this.changeDetector.detectChanges();
        });
    }
    listenPageClick(event) {
        this.popupVisible = false;
        if (this.wasRecommendationClicked(event)) {
            this.updateRecommendationInfo(event);
            this.showRecommendation(event);
        }
    }
    updateRecommendationInfo(event) {
        const clickedElement = event.target;
        const id = clickedElement.dataset.recommendationId;
        const word = clickedElement.dataset.word;
        this.popupData = {
            word,
            id
        };
    }
    wasRecommendationClicked(event) {
        const element = event.target;
        return element.classList.contains('word');
    }
    showRecommendation(event) {
        const { x, y } = this.getCoordinatesToMovePopup(event);
        this.popupXPos = `${x}px`;
        this.popupYPos = `${y}px`;
        this.popupVisible = true;
    }
    getCoordinatesToMovePopup(event) {
        const bounds = this.page.nativeElement.getBoundingClientRect();
        const clickedElement = event.target;
        const clickedElementWidthHalf = clickedElement.offsetWidth / 2;
        const clickedElementHeight = clickedElement.offsetHeight * 2;
        const x = clickedElement.offsetLeft + clickedElementWidthHalf;
        const y = clickedElement.offsetTop + clickedElementHeight;
        return { x, y };
    }
}
EditablePageComponent.ɵfac = function EditablePageComponent_Factory(t) { return new (t || EditablePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_text_analyzer_service_text_analyzer_service__WEBPACK_IMPORTED_MODULE_2__["TextAnalyzerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_store_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
EditablePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditablePageComponent, selectors: [["app-editable-page"]], viewQuery: function EditablePageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.page = _t.first);
    } }, decls: 5, vars: 8, consts: [["contenteditable", "", 1, "page"], ["page", ""], [1, "popup-container", 3, "ngStyle"], [3, "data"]], template: function EditablePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Aunque todos los colombianos debemos rechazar una amenaza de muerte contra Iv\u00E1n Duque \u2013o contra el m\u00E1s modesto ciudadano\u2013, creo que toda la tinta, los minutos al aire, los trinos, las columnas, los\u00A0bytes\u00A0y los extras de \u00FAltima hora que se han ocupado de esa discutible noticia habr\u00EDan podido utilizarse mucho mejor analizando a fondo la informaci\u00F3n suministrada por la JEP, seg\u00FAn la cual, en el r\u00E9gimen de la seguridad democr\u00E1tica, la cifra de j\u00F3venes indefensos asesinados por el Ej\u00E9rcito Nacional, y presentados luego como guerrilleros muertos en combate, no fue de 2.248 como se dec\u00EDa oficialmente hasta ahora, sino que super\u00F3 por mucho ese n\u00FAmero, para llegar a la aterradora cantidad de 6.402. Para que los lectores se hagan una idea de esta monstruosidad, la suma de muchachos enga\u00F1ados y ejecutados a sangre fr\u00EDa entre 2002 y 2008 equivale a dos por cada letra que hay en esta columna.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-popup", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("page--loading", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](4, _c1, ctx.popupVisible ? "block" : "none", ctx.popupXPos, ctx.popupYPos));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.popupData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _popup_popup_component__WEBPACK_IMPORTED_MODULE_5__["PopupComponent"]], styles: [".page[_ngcontent-%COMP%] {\n  background-color: #fff;\n  box-shadow: 0 15px 35px 0 rgba(60, 66, 87, 0.08), 0 5px 15px 0 rgba(0, 0, 0, 0.12);\n  color: #464545;\n  font-family: \"Hind\", sans-serif;\n  height: 100%;\n  line-height: 1.5em;\n  outline: none;\n  \n  padding: 50px;\n  position: relative;\n}\n\n.page--loading[_ngcontent-%COMP%]::before {\n  background-color: rgba(0, 0, 0, 0.5);\n  bottom: 0;\n  content: \"\";\n  display: block;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 1;\n}\n\n[_nghost-%COMP%]     .word {\n  background-color: #dfdff5;\n  display: inline-block;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VkaXRhYmxlLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGtGQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQ0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFDRiIsImZpbGUiOiJlZGl0YWJsZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDE1cHggMzVweCAwIHJnYig2MCA2NiA4NyAvIDglKSwgMCA1cHggMTVweCAwIHJnYigwIDAgMCAvIDEyJSk7XG4gIGNvbG9yOiAjNDY0NTQ1O1xuICBmb250LWZhbWlseTogJ0hpbmQnLCBzYW5zLXNlcmlmO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgb3V0bGluZTogbm9uZTtcbiAgLypvdmVyZmxvdy15OiBzY3JvbGw7Ki9cbiAgcGFkZGluZzogNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucGFnZS0tbG9hZGluZzo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMDAwLCAuNSk7XG4gIGJvdHRvbTogMDtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbjpob3N0IDo6bmctZGVlcCAud29yZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmRmZjU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"] });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map