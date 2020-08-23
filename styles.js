(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--14-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--14-3!./node_modules/sass-loader/dist/cjs.js??ref--14-4!./src/styles.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/* Reset styles */\n* {\n  box-sizing: border-box;\n}\nbutton {\n  background: #00a3e2;\n  border-radius: 5px;\n  border: none;\n  color: #000;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 14px;\n  line-height: 1;\n  margin: 0;\n  padding: 10px 20px;\n  text-align: center;\n  text-decoration: none;\n  margin: 10px 15px;\n}\ninput[type=text] {\n  border: 0;\n  font-size: 12px;\n  padding: 7px;\n  width: 100%;\n}\nlabel {\n  cursor: pointer;\n  vertical-align: middle;\n}\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\np {\n  margin: 0;\n}\np ~ p {\n  margin: 15px;\n}\nh3 {\n  font-size: 15px;\n  margin: 5px 0;\n}\nbody {\n  margin: 0;\n  font-family: \"Roboto\", \"Montserrat\", sans-serif;\n}\n.modal {\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.6);\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n}\n.modal__title {\n  margin: 0;\n}\n.modal__close {\n  cursor: pointer;\n}\n.modal__content-wrapper {\n  background-color: #fff;\n  height: 100%;\n  overflow-y: auto;\n  width: 100%;\n}\n@media screen and (min-width: 684px) {\n  .modal__content-wrapper {\n    border-radius: 10px;\n    height: auto;\n    max-width: 500px;\n    overflow-y: initial;\n  }\n}\n.modal__content-header {\n  background-color: #00a3e2;\n  color: #fff;\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n}\n@media screen and (min-width: 684px) {\n  .modal__content-header {\n    border-radius: 10px 10px 0 0;\n  }\n}\n.modal__content-footer {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}", "",{"version":3,"sources":["styles.scss","styles/_resets.scss","styles/_colors.scss","styles/_initial-styles.scss","styles/_variables.scss","styles/_generics.scss","styles/_mixins.scss"],"names":[],"mappings":"AAAA,8EAAA;ACAA,iBAAA;AACA;EACE,sBAAA;ADEF;ACCA;EACE,mBCLW;EDMX,kBAAA;EACA,YAAA;EACA,WCTM;EDUN,WCHM;EDIN,eAAA;EACA,qBAAA;EACA,eAAA;EACA,cAAA;EACA,SAAA;EACA,kBAAA;EACA,kBAAA;EACA,qBAAA;EACA,iBAAA;ADEF;ACCA;EACE,SAAA;EACA,eAAA;EACA,YAAA;EACA,WAAA;ADEF;ACCA;EACE,eAAA;EACA,sBAAA;ADEF;ACCA;EACE,gBAAA;EACA,SAAA;EACA,UAAA;ADEF;ACCA;EACE,SAAA;ADEF;ACAE;EACE,YAAA;ADEJ;ACEA;EACE,eAAA;EACA,aAAA;ADCF;AGlDA;EACE,SAAA;EACA,+CCSY;AJ4Cd;AKxDA;EACE,mBAAA;EACA,oCAAA;EACA,aAAA;EACA,YAAA;EACA,uBAAA;EACA,eAAA;EACA,MAAA;EACA,WAAA;EACA,UAAA;AL2DF;AKzDE;EACE,SAAA;AL2DJ;AKxDE;EACE,eAAA;AL0DJ;AKvDE;EACE,sBHbI;EGcJ,YAAA;EACA,gBAAA;EACA,WAAA;ALyDJ;AMxEE;EDWA;IAOI,mBAAA;IACA,YAAA;IACA,gBAAA;IACA,mBAAA;EL0DJ;AACF;AKvDE;EACE,yBHjCS;EGkCT,WH5BI;EG6BJ,aAAA;EACA,8BAAA;EACA,aAAA;ALyDJ;AMvFE;EDyBA;IAQI,4BAAA;EL0DJ;AACF;AKvDE;EACE,mBAAA;EACA,aAAA;EACA,eAAA;EACA,uBAAA;ALyDJ","file":"styles.scss","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n@import './styles/colors';\n@import './styles/variables';\n@import './styles/mixins';\n\n@import './styles/resets';\n@import './styles/initial-styles';\n\n@import './styles/generics';","/* Reset styles */\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbutton {\r\n  background: $blue-light;\r\n  border-radius: 5px;\r\n  border: none;\r\n  color: $black;\r\n  color: $white;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-size: 14px;\r\n  line-height: 1;\r\n  margin: 0;\r\n  padding: 10px 20px;\r\n  text-align: center; \r\n  text-decoration: none;\r\n  margin: 10px 15px;\r\n}\r\n\r\ninput[type=text] {\r\n  border: 0;\r\n  font-size: 12px;\r\n  padding: 7px;\r\n  width: 100%;\r\n}\r\n\r\nlabel {\r\n  cursor: pointer;\r\n  vertical-align: middle;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\np {\r\n  margin: 0;\r\n\r\n  & ~ & {\r\n    margin: 15px;\r\n  }\r\n}\r\n\r\nh3 {\r\n  font-size: 15px;\r\n  margin: 5px 0;\r\n}","$black: #000;\r\n$blue-light: #00a3e2;\r\n$gray-light-2: #82667C;\r\n$gray-light-3: #e5e5e5;\r\n$gray-light-4: #f6f6f5;\r\n$gray-light: #f9f8f7;\r\n$gray: #876F5D;\r\n$white: #fff;\r\n$red: #C90D0D;\r\n\r\n$text-primary: $gray-light-2;\r\n$text-seconday: $gray;","  \r\nbody {\r\n  margin: 0;\r\n  font-family: $font-roboto;\r\n}\r\n","$breakpoints: (\r\n  small: 684px,\r\n  medium: 768px,\r\n  x-medium: 820px,\r\n  large: 1024px,\r\n  x-large: 1440px\r\n);\r\n\r\n$default-breakpoint: map-get($breakpoints, small);\r\n\r\n$font-bold: 700;\r\n\r\n$font-roboto: 'Roboto', 'Montserrat', sans-serif;",".modal {\r\n  align-items: center;\r\n  background-color: rgba($black, .6);\r\n  display: flex;\r\n  height: 100%;\r\n  justify-content: center;\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n  z-index: 1;\r\n\r\n  &__title {\r\n    margin: 0;\r\n  }\r\n\r\n  &__close {\r\n    cursor: pointer;\r\n  }\r\n\r\n  &__content-wrapper {\r\n    background-color: $white;\r\n    height: 100%;\r\n    overflow-y: auto;\r\n    width: 100%;\r\n\r\n    @include from(small) {\r\n      border-radius: 10px;\r\n      height: auto;\r\n      max-width: 500px;\r\n      overflow-y: initial;\r\n    }\r\n  }\r\n\r\n  &__content-header {\r\n    background-color: $blue-light;\r\n    color: $white;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 10px;\r\n\r\n    @include from(small) {\r\n      border-radius: 10px 10px 0 0;\r\n    }\r\n  }\r\n\r\n  &__content-footer {\r\n    align-items: center;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n  }\r\n}","\r\n@mixin from($breakpoint) {\r\n  $breakpoint-val: $default-breakpoint;\r\n\r\n  @if map-has-key($map: $breakpoints, $key: $breakpoint) {\r\n    $breakpoint-val: map-get($breakpoints, $breakpoint);\r\n  }\r\n\r\n  @media screen and (min-width: #{$breakpoint-val}) {\r\n    @content;\r\n  }\r\n}"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--14-1!../node_modules/postcss-loader/src??embedded!../node_modules/resolve-url-loader??ref--14-3!../node_modules/sass-loader/dist/cjs.js??ref--14-4!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Desarrollo\jobsity_test\calendar\src\styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map