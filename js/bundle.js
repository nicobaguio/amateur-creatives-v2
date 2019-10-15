/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/bundle/bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/bundle/_amateur-creatives.js":
/*!*****************************************!*\
  !*** ./js/bundle/_amateur-creatives.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hamburger = document.querySelector('.hamburger');
var page_overlay = document.querySelector('#page-overlay');
var body_container = document.querySelector('#body-container');
var header_links = document.querySelectorAll('#menu-header-container .menu-item a');
var social_icons = document.querySelectorAll('.social-icon');
var isDesktop = window.matchMedia("(min-width: 1023px)");

var DesktopTransform = function DesktopTransform() {
  var isDesktop = window.matchMedia("(min-width: 1024px)").matches;
  console.log(isDesktop);
  hamburger.classList.toggle('is-active', isDesktop);
};

document.addEventListener('DOMContentLoaded', DesktopTransform);
window.addEventListener('resize', DesktopTransform, false);
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('is-active');

  if (isDesktop.matches) {
    console.log('Desktop...');
    body_container.classList.toggle('small');
  } else {
    body_container.classList.toggle('reveal');
    document.querySelector('body').classList.toggle('disabled-scroll');
  }
});
page_overlay.addEventListener('scroll', function () {
  header_links.forEach(function (a) {
    rect = a.getBoundingClientRect();
    height = a.offsetHeight;
    offset = 165 - height;
    shouldBeHidden = rect.top < offset;
    a.classList.toggle('disabled', shouldBeHidden);
  });
}); // for ( let i = 0; i < social_icons.length ; i++ ) {
//     social_icons[i].addEventListener('mouseover', function() {
//         console.log('Hovered on: ' + i)
//     })    
// }

function hovered() {
  this.classList.toggle('hovered');
}

social_icons.forEach(function (icon) {
  icon.addEventListener('mouseenter', hovered);
  icon.addEventListener('mouseleave', hovered);
});

/***/ }),

/***/ "./js/bundle/_flickity-custom.js":
/*!***************************************!*\
  !*** ./js/bundle/_flickity-custom.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flickity */ "./node_modules/flickity/js/index.js");
/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flickity__WEBPACK_IMPORTED_MODULE_0__);


if (document.querySelector("#mobile .main-carousel")) {
  var flkty = new flickity__WEBPACK_IMPORTED_MODULE_0___default.a('#mobile .main-carousel', {
    contain: true,
    prevNextButtons: false,
    imagesLoaded: true
  }); // console.log('Flickity!');
} else {
  console.log('No flickity!');
}

/***/ }),

/***/ "./js/bundle/_typed-custom.js":
/*!************************************!*\
  !*** ./js/bundle/_typed-custom.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/lib/typed.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_0__);

var typed = new typed_js__WEBPACK_IMPORTED_MODULE_0___default.a("#typed", {
  stringsElement: '#typed-strings',
  typeSpeed: 48 // loop: true

});

/***/ }),

/***/ "./js/bundle/bundle.js":
/*!*****************************!*\
  !*** ./js/bundle/bundle.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _amateur_creatives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_amateur-creatives */ "./js/bundle/_amateur-creatives.js");
/* harmony import */ var _amateur_creatives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_amateur_creatives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _typed_custom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_typed-custom */ "./js/bundle/_typed-custom.js");
/* harmony import */ var _flickity_custom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_flickity-custom */ "./js/bundle/_flickity-custom.js");




/***/ }),

/***/ "./node_modules/desandro-matches-selector/matches-selector.js":
/*!********************************************************************!*\
  !*** ./node_modules/desandro-matches-selector/matches-selector.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
(function (window, factory) {
  /*global define: false, module: false */
  'use strict'; // universal module definition

  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory() {
  'use strict';

  var matchesMethod = function () {
    var ElemProto = window.Element.prototype; // check for the standard method name first

    if (ElemProto.matches) {
      return 'matches';
    } // check un-prefixed


    if (ElemProto.matchesSelector) {
      return 'matchesSelector';
    } // check vendor prefixes


    var prefixes = ['webkit', 'moz', 'ms', 'o'];

    for (var i = 0; i < prefixes.length; i++) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';

      if (ElemProto[method]) {
        return method;
      }
    }
  }();

  return function matchesSelector(elem, selector) {
    return elem[matchesMethod](selector);
  };
});

/***/ }),

/***/ "./node_modules/ev-emitter/ev-emitter.js":
/*!***********************************************!*\
  !*** ./node_modules/ev-emitter/ev-emitter.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */
(function (global, factory) {
  // universal module definition

  /* jshint strict: false */

  /* globals define, module, window */
  if (true) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(typeof window != 'undefined' ? window : this, function () {
  "use strict";

  function EvEmitter() {}

  var proto = EvEmitter.prototype;

  proto.on = function (eventName, listener) {
    if (!eventName || !listener) {
      return;
    } // set events hash


    var events = this._events = this._events || {}; // set listeners array

    var listeners = events[eventName] = events[eventName] || []; // only add once

    if (listeners.indexOf(listener) == -1) {
      listeners.push(listener);
    }

    return this;
  };

  proto.once = function (eventName, listener) {
    if (!eventName || !listener) {
      return;
    } // add event


    this.on(eventName, listener); // set once flag
    // set onceEvents hash

    var onceEvents = this._onceEvents = this._onceEvents || {}; // set onceListeners object

    var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {}; // set flag

    onceListeners[listener] = true;
    return this;
  };

  proto.off = function (eventName, listener) {
    var listeners = this._events && this._events[eventName];

    if (!listeners || !listeners.length) {
      return;
    }

    var index = listeners.indexOf(listener);

    if (index != -1) {
      listeners.splice(index, 1);
    }

    return this;
  };

  proto.emitEvent = function (eventName, args) {
    var listeners = this._events && this._events[eventName];

    if (!listeners || !listeners.length) {
      return;
    } // copy over to avoid interference if .off() in listener


    listeners = listeners.slice(0);
    args = args || []; // once stuff

    var onceListeners = this._onceEvents && this._onceEvents[eventName];

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      var isOnce = onceListeners && onceListeners[listener];

      if (isOnce) {
        // remove listener
        // remove before trigger to prevent recursion
        this.off(eventName, listener); // unset once flag

        delete onceListeners[listener];
      } // trigger listener


      listener.apply(this, args);
    }

    return this;
  };

  proto.allOff = function () {
    delete this._events;
    delete this._onceEvents;
  };

  return EvEmitter;
});

/***/ }),

/***/ "./node_modules/fizzy-ui-utils/utils.js":
/*!**********************************************!*\
  !*** ./node_modules/fizzy-ui-utils/utils.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */
(function (window, factory) {
  // universal module definition

  /*jshint strict: false */

  /*globals define, module, require */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! desandro-matches-selector/matches-selector */ "./node_modules/desandro-matches-selector/matches-selector.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (matchesSelector) {
      return factory(window, matchesSelector);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory(window, matchesSelector) {
  'use strict';

  var utils = {}; // ----- extend ----- //
  // extends objects

  utils.extend = function (a, b) {
    for (var prop in b) {
      a[prop] = b[prop];
    }

    return a;
  }; // ----- modulo ----- //


  utils.modulo = function (num, div) {
    return (num % div + div) % div;
  }; // ----- makeArray ----- //


  var arraySlice = Array.prototype.slice; // turn element or nodeList into an array

  utils.makeArray = function (obj) {
    if (Array.isArray(obj)) {
      // use object if already an array
      return obj;
    } // return empty array if undefined or null. #6


    if (obj === null || obj === undefined) {
      return [];
    }

    var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';

    if (isArrayLike) {
      // convert nodeList to array
      return arraySlice.call(obj);
    } // array of single index


    return [obj];
  }; // ----- removeFrom ----- //


  utils.removeFrom = function (ary, obj) {
    var index = ary.indexOf(obj);

    if (index != -1) {
      ary.splice(index, 1);
    }
  }; // ----- getParent ----- //


  utils.getParent = function (elem, selector) {
    while (elem.parentNode && elem != document.body) {
      elem = elem.parentNode;

      if (matchesSelector(elem, selector)) {
        return elem;
      }
    }
  }; // ----- getQueryElement ----- //
  // use element as selector string


  utils.getQueryElement = function (elem) {
    if (typeof elem == 'string') {
      return document.querySelector(elem);
    }

    return elem;
  }; // ----- handleEvent ----- //
  // enable .ontype to trigger from .addEventListener( elem, 'type' )


  utils.handleEvent = function (event) {
    var method = 'on' + event.type;

    if (this[method]) {
      this[method](event);
    }
  }; // ----- filterFindElements ----- //


  utils.filterFindElements = function (elems, selector) {
    // make array of elems
    elems = utils.makeArray(elems);
    var ffElems = [];
    elems.forEach(function (elem) {
      // check that elem is an actual element
      if (!(elem instanceof HTMLElement)) {
        return;
      } // add elem if no selector


      if (!selector) {
        ffElems.push(elem);
        return;
      } // filter & find items if we have a selector
      // filter


      if (matchesSelector(elem, selector)) {
        ffElems.push(elem);
      } // find children


      var childElems = elem.querySelectorAll(selector); // concat childElems to filterFound array

      for (var i = 0; i < childElems.length; i++) {
        ffElems.push(childElems[i]);
      }
    });
    return ffElems;
  }; // ----- debounceMethod ----- //


  utils.debounceMethod = function (_class, methodName, threshold) {
    threshold = threshold || 100; // original method

    var method = _class.prototype[methodName];
    var timeoutName = methodName + 'Timeout';

    _class.prototype[methodName] = function () {
      var timeout = this[timeoutName];
      clearTimeout(timeout);
      var args = arguments;

      var _this = this;

      this[timeoutName] = setTimeout(function () {
        method.apply(_this, args);
        delete _this[timeoutName];
      }, threshold);
    };
  }; // ----- docReady ----- //


  utils.docReady = function (callback) {
    var readyState = document.readyState;

    if (readyState == 'complete' || readyState == 'interactive') {
      // do async to allow for other scripts to run. metafizzy/flickity#441
      setTimeout(callback);
    } else {
      document.addEventListener('DOMContentLoaded', callback);
    }
  }; // ----- htmlInit ----- //
  // http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/


  utils.toDashed = function (str) {
    return str.replace(/(.)([A-Z])/g, function (match, $1, $2) {
      return $1 + '-' + $2;
    }).toLowerCase();
  };

  var console = window.console;
  /**
   * allow user to initialize classes via [data-namespace] or .js-namespace class
   * htmlInit( Widget, 'widgetName' )
   * options are parsed from data-namespace-options
   */

  utils.htmlInit = function (WidgetClass, namespace) {
    utils.docReady(function () {
      var dashedNamespace = utils.toDashed(namespace);
      var dataAttr = 'data-' + dashedNamespace;
      var dataAttrElems = document.querySelectorAll('[' + dataAttr + ']');
      var jsDashElems = document.querySelectorAll('.js-' + dashedNamespace);
      var elems = utils.makeArray(dataAttrElems).concat(utils.makeArray(jsDashElems));
      var dataOptionsAttr = dataAttr + '-options';
      var jQuery = window.jQuery;
      elems.forEach(function (elem) {
        var attr = elem.getAttribute(dataAttr) || elem.getAttribute(dataOptionsAttr);
        var options;

        try {
          options = attr && JSON.parse(attr);
        } catch (error) {
          // log error, do not initialize
          if (console) {
            console.error('Error parsing ' + dataAttr + ' on ' + elem.className + ': ' + error);
          }

          return;
        } // initialize


        var instance = new WidgetClass(elem, options); // make available via $().data('namespace')

        if (jQuery) {
          jQuery.data(elem, namespace, instance);
        }
      });
    });
  }; // -----  ----- //


  return utils;
});

/***/ }),

/***/ "./node_modules/flickity/js/add-remove-cell.js":
/*!*****************************************************!*\
  !*** ./node_modules/flickity/js/add-remove-cell.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// add, remove cell
(function (window, factory) {
  // universal module definition

  /* jshint strict: false */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./flickity */ "./node_modules/flickity/js/flickity.js"), __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Flickity, utils) {
      return factory(window, Flickity, utils);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory(window, Flickity, utils) {
  'use strict'; // append cells to a document fragment

  function getCellsFragment(cells) {
    var fragment = document.createDocumentFragment();
    cells.forEach(function (cell) {
      fragment.appendChild(cell.element);
    });
    return fragment;
  } // -------------------------- add/remove cell prototype -------------------------- //


  var proto = Flickity.prototype;
  /**
   * Insert, prepend, or append cells
   * @param {Element, Array, NodeList} elems
   * @param {Integer} index
   */

  proto.insert = function (elems, index) {
    var cells = this._makeCells(elems);

    if (!cells || !cells.length) {
      return;
    }

    var len = this.cells.length; // default to append

    index = index === undefined ? len : index; // add cells with document fragment

    var fragment = getCellsFragment(cells); // append to slider

    var isAppend = index == len;

    if (isAppend) {
      this.slider.appendChild(fragment);
    } else {
      var insertCellElement = this.cells[index].element;
      this.slider.insertBefore(fragment, insertCellElement);
    } // add to this.cells


    if (index === 0) {
      // prepend, add to start
      this.cells = cells.concat(this.cells);
    } else if (isAppend) {
      // append, add to end
      this.cells = this.cells.concat(cells);
    } else {
      // insert in this.cells
      var endCells = this.cells.splice(index, len - index);
      this.cells = this.cells.concat(cells).concat(endCells);
    }

    this._sizeCells(cells);

    this.cellChange(index, true);
  };

  proto.append = function (elems) {
    this.insert(elems, this.cells.length);
  };

  proto.prepend = function (elems) {
    this.insert(elems, 0);
  };
  /**
   * Remove cells
   * @param {Element, Array, NodeList} elems
   */


  proto.remove = function (elems) {
    var cells = this.getCells(elems);

    if (!cells || !cells.length) {
      return;
    }

    var minCellIndex = this.cells.length - 1; // remove cells from collection & DOM

    cells.forEach(function (cell) {
      cell.remove();
      var index = this.cells.indexOf(cell);
      minCellIndex = Math.min(index, minCellIndex);
      utils.removeFrom(this.cells, cell);
    }, this);
    this.cellChange(minCellIndex, true);
  };
  /**
   * logic to be run after a cell's size changes
   * @param {Element} elem - cell's element
   */


  proto.cellSizeChange = function (elem) {
    var cell = this.getCell(elem);

    if (!cell) {
      return;
    }

    cell.getSize();
    var index = this.cells.indexOf(cell);
    this.cellChange(index);
  };
  /**
   * logic any time a cell is changed: added, removed, or size changed
   * @param {Integer} changedCellIndex - index of the changed cell, optional
   */


  proto.cellChange = function (changedCellIndex, isPositioningSlider) {
    var prevSelectedElem = this.selectedElement;

    this._positionCells(changedCellIndex);

    this._getWrapShiftCells();

    this.setGallerySize(); // update selectedIndex
    // try to maintain position & select previous selected element

    var cell = this.getCell(prevSelectedElem);

    if (cell) {
      this.selectedIndex = this.getCellSlideIndex(cell);
    }

    this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex);
    this.emitEvent('cellChange', [changedCellIndex]); // position slider

    this.select(this.selectedIndex); // do not position slider after lazy load

    if (isPositioningSlider) {
      this.positionSliderAtSelected();
    }
  }; // -----  ----- //


  return Flickity;
});

/***/ }),

/***/ "./node_modules/flickity/js/animate.js":
/*!*********************************************!*\
  !*** ./node_modules/flickity/js/animate.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// animate
(function (window, factory) {
  // universal module definition

  /* jshint strict: false */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (utils) {
      return factory(window, utils);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory(window, utils) {
  'use strict'; // -------------------------- animate -------------------------- //

  var proto = {};

  proto.startAnimation = function () {
    if (this.isAnimating) {
      return;
    }

    this.isAnimating = true;
    this.restingFrames = 0;
    this.animate();
  };

  proto.animate = function () {
    this.applyDragForce();
    this.applySelectedAttraction();
    var previousX = this.x;
    this.integratePhysics();
    this.positionSlider();
    this.settle(previousX); // animate next frame

    if (this.isAnimating) {
      var _this = this;

      requestAnimationFrame(function animateFrame() {
        _this.animate();
      });
    }
  };

  proto.positionSlider = function () {
    var x = this.x; // wrap position around

    if (this.options.wrapAround && this.cells.length > 1) {
      x = utils.modulo(x, this.slideableWidth);
      x = x - this.slideableWidth;
      this.shiftWrapCells(x);
    }

    this.setTranslateX(x, this.isAnimating);
    this.dispatchScrollEvent();
  };

  proto.setTranslateX = function (x, is3d) {
    x += this.cursorPosition; // reverse if right-to-left and using transform

    x = this.options.rightToLeft ? -x : x;
    var translateX = this.getPositionValue(x); // use 3D tranforms for hardware acceleration on iOS
    // but use 2D when settled, for better font-rendering

    this.slider.style.transform = is3d ? 'translate3d(' + translateX + ',0,0)' : 'translateX(' + translateX + ')';
  };

  proto.dispatchScrollEvent = function () {
    var firstSlide = this.slides[0];

    if (!firstSlide) {
      return;
    }

    var positionX = -this.x - firstSlide.target;
    var progress = positionX / this.slidesWidth;
    this.dispatchEvent('scroll', null, [progress, positionX]);
  };

  proto.positionSliderAtSelected = function () {
    if (!this.cells.length) {
      return;
    }

    this.x = -this.selectedSlide.target;
    this.velocity = 0; // stop wobble

    this.positionSlider();
  };

  proto.getPositionValue = function (position) {
    if (this.options.percentPosition) {
      // percent position, round to 2 digits, like 12.34%
      return Math.round(position / this.size.innerWidth * 10000) * 0.01 + '%';
    } else {
      // pixel positioning
      return Math.round(position) + 'px';
    }
  };

  proto.settle = function (previousX) {
    // keep track of frames where x hasn't moved
    if (!this.isPointerDown && Math.round(this.x * 100) == Math.round(previousX * 100)) {
      this.restingFrames++;
    } // stop animating if resting for 3 or more frames


    if (this.restingFrames > 2) {
      this.isAnimating = false;
      delete this.isFreeScrolling; // render position with translateX when settled

      this.positionSlider();
      this.dispatchEvent('settle', null, [this.selectedIndex]);
    }
  };

  proto.shiftWrapCells = function (x) {
    // shift before cells
    var beforeGap = this.cursorPosition + x;

    this._shiftCells(this.beforeShiftCells, beforeGap, -1); // shift after cells


    var afterGap = this.size.innerWidth - (x + this.slideableWidth + this.cursorPosition);

    this._shiftCells(this.afterShiftCells, afterGap, 1);
  };

  proto._shiftCells = function (cells, gap, shift) {
    for (var i = 0; i < cells.length; i++) {
      var cell = cells[i];
      var cellShift = gap > 0 ? shift : 0;
      cell.wrapShift(cellShift);
      gap -= cell.size.outerWidth;
    }
  };

  proto._unshiftCells = function (cells) {
    if (!cells || !cells.length) {
      return;
    }

    for (var i = 0; i < cells.length; i++) {
      cells[i].wrapShift(0);
    }
  }; // -------------------------- physics -------------------------- //


  proto.integratePhysics = function () {
    this.x += this.velocity;
    this.velocity *= this.getFrictionFactor();
  };

  proto.applyForce = function (force) {
    this.velocity += force;
  };

  proto.getFrictionFactor = function () {
    return 1 - this.options[this.isFreeScrolling ? 'freeScrollFriction' : 'friction'];
  };

  proto.getRestingPosition = function () {
    // my thanks to Steven Wittens, who simplified this math greatly
    return this.x + this.velocity / (1 - this.getFrictionFactor());
  };

  proto.applyDragForce = function () {
    if (!this.isDraggable || !this.isPointerDown) {
      return;
    } // change the position to drag position by applying force


    var dragVelocity = this.dragX - this.x;
    var dragForce = dragVelocity - this.velocity;
    this.applyForce(dragForce);
  };

  proto.applySelectedAttraction = function () {
    // do not attract if pointer down or no slides
    var dragDown = this.isDraggable && this.isPointerDown;

    if (dragDown || this.isFreeScrolling || !this.slides.length) {
      return;
    }

    var distance = this.selectedSlide.target * -1 - this.x;
    var force = distance * this.options.selectedAttraction;
    this.applyForce(force);
  };

  return proto;
});

/***/ }),

/***/ "./node_modules/flickity/js/cell.js":
/*!******************************************!*\
  !*** ./node_modules/flickity/js/cell.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Flickity.Cell
(function (window, factory) {
  // universal module definition

  /* jshint strict: false */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! get-size/get-size */ "./node_modules/get-size/get-size.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (getSize) {
      return factory(window, getSize);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory(window, getSize) {
  'use strict';

  function Cell(elem, parent) {
    this.element = elem;
    this.parent = parent;
    this.create();
  }

  var proto = Cell.prototype;

  proto.create = function () {
    this.element.style.position = 'absolute';
    this.element.setAttribute('aria-hidden', 'true');
    this.x = 0;
    this.shift = 0;
  };

  proto.destroy = function () {
    // reset style
    this.unselect();
    this.element.style.position = '';
    var side = this.parent.originSide;
    this.element.style[side] = '';
  };

  proto.getSize = function () {
    this.size = getSize(this.element);
  };

  proto.setPosition = function (x) {
    this.x = x;
    this.updateTarget();
    this.renderPosition(x);
  }; // setDefaultTarget v1 method, backwards compatibility, remove in v3


  proto.updateTarget = proto.setDefaultTarget = function () {
    var marginProperty = this.parent.originSide == 'left' ? 'marginLeft' : 'marginRight';
    this.target = this.x + this.size[marginProperty] + this.size.width * this.parent.cellAlign;
  };

  proto.renderPosition = function (x) {
    // render position of cell with in slider
    var side = this.parent.originSide;
    this.element.style[side] = this.parent.getPositionValue(x);
  };

  proto.select = function () {
    this.element.classList.add('is-selected');
    this.element.removeAttribute('aria-hidden');
  };

  proto.unselect = function () {
    this.element.classList.remove('is-selected');
    this.element.setAttribute('aria-hidden', 'true');
  };
  /**
   * @param {Integer} factor - 0, 1, or -1
  **/


  proto.wrapShift = function (shift) {
    this.shift = shift;
    this.renderPosition(this.x + this.parent.slideableWidth * shift);
  };

  proto.remove = function () {
    this.element.parentNode.removeChild(this.element);
  };

  return Cell;
});

/***/ }),

/***/ "./node_modules/flickity/js/drag.js":
/*!******************************************!*\
  !*** ./node_modules/flickity/js/drag.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// drag
(function (window, factory) {
  // universal module definition

  /* jshint strict: false */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./flickity */ "./node_modules/flickity/js/flickity.js"), __webpack_require__(/*! unidragger/unidragger */ "./node_modules/unidragger/unidragger.js"), __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Flickity, Unidragger, utils) {
      return factory(window, Flickity, Unidragger, utils);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory(window, Flickity, Unidragger, utils) {
  'use strict'; // ----- defaults ----- //

  utils.extend(Flickity.defaults, {
    draggable: '>1',
    dragThreshold: 3
  }); // ----- create ----- //

  Flickity.createMethods.push('_createDrag'); // -------------------------- drag prototype -------------------------- //

  var proto = Flickity.prototype;
  utils.extend(proto, Unidragger.prototype);
  proto._touchActionValue = 'pan-y'; // --------------------------  -------------------------- //

  var isTouch = 'createTouch' in document;
  var isTouchmoveScrollCanceled = false;

  proto._createDrag = function () {
    this.on('activate', this.onActivateDrag);
    this.on('uiChange', this._uiChangeDrag);
    this.on('deactivate', this.onDeactivateDrag);
    this.on('cellChange', this.updateDraggable); // TODO updateDraggable on resize? if groupCells & slides change
    // HACK - add seemingly innocuous handler to fix iOS 10 scroll behavior
    // #457, RubaXa/Sortable#973

    if (isTouch && !isTouchmoveScrollCanceled) {
      window.addEventListener('touchmove', function () {});
      isTouchmoveScrollCanceled = true;
    }
  };

  proto.onActivateDrag = function () {
    this.handles = [this.viewport];
    this.bindHandles();
    this.updateDraggable();
  };

  proto.onDeactivateDrag = function () {
    this.unbindHandles();
    this.element.classList.remove('is-draggable');
  };

  proto.updateDraggable = function () {
    // disable dragging if less than 2 slides. #278
    if (this.options.draggable == '>1') {
      this.isDraggable = this.slides.length > 1;
    } else {
      this.isDraggable = this.options.draggable;
    }

    if (this.isDraggable) {
      this.element.classList.add('is-draggable');
    } else {
      this.element.classList.remove('is-draggable');
    }
  }; // backwards compatibility


  proto.bindDrag = function () {
    this.options.draggable = true;
    this.updateDraggable();
  };

  proto.unbindDrag = function () {
    this.options.draggable = false;
    this.updateDraggable();
  };

  proto._uiChangeDrag = function () {
    delete this.isFreeScrolling;
  }; // -------------------------- pointer events -------------------------- //


  proto.pointerDown = function (event, pointer) {
    if (!this.isDraggable) {
      this._pointerDownDefault(event, pointer);

      return;
    }

    var isOkay = this.okayPointerDown(event);

    if (!isOkay) {
      return;
    }

    this._pointerDownPreventDefault(event);

    this.pointerDownFocus(event); // blur

    if (document.activeElement != this.element) {
      // do not blur if already focused
      this.pointerDownBlur();
    } // stop if it was moving


    this.dragX = this.x;
    this.viewport.classList.add('is-pointer-down'); // track scrolling

    this.pointerDownScroll = getScrollPosition();
    window.addEventListener('scroll', this);

    this._pointerDownDefault(event, pointer);
  }; // default pointerDown logic, used for staticClick


  proto._pointerDownDefault = function (event, pointer) {
    // track start event position
    // Safari 9 overrides pageX and pageY. These values needs to be copied. #779
    this.pointerDownPointer = {
      pageX: pointer.pageX,
      pageY: pointer.pageY
    }; // bind move and end events

    this._bindPostStartEvents(event);

    this.dispatchEvent('pointerDown', event, [pointer]);
  };

  var focusNodes = {
    INPUT: true,
    TEXTAREA: true,
    SELECT: true
  };

  proto.pointerDownFocus = function (event) {
    var isFocusNode = focusNodes[event.target.nodeName];

    if (!isFocusNode) {
      this.focus();
    }
  };

  proto._pointerDownPreventDefault = function (event) {
    var isTouchStart = event.type == 'touchstart';
    var isTouchPointer = event.pointerType == 'touch';
    var isFocusNode = focusNodes[event.target.nodeName];

    if (!isTouchStart && !isTouchPointer && !isFocusNode) {
      event.preventDefault();
    }
  }; // ----- move ----- //


  proto.hasDragStarted = function (moveVector) {
    return Math.abs(moveVector.x) > this.options.dragThreshold;
  }; // ----- up ----- //


  proto.pointerUp = function (event, pointer) {
    delete this.isTouchScrolling;
    this.viewport.classList.remove('is-pointer-down');
    this.dispatchEvent('pointerUp', event, [pointer]);

    this._dragPointerUp(event, pointer);
  };

  proto.pointerDone = function () {
    window.removeEventListener('scroll', this);
    delete this.pointerDownScroll;
  }; // -------------------------- dragging -------------------------- //


  proto.dragStart = function (event, pointer) {
    if (!this.isDraggable) {
      return;
    }

    this.dragStartPosition = this.x;
    this.startAnimation();
    window.removeEventListener('scroll', this);
    this.dispatchEvent('dragStart', event, [pointer]);
  };

  proto.pointerMove = function (event, pointer) {
    var moveVector = this._dragPointerMove(event, pointer);

    this.dispatchEvent('pointerMove', event, [pointer, moveVector]);

    this._dragMove(event, pointer, moveVector);
  };

  proto.dragMove = function (event, pointer, moveVector) {
    if (!this.isDraggable) {
      return;
    }

    event.preventDefault();
    this.previousDragX = this.dragX; // reverse if right-to-left

    var direction = this.options.rightToLeft ? -1 : 1;

    if (this.options.wrapAround) {
      // wrap around move. #589
      moveVector.x = moveVector.x % this.slideableWidth;
    }

    var dragX = this.dragStartPosition + moveVector.x * direction;

    if (!this.options.wrapAround && this.slides.length) {
      // slow drag
      var originBound = Math.max(-this.slides[0].target, this.dragStartPosition);
      dragX = dragX > originBound ? (dragX + originBound) * 0.5 : dragX;
      var endBound = Math.min(-this.getLastSlide().target, this.dragStartPosition);
      dragX = dragX < endBound ? (dragX + endBound) * 0.5 : dragX;
    }

    this.dragX = dragX;
    this.dragMoveTime = new Date();
    this.dispatchEvent('dragMove', event, [pointer, moveVector]);
  };

  proto.dragEnd = function (event, pointer) {
    if (!this.isDraggable) {
      return;
    }

    if (this.options.freeScroll) {
      this.isFreeScrolling = true;
    } // set selectedIndex based on where flick will end up


    var index = this.dragEndRestingSelect();

    if (this.options.freeScroll && !this.options.wrapAround) {
      // if free-scroll & not wrap around
      // do not free-scroll if going outside of bounding slides
      // so bounding slides can attract slider, and keep it in bounds
      var restingX = this.getRestingPosition();
      this.isFreeScrolling = -restingX > this.slides[0].target && -restingX < this.getLastSlide().target;
    } else if (!this.options.freeScroll && index == this.selectedIndex) {
      // boost selection if selected index has not changed
      index += this.dragEndBoostSelect();
    }

    delete this.previousDragX; // apply selection
    // TODO refactor this, selecting here feels weird
    // HACK, set flag so dragging stays in correct direction

    this.isDragSelect = this.options.wrapAround;
    this.select(index);
    delete this.isDragSelect;
    this.dispatchEvent('dragEnd', event, [pointer]);
  };

  proto.dragEndRestingSelect = function () {
    var restingX = this.getRestingPosition(); // how far away from selected slide

    var distance = Math.abs(this.getSlideDistance(-restingX, this.selectedIndex)); // get closet resting going up and going down

    var positiveResting = this._getClosestResting(restingX, distance, 1);

    var negativeResting = this._getClosestResting(restingX, distance, -1); // use closer resting for wrap-around


    var index = positiveResting.distance < negativeResting.distance ? positiveResting.index : negativeResting.index;
    return index;
  };
  /**
   * given resting X and distance to selected cell
   * get the distance and index of the closest cell
   * @param {Number} restingX - estimated post-flick resting position
   * @param {Number} distance - distance to selected cell
   * @param {Integer} increment - +1 or -1, going up or down
   * @returns {Object} - { distance: {Number}, index: {Integer} }
   */


  proto._getClosestResting = function (restingX, distance, increment) {
    var index = this.selectedIndex;
    var minDistance = Infinity;
    var condition = this.options.contain && !this.options.wrapAround ? // if contain, keep going if distance is equal to minDistance
    function (d, md) {
      return d <= md;
    } : function (d, md) {
      return d < md;
    };

    while (condition(distance, minDistance)) {
      // measure distance to next cell
      index += increment;
      minDistance = distance;
      distance = this.getSlideDistance(-restingX, index);

      if (distance === null) {
        break;
      }

      distance = Math.abs(distance);
    }

    return {
      distance: minDistance,
      // selected was previous index
      index: index - increment
    };
  };
  /**
   * measure distance between x and a slide target
   * @param {Number} x
   * @param {Integer} index - slide index
   */


  proto.getSlideDistance = function (x, index) {
    var len = this.slides.length; // wrap around if at least 2 slides

    var isWrapAround = this.options.wrapAround && len > 1;
    var slideIndex = isWrapAround ? utils.modulo(index, len) : index;
    var slide = this.slides[slideIndex];

    if (!slide) {
      return null;
    } // add distance for wrap-around slides


    var wrap = isWrapAround ? this.slideableWidth * Math.floor(index / len) : 0;
    return x - (slide.target + wrap);
  };

  proto.dragEndBoostSelect = function () {
    // do not boost if no previousDragX or dragMoveTime
    if (this.previousDragX === undefined || !this.dragMoveTime || // or if drag was held for 100 ms
    new Date() - this.dragMoveTime > 100) {
      return 0;
    }

    var distance = this.getSlideDistance(-this.dragX, this.selectedIndex);
    var delta = this.previousDragX - this.dragX;

    if (distance > 0 && delta > 0) {
      // boost to next if moving towards the right, and positive velocity
      return 1;
    } else if (distance < 0 && delta < 0) {
      // boost to previous if moving towards the left, and negative velocity
      return -1;
    }

    return 0;
  }; // ----- staticClick ----- //


  proto.staticClick = function (event, pointer) {
    // get clickedCell, if cell was clicked
    var clickedCell = this.getParentCell(event.target);
    var cellElem = clickedCell && clickedCell.element;
    var cellIndex = clickedCell && this.cells.indexOf(clickedCell);
    this.dispatchEvent('staticClick', event, [pointer, cellElem, cellIndex]);
  }; // ----- scroll ----- //


  proto.onscroll = function () {
    var scroll = getScrollPosition();
    var scrollMoveX = this.pointerDownScroll.x - scroll.x;
    var scrollMoveY = this.pointerDownScroll.y - scroll.y; // cancel click/tap if scroll is too much

    if (Math.abs(scrollMoveX) > 3 || Math.abs(scrollMoveY) > 3) {
      this._pointerDone();
    }
  }; // ----- utils ----- //


  function getScrollPosition() {
    return {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  } // -----  ----- //


  return Flickity;
});

/***/ }),

/***/ "./node_modules/flickity/js/flickity.js":
/*!**********************************************!*\
  !*** ./node_modules/flickity/js/flickity.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Flickity main
(function (window, factory) {
  // universal module definition

  /* jshint strict: false */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ev-emitter/ev-emitter */ "./node_modules/ev-emitter/ev-emitter.js"), __webpack_require__(/*! get-size/get-size */ "./node_modules/get-size/get-size.js"), __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js"), __webpack_require__(/*! ./cell */ "./node_modules/flickity/js/cell.js"), __webpack_require__(/*! ./slide */ "./node_modules/flickity/js/slide.js"), __webpack_require__(/*! ./animate */ "./node_modules/flickity/js/animate.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (EvEmitter, getSize, utils, Cell, Slide, animatePrototype) {
      return factory(window, EvEmitter, getSize, utils, Cell, Slide, animatePrototype);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var _Flickity; }
})(window, function factory(window, EvEmitter, getSize, utils, Cell, Slide, animatePrototype) {
  'use strict'; // vars

  var jQuery = window.jQuery;
  var getComputedStyle = window.getComputedStyle;
  var console = window.console;

  function moveElements(elems, toElem) {
    elems = utils.makeArray(elems);

    while (elems.length) {
      toElem.appendChild(elems.shift());
    }
  } // -------------------------- Flickity -------------------------- //
  // globally unique identifiers


  var GUID = 0; // internal store of all Flickity intances

  var instances = {};

  function Flickity(element, options) {
    var queryElement = utils.getQueryElement(element);

    if (!queryElement) {
      if (console) {
        console.error('Bad element for Flickity: ' + (queryElement || element));
      }

      return;
    }

    this.element = queryElement; // do not initialize twice on same element

    if (this.element.flickityGUID) {
      var instance = instances[this.element.flickityGUID];
      instance.option(options);
      return instance;
    } // add jQuery


    if (jQuery) {
      this.$element = jQuery(this.element);
    } // options


    this.options = utils.extend({}, this.constructor.defaults);
    this.option(options); // kick things off

    this._create();
  }

  Flickity.defaults = {
    accessibility: true,
    // adaptiveHeight: false,
    cellAlign: 'center',
    // cellSelector: undefined,
    // contain: false,
    freeScrollFriction: 0.075,
    // friction when free-scrolling
    friction: 0.28,
    // friction when selecting
    namespaceJQueryEvents: true,
    // initialIndex: 0,
    percentPosition: true,
    resize: true,
    selectedAttraction: 0.025,
    setGallerySize: true // watchCSS: false,
    // wrapAround: false

  }; // hash of methods triggered on _create()

  Flickity.createMethods = [];
  var proto = Flickity.prototype; // inherit EventEmitter

  utils.extend(proto, EvEmitter.prototype);

  proto._create = function () {
    // add id for Flickity.data
    var id = this.guid = ++GUID;
    this.element.flickityGUID = id; // expando

    instances[id] = this; // associate via id
    // initial properties

    this.selectedIndex = 0; // how many frames slider has been in same position

    this.restingFrames = 0; // initial physics properties

    this.x = 0;
    this.velocity = 0;
    this.originSide = this.options.rightToLeft ? 'right' : 'left'; // create viewport & slider

    this.viewport = document.createElement('div');
    this.viewport.className = 'flickity-viewport';

    this._createSlider();

    if (this.options.resize || this.options.watchCSS) {
      window.addEventListener('resize', this);
    } // add listeners from on option


    for (var eventName in this.options.on) {
      var listener = this.options.on[eventName];
      this.on(eventName, listener);
    }

    Flickity.createMethods.forEach(function (method) {
      this[method]();
    }, this);

    if (this.options.watchCSS) {
      this.watchCSS();
    } else {
      this.activate();
    }
  };
  /**
   * set options
   * @param {Object} opts
   */


  proto.option = function (opts) {
    utils.extend(this.options, opts);
  };

  proto.activate = function () {
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    this.element.classList.add('flickity-enabled');

    if (this.options.rightToLeft) {
      this.element.classList.add('flickity-rtl');
    }

    this.getSize(); // move initial cell elements so they can be loaded as cells

    var cellElems = this._filterFindCellElements(this.element.children);

    moveElements(cellElems, this.slider);
    this.viewport.appendChild(this.slider);
    this.element.appendChild(this.viewport); // get cells from children

    this.reloadCells();

    if (this.options.accessibility) {
      // allow element to focusable
      this.element.tabIndex = 0; // listen for key presses

      this.element.addEventListener('keydown', this);
    }

    this.emitEvent('activate');
    this.selectInitialIndex(); // flag for initial activation, for using initialIndex

    this.isInitActivated = true; // ready event. #493

    this.dispatchEvent('ready');
  }; // slider positions the cells


  proto._createSlider = function () {
    // slider element does all the positioning
    var slider = document.createElement('div');
    slider.className = 'flickity-slider';
    slider.style[this.originSide] = 0;
    this.slider = slider;
  };

  proto._filterFindCellElements = function (elems) {
    return utils.filterFindElements(elems, this.options.cellSelector);
  }; // goes through all children


  proto.reloadCells = function () {
    // collection of item elements
    this.cells = this._makeCells(this.slider.children);
    this.positionCells();

    this._getWrapShiftCells();

    this.setGallerySize();
  };
  /**
   * turn elements into Flickity.Cells
   * @param {Array or NodeList or HTMLElement} elems
   * @returns {Array} items - collection of new Flickity Cells
   */


  proto._makeCells = function (elems) {
    var cellElems = this._filterFindCellElements(elems); // create new Flickity for collection


    var cells = cellElems.map(function (cellElem) {
      return new Cell(cellElem, this);
    }, this);
    return cells;
  };

  proto.getLastCell = function () {
    return this.cells[this.cells.length - 1];
  };

  proto.getLastSlide = function () {
    return this.slides[this.slides.length - 1];
  }; // positions all cells


  proto.positionCells = function () {
    // size all cells
    this._sizeCells(this.cells); // position all cells


    this._positionCells(0);
  };
  /**
   * position certain cells
   * @param {Integer} index - which cell to start with
   */


  proto._positionCells = function (index) {
    index = index || 0; // also measure maxCellHeight
    // start 0 if positioning all cells

    this.maxCellHeight = index ? this.maxCellHeight || 0 : 0;
    var cellX = 0; // get cellX

    if (index > 0) {
      var startCell = this.cells[index - 1];
      cellX = startCell.x + startCell.size.outerWidth;
    }

    var len = this.cells.length;

    for (var i = index; i < len; i++) {
      var cell = this.cells[i];
      cell.setPosition(cellX);
      cellX += cell.size.outerWidth;
      this.maxCellHeight = Math.max(cell.size.outerHeight, this.maxCellHeight);
    } // keep track of cellX for wrap-around


    this.slideableWidth = cellX; // slides

    this.updateSlides(); // contain slides target

    this._containSlides(); // update slidesWidth


    this.slidesWidth = len ? this.getLastSlide().target - this.slides[0].target : 0;
  };
  /**
   * cell.getSize() on multiple cells
   * @param {Array} cells
   */


  proto._sizeCells = function (cells) {
    cells.forEach(function (cell) {
      cell.getSize();
    });
  }; // --------------------------  -------------------------- //


  proto.updateSlides = function () {
    this.slides = [];

    if (!this.cells.length) {
      return;
    }

    var slide = new Slide(this);
    this.slides.push(slide);
    var isOriginLeft = this.originSide == 'left';
    var nextMargin = isOriginLeft ? 'marginRight' : 'marginLeft';

    var canCellFit = this._getCanCellFit();

    this.cells.forEach(function (cell, i) {
      // just add cell if first cell in slide
      if (!slide.cells.length) {
        slide.addCell(cell);
        return;
      }

      var slideWidth = slide.outerWidth - slide.firstMargin + (cell.size.outerWidth - cell.size[nextMargin]);

      if (canCellFit.call(this, i, slideWidth)) {
        slide.addCell(cell);
      } else {
        // doesn't fit, new slide
        slide.updateTarget();
        slide = new Slide(this);
        this.slides.push(slide);
        slide.addCell(cell);
      }
    }, this); // last slide

    slide.updateTarget(); // update .selectedSlide

    this.updateSelectedSlide();
  };

  proto._getCanCellFit = function () {
    var groupCells = this.options.groupCells;

    if (!groupCells) {
      return function () {
        return false;
      };
    } else if (typeof groupCells == 'number') {
      // group by number. 3 -> [0,1,2], [3,4,5], ...
      var number = parseInt(groupCells, 10);
      return function (i) {
        return i % number !== 0;
      };
    } // default, group by width of slide
    // parse '75%


    var percentMatch = typeof groupCells == 'string' && groupCells.match(/^(\d+)%$/);
    var percent = percentMatch ? parseInt(percentMatch[1], 10) / 100 : 1;
    return function (i, slideWidth) {
      return slideWidth <= (this.size.innerWidth + 1) * percent;
    };
  }; // alias _init for jQuery plugin .flickity()


  proto._init = proto.reposition = function () {
    this.positionCells();
    this.positionSliderAtSelected();
  };

  proto.getSize = function () {
    this.size = getSize(this.element);
    this.setCellAlign();
    this.cursorPosition = this.size.innerWidth * this.cellAlign;
  };

  var cellAlignShorthands = {
    // cell align, then based on origin side
    center: {
      left: 0.5,
      right: 0.5
    },
    left: {
      left: 0,
      right: 1
    },
    right: {
      right: 0,
      left: 1
    }
  };

  proto.setCellAlign = function () {
    var shorthand = cellAlignShorthands[this.options.cellAlign];
    this.cellAlign = shorthand ? shorthand[this.originSide] : this.options.cellAlign;
  };

  proto.setGallerySize = function () {
    if (this.options.setGallerySize) {
      var height = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
      this.viewport.style.height = height + 'px';
    }
  };

  proto._getWrapShiftCells = function () {
    // only for wrap-around
    if (!this.options.wrapAround) {
      return;
    } // unshift previous cells


    this._unshiftCells(this.beforeShiftCells);

    this._unshiftCells(this.afterShiftCells); // get before cells
    // initial gap


    var gapX = this.cursorPosition;
    var cellIndex = this.cells.length - 1;
    this.beforeShiftCells = this._getGapCells(gapX, cellIndex, -1); // get after cells
    // ending gap between last cell and end of gallery viewport

    gapX = this.size.innerWidth - this.cursorPosition; // start cloning at first cell, working forwards

    this.afterShiftCells = this._getGapCells(gapX, 0, 1);
  };

  proto._getGapCells = function (gapX, cellIndex, increment) {
    // keep adding cells until the cover the initial gap
    var cells = [];

    while (gapX > 0) {
      var cell = this.cells[cellIndex];

      if (!cell) {
        break;
      }

      cells.push(cell);
      cellIndex += increment;
      gapX -= cell.size.outerWidth;
    }

    return cells;
  }; // ----- contain ----- //
  // contain cell targets so no excess sliding


  proto._containSlides = function () {
    if (!this.options.contain || this.options.wrapAround || !this.cells.length) {
      return;
    }

    var isRightToLeft = this.options.rightToLeft;
    var beginMargin = isRightToLeft ? 'marginRight' : 'marginLeft';
    var endMargin = isRightToLeft ? 'marginLeft' : 'marginRight';
    var contentWidth = this.slideableWidth - this.getLastCell().size[endMargin]; // content is less than gallery size

    var isContentSmaller = contentWidth < this.size.innerWidth; // bounds

    var beginBound = this.cursorPosition + this.cells[0].size[beginMargin];
    var endBound = contentWidth - this.size.innerWidth * (1 - this.cellAlign); // contain each cell target

    this.slides.forEach(function (slide) {
      if (isContentSmaller) {
        // all cells fit inside gallery
        slide.target = contentWidth * this.cellAlign;
      } else {
        // contain to bounds
        slide.target = Math.max(slide.target, beginBound);
        slide.target = Math.min(slide.target, endBound);
      }
    }, this);
  }; // -----  ----- //

  /**
   * emits events via eventEmitter and jQuery events
   * @param {String} type - name of event
   * @param {Event} event - original event
   * @param {Array} args - extra arguments
   */


  proto.dispatchEvent = function (type, event, args) {
    var emitArgs = event ? [event].concat(args) : args;
    this.emitEvent(type, emitArgs);

    if (jQuery && this.$element) {
      // default trigger with type if no event
      type += this.options.namespaceJQueryEvents ? '.flickity' : '';
      var $event = type;

      if (event) {
        // create jQuery event
        var jQEvent = jQuery.Event(event);
        jQEvent.type = type;
        $event = jQEvent;
      }

      this.$element.trigger($event, args);
    }
  }; // -------------------------- select -------------------------- //

  /**
   * @param {Integer} index - index of the slide
   * @param {Boolean} isWrap - will wrap-around to last/first if at the end
   * @param {Boolean} isInstant - will immediately set position at selected cell
   */


  proto.select = function (index, isWrap, isInstant) {
    if (!this.isActive) {
      return;
    }

    index = parseInt(index, 10);

    this._wrapSelect(index);

    if (this.options.wrapAround || isWrap) {
      index = utils.modulo(index, this.slides.length);
    } // bail if invalid index


    if (!this.slides[index]) {
      return;
    }

    var prevIndex = this.selectedIndex;
    this.selectedIndex = index;
    this.updateSelectedSlide();

    if (isInstant) {
      this.positionSliderAtSelected();
    } else {
      this.startAnimation();
    }

    if (this.options.adaptiveHeight) {
      this.setGallerySize();
    } // events


    this.dispatchEvent('select', null, [index]); // change event if new index

    if (index != prevIndex) {
      this.dispatchEvent('change', null, [index]);
    } // old v1 event name, remove in v3


    this.dispatchEvent('cellSelect');
  }; // wraps position for wrapAround, to move to closest slide. #113


  proto._wrapSelect = function (index) {
    var len = this.slides.length;
    var isWrapping = this.options.wrapAround && len > 1;

    if (!isWrapping) {
      return index;
    }

    var wrapIndex = utils.modulo(index, len); // go to shortest

    var delta = Math.abs(wrapIndex - this.selectedIndex);
    var backWrapDelta = Math.abs(wrapIndex + len - this.selectedIndex);
    var forewardWrapDelta = Math.abs(wrapIndex - len - this.selectedIndex);

    if (!this.isDragSelect && backWrapDelta < delta) {
      index += len;
    } else if (!this.isDragSelect && forewardWrapDelta < delta) {
      index -= len;
    } // wrap position so slider is within normal area


    if (index < 0) {
      this.x -= this.slideableWidth;
    } else if (index >= len) {
      this.x += this.slideableWidth;
    }
  };

  proto.previous = function (isWrap, isInstant) {
    this.select(this.selectedIndex - 1, isWrap, isInstant);
  };

  proto.next = function (isWrap, isInstant) {
    this.select(this.selectedIndex + 1, isWrap, isInstant);
  };

  proto.updateSelectedSlide = function () {
    var slide = this.slides[this.selectedIndex]; // selectedIndex could be outside of slides, if triggered before resize()

    if (!slide) {
      return;
    } // unselect previous selected slide


    this.unselectSelectedSlide(); // update new selected slide

    this.selectedSlide = slide;
    slide.select();
    this.selectedCells = slide.cells;
    this.selectedElements = slide.getCellElements(); // HACK: selectedCell & selectedElement is first cell in slide, backwards compatibility
    // Remove in v3?

    this.selectedCell = slide.cells[0];
    this.selectedElement = this.selectedElements[0];
  };

  proto.unselectSelectedSlide = function () {
    if (this.selectedSlide) {
      this.selectedSlide.unselect();
    }
  };

  proto.selectInitialIndex = function () {
    var initialIndex = this.options.initialIndex; // already activated, select previous selectedIndex

    if (this.isInitActivated) {
      this.select(this.selectedIndex, false, true);
      return;
    } // select with selector string


    if (initialIndex && typeof initialIndex == 'string') {
      var cell = this.queryCell(initialIndex);

      if (cell) {
        this.selectCell(initialIndex, false, true);
        return;
      }
    }

    var index = 0; // select with number

    if (initialIndex && this.slides[initialIndex]) {
      index = initialIndex;
    } // select instantly


    this.select(index, false, true);
  };
  /**
   * select slide from number or cell element
   * @param {Element or Number} elem
   */


  proto.selectCell = function (value, isWrap, isInstant) {
    // get cell
    var cell = this.queryCell(value);

    if (!cell) {
      return;
    }

    var index = this.getCellSlideIndex(cell);
    this.select(index, isWrap, isInstant);
  };

  proto.getCellSlideIndex = function (cell) {
    // get index of slides that has cell
    for (var i = 0; i < this.slides.length; i++) {
      var slide = this.slides[i];
      var index = slide.cells.indexOf(cell);

      if (index != -1) {
        return i;
      }
    }
  }; // -------------------------- get cells -------------------------- //

  /**
   * get Flickity.Cell, given an Element
   * @param {Element} elem
   * @returns {Flickity.Cell} item
   */


  proto.getCell = function (elem) {
    // loop through cells to get the one that matches
    for (var i = 0; i < this.cells.length; i++) {
      var cell = this.cells[i];

      if (cell.element == elem) {
        return cell;
      }
    }
  };
  /**
   * get collection of Flickity.Cells, given Elements
   * @param {Element, Array, NodeList} elems
   * @returns {Array} cells - Flickity.Cells
   */


  proto.getCells = function (elems) {
    elems = utils.makeArray(elems);
    var cells = [];
    elems.forEach(function (elem) {
      var cell = this.getCell(elem);

      if (cell) {
        cells.push(cell);
      }
    }, this);
    return cells;
  };
  /**
   * get cell elements
   * @returns {Array} cellElems
   */


  proto.getCellElements = function () {
    return this.cells.map(function (cell) {
      return cell.element;
    });
  };
  /**
   * get parent cell from an element
   * @param {Element} elem
   * @returns {Flickit.Cell} cell
   */


  proto.getParentCell = function (elem) {
    // first check if elem is cell
    var cell = this.getCell(elem);

    if (cell) {
      return cell;
    } // try to get parent cell elem


    elem = utils.getParent(elem, '.flickity-slider > *');
    return this.getCell(elem);
  };
  /**
   * get cells adjacent to a slide
   * @param {Integer} adjCount - number of adjacent slides
   * @param {Integer} index - index of slide to start
   * @returns {Array} cells - array of Flickity.Cells
   */


  proto.getAdjacentCellElements = function (adjCount, index) {
    if (!adjCount) {
      return this.selectedSlide.getCellElements();
    }

    index = index === undefined ? this.selectedIndex : index;
    var len = this.slides.length;

    if (1 + adjCount * 2 >= len) {
      return this.getCellElements();
    }

    var cellElems = [];

    for (var i = index - adjCount; i <= index + adjCount; i++) {
      var slideIndex = this.options.wrapAround ? utils.modulo(i, len) : i;
      var slide = this.slides[slideIndex];

      if (slide) {
        cellElems = cellElems.concat(slide.getCellElements());
      }
    }

    return cellElems;
  };
  /**
   * select slide from number or cell element
   * @param {Element, Selector String, or Number} selector
   */


  proto.queryCell = function (selector) {
    if (typeof selector == 'number') {
      // use number as index
      return this.cells[selector];
    }

    if (typeof selector == 'string') {
      // do not select invalid selectors from hash: #123, #/. #791
      if (selector.match(/^[#\.]?[\d\/]/)) {
        return;
      } // use string as selector, get element


      selector = this.element.querySelector(selector);
    } // get cell from element


    return this.getCell(selector);
  }; // -------------------------- events -------------------------- //


  proto.uiChange = function () {
    this.emitEvent('uiChange');
  }; // keep focus on element when child UI elements are clicked


  proto.childUIPointerDown = function (event) {
    // HACK iOS does not allow touch events to bubble up?!
    if (event.type != 'touchstart') {
      event.preventDefault();
    }

    this.focus();
  }; // ----- resize ----- //


  proto.onresize = function () {
    this.watchCSS();
    this.resize();
  };

  utils.debounceMethod(Flickity, 'onresize', 150);

  proto.resize = function () {
    if (!this.isActive) {
      return;
    }

    this.getSize(); // wrap values

    if (this.options.wrapAround) {
      this.x = utils.modulo(this.x, this.slideableWidth);
    }

    this.positionCells();

    this._getWrapShiftCells();

    this.setGallerySize();
    this.emitEvent('resize'); // update selected index for group slides, instant
    // TODO: position can be lost between groups of various numbers

    var selectedElement = this.selectedElements && this.selectedElements[0];
    this.selectCell(selectedElement, false, true);
  }; // watches the :after property, activates/deactivates


  proto.watchCSS = function () {
    var watchOption = this.options.watchCSS;

    if (!watchOption) {
      return;
    }

    var afterContent = getComputedStyle(this.element, ':after').content; // activate if :after { content: 'flickity' }

    if (afterContent.indexOf('flickity') != -1) {
      this.activate();
    } else {
      this.deactivate();
    }
  }; // ----- keydown ----- //
  // go previous/next if left/right keys pressed


  proto.onkeydown = function (event) {
    // only work if element is in focus
    var isNotFocused = document.activeElement && document.activeElement != this.element;

    if (!this.options.accessibility || isNotFocused) {
      return;
    }

    var handler = Flickity.keyboardHandlers[event.keyCode];

    if (handler) {
      handler.call(this);
    }
  };

  Flickity.keyboardHandlers = {
    // left arrow
    37: function () {
      var leftMethod = this.options.rightToLeft ? 'next' : 'previous';
      this.uiChange();
      this[leftMethod]();
    },
    // right arrow
    39: function () {
      var rightMethod = this.options.rightToLeft ? 'previous' : 'next';
      this.uiChange();
      this[rightMethod]();
    }
  }; // ----- focus ----- //

  proto.focus = function () {
    // TODO remove scrollTo once focus options gets more support
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#Browser_compatibility
    var prevScrollY = window.pageYOffset;
    this.element.focus({
      preventScroll: true
    }); // hack to fix scroll jump after focus, #76

    if (window.pageYOffset != prevScrollY) {
      window.scrollTo(window.pageXOffset, prevScrollY);
    }
  }; // -------------------------- destroy -------------------------- //
  // deactivate all Flickity functionality, but keep stuff available


  proto.deactivate = function () {
    if (!this.isActive) {
      return;
    }

    this.element.classList.remove('flickity-enabled');
    this.element.classList.remove('flickity-rtl');
    this.unselectSelectedSlide(); // destroy cells

    this.cells.forEach(function (cell) {
      cell.destroy();
    });
    this.element.removeChild(this.viewport); // move child elements back into element

    moveElements(this.slider.children, this.element);

    if (this.options.accessibility) {
      this.element.removeAttribute('tabIndex');
      this.element.removeEventListener('keydown', this);
    } // set flags


    this.isActive = false;
    this.emitEvent('deactivate');
  };

  proto.destroy = function () {
    this.deactivate();
    window.removeEventListener('resize', this);
    this.allOff();
    this.emitEvent('destroy');

    if (jQuery && this.$element) {
      jQuery.removeData(this.element, 'flickity');
    }

    delete this.element.flickityGUID;
    delete instances[this.guid];
  }; // -------------------------- prototype -------------------------- //


  utils.extend(proto, animatePrototype); // -------------------------- extras -------------------------- //

  /**
   * get Flickity instance from element
   * @param {Element} elem
   * @returns {Flickity}
   */

  Flickity.data = function (elem) {
    elem = utils.getQueryElement(elem);
    var id = elem && elem.flickityGUID;
    return id && instances[id];
  };

  utils.htmlInit(Flickity, 'flickity');

  if (jQuery && jQuery.bridget) {
    jQuery.bridget('flickity', Flickity);
  } // set internal jQuery, for Webpack + jQuery v3, #478


  Flickity.setJQuery = function (jq) {
    jQuery = jq;
  };

  Flickity.Cell = Cell;
  Flickity.Slide = Slide;
  return Flickity;
});

/***/ }),

/***/ "./node_modules/flickity/js/index.js":
/*!*******************************************!*\
  !*** ./node_modules/flickity/js/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Flickity v2.2.1
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2019 Metafizzy
 */
(function (window, factory) {
  // universal module definition

  /* jshint strict: false */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./flickity */ "./node_modules/flickity/js/flickity.js"), __webpack_require__(/*! ./drag */ "./node_modules/flickity/js/drag.js"), __webpack_require__(/*! ./prev-next-button */ "./node_modules/flickity/js/prev-next-button.js"), __webpack_require__(/*! ./page-dots */ "./node_modules/flickity/js/page-dots.js"), __webpack_require__(/*! ./player */ "./node_modules/flickity/js/player.js"), __webpack_require__(/*! ./add-remove-cell */ "./node_modules/flickity/js/add-remove-cell.js"), __webpack_require__(/*! ./lazyload */ "./node_modules/flickity/js/lazyload.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory(Flickity) {
  /*jshint strict: false*/
  return Flickity;
});

/***/ }),

/***/ "./node_modules/flickity/js/lazyload.js":
/*!**********************************************!*\
  !*** ./node_modules/flickity/js/lazyload.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// lazyload
(function (window, factory) {
  // universal module definition

  /* jshint strict: false */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./flickity */ "./node_modules/flickity/js/flickity.js"), __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Flickity, utils) {
      return factory(window, Flickity, utils);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory(window, Flickity, utils) {
  'use strict';

  Flickity.createMethods.push('_createLazyload');
  var proto = Flickity.prototype;

  proto._createLazyload = function () {
    this.on('select', this.lazyLoad);
  };

  proto.lazyLoad = function () {
    var lazyLoad = this.options.lazyLoad;

    if (!lazyLoad) {
      return;
    } // get adjacent cells, use lazyLoad option for adjacent count


    var adjCount = typeof lazyLoad == 'number' ? lazyLoad : 0;
    var cellElems = this.getAdjacentCellElements(adjCount); // get lazy images in those cells

    var lazyImages = [];
    cellElems.forEach(function (cellElem) {
      var lazyCellImages = getCellLazyImages(cellElem);
      lazyImages = lazyImages.concat(lazyCellImages);
    }); // load lazy images

    lazyImages.forEach(function (img) {
      new LazyLoader(img, this);
    }, this);
  };

  function getCellLazyImages(cellElem) {
    // check if cell element is lazy image
    if (cellElem.nodeName == 'IMG') {
      var lazyloadAttr = cellElem.getAttribute('data-flickity-lazyload');
      var srcAttr = cellElem.getAttribute('data-flickity-lazyload-src');
      var srcsetAttr = cellElem.getAttribute('data-flickity-lazyload-srcset');

      if (lazyloadAttr || srcAttr || srcsetAttr) {
        return [cellElem];
      }
    } // select lazy images in cell


    var lazySelector = 'img[data-flickity-lazyload], ' + 'img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]';
    var imgs = cellElem.querySelectorAll(lazySelector);
    return utils.makeArray(imgs);
  } // -------------------------- LazyLoader -------------------------- //

  /**
   * class to handle loading images
   */


  function LazyLoader(img, flickity) {
    this.img = img;
    this.flickity = flickity;
    this.load();
  }

  LazyLoader.prototype.handleEvent = utils.handleEvent;

  LazyLoader.prototype.load = function () {
    this.img.addEventListener('load', this);
    this.img.addEventListener('error', this); // get src & srcset

    var src = this.img.getAttribute('data-flickity-lazyload') || this.img.getAttribute('data-flickity-lazyload-src');
    var srcset = this.img.getAttribute('data-flickity-lazyload-srcset'); // set src & serset

    this.img.src = src;

    if (srcset) {
      this.img.setAttribute('srcset', srcset);
    } // remove attr


    this.img.removeAttribute('data-flickity-lazyload');
    this.img.removeAttribute('data-flickity-lazyload-src');
    this.img.removeAttribute('data-flickity-lazyload-srcset');
  };

  LazyLoader.prototype.onload = function (event) {
    this.complete(event, 'flickity-lazyloaded');
  };

  LazyLoader.prototype.onerror = function (event) {
    this.complete(event, 'flickity-lazyerror');
  };

  LazyLoader.prototype.complete = function (event, className) {
    // unbind events
    this.img.removeEventListener('load', this);
    this.img.removeEventListener('error', this);
    var cell = this.flickity.getParentCell(this.img);
    var cellElem = cell && cell.element;
    this.flickity.cellSizeChange(cellElem);
    this.img.classList.add(className);
    this.flickity.dispatchEvent('lazyLoad', event, cellElem);
  }; // -----  ----- //


  Flickity.LazyLoader = LazyLoader;
  return Flickity;
});

/***/ }),

/***/ "./node_modules/flickity/js/page-dots.js":
/*!***********************************************!*\
  !*** ./node_modules/flickity/js/page-dots.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// page dots
(function (window, factory) {
  // universal module definition

  /* jshint strict: false */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./flickity */ "./node_modules/flickity/js/flickity.js"), __webpack_require__(/*! unipointer/unipointer */ "./node_modules/unipointer/unipointer.js"), __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Flickity, Unipointer, utils) {
      return factory(window, Flickity, Unipointer, utils);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory(window, Flickity, Unipointer, utils) {
  // -------------------------- PageDots -------------------------- //
  'use strict';

  function PageDots(parent) {
    this.parent = parent;

    this._create();
  }

  PageDots.prototype = Object.create(Unipointer.prototype);

  PageDots.prototype._create = function () {
    // create holder element
    this.holder = document.createElement('ol');
    this.holder.className = 'flickity-page-dots'; // create dots, array of elements

    this.dots = []; // events

    this.handleClick = this.onClick.bind(this);
    this.on('pointerDown', this.parent.childUIPointerDown.bind(this.parent));
  };

  PageDots.prototype.activate = function () {
    this.setDots();
    this.holder.addEventListener('click', this.handleClick);
    this.bindStartEvent(this.holder); // add to DOM

    this.parent.element.appendChild(this.holder);
  };

  PageDots.prototype.deactivate = function () {
    this.holder.removeEventListener('click', this.handleClick);
    this.unbindStartEvent(this.holder); // remove from DOM

    this.parent.element.removeChild(this.holder);
  };

  PageDots.prototype.setDots = function () {
    // get difference between number of slides and number of dots
    var delta = this.parent.slides.length - this.dots.length;

    if (delta > 0) {
      this.addDots(delta);
    } else if (delta < 0) {
      this.removeDots(-delta);
    }
  };

  PageDots.prototype.addDots = function (count) {
    var fragment = document.createDocumentFragment();
    var newDots = [];
    var length = this.dots.length;
    var max = length + count;

    for (var i = length; i < max; i++) {
      var dot = document.createElement('li');
      dot.className = 'dot';
      dot.setAttribute('aria-label', 'Page dot ' + (i + 1));
      fragment.appendChild(dot);
      newDots.push(dot);
    }

    this.holder.appendChild(fragment);
    this.dots = this.dots.concat(newDots);
  };

  PageDots.prototype.removeDots = function (count) {
    // remove from this.dots collection
    var removeDots = this.dots.splice(this.dots.length - count, count); // remove from DOM

    removeDots.forEach(function (dot) {
      this.holder.removeChild(dot);
    }, this);
  };

  PageDots.prototype.updateSelected = function () {
    // remove selected class on previous
    if (this.selectedDot) {
      this.selectedDot.className = 'dot';
      this.selectedDot.removeAttribute('aria-current');
    } // don't proceed if no dots


    if (!this.dots.length) {
      return;
    }

    this.selectedDot = this.dots[this.parent.selectedIndex];
    this.selectedDot.className = 'dot is-selected';
    this.selectedDot.setAttribute('aria-current', 'step');
  };

  PageDots.prototype.onTap = // old method name, backwards-compatible
  PageDots.prototype.onClick = function (event) {
    var target = event.target; // only care about dot clicks

    if (target.nodeName != 'LI') {
      return;
    }

    this.parent.uiChange();
    var index = this.dots.indexOf(target);
    this.parent.select(index);
  };

  PageDots.prototype.destroy = function () {
    this.deactivate();
    this.allOff();
  };

  Flickity.PageDots = PageDots; // -------------------------- Flickity -------------------------- //

  utils.extend(Flickity.defaults, {
    pageDots: true
  });
  Flickity.createMethods.push('_createPageDots');
  var proto = Flickity.prototype;

  proto._createPageDots = function () {
    if (!this.options.pageDots) {
      return;
    }

    this.pageDots = new PageDots(this); // events

    this.on('activate', this.activatePageDots);
    this.on('select', this.updateSelectedPageDots);
    this.on('cellChange', this.updatePageDots);
    this.on('resize', this.updatePageDots);
    this.on('deactivate', this.deactivatePageDots);
  };

  proto.activatePageDots = function () {
    this.pageDots.activate();
  };

  proto.updateSelectedPageDots = function () {
    this.pageDots.updateSelected();
  };

  proto.updatePageDots = function () {
    this.pageDots.setDots();
  };

  proto.deactivatePageDots = function () {
    this.pageDots.deactivate();
  }; // -----  ----- //


  Flickity.PageDots = PageDots;
  return Flickity;
});

/***/ }),

/***/ "./node_modules/flickity/js/player.js":
/*!********************************************!*\
  !*** ./node_modules/flickity/js/player.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// player & autoPlay
(function (window, factory) {
  // universal module definition

  /* jshint strict: false */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ev-emitter/ev-emitter */ "./node_modules/ev-emitter/ev-emitter.js"), __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js"), __webpack_require__(/*! ./flickity */ "./node_modules/flickity/js/flickity.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (EvEmitter, utils, Flickity) {
      return factory(EvEmitter, utils, Flickity);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory(EvEmitter, utils, Flickity) {
  'use strict'; // -------------------------- Player -------------------------- //

  function Player(parent) {
    this.parent = parent;
    this.state = 'stopped'; // visibility change event handler

    this.onVisibilityChange = this.visibilityChange.bind(this);
    this.onVisibilityPlay = this.visibilityPlay.bind(this);
  }

  Player.prototype = Object.create(EvEmitter.prototype); // start play

  Player.prototype.play = function () {
    if (this.state == 'playing') {
      return;
    } // do not play if page is hidden, start playing when page is visible


    var isPageHidden = document.hidden;

    if (isPageHidden) {
      document.addEventListener('visibilitychange', this.onVisibilityPlay);
      return;
    }

    this.state = 'playing'; // listen to visibility change

    document.addEventListener('visibilitychange', this.onVisibilityChange); // start ticking

    this.tick();
  };

  Player.prototype.tick = function () {
    // do not tick if not playing
    if (this.state != 'playing') {
      return;
    }

    var time = this.parent.options.autoPlay; // default to 3 seconds

    time = typeof time == 'number' ? time : 3000;

    var _this = this; // HACK: reset ticks if stopped and started within interval


    this.clear();
    this.timeout = setTimeout(function () {
      _this.parent.next(true);

      _this.tick();
    }, time);
  };

  Player.prototype.stop = function () {
    this.state = 'stopped';
    this.clear(); // remove visibility change event

    document.removeEventListener('visibilitychange', this.onVisibilityChange);
  };

  Player.prototype.clear = function () {
    clearTimeout(this.timeout);
  };

  Player.prototype.pause = function () {
    if (this.state == 'playing') {
      this.state = 'paused';
      this.clear();
    }
  };

  Player.prototype.unpause = function () {
    // re-start play if paused
    if (this.state == 'paused') {
      this.play();
    }
  }; // pause if page visibility is hidden, unpause if visible


  Player.prototype.visibilityChange = function () {
    var isPageHidden = document.hidden;
    this[isPageHidden ? 'pause' : 'unpause']();
  };

  Player.prototype.visibilityPlay = function () {
    this.play();
    document.removeEventListener('visibilitychange', this.onVisibilityPlay);
  }; // -------------------------- Flickity -------------------------- //


  utils.extend(Flickity.defaults, {
    pauseAutoPlayOnHover: true
  });
  Flickity.createMethods.push('_createPlayer');
  var proto = Flickity.prototype;

  proto._createPlayer = function () {
    this.player = new Player(this);
    this.on('activate', this.activatePlayer);
    this.on('uiChange', this.stopPlayer);
    this.on('pointerDown', this.stopPlayer);
    this.on('deactivate', this.deactivatePlayer);
  };

  proto.activatePlayer = function () {
    if (!this.options.autoPlay) {
      return;
    }

    this.player.play();
    this.element.addEventListener('mouseenter', this);
  }; // Player API, don't hate the ... thanks I know where the door is


  proto.playPlayer = function () {
    this.player.play();
  };

  proto.stopPlayer = function () {
    this.player.stop();
  };

  proto.pausePlayer = function () {
    this.player.pause();
  };

  proto.unpausePlayer = function () {
    this.player.unpause();
  };

  proto.deactivatePlayer = function () {
    this.player.stop();
    this.element.removeEventListener('mouseenter', this);
  }; // ----- mouseenter/leave ----- //
  // pause auto-play on hover


  proto.onmouseenter = function () {
    if (!this.options.pauseAutoPlayOnHover) {
      return;
    }

    this.player.pause();
    this.element.addEventListener('mouseleave', this);
  }; // resume auto-play on hover off


  proto.onmouseleave = function () {
    this.player.unpause();
    this.element.removeEventListener('mouseleave', this);
  }; // -----  ----- //


  Flickity.Player = Player;
  return Flickity;
});

/***/ }),

/***/ "./node_modules/flickity/js/prev-next-button.js":
/*!******************************************************!*\
  !*** ./node_modules/flickity/js/prev-next-button.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// prev/next buttons
(function (window, factory) {
  // universal module definition

  /* jshint strict: false */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./flickity */ "./node_modules/flickity/js/flickity.js"), __webpack_require__(/*! unipointer/unipointer */ "./node_modules/unipointer/unipointer.js"), __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Flickity, Unipointer, utils) {
      return factory(window, Flickity, Unipointer, utils);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory(window, Flickity, Unipointer, utils) {
  'use strict';

  var svgURI = 'http://www.w3.org/2000/svg'; // -------------------------- PrevNextButton -------------------------- //

  function PrevNextButton(direction, parent) {
    this.direction = direction;
    this.parent = parent;

    this._create();
  }

  PrevNextButton.prototype = Object.create(Unipointer.prototype);

  PrevNextButton.prototype._create = function () {
    // properties
    this.isEnabled = true;
    this.isPrevious = this.direction == -1;
    var leftDirection = this.parent.options.rightToLeft ? 1 : -1;
    this.isLeft = this.direction == leftDirection;
    var element = this.element = document.createElement('button');
    element.className = 'flickity-button flickity-prev-next-button';
    element.className += this.isPrevious ? ' previous' : ' next'; // prevent button from submitting form http://stackoverflow.com/a/10836076/182183

    element.setAttribute('type', 'button'); // init as disabled

    this.disable();
    element.setAttribute('aria-label', this.isPrevious ? 'Previous' : 'Next'); // create arrow

    var svg = this.createSVG();
    element.appendChild(svg); // events

    this.parent.on('select', this.update.bind(this));
    this.on('pointerDown', this.parent.childUIPointerDown.bind(this.parent));
  };

  PrevNextButton.prototype.activate = function () {
    this.bindStartEvent(this.element);
    this.element.addEventListener('click', this); // add to DOM

    this.parent.element.appendChild(this.element);
  };

  PrevNextButton.prototype.deactivate = function () {
    // remove from DOM
    this.parent.element.removeChild(this.element); // click events

    this.unbindStartEvent(this.element);
    this.element.removeEventListener('click', this);
  };

  PrevNextButton.prototype.createSVG = function () {
    var svg = document.createElementNS(svgURI, 'svg');
    svg.setAttribute('class', 'flickity-button-icon');
    svg.setAttribute('viewBox', '0 0 100 100');
    var path = document.createElementNS(svgURI, 'path');
    var pathMovements = getArrowMovements(this.parent.options.arrowShape);
    path.setAttribute('d', pathMovements);
    path.setAttribute('class', 'arrow'); // rotate arrow

    if (!this.isLeft) {
      path.setAttribute('transform', 'translate(100, 100) rotate(180) ');
    }

    svg.appendChild(path);
    return svg;
  }; // get SVG path movmement


  function getArrowMovements(shape) {
    // use shape as movement if string
    if (typeof shape == 'string') {
      return shape;
    } // create movement string


    return 'M ' + shape.x0 + ',50' + ' L ' + shape.x1 + ',' + (shape.y1 + 50) + ' L ' + shape.x2 + ',' + (shape.y2 + 50) + ' L ' + shape.x3 + ',50 ' + ' L ' + shape.x2 + ',' + (50 - shape.y2) + ' L ' + shape.x1 + ',' + (50 - shape.y1) + ' Z';
  }

  PrevNextButton.prototype.handleEvent = utils.handleEvent;

  PrevNextButton.prototype.onclick = function () {
    if (!this.isEnabled) {
      return;
    }

    this.parent.uiChange();
    var method = this.isPrevious ? 'previous' : 'next';
    this.parent[method]();
  }; // -----  ----- //


  PrevNextButton.prototype.enable = function () {
    if (this.isEnabled) {
      return;
    }

    this.element.disabled = false;
    this.isEnabled = true;
  };

  PrevNextButton.prototype.disable = function () {
    if (!this.isEnabled) {
      return;
    }

    this.element.disabled = true;
    this.isEnabled = false;
  };

  PrevNextButton.prototype.update = function () {
    // index of first or last slide, if previous or next
    var slides = this.parent.slides; // enable is wrapAround and at least 2 slides

    if (this.parent.options.wrapAround && slides.length > 1) {
      this.enable();
      return;
    }

    var lastIndex = slides.length ? slides.length - 1 : 0;
    var boundIndex = this.isPrevious ? 0 : lastIndex;
    var method = this.parent.selectedIndex == boundIndex ? 'disable' : 'enable';
    this[method]();
  };

  PrevNextButton.prototype.destroy = function () {
    this.deactivate();
    this.allOff();
  }; // -------------------------- Flickity prototype -------------------------- //


  utils.extend(Flickity.defaults, {
    prevNextButtons: true,
    arrowShape: {
      x0: 10,
      x1: 60,
      y1: 50,
      x2: 70,
      y2: 40,
      x3: 30
    }
  });
  Flickity.createMethods.push('_createPrevNextButtons');
  var proto = Flickity.prototype;

  proto._createPrevNextButtons = function () {
    if (!this.options.prevNextButtons) {
      return;
    }

    this.prevButton = new PrevNextButton(-1, this);
    this.nextButton = new PrevNextButton(1, this);
    this.on('activate', this.activatePrevNextButtons);
  };

  proto.activatePrevNextButtons = function () {
    this.prevButton.activate();
    this.nextButton.activate();
    this.on('deactivate', this.deactivatePrevNextButtons);
  };

  proto.deactivatePrevNextButtons = function () {
    this.prevButton.deactivate();
    this.nextButton.deactivate();
    this.off('deactivate', this.deactivatePrevNextButtons);
  }; // --------------------------  -------------------------- //


  Flickity.PrevNextButton = PrevNextButton;
  return Flickity;
});

/***/ }),

/***/ "./node_modules/flickity/js/slide.js":
/*!*******************************************!*\
  !*** ./node_modules/flickity/js/slide.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;// slide
(function (window, factory) {
  // universal module definition

  /* jshint strict: false */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory() {
  'use strict';

  function Slide(parent) {
    this.parent = parent;
    this.isOriginLeft = parent.originSide == 'left';
    this.cells = [];
    this.outerWidth = 0;
    this.height = 0;
  }

  var proto = Slide.prototype;

  proto.addCell = function (cell) {
    this.cells.push(cell);
    this.outerWidth += cell.size.outerWidth;
    this.height = Math.max(cell.size.outerHeight, this.height); // first cell stuff

    if (this.cells.length == 1) {
      this.x = cell.x; // x comes from first cell

      var beginMargin = this.isOriginLeft ? 'marginLeft' : 'marginRight';
      this.firstMargin = cell.size[beginMargin];
    }
  };

  proto.updateTarget = function () {
    var endMargin = this.isOriginLeft ? 'marginRight' : 'marginLeft';
    var lastCell = this.getLastCell();
    var lastMargin = lastCell ? lastCell.size[endMargin] : 0;
    var slideWidth = this.outerWidth - (this.firstMargin + lastMargin);
    this.target = this.x + this.firstMargin + slideWidth * this.parent.cellAlign;
  };

  proto.getLastCell = function () {
    return this.cells[this.cells.length - 1];
  };

  proto.select = function () {
    this.cells.forEach(function (cell) {
      cell.select();
    });
  };

  proto.unselect = function () {
    this.cells.forEach(function (cell) {
      cell.unselect();
    });
  };

  proto.getCellElements = function () {
    return this.cells.map(function (cell) {
      return cell.element;
    });
  };

  return Slide;
});

/***/ }),

/***/ "./node_modules/get-size/get-size.js":
/*!*******************************************!*\
  !*** ./node_modules/get-size/get-size.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */

/* globals console: false */
(function (window, factory) {
  /* jshint strict: false */

  /* globals define, module */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory() {
  'use strict'; // -------------------------- helpers -------------------------- //
  // get a number from a string, not a percentage

  function getStyleSize(value) {
    var num = parseFloat(value); // not a percent like '100%', and a number

    var isValid = value.indexOf('%') == -1 && !isNaN(num);
    return isValid && num;
  }

  function noop() {}

  var logError = typeof console == 'undefined' ? noop : function (message) {
    console.error(message);
  }; // -------------------------- measurements -------------------------- //

  var measurements = ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'borderBottomWidth'];
  var measurementsLength = measurements.length;

  function getZeroSize() {
    var size = {
      width: 0,
      height: 0,
      innerWidth: 0,
      innerHeight: 0,
      outerWidth: 0,
      outerHeight: 0
    };

    for (var i = 0; i < measurementsLength; i++) {
      var measurement = measurements[i];
      size[measurement] = 0;
    }

    return size;
  } // -------------------------- getStyle -------------------------- //

  /**
   * getStyle, get style of element, check for Firefox bug
   * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
   */


  function getStyle(elem) {
    var style = getComputedStyle(elem);

    if (!style) {
      logError('Style returned ' + style + '. Are you running this code in a hidden iframe on Firefox? ' + 'See https://bit.ly/getsizebug1');
    }

    return style;
  } // -------------------------- setup -------------------------- //


  var isSetup = false;
  var isBoxSizeOuter;
  /**
   * setup
   * check isBoxSizerOuter
   * do on first getSize() rather than on page load for Firefox bug
   */

  function setup() {
    // setup once
    if (isSetup) {
      return;
    }

    isSetup = true; // -------------------------- box sizing -------------------------- //

    /**
     * Chrome & Safari measure the outer-width on style.width on border-box elems
     * IE11 & Firefox<29 measures the inner-width
     */

    var div = document.createElement('div');
    div.style.width = '200px';
    div.style.padding = '1px 2px 3px 4px';
    div.style.borderStyle = 'solid';
    div.style.borderWidth = '1px 2px 3px 4px';
    div.style.boxSizing = 'border-box';
    var body = document.body || document.documentElement;
    body.appendChild(div);
    var style = getStyle(div); // round value for browser zoom. desandro/masonry#928

    isBoxSizeOuter = Math.round(getStyleSize(style.width)) == 200;
    getSize.isBoxSizeOuter = isBoxSizeOuter;
    body.removeChild(div);
  } // -------------------------- getSize -------------------------- //


  function getSize(elem) {
    setup(); // use querySeletor if elem is string

    if (typeof elem == 'string') {
      elem = document.querySelector(elem);
    } // do not proceed on non-objects


    if (!elem || typeof elem != 'object' || !elem.nodeType) {
      return;
    }

    var style = getStyle(elem); // if hidden, everything is 0

    if (style.display == 'none') {
      return getZeroSize();
    }

    var size = {};
    size.width = elem.offsetWidth;
    size.height = elem.offsetHeight;
    var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box'; // get all measurements

    for (var i = 0; i < measurementsLength; i++) {
      var measurement = measurements[i];
      var value = style[measurement];
      var num = parseFloat(value); // any 'auto', 'medium' value will be 0

      size[measurement] = !isNaN(num) ? num : 0;
    }

    var paddingWidth = size.paddingLeft + size.paddingRight;
    var paddingHeight = size.paddingTop + size.paddingBottom;
    var marginWidth = size.marginLeft + size.marginRight;
    var marginHeight = size.marginTop + size.marginBottom;
    var borderWidth = size.borderLeftWidth + size.borderRightWidth;
    var borderHeight = size.borderTopWidth + size.borderBottomWidth;
    var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter; // overwrite width and height if we can get it from style

    var styleWidth = getStyleSize(style.width);

    if (styleWidth !== false) {
      size.width = styleWidth + ( // add padding and border unless it's already including it
      isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
    }

    var styleHeight = getStyleSize(style.height);

    if (styleHeight !== false) {
      size.height = styleHeight + ( // add padding and border unless it's already including it
      isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
    }

    size.innerWidth = size.width - (paddingWidth + borderWidth);
    size.innerHeight = size.height - (paddingHeight + borderHeight);
    size.outerWidth = size.width + marginWidth;
    size.outerHeight = size.height + marginHeight;
    return size;
  }

  return getSize;
});

/***/ }),

/***/ "./node_modules/typed.js/lib/typed.js":
/*!********************************************!*\
  !*** ./node_modules/typed.js/lib/typed.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.11
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory();else {}
})(this, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId])
          /******/
          return installedModules[moduleId].exports;
        /******/

        /******/
        // Create a new module (and put it into the cache)

        /******/

        var module = installedModules[moduleId] = {
          /******/
          exports: {},

          /******/
          id: moduleId,

          /******/
          loaded: false
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.loaded = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // __webpack_public_path__

      /******/

      __webpack_require__.p = "";
      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(0);
      /******/
    }(
    /************************************************************************/

    /******/
    [
    /* 0 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError('Cannot call a class as a function');
        }
      }

      var _initializerJs = __webpack_require__(1);

      var _htmlParserJs = __webpack_require__(3);
      /**
       * Welcome to Typed.js!
       * @param {string} elementId HTML element ID _OR_ HTML element
       * @param {object} options options object
       * @returns {object} a new Typed object
       */


      var Typed = function () {
        function Typed(elementId, options) {
          _classCallCheck(this, Typed); // Initialize it up


          _initializerJs.initializer.load(this, options, elementId); // All systems go!


          this.begin();
        }
        /**
         * Toggle start() and stop() of the Typed instance
         * @public
         */


        _createClass(Typed, [{
          key: 'toggle',
          value: function toggle() {
            this.pause.status ? this.start() : this.stop();
          }
          /**
           * Stop typing / backspacing and enable cursor blinking
           * @public
           */

        }, {
          key: 'stop',
          value: function stop() {
            if (this.typingComplete) return;
            if (this.pause.status) return;
            this.toggleBlinking(true);
            this.pause.status = true;
            this.options.onStop(this.arrayPos, this);
          }
          /**
           * Start typing / backspacing after being stopped
           * @public
           */

        }, {
          key: 'start',
          value: function start() {
            if (this.typingComplete) return;
            if (!this.pause.status) return;
            this.pause.status = false;

            if (this.pause.typewrite) {
              this.typewrite(this.pause.curString, this.pause.curStrPos);
            } else {
              this.backspace(this.pause.curString, this.pause.curStrPos);
            }

            this.options.onStart(this.arrayPos, this);
          }
          /**
           * Destroy this instance of Typed
           * @public
           */

        }, {
          key: 'destroy',
          value: function destroy() {
            this.reset(false);
            this.options.onDestroy(this);
          }
          /**
           * Reset Typed and optionally restarts
           * @param {boolean} restart
           * @public
           */

        }, {
          key: 'reset',
          value: function reset() {
            var restart = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
            clearInterval(this.timeout);
            this.replaceText('');

            if (this.cursor && this.cursor.parentNode) {
              this.cursor.parentNode.removeChild(this.cursor);
              this.cursor = null;
            }

            this.strPos = 0;
            this.arrayPos = 0;
            this.curLoop = 0;

            if (restart) {
              this.insertCursor();
              this.options.onReset(this);
              this.begin();
            }
          }
          /**
           * Begins the typing animation
           * @private
           */

        }, {
          key: 'begin',
          value: function begin() {
            var _this = this;

            this.options.onBegin(this);
            this.typingComplete = false;
            this.shuffleStringsIfNeeded(this);
            this.insertCursor();
            if (this.bindInputFocusEvents) this.bindFocusEvents();
            this.timeout = setTimeout(function () {
              // Check if there is some text in the element, if yes start by backspacing the default message
              if (!_this.currentElContent || _this.currentElContent.length === 0) {
                _this.typewrite(_this.strings[_this.sequence[_this.arrayPos]], _this.strPos);
              } else {
                // Start typing
                _this.backspace(_this.currentElContent, _this.currentElContent.length);
              }
            }, this.startDelay);
          }
          /**
           * Called for each character typed
           * @param {string} curString the current string in the strings array
           * @param {number} curStrPos the current position in the curString
           * @private
           */

        }, {
          key: 'typewrite',
          value: function typewrite(curString, curStrPos) {
            var _this2 = this;

            if (this.fadeOut && this.el.classList.contains(this.fadeOutClass)) {
              this.el.classList.remove(this.fadeOutClass);
              if (this.cursor) this.cursor.classList.remove(this.fadeOutClass);
            }

            var humanize = this.humanizer(this.typeSpeed);
            var numChars = 1;

            if (this.pause.status === true) {
              this.setPauseStatus(curString, curStrPos, true);
              return;
            } // contain typing function in a timeout humanize'd delay


            this.timeout = setTimeout(function () {
              // skip over any HTML chars
              curStrPos = _htmlParserJs.htmlParser.typeHtmlChars(curString, curStrPos, _this2);
              var pauseTime = 0;
              var substr = curString.substr(curStrPos); // check for an escape character before a pause value
              // format: \^\d+ .. eg: ^1000 .. should be able to print the ^ too using ^^
              // single ^ are removed from string

              if (substr.charAt(0) === '^') {
                if (/^\^\d+/.test(substr)) {
                  var skip = 1; // skip at least 1

                  substr = /\d+/.exec(substr)[0];
                  skip += substr.length;
                  pauseTime = parseInt(substr);
                  _this2.temporaryPause = true;

                  _this2.options.onTypingPaused(_this2.arrayPos, _this2); // strip out the escape character and pause value so they're not printed


                  curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);

                  _this2.toggleBlinking(true);
                }
              } // check for skip characters formatted as
              // "this is a `string to print NOW` ..."


              if (substr.charAt(0) === '`') {
                while (curString.substr(curStrPos + numChars).charAt(0) !== '`') {
                  numChars++;
                  if (curStrPos + numChars > curString.length) break;
                } // strip out the escape characters and append all the string in between


                var stringBeforeSkip = curString.substring(0, curStrPos);
                var stringSkipped = curString.substring(stringBeforeSkip.length + 1, curStrPos + numChars);
                var stringAfterSkip = curString.substring(curStrPos + numChars + 1);
                curString = stringBeforeSkip + stringSkipped + stringAfterSkip;
                numChars--;
              } // timeout for any pause after a character


              _this2.timeout = setTimeout(function () {
                // Accounts for blinking while paused
                _this2.toggleBlinking(false); // We're done with this sentence!


                if (curStrPos >= curString.length) {
                  _this2.doneTyping(curString, curStrPos);
                } else {
                  _this2.keepTyping(curString, curStrPos, numChars);
                } // end of character pause


                if (_this2.temporaryPause) {
                  _this2.temporaryPause = false;

                  _this2.options.onTypingResumed(_this2.arrayPos, _this2);
                }
              }, pauseTime); // humanized value for typing
            }, humanize);
          }
          /**
           * Continue to the next string & begin typing
           * @param {string} curString the current string in the strings array
           * @param {number} curStrPos the current position in the curString
           * @private
           */

        }, {
          key: 'keepTyping',
          value: function keepTyping(curString, curStrPos, numChars) {
            // call before functions if applicable
            if (curStrPos === 0) {
              this.toggleBlinking(false);
              this.options.preStringTyped(this.arrayPos, this);
            } // start typing each new char into existing string
            // curString: arg, this.el.html: original text inside element


            curStrPos += numChars;
            var nextString = curString.substr(0, curStrPos);
            this.replaceText(nextString); // loop the function

            this.typewrite(curString, curStrPos);
          }
          /**
           * We're done typing the current string
           * @param {string} curString the current string in the strings array
           * @param {number} curStrPos the current position in the curString
           * @private
           */

        }, {
          key: 'doneTyping',
          value: function doneTyping(curString, curStrPos) {
            var _this3 = this; // fires callback function


            this.options.onStringTyped(this.arrayPos, this);
            this.toggleBlinking(true); // is this the final string

            if (this.arrayPos === this.strings.length - 1) {
              // callback that occurs on the last typed string
              this.complete(); // quit if we wont loop back

              if (this.loop === false || this.curLoop === this.loopCount) {
                return;
              }
            }

            this.timeout = setTimeout(function () {
              _this3.backspace(curString, curStrPos);
            }, this.backDelay);
          }
          /**
           * Backspaces 1 character at a time
           * @param {string} curString the current string in the strings array
           * @param {number} curStrPos the current position in the curString
           * @private
           */

        }, {
          key: 'backspace',
          value: function backspace(curString, curStrPos) {
            var _this4 = this;

            if (this.pause.status === true) {
              this.setPauseStatus(curString, curStrPos, true);
              return;
            }

            if (this.fadeOut) return this.initFadeOut();
            this.toggleBlinking(false);
            var humanize = this.humanizer(this.backSpeed);
            this.timeout = setTimeout(function () {
              curStrPos = _htmlParserJs.htmlParser.backSpaceHtmlChars(curString, curStrPos, _this4); // replace text with base text + typed characters

              var curStringAtPosition = curString.substr(0, curStrPos);

              _this4.replaceText(curStringAtPosition); // if smartBack is enabled


              if (_this4.smartBackspace) {
                // the remaining part of the current string is equal of the same part of the new string
                var nextString = _this4.strings[_this4.arrayPos + 1];

                if (nextString && curStringAtPosition === nextString.substr(0, curStrPos)) {
                  _this4.stopNum = curStrPos;
                } else {
                  _this4.stopNum = 0;
                }
              } // if the number (id of character in current string) is
              // less than the stop number, keep going


              if (curStrPos > _this4.stopNum) {
                // subtract characters one by one
                curStrPos--; // loop the function

                _this4.backspace(curString, curStrPos);
              } else if (curStrPos <= _this4.stopNum) {
                // if the stop number has been reached, increase
                // array position to next string
                _this4.arrayPos++; // When looping, begin at the beginning after backspace complete

                if (_this4.arrayPos === _this4.strings.length) {
                  _this4.arrayPos = 0;

                  _this4.options.onLastStringBackspaced();

                  _this4.shuffleStringsIfNeeded();

                  _this4.begin();
                } else {
                  _this4.typewrite(_this4.strings[_this4.sequence[_this4.arrayPos]], curStrPos);
                }
              } // humanized value for typing

            }, humanize);
          }
          /**
           * Full animation is complete
           * @private
           */

        }, {
          key: 'complete',
          value: function complete() {
            this.options.onComplete(this);

            if (this.loop) {
              this.curLoop++;
            } else {
              this.typingComplete = true;
            }
          }
          /**
           * Has the typing been stopped
           * @param {string} curString the current string in the strings array
           * @param {number} curStrPos the current position in the curString
           * @param {boolean} isTyping
           * @private
           */

        }, {
          key: 'setPauseStatus',
          value: function setPauseStatus(curString, curStrPos, isTyping) {
            this.pause.typewrite = isTyping;
            this.pause.curString = curString;
            this.pause.curStrPos = curStrPos;
          }
          /**
           * Toggle the blinking cursor
           * @param {boolean} isBlinking
           * @private
           */

        }, {
          key: 'toggleBlinking',
          value: function toggleBlinking(isBlinking) {
            if (!this.cursor) return; // if in paused state, don't toggle blinking a 2nd time

            if (this.pause.status) return;
            if (this.cursorBlinking === isBlinking) return;
            this.cursorBlinking = isBlinking;

            if (isBlinking) {
              this.cursor.classList.add('typed-cursor--blink');
            } else {
              this.cursor.classList.remove('typed-cursor--blink');
            }
          }
          /**
           * Speed in MS to type
           * @param {number} speed
           * @private
           */

        }, {
          key: 'humanizer',
          value: function humanizer(speed) {
            return Math.round(Math.random() * speed / 2) + speed;
          }
          /**
           * Shuffle the sequence of the strings array
           * @private
           */

        }, {
          key: 'shuffleStringsIfNeeded',
          value: function shuffleStringsIfNeeded() {
            if (!this.shuffle) return;
            this.sequence = this.sequence.sort(function () {
              return Math.random() - 0.5;
            });
          }
          /**
           * Adds a CSS class to fade out current string
           * @private
           */

        }, {
          key: 'initFadeOut',
          value: function initFadeOut() {
            var _this5 = this;

            this.el.className += ' ' + this.fadeOutClass;
            if (this.cursor) this.cursor.className += ' ' + this.fadeOutClass;
            return setTimeout(function () {
              _this5.arrayPos++;

              _this5.replaceText(''); // Resets current string if end of loop reached


              if (_this5.strings.length > _this5.arrayPos) {
                _this5.typewrite(_this5.strings[_this5.sequence[_this5.arrayPos]], 0);
              } else {
                _this5.typewrite(_this5.strings[0], 0);

                _this5.arrayPos = 0;
              }
            }, this.fadeOutDelay);
          }
          /**
           * Replaces current text in the HTML element
           * depending on element type
           * @param {string} str
           * @private
           */

        }, {
          key: 'replaceText',
          value: function replaceText(str) {
            if (this.attr) {
              this.el.setAttribute(this.attr, str);
            } else {
              if (this.isInput) {
                this.el.value = str;
              } else if (this.contentType === 'html') {
                this.el.innerHTML = str;
              } else {
                this.el.textContent = str;
              }
            }
          }
          /**
           * If using input elements, bind focus in order to
           * start and stop the animation
           * @private
           */

        }, {
          key: 'bindFocusEvents',
          value: function bindFocusEvents() {
            var _this6 = this;

            if (!this.isInput) return;
            this.el.addEventListener('focus', function (e) {
              _this6.stop();
            });
            this.el.addEventListener('blur', function (e) {
              if (_this6.el.value && _this6.el.value.length !== 0) {
                return;
              }

              _this6.start();
            });
          }
          /**
           * On init, insert the cursor element
           * @private
           */

        }, {
          key: 'insertCursor',
          value: function insertCursor() {
            if (!this.showCursor) return;
            if (this.cursor) return;
            this.cursor = document.createElement('span');
            this.cursor.className = 'typed-cursor';
            this.cursor.innerHTML = this.cursorChar;
            this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling);
          }
        }]);

        return Typed;
      }();

      exports['default'] = Typed;
      module.exports = exports['default'];
      /***/
    },
    /* 1 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          'default': obj
        };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError('Cannot call a class as a function');
        }
      }

      var _defaultsJs = __webpack_require__(2);

      var _defaultsJs2 = _interopRequireDefault(_defaultsJs);
      /**
       * Initialize the Typed object
       */


      var Initializer = function () {
        function Initializer() {
          _classCallCheck(this, Initializer);
        }

        _createClass(Initializer, [{
          key: 'load',

          /**
           * Load up defaults & options on the Typed instance
           * @param {Typed} self instance of Typed
           * @param {object} options options object
           * @param {string} elementId HTML element ID _OR_ instance of HTML element
           * @private
           */
          value: function load(self, options, elementId) {
            // chosen element to manipulate text
            if (typeof elementId === 'string') {
              self.el = document.querySelector(elementId);
            } else {
              self.el = elementId;
            }

            self.options = _extends({}, _defaultsJs2['default'], options); // attribute to type into

            self.isInput = self.el.tagName.toLowerCase() === 'input';
            self.attr = self.options.attr;
            self.bindInputFocusEvents = self.options.bindInputFocusEvents; // show cursor

            self.showCursor = self.isInput ? false : self.options.showCursor; // custom cursor

            self.cursorChar = self.options.cursorChar; // Is the cursor blinking

            self.cursorBlinking = true; // text content of element

            self.elContent = self.attr ? self.el.getAttribute(self.attr) : self.el.textContent; // html or plain text

            self.contentType = self.options.contentType; // typing speed

            self.typeSpeed = self.options.typeSpeed; // add a delay before typing starts

            self.startDelay = self.options.startDelay; // backspacing speed

            self.backSpeed = self.options.backSpeed; // only backspace what doesn't match the previous string

            self.smartBackspace = self.options.smartBackspace; // amount of time to wait before backspacing

            self.backDelay = self.options.backDelay; // Fade out instead of backspace

            self.fadeOut = self.options.fadeOut;
            self.fadeOutClass = self.options.fadeOutClass;
            self.fadeOutDelay = self.options.fadeOutDelay; // variable to check whether typing is currently paused

            self.isPaused = false; // input strings of text

            self.strings = self.options.strings.map(function (s) {
              return s.trim();
            }); // div containing strings

            if (typeof self.options.stringsElement === 'string') {
              self.stringsElement = document.querySelector(self.options.stringsElement);
            } else {
              self.stringsElement = self.options.stringsElement;
            }

            if (self.stringsElement) {
              self.strings = [];
              self.stringsElement.style.display = 'none';
              var strings = Array.prototype.slice.apply(self.stringsElement.children);
              var stringsLength = strings.length;

              if (stringsLength) {
                for (var i = 0; i < stringsLength; i += 1) {
                  var stringEl = strings[i];
                  self.strings.push(stringEl.innerHTML.trim());
                }
              }
            } // character number position of current string


            self.strPos = 0; // current array position

            self.arrayPos = 0; // index of string to stop backspacing on

            self.stopNum = 0; // Looping logic

            self.loop = self.options.loop;
            self.loopCount = self.options.loopCount;
            self.curLoop = 0; // shuffle the strings

            self.shuffle = self.options.shuffle; // the order of strings

            self.sequence = [];
            self.pause = {
              status: false,
              typewrite: true,
              curString: '',
              curStrPos: 0
            }; // When the typing is complete (when not looped)

            self.typingComplete = false; // Set the order in which the strings are typed

            for (var i in self.strings) {
              self.sequence[i] = i;
            } // If there is some text in the element


            self.currentElContent = this.getCurrentElContent(self);
            self.autoInsertCss = self.options.autoInsertCss;
            this.appendAnimationCss(self);
          }
        }, {
          key: 'getCurrentElContent',
          value: function getCurrentElContent(self) {
            var elContent = '';

            if (self.attr) {
              elContent = self.el.getAttribute(self.attr);
            } else if (self.isInput) {
              elContent = self.el.value;
            } else if (self.contentType === 'html') {
              elContent = self.el.innerHTML;
            } else {
              elContent = self.el.textContent;
            }

            return elContent;
          }
        }, {
          key: 'appendAnimationCss',
          value: function appendAnimationCss(self) {
            var cssDataName = 'data-typed-js-css';

            if (!self.autoInsertCss) {
              return;
            }

            if (!self.showCursor && !self.fadeOut) {
              return;
            }

            if (document.querySelector('[' + cssDataName + ']')) {
              return;
            }

            var css = document.createElement('style');
            css.type = 'text/css';
            css.setAttribute(cssDataName, true);
            var innerCss = '';

            if (self.showCursor) {
              innerCss += '\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ';
            }

            if (self.fadeOut) {
              innerCss += '\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ';
            }

            if (css.length === 0) {
              return;
            }

            css.innerHTML = innerCss;
            document.body.appendChild(css);
          }
        }]);

        return Initializer;
      }();

      exports['default'] = Initializer;
      var initializer = new Initializer();
      exports.initializer = initializer;
      /***/
    },
    /* 2 */

    /***/
    function (module, exports) {
      /**
       * Defaults & options
       * @returns {object} Typed defaults & options
       * @public
       */
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      var defaults = {
        /**
         * @property {array} strings strings to be typed
         * @property {string} stringsElement ID of element containing string children
         */
        strings: ['These are the default values...', 'You know what you should do?', 'Use your own!', 'Have a great day!'],
        stringsElement: null,

        /**
         * @property {number} typeSpeed type speed in milliseconds
         */
        typeSpeed: 0,

        /**
         * @property {number} startDelay time before typing starts in milliseconds
         */
        startDelay: 0,

        /**
         * @property {number} backSpeed backspacing speed in milliseconds
         */
        backSpeed: 0,

        /**
         * @property {boolean} smartBackspace only backspace what doesn't match the previous string
         */
        smartBackspace: true,

        /**
         * @property {boolean} shuffle shuffle the strings
         */
        shuffle: false,

        /**
         * @property {number} backDelay time before backspacing in milliseconds
         */
        backDelay: 700,

        /**
         * @property {boolean} fadeOut Fade out instead of backspace
         * @property {string} fadeOutClass css class for fade animation
         * @property {boolean} fadeOutDelay Fade out delay in milliseconds
         */
        fadeOut: false,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 500,

        /**
         * @property {boolean} loop loop strings
         * @property {number} loopCount amount of loops
         */
        loop: false,
        loopCount: Infinity,

        /**
         * @property {boolean} showCursor show cursor
         * @property {string} cursorChar character for cursor
         * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
         */
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true,

        /**
         * @property {string} attr attribute for typing
         * Ex: input placeholder, value, or just HTML text
         */
        attr: null,

        /**
         * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
         */
        bindInputFocusEvents: false,

        /**
         * @property {string} contentType 'html' or 'null' for plaintext
         */
        contentType: 'html',

        /**
         * Before it begins typing
         * @param {Typed} self
         */
        onBegin: function onBegin(self) {},

        /**
         * All typing is complete
         * @param {Typed} self
         */
        onComplete: function onComplete(self) {},

        /**
         * Before each string is typed
         * @param {number} arrayPos
         * @param {Typed} self
         */
        preStringTyped: function preStringTyped(arrayPos, self) {},

        /**
         * After each string is typed
         * @param {number} arrayPos
         * @param {Typed} self
         */
        onStringTyped: function onStringTyped(arrayPos, self) {},

        /**
         * During looping, after last string is typed
         * @param {Typed} self
         */
        onLastStringBackspaced: function onLastStringBackspaced(self) {},

        /**
         * Typing has been stopped
         * @param {number} arrayPos
         * @param {Typed} self
         */
        onTypingPaused: function onTypingPaused(arrayPos, self) {},

        /**
         * Typing has been started after being stopped
         * @param {number} arrayPos
         * @param {Typed} self
         */
        onTypingResumed: function onTypingResumed(arrayPos, self) {},

        /**
         * After reset
         * @param {Typed} self
         */
        onReset: function onReset(self) {},

        /**
         * After stop
         * @param {number} arrayPos
         * @param {Typed} self
         */
        onStop: function onStop(arrayPos, self) {},

        /**
         * After start
         * @param {number} arrayPos
         * @param {Typed} self
         */
        onStart: function onStart(arrayPos, self) {},

        /**
         * After destroy
         * @param {Typed} self
         */
        onDestroy: function onDestroy(self) {}
      };
      exports['default'] = defaults;
      module.exports = exports['default'];
      /***/
    },
    /* 3 */

    /***/
    function (module, exports) {
      /**
       * TODO: These methods can probably be combined somehow
       * Parse HTML tags & HTML Characters
       */
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError('Cannot call a class as a function');
        }
      }

      var HTMLParser = function () {
        function HTMLParser() {
          _classCallCheck(this, HTMLParser);
        }

        _createClass(HTMLParser, [{
          key: 'typeHtmlChars',

          /**
           * Type HTML tags & HTML Characters
           * @param {string} curString Current string
           * @param {number} curStrPos Position in current string
           * @param {Typed} self instance of Typed
           * @returns {number} a new string position
           * @private
           */
          value: function typeHtmlChars(curString, curStrPos, self) {
            if (self.contentType !== 'html') return curStrPos;
            var curChar = curString.substr(curStrPos).charAt(0);

            if (curChar === '<' || curChar === '&') {
              var endTag = '';

              if (curChar === '<') {
                endTag = '>';
              } else {
                endTag = ';';
              }

              while (curString.substr(curStrPos + 1).charAt(0) !== endTag) {
                curStrPos++;

                if (curStrPos + 1 > curString.length) {
                  break;
                }
              }

              curStrPos++;
            }

            return curStrPos;
          }
          /**
           * Backspace HTML tags and HTML Characters
           * @param {string} curString Current string
           * @param {number} curStrPos Position in current string
           * @param {Typed} self instance of Typed
           * @returns {number} a new string position
           * @private
           */

        }, {
          key: 'backSpaceHtmlChars',
          value: function backSpaceHtmlChars(curString, curStrPos, self) {
            if (self.contentType !== 'html') return curStrPos;
            var curChar = curString.substr(curStrPos).charAt(0);

            if (curChar === '>' || curChar === ';') {
              var endTag = '';

              if (curChar === '>') {
                endTag = '<';
              } else {
                endTag = '&';
              }

              while (curString.substr(curStrPos - 1).charAt(0) !== endTag) {
                curStrPos--;

                if (curStrPos < 0) {
                  break;
                }
              }

              curStrPos--;
            }

            return curStrPos;
          }
        }]);

        return HTMLParser;
      }();

      exports['default'] = HTMLParser;
      var htmlParser = new HTMLParser();
      exports.htmlParser = htmlParser;
      /***/
    }
    /******/
    ])
  );
});

;

/***/ }),

/***/ "./node_modules/unidragger/unidragger.js":
/*!***********************************************!*\
  !*** ./node_modules/unidragger/unidragger.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Unidragger v2.3.0
 * Draggable base class
 * MIT license
 */

/*jshint browser: true, unused: true, undef: true, strict: true */
(function (window, factory) {
  // universal module definition

  /*jshint strict: false */

  /*globals define, module, require */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! unipointer/unipointer */ "./node_modules/unipointer/unipointer.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Unipointer) {
      return factory(window, Unipointer);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory(window, Unipointer) {
  'use strict'; // -------------------------- Unidragger -------------------------- //

  function Unidragger() {} // inherit Unipointer & EvEmitter


  var proto = Unidragger.prototype = Object.create(Unipointer.prototype); // ----- bind start ----- //

  proto.bindHandles = function () {
    this._bindHandles(true);
  };

  proto.unbindHandles = function () {
    this._bindHandles(false);
  };
  /**
   * Add or remove start event
   * @param {Boolean} isAdd
   */


  proto._bindHandles = function (isAdd) {
    // munge isAdd, default to true
    isAdd = isAdd === undefined ? true : isAdd; // bind each handle

    var bindMethod = isAdd ? 'addEventListener' : 'removeEventListener';
    var touchAction = isAdd ? this._touchActionValue : '';

    for (var i = 0; i < this.handles.length; i++) {
      var handle = this.handles[i];

      this._bindStartEvent(handle, isAdd);

      handle[bindMethod]('click', this); // touch-action: none to override browser touch gestures. metafizzy/flickity#540

      if (window.PointerEvent) {
        handle.style.touchAction = touchAction;
      }
    }
  }; // prototype so it can be overwriteable by Flickity


  proto._touchActionValue = 'none'; // ----- start event ----- //

  /**
   * pointer start
   * @param {Event} event
   * @param {Event or Touch} pointer
   */

  proto.pointerDown = function (event, pointer) {
    var isOkay = this.okayPointerDown(event);

    if (!isOkay) {
      return;
    } // track start event position


    this.pointerDownPointer = pointer;
    event.preventDefault();
    this.pointerDownBlur(); // bind move and end events

    this._bindPostStartEvents(event);

    this.emitEvent('pointerDown', [event, pointer]);
  }; // nodes that have text fields


  var cursorNodes = {
    TEXTAREA: true,
    INPUT: true,
    SELECT: true,
    OPTION: true
  }; // input types that do not have text fields

  var clickTypes = {
    radio: true,
    checkbox: true,
    button: true,
    submit: true,
    image: true,
    file: true
  }; // dismiss inputs with text fields. flickity#403, flickity#404

  proto.okayPointerDown = function (event) {
    var isCursorNode = cursorNodes[event.target.nodeName];
    var isClickType = clickTypes[event.target.type];
    var isOkay = !isCursorNode || isClickType;

    if (!isOkay) {
      this._pointerReset();
    }

    return isOkay;
  }; // kludge to blur previously focused input


  proto.pointerDownBlur = function () {
    var focused = document.activeElement; // do not blur body for IE10, metafizzy/flickity#117

    var canBlur = focused && focused.blur && focused != document.body;

    if (canBlur) {
      focused.blur();
    }
  }; // ----- move event ----- //

  /**
   * drag move
   * @param {Event} event
   * @param {Event or Touch} pointer
   */


  proto.pointerMove = function (event, pointer) {
    var moveVector = this._dragPointerMove(event, pointer);

    this.emitEvent('pointerMove', [event, pointer, moveVector]);

    this._dragMove(event, pointer, moveVector);
  }; // base pointer move logic


  proto._dragPointerMove = function (event, pointer) {
    var moveVector = {
      x: pointer.pageX - this.pointerDownPointer.pageX,
      y: pointer.pageY - this.pointerDownPointer.pageY
    }; // start drag if pointer has moved far enough to start drag

    if (!this.isDragging && this.hasDragStarted(moveVector)) {
      this._dragStart(event, pointer);
    }

    return moveVector;
  }; // condition if pointer has moved far enough to start drag


  proto.hasDragStarted = function (moveVector) {
    return Math.abs(moveVector.x) > 3 || Math.abs(moveVector.y) > 3;
  }; // ----- end event ----- //

  /**
   * pointer up
   * @param {Event} event
   * @param {Event or Touch} pointer
   */


  proto.pointerUp = function (event, pointer) {
    this.emitEvent('pointerUp', [event, pointer]);

    this._dragPointerUp(event, pointer);
  };

  proto._dragPointerUp = function (event, pointer) {
    if (this.isDragging) {
      this._dragEnd(event, pointer);
    } else {
      // pointer didn't move enough for drag to start
      this._staticClick(event, pointer);
    }
  }; // -------------------------- drag -------------------------- //
  // dragStart


  proto._dragStart = function (event, pointer) {
    this.isDragging = true; // prevent clicks

    this.isPreventingClicks = true;
    this.dragStart(event, pointer);
  };

  proto.dragStart = function (event, pointer) {
    this.emitEvent('dragStart', [event, pointer]);
  }; // dragMove


  proto._dragMove = function (event, pointer, moveVector) {
    // do not drag if not dragging yet
    if (!this.isDragging) {
      return;
    }

    this.dragMove(event, pointer, moveVector);
  };

  proto.dragMove = function (event, pointer, moveVector) {
    event.preventDefault();
    this.emitEvent('dragMove', [event, pointer, moveVector]);
  }; // dragEnd


  proto._dragEnd = function (event, pointer) {
    // set flags
    this.isDragging = false; // re-enable clicking async

    setTimeout(function () {
      delete this.isPreventingClicks;
    }.bind(this));
    this.dragEnd(event, pointer);
  };

  proto.dragEnd = function (event, pointer) {
    this.emitEvent('dragEnd', [event, pointer]);
  }; // ----- onclick ----- //
  // handle all clicks and prevent clicks when dragging


  proto.onclick = function (event) {
    if (this.isPreventingClicks) {
      event.preventDefault();
    }
  }; // ----- staticClick ----- //
  // triggered after pointer down & up with no/tiny movement


  proto._staticClick = function (event, pointer) {
    // ignore emulated mouse up clicks
    if (this.isIgnoringMouseUp && event.type == 'mouseup') {
      return;
    }

    this.staticClick(event, pointer); // set flag for emulated clicks 300ms after touchend

    if (event.type != 'mouseup') {
      this.isIgnoringMouseUp = true; // reset flag after 300ms

      setTimeout(function () {
        delete this.isIgnoringMouseUp;
      }.bind(this), 400);
    }
  };

  proto.staticClick = function (event, pointer) {
    this.emitEvent('staticClick', [event, pointer]);
  }; // ----- utils ----- //


  Unidragger.getPointerPoint = Unipointer.getPointerPoint; // -----  ----- //

  return Unidragger;
});

/***/ }),

/***/ "./node_modules/unipointer/unipointer.js":
/*!***********************************************!*\
  !*** ./node_modules/unipointer/unipointer.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Unipointer v2.3.0
 * base class for doing one thing with pointer event
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */
(function (window, factory) {
  // universal module definition

  /* jshint strict: false */

  /*global define, module, require */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ev-emitter/ev-emitter */ "./node_modules/ev-emitter/ev-emitter.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (EvEmitter) {
      return factory(window, EvEmitter);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory(window, EvEmitter) {
  'use strict';

  function noop() {}

  function Unipointer() {} // inherit EvEmitter


  var proto = Unipointer.prototype = Object.create(EvEmitter.prototype);

  proto.bindStartEvent = function (elem) {
    this._bindStartEvent(elem, true);
  };

  proto.unbindStartEvent = function (elem) {
    this._bindStartEvent(elem, false);
  };
  /**
   * Add or remove start event
   * @param {Boolean} isAdd - remove if falsey
   */


  proto._bindStartEvent = function (elem, isAdd) {
    // munge isAdd, default to true
    isAdd = isAdd === undefined ? true : isAdd;
    var bindMethod = isAdd ? 'addEventListener' : 'removeEventListener'; // default to mouse events

    var startEvent = 'mousedown';

    if (window.PointerEvent) {
      // Pointer Events
      startEvent = 'pointerdown';
    } else if ('ontouchstart' in window) {
      // Touch Events. iOS Safari
      startEvent = 'touchstart';
    }

    elem[bindMethod](startEvent, this);
  }; // trigger handler methods for events


  proto.handleEvent = function (event) {
    var method = 'on' + event.type;

    if (this[method]) {
      this[method](event);
    }
  }; // returns the touch that we're keeping track of


  proto.getTouch = function (touches) {
    for (var i = 0; i < touches.length; i++) {
      var touch = touches[i];

      if (touch.identifier == this.pointerIdentifier) {
        return touch;
      }
    }
  }; // ----- start event ----- //


  proto.onmousedown = function (event) {
    // dismiss clicks from right or middle buttons
    var button = event.button;

    if (button && button !== 0 && button !== 1) {
      return;
    }

    this._pointerDown(event, event);
  };

  proto.ontouchstart = function (event) {
    this._pointerDown(event, event.changedTouches[0]);
  };

  proto.onpointerdown = function (event) {
    this._pointerDown(event, event);
  };
  /**
   * pointer start
   * @param {Event} event
   * @param {Event or Touch} pointer
   */


  proto._pointerDown = function (event, pointer) {
    // dismiss right click and other pointers
    // button = 0 is okay, 1-4 not
    if (event.button || this.isPointerDown) {
      return;
    }

    this.isPointerDown = true; // save pointer identifier to match up touch events

    this.pointerIdentifier = pointer.pointerId !== undefined ? // pointerId for pointer events, touch.indentifier for touch events
    pointer.pointerId : pointer.identifier;
    this.pointerDown(event, pointer);
  };

  proto.pointerDown = function (event, pointer) {
    this._bindPostStartEvents(event);

    this.emitEvent('pointerDown', [event, pointer]);
  }; // hash of events to be bound after start event


  var postStartEvents = {
    mousedown: ['mousemove', 'mouseup'],
    touchstart: ['touchmove', 'touchend', 'touchcancel'],
    pointerdown: ['pointermove', 'pointerup', 'pointercancel']
  };

  proto._bindPostStartEvents = function (event) {
    if (!event) {
      return;
    } // get proper events to match start event


    var events = postStartEvents[event.type]; // bind events to node

    events.forEach(function (eventName) {
      window.addEventListener(eventName, this);
    }, this); // save these arguments

    this._boundPointerEvents = events;
  };

  proto._unbindPostStartEvents = function () {
    // check for _boundEvents, in case dragEnd triggered twice (old IE8 bug)
    if (!this._boundPointerEvents) {
      return;
    }

    this._boundPointerEvents.forEach(function (eventName) {
      window.removeEventListener(eventName, this);
    }, this);

    delete this._boundPointerEvents;
  }; // ----- move event ----- //


  proto.onmousemove = function (event) {
    this._pointerMove(event, event);
  };

  proto.onpointermove = function (event) {
    if (event.pointerId == this.pointerIdentifier) {
      this._pointerMove(event, event);
    }
  };

  proto.ontouchmove = function (event) {
    var touch = this.getTouch(event.changedTouches);

    if (touch) {
      this._pointerMove(event, touch);
    }
  };
  /**
   * pointer move
   * @param {Event} event
   * @param {Event or Touch} pointer
   * @private
   */


  proto._pointerMove = function (event, pointer) {
    this.pointerMove(event, pointer);
  }; // public


  proto.pointerMove = function (event, pointer) {
    this.emitEvent('pointerMove', [event, pointer]);
  }; // ----- end event ----- //


  proto.onmouseup = function (event) {
    this._pointerUp(event, event);
  };

  proto.onpointerup = function (event) {
    if (event.pointerId == this.pointerIdentifier) {
      this._pointerUp(event, event);
    }
  };

  proto.ontouchend = function (event) {
    var touch = this.getTouch(event.changedTouches);

    if (touch) {
      this._pointerUp(event, touch);
    }
  };
  /**
   * pointer up
   * @param {Event} event
   * @param {Event or Touch} pointer
   * @private
   */


  proto._pointerUp = function (event, pointer) {
    this._pointerDone();

    this.pointerUp(event, pointer);
  }; // public


  proto.pointerUp = function (event, pointer) {
    this.emitEvent('pointerUp', [event, pointer]);
  }; // ----- pointer done ----- //
  // triggered on pointer up & pointer cancel


  proto._pointerDone = function () {
    this._pointerReset();

    this._unbindPostStartEvents();

    this.pointerDone();
  };

  proto._pointerReset = function () {
    // reset properties
    this.isPointerDown = false;
    delete this.pointerIdentifier;
  };

  proto.pointerDone = noop; // ----- pointer cancel ----- //

  proto.onpointercancel = function (event) {
    if (event.pointerId == this.pointerIdentifier) {
      this._pointerCancel(event, event);
    }
  };

  proto.ontouchcancel = function (event) {
    var touch = this.getTouch(event.changedTouches);

    if (touch) {
      this._pointerCancel(event, touch);
    }
  };
  /**
   * pointer cancel
   * @param {Event} event
   * @param {Event or Touch} pointer
   * @private
   */


  proto._pointerCancel = function (event, pointer) {
    this._pointerDone();

    this.pointerCancel(event, pointer);
  }; // public


  proto.pointerCancel = function (event, pointer) {
    this.emitEvent('pointerCancel', [event, pointer]);
  }; // -----  ----- //
  // utility function for getting x/y coords from event


  Unipointer.getPointerPoint = function (pointer) {
    return {
      x: pointer.pageX,
      y: pointer.pageY
    };
  }; // -----  ----- //


  return Unipointer;
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvYnVuZGxlL19hbWF0ZXVyLWNyZWF0aXZlcy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9idW5kbGUvX2ZsaWNraXR5LWN1c3RvbS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9idW5kbGUvX3R5cGVkLWN1c3RvbS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9idW5kbGUvYnVuZGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kZXNhbmRyby1tYXRjaGVzLXNlbGVjdG9yL21hdGNoZXMtc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2V2LWVtaXR0ZXIvZXYtZW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZml6enktdWktdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZsaWNraXR5L2pzL2FkZC1yZW1vdmUtY2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxpY2tpdHkvanMvYW5pbWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxpY2tpdHkvanMvY2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxpY2tpdHkvanMvZHJhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxpY2tpdHkvanMvZmxpY2tpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZsaWNraXR5L2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mbGlja2l0eS9qcy9sYXp5bG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxpY2tpdHkvanMvcGFnZS1kb3RzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mbGlja2l0eS9qcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZsaWNraXR5L2pzL3ByZXYtbmV4dC1idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZsaWNraXR5L2pzL3NsaWRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXQtc2l6ZS9nZXQtc2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHlwZWQuanMvbGliL3R5cGVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmlkcmFnZ2VyL3VuaWRyYWdnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuaXBvaW50ZXIvdW5pcG9pbnRlci5qcyJdLCJuYW1lcyI6WyJoYW1idXJnZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYWdlX292ZXJsYXkiLCJib2R5X2NvbnRhaW5lciIsImhlYWRlcl9saW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzb2NpYWxfaWNvbnMiLCJpc0Rlc2t0b3AiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwiRGVza3RvcFRyYW5zZm9ybSIsIm1hdGNoZXMiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZvckVhY2giLCJhIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsIm9mZnNldCIsInNob3VsZEJlSGlkZGVuIiwidG9wIiwiaG92ZXJlZCIsImljb24iLCJmbGt0eSIsIkZsaWNraXR5IiwiY29udGFpbiIsInByZXZOZXh0QnV0dG9ucyIsImltYWdlc0xvYWRlZCIsInR5cGVkIiwiVHlwZWQiLCJzdHJpbmdzRWxlbWVudCIsInR5cGVTcGVlZCIsImZhY3RvcnkiLCJkZWZpbmUiLCJtYXRjaGVzTWV0aG9kIiwiRWxlbVByb3RvIiwiRWxlbWVudCIsInByb3RvdHlwZSIsIm1hdGNoZXNTZWxlY3RvciIsInByZWZpeGVzIiwiaSIsImxlbmd0aCIsInByZWZpeCIsIm1ldGhvZCIsImVsZW0iLCJzZWxlY3RvciIsImdsb2JhbCIsIkV2RW1pdHRlciIsInByb3RvIiwib24iLCJldmVudE5hbWUiLCJsaXN0ZW5lciIsImV2ZW50cyIsIl9ldmVudHMiLCJsaXN0ZW5lcnMiLCJpbmRleE9mIiwicHVzaCIsIm9uY2UiLCJvbmNlRXZlbnRzIiwiX29uY2VFdmVudHMiLCJvbmNlTGlzdGVuZXJzIiwib2ZmIiwiaW5kZXgiLCJzcGxpY2UiLCJlbWl0RXZlbnQiLCJhcmdzIiwic2xpY2UiLCJpc09uY2UiLCJhcHBseSIsImFsbE9mZiIsInV0aWxzIiwiZXh0ZW5kIiwiYiIsInByb3AiLCJtb2R1bG8iLCJudW0iLCJkaXYiLCJhcnJheVNsaWNlIiwiQXJyYXkiLCJtYWtlQXJyYXkiLCJvYmoiLCJpc0FycmF5IiwidW5kZWZpbmVkIiwiaXNBcnJheUxpa2UiLCJjYWxsIiwicmVtb3ZlRnJvbSIsImFyeSIsImdldFBhcmVudCIsInBhcmVudE5vZGUiLCJib2R5IiwiZ2V0UXVlcnlFbGVtZW50IiwiaGFuZGxlRXZlbnQiLCJldmVudCIsInR5cGUiLCJmaWx0ZXJGaW5kRWxlbWVudHMiLCJlbGVtcyIsImZmRWxlbXMiLCJIVE1MRWxlbWVudCIsImNoaWxkRWxlbXMiLCJkZWJvdW5jZU1ldGhvZCIsIl9jbGFzcyIsIm1ldGhvZE5hbWUiLCJ0aHJlc2hvbGQiLCJ0aW1lb3V0TmFtZSIsInRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJhcmd1bWVudHMiLCJfdGhpcyIsInNldFRpbWVvdXQiLCJkb2NSZWFkeSIsImNhbGxiYWNrIiwicmVhZHlTdGF0ZSIsInRvRGFzaGVkIiwic3RyIiwicmVwbGFjZSIsIm1hdGNoIiwiJDEiLCIkMiIsInRvTG93ZXJDYXNlIiwiaHRtbEluaXQiLCJXaWRnZXRDbGFzcyIsIm5hbWVzcGFjZSIsImRhc2hlZE5hbWVzcGFjZSIsImRhdGFBdHRyIiwiZGF0YUF0dHJFbGVtcyIsImpzRGFzaEVsZW1zIiwiY29uY2F0IiwiZGF0YU9wdGlvbnNBdHRyIiwialF1ZXJ5IiwiYXR0ciIsImdldEF0dHJpYnV0ZSIsIm9wdGlvbnMiLCJKU09OIiwicGFyc2UiLCJlcnJvciIsImNsYXNzTmFtZSIsImluc3RhbmNlIiwiZGF0YSIsImdldENlbGxzRnJhZ21lbnQiLCJjZWxscyIsImZyYWdtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImNlbGwiLCJhcHBlbmRDaGlsZCIsImVsZW1lbnQiLCJpbnNlcnQiLCJfbWFrZUNlbGxzIiwibGVuIiwiaXNBcHBlbmQiLCJzbGlkZXIiLCJpbnNlcnRDZWxsRWxlbWVudCIsImluc2VydEJlZm9yZSIsImVuZENlbGxzIiwiX3NpemVDZWxscyIsImNlbGxDaGFuZ2UiLCJhcHBlbmQiLCJwcmVwZW5kIiwicmVtb3ZlIiwiZ2V0Q2VsbHMiLCJtaW5DZWxsSW5kZXgiLCJNYXRoIiwibWluIiwiY2VsbFNpemVDaGFuZ2UiLCJnZXRDZWxsIiwiZ2V0U2l6ZSIsImNoYW5nZWRDZWxsSW5kZXgiLCJpc1Bvc2l0aW9uaW5nU2xpZGVyIiwicHJldlNlbGVjdGVkRWxlbSIsInNlbGVjdGVkRWxlbWVudCIsIl9wb3NpdGlvbkNlbGxzIiwiX2dldFdyYXBTaGlmdENlbGxzIiwic2V0R2FsbGVyeVNpemUiLCJzZWxlY3RlZEluZGV4IiwiZ2V0Q2VsbFNsaWRlSW5kZXgiLCJzbGlkZXMiLCJzZWxlY3QiLCJwb3NpdGlvblNsaWRlckF0U2VsZWN0ZWQiLCJzdGFydEFuaW1hdGlvbiIsImlzQW5pbWF0aW5nIiwicmVzdGluZ0ZyYW1lcyIsImFuaW1hdGUiLCJhcHBseURyYWdGb3JjZSIsImFwcGx5U2VsZWN0ZWRBdHRyYWN0aW9uIiwicHJldmlvdXNYIiwieCIsImludGVncmF0ZVBoeXNpY3MiLCJwb3NpdGlvblNsaWRlciIsInNldHRsZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFuaW1hdGVGcmFtZSIsIndyYXBBcm91bmQiLCJzbGlkZWFibGVXaWR0aCIsInNoaWZ0V3JhcENlbGxzIiwic2V0VHJhbnNsYXRlWCIsImRpc3BhdGNoU2Nyb2xsRXZlbnQiLCJpczNkIiwiY3Vyc29yUG9zaXRpb24iLCJyaWdodFRvTGVmdCIsInRyYW5zbGF0ZVgiLCJnZXRQb3NpdGlvblZhbHVlIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJmaXJzdFNsaWRlIiwicG9zaXRpb25YIiwidGFyZ2V0IiwicHJvZ3Jlc3MiLCJzbGlkZXNXaWR0aCIsImRpc3BhdGNoRXZlbnQiLCJzZWxlY3RlZFNsaWRlIiwidmVsb2NpdHkiLCJwb3NpdGlvbiIsInBlcmNlbnRQb3NpdGlvbiIsInJvdW5kIiwic2l6ZSIsImlubmVyV2lkdGgiLCJpc1BvaW50ZXJEb3duIiwiaXNGcmVlU2Nyb2xsaW5nIiwiYmVmb3JlR2FwIiwiX3NoaWZ0Q2VsbHMiLCJiZWZvcmVTaGlmdENlbGxzIiwiYWZ0ZXJHYXAiLCJhZnRlclNoaWZ0Q2VsbHMiLCJnYXAiLCJzaGlmdCIsImNlbGxTaGlmdCIsIndyYXBTaGlmdCIsIm91dGVyV2lkdGgiLCJfdW5zaGlmdENlbGxzIiwiZ2V0RnJpY3Rpb25GYWN0b3IiLCJhcHBseUZvcmNlIiwiZm9yY2UiLCJnZXRSZXN0aW5nUG9zaXRpb24iLCJpc0RyYWdnYWJsZSIsImRyYWdWZWxvY2l0eSIsImRyYWdYIiwiZHJhZ0ZvcmNlIiwiZHJhZ0Rvd24iLCJkaXN0YW5jZSIsInNlbGVjdGVkQXR0cmFjdGlvbiIsIkNlbGwiLCJwYXJlbnQiLCJjcmVhdGUiLCJzZXRBdHRyaWJ1dGUiLCJkZXN0cm95IiwidW5zZWxlY3QiLCJzaWRlIiwib3JpZ2luU2lkZSIsInNldFBvc2l0aW9uIiwidXBkYXRlVGFyZ2V0IiwicmVuZGVyUG9zaXRpb24iLCJzZXREZWZhdWx0VGFyZ2V0IiwibWFyZ2luUHJvcGVydHkiLCJ3aWR0aCIsImNlbGxBbGlnbiIsImFkZCIsInJlbW92ZUF0dHJpYnV0ZSIsInJlbW92ZUNoaWxkIiwiVW5pZHJhZ2dlciIsImRlZmF1bHRzIiwiZHJhZ2dhYmxlIiwiZHJhZ1RocmVzaG9sZCIsImNyZWF0ZU1ldGhvZHMiLCJfdG91Y2hBY3Rpb25WYWx1ZSIsImlzVG91Y2giLCJpc1RvdWNobW92ZVNjcm9sbENhbmNlbGVkIiwiX2NyZWF0ZURyYWciLCJvbkFjdGl2YXRlRHJhZyIsIl91aUNoYW5nZURyYWciLCJvbkRlYWN0aXZhdGVEcmFnIiwidXBkYXRlRHJhZ2dhYmxlIiwiaGFuZGxlcyIsInZpZXdwb3J0IiwiYmluZEhhbmRsZXMiLCJ1bmJpbmRIYW5kbGVzIiwiYmluZERyYWciLCJ1bmJpbmREcmFnIiwicG9pbnRlckRvd24iLCJwb2ludGVyIiwiX3BvaW50ZXJEb3duRGVmYXVsdCIsImlzT2theSIsIm9rYXlQb2ludGVyRG93biIsIl9wb2ludGVyRG93blByZXZlbnREZWZhdWx0IiwicG9pbnRlckRvd25Gb2N1cyIsImFjdGl2ZUVsZW1lbnQiLCJwb2ludGVyRG93bkJsdXIiLCJwb2ludGVyRG93blNjcm9sbCIsImdldFNjcm9sbFBvc2l0aW9uIiwicG9pbnRlckRvd25Qb2ludGVyIiwicGFnZVgiLCJwYWdlWSIsIl9iaW5kUG9zdFN0YXJ0RXZlbnRzIiwiZm9jdXNOb2RlcyIsIklOUFVUIiwiVEVYVEFSRUEiLCJTRUxFQ1QiLCJpc0ZvY3VzTm9kZSIsIm5vZGVOYW1lIiwiZm9jdXMiLCJpc1RvdWNoU3RhcnQiLCJpc1RvdWNoUG9pbnRlciIsInBvaW50ZXJUeXBlIiwicHJldmVudERlZmF1bHQiLCJoYXNEcmFnU3RhcnRlZCIsIm1vdmVWZWN0b3IiLCJhYnMiLCJwb2ludGVyVXAiLCJpc1RvdWNoU2Nyb2xsaW5nIiwiX2RyYWdQb2ludGVyVXAiLCJwb2ludGVyRG9uZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkcmFnU3RhcnQiLCJkcmFnU3RhcnRQb3NpdGlvbiIsInBvaW50ZXJNb3ZlIiwiX2RyYWdQb2ludGVyTW92ZSIsIl9kcmFnTW92ZSIsImRyYWdNb3ZlIiwicHJldmlvdXNEcmFnWCIsImRpcmVjdGlvbiIsIm9yaWdpbkJvdW5kIiwibWF4IiwiZW5kQm91bmQiLCJnZXRMYXN0U2xpZGUiLCJkcmFnTW92ZVRpbWUiLCJEYXRlIiwiZHJhZ0VuZCIsImZyZWVTY3JvbGwiLCJkcmFnRW5kUmVzdGluZ1NlbGVjdCIsInJlc3RpbmdYIiwiZHJhZ0VuZEJvb3N0U2VsZWN0IiwiaXNEcmFnU2VsZWN0IiwiZ2V0U2xpZGVEaXN0YW5jZSIsInBvc2l0aXZlUmVzdGluZyIsIl9nZXRDbG9zZXN0UmVzdGluZyIsIm5lZ2F0aXZlUmVzdGluZyIsImluY3JlbWVudCIsIm1pbkRpc3RhbmNlIiwiSW5maW5pdHkiLCJjb25kaXRpb24iLCJkIiwibWQiLCJpc1dyYXBBcm91bmQiLCJzbGlkZUluZGV4Iiwic2xpZGUiLCJ3cmFwIiwiZmxvb3IiLCJkZWx0YSIsInN0YXRpY0NsaWNrIiwiY2xpY2tlZENlbGwiLCJnZXRQYXJlbnRDZWxsIiwiY2VsbEVsZW0iLCJjZWxsSW5kZXgiLCJvbnNjcm9sbCIsInNjcm9sbCIsInNjcm9sbE1vdmVYIiwic2Nyb2xsTW92ZVkiLCJ5IiwiX3BvaW50ZXJEb25lIiwicGFnZVhPZmZzZXQiLCJwYWdlWU9mZnNldCIsIlNsaWRlIiwiYW5pbWF0ZVByb3RvdHlwZSIsImdldENvbXB1dGVkU3R5bGUiLCJtb3ZlRWxlbWVudHMiLCJ0b0VsZW0iLCJHVUlEIiwiaW5zdGFuY2VzIiwicXVlcnlFbGVtZW50IiwiZmxpY2tpdHlHVUlEIiwib3B0aW9uIiwiJGVsZW1lbnQiLCJjb25zdHJ1Y3RvciIsIl9jcmVhdGUiLCJhY2Nlc3NpYmlsaXR5IiwiZnJlZVNjcm9sbEZyaWN0aW9uIiwiZnJpY3Rpb24iLCJuYW1lc3BhY2VKUXVlcnlFdmVudHMiLCJyZXNpemUiLCJpZCIsImd1aWQiLCJjcmVhdGVFbGVtZW50IiwiX2NyZWF0ZVNsaWRlciIsIndhdGNoQ1NTIiwiYWN0aXZhdGUiLCJvcHRzIiwiaXNBY3RpdmUiLCJjZWxsRWxlbXMiLCJfZmlsdGVyRmluZENlbGxFbGVtZW50cyIsImNoaWxkcmVuIiwicmVsb2FkQ2VsbHMiLCJ0YWJJbmRleCIsInNlbGVjdEluaXRpYWxJbmRleCIsImlzSW5pdEFjdGl2YXRlZCIsImNlbGxTZWxlY3RvciIsInBvc2l0aW9uQ2VsbHMiLCJtYXAiLCJnZXRMYXN0Q2VsbCIsIm1heENlbGxIZWlnaHQiLCJjZWxsWCIsInN0YXJ0Q2VsbCIsIm91dGVySGVpZ2h0IiwidXBkYXRlU2xpZGVzIiwiX2NvbnRhaW5TbGlkZXMiLCJpc09yaWdpbkxlZnQiLCJuZXh0TWFyZ2luIiwiY2FuQ2VsbEZpdCIsIl9nZXRDYW5DZWxsRml0IiwiYWRkQ2VsbCIsInNsaWRlV2lkdGgiLCJmaXJzdE1hcmdpbiIsInVwZGF0ZVNlbGVjdGVkU2xpZGUiLCJncm91cENlbGxzIiwibnVtYmVyIiwicGFyc2VJbnQiLCJwZXJjZW50TWF0Y2giLCJwZXJjZW50IiwiX2luaXQiLCJyZXBvc2l0aW9uIiwic2V0Q2VsbEFsaWduIiwiY2VsbEFsaWduU2hvcnRoYW5kcyIsImNlbnRlciIsImxlZnQiLCJyaWdodCIsInNob3J0aGFuZCIsImFkYXB0aXZlSGVpZ2h0IiwiZ2FwWCIsIl9nZXRHYXBDZWxscyIsImlzUmlnaHRUb0xlZnQiLCJiZWdpbk1hcmdpbiIsImVuZE1hcmdpbiIsImNvbnRlbnRXaWR0aCIsImlzQ29udGVudFNtYWxsZXIiLCJiZWdpbkJvdW5kIiwiZW1pdEFyZ3MiLCIkZXZlbnQiLCJqUUV2ZW50IiwiRXZlbnQiLCJ0cmlnZ2VyIiwiaXNXcmFwIiwiaXNJbnN0YW50IiwiX3dyYXBTZWxlY3QiLCJwcmV2SW5kZXgiLCJpc1dyYXBwaW5nIiwid3JhcEluZGV4IiwiYmFja1dyYXBEZWx0YSIsImZvcmV3YXJkV3JhcERlbHRhIiwicHJldmlvdXMiLCJuZXh0IiwidW5zZWxlY3RTZWxlY3RlZFNsaWRlIiwic2VsZWN0ZWRDZWxscyIsInNlbGVjdGVkRWxlbWVudHMiLCJnZXRDZWxsRWxlbWVudHMiLCJzZWxlY3RlZENlbGwiLCJpbml0aWFsSW5kZXgiLCJxdWVyeUNlbGwiLCJzZWxlY3RDZWxsIiwidmFsdWUiLCJnZXRBZGphY2VudENlbGxFbGVtZW50cyIsImFkakNvdW50IiwidWlDaGFuZ2UiLCJjaGlsZFVJUG9pbnRlckRvd24iLCJvbnJlc2l6ZSIsIndhdGNoT3B0aW9uIiwiYWZ0ZXJDb250ZW50IiwiY29udGVudCIsImRlYWN0aXZhdGUiLCJvbmtleWRvd24iLCJpc05vdEZvY3VzZWQiLCJoYW5kbGVyIiwia2V5Ym9hcmRIYW5kbGVycyIsImtleUNvZGUiLCJsZWZ0TWV0aG9kIiwicmlnaHRNZXRob2QiLCJwcmV2U2Nyb2xsWSIsInByZXZlbnRTY3JvbGwiLCJzY3JvbGxUbyIsInJlbW92ZURhdGEiLCJicmlkZ2V0Iiwic2V0SlF1ZXJ5IiwianEiLCJfY3JlYXRlTGF6eWxvYWQiLCJsYXp5TG9hZCIsImxhenlJbWFnZXMiLCJsYXp5Q2VsbEltYWdlcyIsImdldENlbGxMYXp5SW1hZ2VzIiwiaW1nIiwiTGF6eUxvYWRlciIsImxhenlsb2FkQXR0ciIsInNyY0F0dHIiLCJzcmNzZXRBdHRyIiwibGF6eVNlbGVjdG9yIiwiaW1ncyIsImZsaWNraXR5IiwibG9hZCIsInNyYyIsInNyY3NldCIsIm9ubG9hZCIsImNvbXBsZXRlIiwib25lcnJvciIsIlVuaXBvaW50ZXIiLCJQYWdlRG90cyIsIk9iamVjdCIsImhvbGRlciIsImRvdHMiLCJoYW5kbGVDbGljayIsIm9uQ2xpY2siLCJiaW5kIiwic2V0RG90cyIsImJpbmRTdGFydEV2ZW50IiwidW5iaW5kU3RhcnRFdmVudCIsImFkZERvdHMiLCJyZW1vdmVEb3RzIiwiY291bnQiLCJuZXdEb3RzIiwiZG90IiwidXBkYXRlU2VsZWN0ZWQiLCJzZWxlY3RlZERvdCIsIm9uVGFwIiwicGFnZURvdHMiLCJfY3JlYXRlUGFnZURvdHMiLCJhY3RpdmF0ZVBhZ2VEb3RzIiwidXBkYXRlU2VsZWN0ZWRQYWdlRG90cyIsInVwZGF0ZVBhZ2VEb3RzIiwiZGVhY3RpdmF0ZVBhZ2VEb3RzIiwiUGxheWVyIiwic3RhdGUiLCJvblZpc2liaWxpdHlDaGFuZ2UiLCJ2aXNpYmlsaXR5Q2hhbmdlIiwib25WaXNpYmlsaXR5UGxheSIsInZpc2liaWxpdHlQbGF5IiwicGxheSIsImlzUGFnZUhpZGRlbiIsImhpZGRlbiIsInRpY2siLCJ0aW1lIiwiYXV0b1BsYXkiLCJjbGVhciIsInN0b3AiLCJwYXVzZSIsInVucGF1c2UiLCJwYXVzZUF1dG9QbGF5T25Ib3ZlciIsIl9jcmVhdGVQbGF5ZXIiLCJwbGF5ZXIiLCJhY3RpdmF0ZVBsYXllciIsInN0b3BQbGF5ZXIiLCJkZWFjdGl2YXRlUGxheWVyIiwicGxheVBsYXllciIsInBhdXNlUGxheWVyIiwidW5wYXVzZVBsYXllciIsIm9ubW91c2VlbnRlciIsIm9ubW91c2VsZWF2ZSIsInN2Z1VSSSIsIlByZXZOZXh0QnV0dG9uIiwiaXNFbmFibGVkIiwiaXNQcmV2aW91cyIsImxlZnREaXJlY3Rpb24iLCJpc0xlZnQiLCJkaXNhYmxlIiwic3ZnIiwiY3JlYXRlU1ZHIiwidXBkYXRlIiwiY3JlYXRlRWxlbWVudE5TIiwicGF0aCIsInBhdGhNb3ZlbWVudHMiLCJnZXRBcnJvd01vdmVtZW50cyIsImFycm93U2hhcGUiLCJzaGFwZSIsIngwIiwieDEiLCJ5MSIsIngyIiwieTIiLCJ4MyIsIm9uY2xpY2siLCJlbmFibGUiLCJkaXNhYmxlZCIsImxhc3RJbmRleCIsImJvdW5kSW5kZXgiLCJfY3JlYXRlUHJldk5leHRCdXR0b25zIiwicHJldkJ1dHRvbiIsIm5leHRCdXR0b24iLCJhY3RpdmF0ZVByZXZOZXh0QnV0dG9ucyIsImRlYWN0aXZhdGVQcmV2TmV4dEJ1dHRvbnMiLCJsYXN0Q2VsbCIsImxhc3RNYXJnaW4iLCJnZXRTdHlsZVNpemUiLCJwYXJzZUZsb2F0IiwiaXNWYWxpZCIsImlzTmFOIiwibm9vcCIsImxvZ0Vycm9yIiwibWVzc2FnZSIsIm1lYXN1cmVtZW50cyIsIm1lYXN1cmVtZW50c0xlbmd0aCIsImdldFplcm9TaXplIiwiaW5uZXJIZWlnaHQiLCJtZWFzdXJlbWVudCIsImdldFN0eWxlIiwiaXNTZXR1cCIsImlzQm94U2l6ZU91dGVyIiwic2V0dXAiLCJwYWRkaW5nIiwiYm9yZGVyU3R5bGUiLCJib3JkZXJXaWR0aCIsImJveFNpemluZyIsImRvY3VtZW50RWxlbWVudCIsIm5vZGVUeXBlIiwiZGlzcGxheSIsIm9mZnNldFdpZHRoIiwiaXNCb3JkZXJCb3giLCJwYWRkaW5nV2lkdGgiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdIZWlnaHQiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsIm1hcmdpbldpZHRoIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luSGVpZ2h0IiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiYm9yZGVyTGVmdFdpZHRoIiwiYm9yZGVyUmlnaHRXaWR0aCIsImJvcmRlckhlaWdodCIsImJvcmRlclRvcFdpZHRoIiwiYm9yZGVyQm90dG9tV2lkdGgiLCJpc0JvcmRlckJveFNpemVPdXRlciIsInN0eWxlV2lkdGgiLCJzdHlsZUhlaWdodCIsIndlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwicm9vdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb2R1bGVzIiwiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImxvYWRlZCIsIm0iLCJjIiwicCIsImRlZmluZVByb3BlcnR5IiwiX2NyZWF0ZUNsYXNzIiwiZGVmaW5lUHJvcGVydGllcyIsInByb3BzIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImtleSIsIkNvbnN0cnVjdG9yIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiX2NsYXNzQ2FsbENoZWNrIiwiVHlwZUVycm9yIiwiX2luaXRpYWxpemVySnMiLCJfaHRtbFBhcnNlckpzIiwiZWxlbWVudElkIiwiaW5pdGlhbGl6ZXIiLCJiZWdpbiIsInN0YXR1cyIsInN0YXJ0IiwidHlwaW5nQ29tcGxldGUiLCJ0b2dnbGVCbGlua2luZyIsIm9uU3RvcCIsImFycmF5UG9zIiwidHlwZXdyaXRlIiwiY3VyU3RyaW5nIiwiY3VyU3RyUG9zIiwiYmFja3NwYWNlIiwib25TdGFydCIsInJlc2V0Iiwib25EZXN0cm95IiwicmVzdGFydCIsImNsZWFySW50ZXJ2YWwiLCJyZXBsYWNlVGV4dCIsImN1cnNvciIsInN0clBvcyIsImN1ckxvb3AiLCJpbnNlcnRDdXJzb3IiLCJvblJlc2V0Iiwib25CZWdpbiIsInNodWZmbGVTdHJpbmdzSWZOZWVkZWQiLCJiaW5kSW5wdXRGb2N1c0V2ZW50cyIsImJpbmRGb2N1c0V2ZW50cyIsImN1cnJlbnRFbENvbnRlbnQiLCJzdHJpbmdzIiwic2VxdWVuY2UiLCJzdGFydERlbGF5IiwiX3RoaXMyIiwiZmFkZU91dCIsImVsIiwiY29udGFpbnMiLCJmYWRlT3V0Q2xhc3MiLCJodW1hbml6ZSIsImh1bWFuaXplciIsIm51bUNoYXJzIiwic2V0UGF1c2VTdGF0dXMiLCJodG1sUGFyc2VyIiwidHlwZUh0bWxDaGFycyIsInBhdXNlVGltZSIsInN1YnN0ciIsImNoYXJBdCIsInRlc3QiLCJza2lwIiwiZXhlYyIsInRlbXBvcmFyeVBhdXNlIiwib25UeXBpbmdQYXVzZWQiLCJzdWJzdHJpbmciLCJzdHJpbmdCZWZvcmVTa2lwIiwic3RyaW5nU2tpcHBlZCIsInN0cmluZ0FmdGVyU2tpcCIsImRvbmVUeXBpbmciLCJrZWVwVHlwaW5nIiwib25UeXBpbmdSZXN1bWVkIiwicHJlU3RyaW5nVHlwZWQiLCJuZXh0U3RyaW5nIiwiX3RoaXMzIiwib25TdHJpbmdUeXBlZCIsImxvb3AiLCJsb29wQ291bnQiLCJiYWNrRGVsYXkiLCJfdGhpczQiLCJpbml0RmFkZU91dCIsImJhY2tTcGVlZCIsImJhY2tTcGFjZUh0bWxDaGFycyIsImN1clN0cmluZ0F0UG9zaXRpb24iLCJzbWFydEJhY2tzcGFjZSIsInN0b3BOdW0iLCJvbkxhc3RTdHJpbmdCYWNrc3BhY2VkIiwib25Db21wbGV0ZSIsImlzVHlwaW5nIiwiaXNCbGlua2luZyIsImN1cnNvckJsaW5raW5nIiwic3BlZWQiLCJyYW5kb20iLCJzaHVmZmxlIiwic29ydCIsIl90aGlzNSIsImZhZGVPdXREZWxheSIsImlzSW5wdXQiLCJjb250ZW50VHlwZSIsImlubmVySFRNTCIsInRleHRDb250ZW50IiwiX3RoaXM2IiwiZSIsInNob3dDdXJzb3IiLCJjdXJzb3JDaGFyIiwibmV4dFNpYmxpbmciLCJfZXh0ZW5kcyIsImFzc2lnbiIsInNvdXJjZSIsImhhc093blByb3BlcnR5IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9fZXNNb2R1bGUiLCJfZGVmYXVsdHNKcyIsIl9kZWZhdWx0c0pzMiIsIkluaXRpYWxpemVyIiwic2VsZiIsInRhZ05hbWUiLCJlbENvbnRlbnQiLCJpc1BhdXNlZCIsInMiLCJ0cmltIiwic3RyaW5nc0xlbmd0aCIsInN0cmluZ0VsIiwiZ2V0Q3VycmVudEVsQ29udGVudCIsImF1dG9JbnNlcnRDc3MiLCJhcHBlbmRBbmltYXRpb25Dc3MiLCJjc3NEYXRhTmFtZSIsImNzcyIsImlubmVyQ3NzIiwiSFRNTFBhcnNlciIsImN1ckNoYXIiLCJlbmRUYWciLCJfYmluZEhhbmRsZXMiLCJpc0FkZCIsImJpbmRNZXRob2QiLCJ0b3VjaEFjdGlvbiIsImhhbmRsZSIsIl9iaW5kU3RhcnRFdmVudCIsIlBvaW50ZXJFdmVudCIsImN1cnNvck5vZGVzIiwiT1BUSU9OIiwiY2xpY2tUeXBlcyIsInJhZGlvIiwiY2hlY2tib3giLCJidXR0b24iLCJzdWJtaXQiLCJpbWFnZSIsImZpbGUiLCJpc0N1cnNvck5vZGUiLCJpc0NsaWNrVHlwZSIsIl9wb2ludGVyUmVzZXQiLCJmb2N1c2VkIiwiY2FuQmx1ciIsImJsdXIiLCJpc0RyYWdnaW5nIiwiX2RyYWdTdGFydCIsIl9kcmFnRW5kIiwiX3N0YXRpY0NsaWNrIiwiaXNQcmV2ZW50aW5nQ2xpY2tzIiwiaXNJZ25vcmluZ01vdXNlVXAiLCJnZXRQb2ludGVyUG9pbnQiLCJzdGFydEV2ZW50IiwiZ2V0VG91Y2giLCJ0b3VjaGVzIiwidG91Y2giLCJpZGVudGlmaWVyIiwicG9pbnRlcklkZW50aWZpZXIiLCJvbm1vdXNlZG93biIsIl9wb2ludGVyRG93biIsIm9udG91Y2hzdGFydCIsImNoYW5nZWRUb3VjaGVzIiwib25wb2ludGVyZG93biIsInBvaW50ZXJJZCIsInBvc3RTdGFydEV2ZW50cyIsIm1vdXNlZG93biIsInRvdWNoc3RhcnQiLCJwb2ludGVyZG93biIsIl9ib3VuZFBvaW50ZXJFdmVudHMiLCJfdW5iaW5kUG9zdFN0YXJ0RXZlbnRzIiwib25tb3VzZW1vdmUiLCJfcG9pbnRlck1vdmUiLCJvbnBvaW50ZXJtb3ZlIiwib250b3VjaG1vdmUiLCJvbm1vdXNldXAiLCJfcG9pbnRlclVwIiwib25wb2ludGVydXAiLCJvbnRvdWNoZW5kIiwib25wb2ludGVyY2FuY2VsIiwiX3BvaW50ZXJDYW5jZWwiLCJvbnRvdWNoY2FuY2VsIiwicG9pbnRlckNhbmNlbCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLElBQUlBLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQWhCO0FBQ0EsSUFBSUMsWUFBWSxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FB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LE9BQUssQ0FBQyt3QixjQUFOLEdBQXVCLFVBQVVudUIsS0FBVixFQUFpQnlMLE9BQWpCLEVBQTJCO0FBQ2hELFNBQUsrRSxZQUFMOztBQUNBLFNBQUs2ZCxhQUFMLENBQW9CcnVCLEtBQXBCLEVBQTJCeUwsT0FBM0I7QUFDRCxHQUhELENBcFBpRCxDQXlQakQ7OztBQUNBck8sT0FBSyxDQUFDaXhCLGFBQU4sR0FBc0IsVUFBVXJ1QixLQUFWLEVBQWlCeUwsT0FBakIsRUFBMkI7QUFDL0MsU0FBS3JOLFNBQUwsQ0FBZ0IsZUFBaEIsRUFBaUMsQ0FBRTRCLEtBQUYsRUFBU3lMLE9BQVQsQ0FBakM7QUFDRCxHQUZELENBMVBpRCxDQThQakQ7QUFFQTs7O0FBQ0E2TixZQUFVLENBQUNpVCxlQUFYLEdBQTZCLFVBQVU5Z0IsT0FBVixFQUFvQjtBQUMvQyxXQUFPO0FBQ0w3RixPQUFDLEVBQUU2RixPQUFPLENBQUNXLEtBRE47QUFFTG1FLE9BQUMsRUFBRTlFLE9BQU8sQ0FBQ1k7QUFGTixLQUFQO0FBSUQsR0FMRCxDQWpRaUQsQ0F3UWpEOzs7QUFFQSxTQUFPaU4sVUFBUDtBQUVDLENBcFNDLENBQUYsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL2J1bmRsZS9idW5kbGUuanNcIik7XG4iLCJsZXQgaGFtYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlcicpO1xyXG5sZXQgcGFnZV9vdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhZ2Utb3ZlcmxheScpO1xyXG5sZXQgYm9keV9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9keS1jb250YWluZXInKTtcclxubGV0IGhlYWRlcl9saW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNtZW51LWhlYWRlci1jb250YWluZXIgLm1lbnUtaXRlbSBhJyk7XHJcbmxldCBzb2NpYWxfaWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc29jaWFsLWljb24nKTtcclxubGV0IGlzRGVza3RvcCA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogMTAyM3B4KVwiKVxyXG5cclxubGV0IERlc2t0b3BUcmFuc2Zvcm0gPSBmdW5jdGlvbigpIHtcclxuICAgIGxldCBpc0Rlc2t0b3AgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDEwMjRweClcIikubWF0Y2hlc1xyXG4gICAgY29uc29sZS5sb2coaXNEZXNrdG9wKTtcclxuICAgIGhhbWJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnLCBpc0Rlc2t0b3ApO1xyXG59O1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIERlc2t0b3BUcmFuc2Zvcm0pO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgRGVza3RvcFRyYW5zZm9ybSwgZmFsc2UpO1xyXG5cclxuaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICBoYW1idXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XHJcblxyXG4gICAgaWYgKCBpc0Rlc2t0b3AubWF0Y2hlcyApIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRGVza3RvcC4uLicpO1xyXG4gICAgICAgIGJvZHlfY29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ3NtYWxsJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJvZHlfY29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ3JldmVhbCcpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QudG9nZ2xlKCdkaXNhYmxlZC1zY3JvbGwnKTtcclxuICAgIH1cclxufSlcclxuXHJcbnBhZ2Vfb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuICAgIGhlYWRlcl9saW5rcy5mb3JFYWNoKCBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmVjdCA9IGEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgaGVpZ2h0ID0gYS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgb2Zmc2V0ID0gMTY1IC0gaGVpZ2h0O1xyXG5cclxuICAgICAgICBzaG91bGRCZUhpZGRlbiA9IHJlY3QudG9wIDwgb2Zmc2V0O1xyXG5cclxuICAgICAgICBhLmNsYXNzTGlzdC50b2dnbGUoJ2Rpc2FibGVkJywgc2hvdWxkQmVIaWRkZW4pO1xyXG4gICAgfSlcclxufSk7XHJcblxyXG4vLyBmb3IgKCBsZXQgaSA9IDA7IGkgPCBzb2NpYWxfaWNvbnMubGVuZ3RoIDsgaSsrICkge1xyXG4vLyAgICAgc29jaWFsX2ljb25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdIb3ZlcmVkIG9uOiAnICsgaSlcclxuLy8gICAgIH0pICAgIFxyXG4vLyB9XHJcblxyXG5mdW5jdGlvbiBob3ZlcmVkKCkge1xyXG4gICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdob3ZlcmVkJylcclxufVxyXG5cclxuc29jaWFsX2ljb25zLmZvckVhY2goZnVuY3Rpb24oaWNvbikge1xyXG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgaG92ZXJlZCk7XHJcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBob3ZlcmVkKTtcclxufSkiLCJpbXBvcnQgRmxpY2tpdHkgZnJvbSAnZmxpY2tpdHknO1xuXG5pZiAoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlIC5tYWluLWNhcm91c2VsXCIpICkge1xuICAgIGxldCBmbGt0eSA9IG5ldyBGbGlja2l0eSgnI21vYmlsZSAubWFpbi1jYXJvdXNlbCcsIHtcbiAgICAgICAgY29udGFpbjogdHJ1ZSxcbiAgICAgICAgcHJldk5leHRCdXR0b25zOiBmYWxzZSxcbiAgICAgICAgaW1hZ2VzTG9hZGVkOiB0cnVlXG4gICAgfSlcbiAgICAvLyBjb25zb2xlLmxvZygnRmxpY2tpdHkhJyk7XG59IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCdObyBmbGlja2l0eSEnKTtcbn1cbiIsImltcG9ydCBUeXBlZCBmcm9tICd0eXBlZC5qcyc7XG5cbnZhciB0eXBlZCA9IG5ldyBUeXBlZChcIiN0eXBlZFwiLCB7XG4gICAgc3RyaW5nc0VsZW1lbnQ6ICcjdHlwZWQtc3RyaW5ncycsXG4gICAgdHlwZVNwZWVkOiA0OCxcbiAgICAvLyBsb29wOiB0cnVlXG59KTsiLCJpbXBvcnQgJy4vX2FtYXRldXItY3JlYXRpdmVzJztcbmltcG9ydCAnLi9fdHlwZWQtY3VzdG9tJztcbmltcG9ydCAnLi9fZmxpY2tpdHktY3VzdG9tJzsiLCIvKipcbiAqIG1hdGNoZXNTZWxlY3RvciB2Mi4wLjJcbiAqIG1hdGNoZXNTZWxlY3RvciggZWxlbWVudCwgJy5zZWxlY3RvcicgKVxuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vKmpzaGludCBicm93c2VyOiB0cnVlLCBzdHJpY3Q6IHRydWUsIHVuZGVmOiB0cnVlLCB1bnVzZWQ6IHRydWUgKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvKmdsb2JhbCBkZWZpbmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG4gICd1c2Ugc3RyaWN0JztcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBmYWN0b3J5ICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5tYXRjaGVzU2VsZWN0b3IgPSBmYWN0b3J5KCk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIG1hdGNoZXNNZXRob2QgPSAoIGZ1bmN0aW9uKCkge1xuICAgIHZhciBFbGVtUHJvdG8gPSB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGU7XG4gICAgLy8gY2hlY2sgZm9yIHRoZSBzdGFuZGFyZCBtZXRob2QgbmFtZSBmaXJzdFxuICAgIGlmICggRWxlbVByb3RvLm1hdGNoZXMgKSB7XG4gICAgICByZXR1cm4gJ21hdGNoZXMnO1xuICAgIH1cbiAgICAvLyBjaGVjayB1bi1wcmVmaXhlZFxuICAgIGlmICggRWxlbVByb3RvLm1hdGNoZXNTZWxlY3RvciApIHtcbiAgICAgIHJldHVybiAnbWF0Y2hlc1NlbGVjdG9yJztcbiAgICB9XG4gICAgLy8gY2hlY2sgdmVuZG9yIHByZWZpeGVzXG4gICAgdmFyIHByZWZpeGVzID0gWyAnd2Via2l0JywgJ21veicsICdtcycsICdvJyBdO1xuXG4gICAgZm9yICggdmFyIGk9MDsgaSA8IHByZWZpeGVzLmxlbmd0aDsgaSsrICkge1xuICAgICAgdmFyIHByZWZpeCA9IHByZWZpeGVzW2ldO1xuICAgICAgdmFyIG1ldGhvZCA9IHByZWZpeCArICdNYXRjaGVzU2VsZWN0b3InO1xuICAgICAgaWYgKCBFbGVtUHJvdG9bIG1ldGhvZCBdICkge1xuICAgICAgICByZXR1cm4gbWV0aG9kO1xuICAgICAgfVxuICAgIH1cbiAgfSkoKTtcblxuICByZXR1cm4gZnVuY3Rpb24gbWF0Y2hlc1NlbGVjdG9yKCBlbGVtLCBzZWxlY3RvciApIHtcbiAgICByZXR1cm4gZWxlbVsgbWF0Y2hlc01ldGhvZCBdKCBzZWxlY3RvciApO1xuICB9O1xuXG59KSk7XG4iLCIvKipcbiAqIEV2RW1pdHRlciB2MS4xLjBcbiAqIExpbCcgZXZlbnQgZW1pdHRlclxuICogTUlUIExpY2Vuc2VcbiAqL1xuXG4vKiBqc2hpbnQgdW51c2VkOiB0cnVlLCB1bmRlZjogdHJ1ZSwgc3RyaWN0OiB0cnVlICovXG5cbiggZnVuY3Rpb24oIGdsb2JhbCwgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovIC8qIGdsb2JhbHMgZGVmaW5lLCBtb2R1bGUsIHdpbmRvdyAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRCAtIFJlcXVpcmVKU1xuICAgIGRlZmluZSggZmFjdG9yeSApO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTIC0gQnJvd3NlcmlmeSwgV2VicGFja1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2Uge1xuICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xuICAgIGdsb2JhbC5FdkVtaXR0ZXIgPSBmYWN0b3J5KCk7XG4gIH1cblxufSggdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHRoaXMsIGZ1bmN0aW9uKCkge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gRXZFbWl0dGVyKCkge31cblxudmFyIHByb3RvID0gRXZFbWl0dGVyLnByb3RvdHlwZTtcblxucHJvdG8ub24gPSBmdW5jdGlvbiggZXZlbnROYW1lLCBsaXN0ZW5lciApIHtcbiAgaWYgKCAhZXZlbnROYW1lIHx8ICFsaXN0ZW5lciApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gc2V0IGV2ZW50cyBoYXNoXG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHMgPSB0aGlzLl9ldmVudHMgfHwge307XG4gIC8vIHNldCBsaXN0ZW5lcnMgYXJyYXlcbiAgdmFyIGxpc3RlbmVycyA9IGV2ZW50c1sgZXZlbnROYW1lIF0gPSBldmVudHNbIGV2ZW50TmFtZSBdIHx8IFtdO1xuICAvLyBvbmx5IGFkZCBvbmNlXG4gIGlmICggbGlzdGVuZXJzLmluZGV4T2YoIGxpc3RlbmVyICkgPT0gLTEgKSB7XG4gICAgbGlzdGVuZXJzLnB1c2goIGxpc3RlbmVyICk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbnByb3RvLm9uY2UgPSBmdW5jdGlvbiggZXZlbnROYW1lLCBsaXN0ZW5lciApIHtcbiAgaWYgKCAhZXZlbnROYW1lIHx8ICFsaXN0ZW5lciApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gYWRkIGV2ZW50XG4gIHRoaXMub24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKTtcbiAgLy8gc2V0IG9uY2UgZmxhZ1xuICAvLyBzZXQgb25jZUV2ZW50cyBoYXNoXG4gIHZhciBvbmNlRXZlbnRzID0gdGhpcy5fb25jZUV2ZW50cyA9IHRoaXMuX29uY2VFdmVudHMgfHwge307XG4gIC8vIHNldCBvbmNlTGlzdGVuZXJzIG9iamVjdFxuICB2YXIgb25jZUxpc3RlbmVycyA9IG9uY2VFdmVudHNbIGV2ZW50TmFtZSBdID0gb25jZUV2ZW50c1sgZXZlbnROYW1lIF0gfHwge307XG4gIC8vIHNldCBmbGFnXG4gIG9uY2VMaXN0ZW5lcnNbIGxpc3RlbmVyIF0gPSB0cnVlO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxucHJvdG8ub2ZmID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKSB7XG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHMgJiYgdGhpcy5fZXZlbnRzWyBldmVudE5hbWUgXTtcbiAgaWYgKCAhbGlzdGVuZXJzIHx8ICFsaXN0ZW5lcnMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgaW5kZXggPSBsaXN0ZW5lcnMuaW5kZXhPZiggbGlzdGVuZXIgKTtcbiAgaWYgKCBpbmRleCAhPSAtMSApIHtcbiAgICBsaXN0ZW5lcnMuc3BsaWNlKCBpbmRleCwgMSApO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5wcm90by5lbWl0RXZlbnQgPSBmdW5jdGlvbiggZXZlbnROYW1lLCBhcmdzICkge1xuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzICYmIHRoaXMuX2V2ZW50c1sgZXZlbnROYW1lIF07XG4gIGlmICggIWxpc3RlbmVycyB8fCAhbGlzdGVuZXJzLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gY29weSBvdmVyIHRvIGF2b2lkIGludGVyZmVyZW5jZSBpZiAub2ZmKCkgaW4gbGlzdGVuZXJcbiAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLnNsaWNlKDApO1xuICBhcmdzID0gYXJncyB8fCBbXTtcbiAgLy8gb25jZSBzdHVmZlxuICB2YXIgb25jZUxpc3RlbmVycyA9IHRoaXMuX29uY2VFdmVudHMgJiYgdGhpcy5fb25jZUV2ZW50c1sgZXZlbnROYW1lIF07XG5cbiAgZm9yICggdmFyIGk9MDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKyApIHtcbiAgICB2YXIgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV1cbiAgICB2YXIgaXNPbmNlID0gb25jZUxpc3RlbmVycyAmJiBvbmNlTGlzdGVuZXJzWyBsaXN0ZW5lciBdO1xuICAgIGlmICggaXNPbmNlICkge1xuICAgICAgLy8gcmVtb3ZlIGxpc3RlbmVyXG4gICAgICAvLyByZW1vdmUgYmVmb3JlIHRyaWdnZXIgdG8gcHJldmVudCByZWN1cnNpb25cbiAgICAgIHRoaXMub2ZmKCBldmVudE5hbWUsIGxpc3RlbmVyICk7XG4gICAgICAvLyB1bnNldCBvbmNlIGZsYWdcbiAgICAgIGRlbGV0ZSBvbmNlTGlzdGVuZXJzWyBsaXN0ZW5lciBdO1xuICAgIH1cbiAgICAvLyB0cmlnZ2VyIGxpc3RlbmVyXG4gICAgbGlzdGVuZXIuYXBwbHkoIHRoaXMsIGFyZ3MgKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxucHJvdG8uYWxsT2ZmID0gZnVuY3Rpb24oKSB7XG4gIGRlbGV0ZSB0aGlzLl9ldmVudHM7XG4gIGRlbGV0ZSB0aGlzLl9vbmNlRXZlbnRzO1xufTtcblxucmV0dXJuIEV2RW1pdHRlcjtcblxufSkpO1xuIiwiLyoqXG4gKiBGaXp6eSBVSSB1dGlscyB2Mi4wLjdcbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgdW5kZWY6IHRydWUsIHVudXNlZDogdHJ1ZSwgc3RyaWN0OiB0cnVlICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qanNoaW50IHN0cmljdDogZmFsc2UgKi8gLypnbG9iYWxzIGRlZmluZSwgbW9kdWxlLCByZXF1aXJlICovXG5cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIFtcbiAgICAgICdkZXNhbmRyby1tYXRjaGVzLXNlbGVjdG9yL21hdGNoZXMtc2VsZWN0b3InXG4gICAgXSwgZnVuY3Rpb24oIG1hdGNoZXNTZWxlY3RvciApIHtcbiAgICAgIHJldHVybiBmYWN0b3J5KCB3aW5kb3csIG1hdGNoZXNTZWxlY3RvciApO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgcmVxdWlyZSgnZGVzYW5kcm8tbWF0Y2hlcy1zZWxlY3RvcicpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5maXp6eVVJVXRpbHMgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgd2luZG93Lm1hdGNoZXNTZWxlY3RvclxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIG1hdGNoZXNTZWxlY3RvciApIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSB7fTtcblxuLy8gLS0tLS0gZXh0ZW5kIC0tLS0tIC8vXG5cbi8vIGV4dGVuZHMgb2JqZWN0c1xudXRpbHMuZXh0ZW5kID0gZnVuY3Rpb24oIGEsIGIgKSB7XG4gIGZvciAoIHZhciBwcm9wIGluIGIgKSB7XG4gICAgYVsgcHJvcCBdID0gYlsgcHJvcCBdO1xuICB9XG4gIHJldHVybiBhO1xufTtcblxuLy8gLS0tLS0gbW9kdWxvIC0tLS0tIC8vXG5cbnV0aWxzLm1vZHVsbyA9IGZ1bmN0aW9uKCBudW0sIGRpdiApIHtcbiAgcmV0dXJuICggKCBudW0gJSBkaXYgKSArIGRpdiApICUgZGl2O1xufTtcblxuLy8gLS0tLS0gbWFrZUFycmF5IC0tLS0tIC8vXG5cbnZhciBhcnJheVNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG4vLyB0dXJuIGVsZW1lbnQgb3Igbm9kZUxpc3QgaW50byBhbiBhcnJheVxudXRpbHMubWFrZUFycmF5ID0gZnVuY3Rpb24oIG9iaiApIHtcbiAgaWYgKCBBcnJheS5pc0FycmF5KCBvYmogKSApIHtcbiAgICAvLyB1c2Ugb2JqZWN0IGlmIGFscmVhZHkgYW4gYXJyYXlcbiAgICByZXR1cm4gb2JqO1xuICB9XG4gIC8vIHJldHVybiBlbXB0eSBhcnJheSBpZiB1bmRlZmluZWQgb3IgbnVsbC4gIzZcbiAgaWYgKCBvYmogPT09IG51bGwgfHwgb2JqID09PSB1bmRlZmluZWQgKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIGlzQXJyYXlMaWtlID0gdHlwZW9mIG9iaiA9PSAnb2JqZWN0JyAmJiB0eXBlb2Ygb2JqLmxlbmd0aCA9PSAnbnVtYmVyJztcbiAgaWYgKCBpc0FycmF5TGlrZSApIHtcbiAgICAvLyBjb252ZXJ0IG5vZGVMaXN0IHRvIGFycmF5XG4gICAgcmV0dXJuIGFycmF5U2xpY2UuY2FsbCggb2JqICk7XG4gIH1cblxuICAvLyBhcnJheSBvZiBzaW5nbGUgaW5kZXhcbiAgcmV0dXJuIFsgb2JqIF07XG59O1xuXG4vLyAtLS0tLSByZW1vdmVGcm9tIC0tLS0tIC8vXG5cbnV0aWxzLnJlbW92ZUZyb20gPSBmdW5jdGlvbiggYXJ5LCBvYmogKSB7XG4gIHZhciBpbmRleCA9IGFyeS5pbmRleE9mKCBvYmogKTtcbiAgaWYgKCBpbmRleCAhPSAtMSApIHtcbiAgICBhcnkuc3BsaWNlKCBpbmRleCwgMSApO1xuICB9XG59O1xuXG4vLyAtLS0tLSBnZXRQYXJlbnQgLS0tLS0gLy9cblxudXRpbHMuZ2V0UGFyZW50ID0gZnVuY3Rpb24oIGVsZW0sIHNlbGVjdG9yICkge1xuICB3aGlsZSAoIGVsZW0ucGFyZW50Tm9kZSAmJiBlbGVtICE9IGRvY3VtZW50LmJvZHkgKSB7XG4gICAgZWxlbSA9IGVsZW0ucGFyZW50Tm9kZTtcbiAgICBpZiAoIG1hdGNoZXNTZWxlY3RvciggZWxlbSwgc2VsZWN0b3IgKSApIHtcbiAgICAgIHJldHVybiBlbGVtO1xuICAgIH1cbiAgfVxufTtcblxuLy8gLS0tLS0gZ2V0UXVlcnlFbGVtZW50IC0tLS0tIC8vXG5cbi8vIHVzZSBlbGVtZW50IGFzIHNlbGVjdG9yIHN0cmluZ1xudXRpbHMuZ2V0UXVlcnlFbGVtZW50ID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gIGlmICggdHlwZW9mIGVsZW0gPT0gJ3N0cmluZycgKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIGVsZW0gKTtcbiAgfVxuICByZXR1cm4gZWxlbTtcbn07XG5cbi8vIC0tLS0tIGhhbmRsZUV2ZW50IC0tLS0tIC8vXG5cbi8vIGVuYWJsZSAub250eXBlIHRvIHRyaWdnZXIgZnJvbSAuYWRkRXZlbnRMaXN0ZW5lciggZWxlbSwgJ3R5cGUnIClcbnV0aWxzLmhhbmRsZUV2ZW50ID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICB2YXIgbWV0aG9kID0gJ29uJyArIGV2ZW50LnR5cGU7XG4gIGlmICggdGhpc1sgbWV0aG9kIF0gKSB7XG4gICAgdGhpc1sgbWV0aG9kIF0oIGV2ZW50ICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tIGZpbHRlckZpbmRFbGVtZW50cyAtLS0tLSAvL1xuXG51dGlscy5maWx0ZXJGaW5kRWxlbWVudHMgPSBmdW5jdGlvbiggZWxlbXMsIHNlbGVjdG9yICkge1xuICAvLyBtYWtlIGFycmF5IG9mIGVsZW1zXG4gIGVsZW1zID0gdXRpbHMubWFrZUFycmF5KCBlbGVtcyApO1xuICB2YXIgZmZFbGVtcyA9IFtdO1xuXG4gIGVsZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBlbGVtICkge1xuICAgIC8vIGNoZWNrIHRoYXQgZWxlbSBpcyBhbiBhY3R1YWwgZWxlbWVudFxuICAgIGlmICggISggZWxlbSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICkgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGFkZCBlbGVtIGlmIG5vIHNlbGVjdG9yXG4gICAgaWYgKCAhc2VsZWN0b3IgKSB7XG4gICAgICBmZkVsZW1zLnB1c2goIGVsZW0gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gZmlsdGVyICYgZmluZCBpdGVtcyBpZiB3ZSBoYXZlIGEgc2VsZWN0b3JcbiAgICAvLyBmaWx0ZXJcbiAgICBpZiAoIG1hdGNoZXNTZWxlY3RvciggZWxlbSwgc2VsZWN0b3IgKSApIHtcbiAgICAgIGZmRWxlbXMucHVzaCggZWxlbSApO1xuICAgIH1cbiAgICAvLyBmaW5kIGNoaWxkcmVuXG4gICAgdmFyIGNoaWxkRWxlbXMgPSBlbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoIHNlbGVjdG9yICk7XG4gICAgLy8gY29uY2F0IGNoaWxkRWxlbXMgdG8gZmlsdGVyRm91bmQgYXJyYXlcbiAgICBmb3IgKCB2YXIgaT0wOyBpIDwgY2hpbGRFbGVtcy5sZW5ndGg7IGkrKyApIHtcbiAgICAgIGZmRWxlbXMucHVzaCggY2hpbGRFbGVtc1tpXSApO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGZmRWxlbXM7XG59O1xuXG4vLyAtLS0tLSBkZWJvdW5jZU1ldGhvZCAtLS0tLSAvL1xuXG51dGlscy5kZWJvdW5jZU1ldGhvZCA9IGZ1bmN0aW9uKCBfY2xhc3MsIG1ldGhvZE5hbWUsIHRocmVzaG9sZCApIHtcbiAgdGhyZXNob2xkID0gdGhyZXNob2xkIHx8IDEwMDtcbiAgLy8gb3JpZ2luYWwgbWV0aG9kXG4gIHZhciBtZXRob2QgPSBfY2xhc3MucHJvdG90eXBlWyBtZXRob2ROYW1lIF07XG4gIHZhciB0aW1lb3V0TmFtZSA9IG1ldGhvZE5hbWUgKyAnVGltZW91dCc7XG5cbiAgX2NsYXNzLnByb3RvdHlwZVsgbWV0aG9kTmFtZSBdID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRpbWVvdXQgPSB0aGlzWyB0aW1lb3V0TmFtZSBdO1xuICAgIGNsZWFyVGltZW91dCggdGltZW91dCApO1xuXG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB0aGlzWyB0aW1lb3V0TmFtZSBdID0gc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgICBtZXRob2QuYXBwbHkoIF90aGlzLCBhcmdzICk7XG4gICAgICBkZWxldGUgX3RoaXNbIHRpbWVvdXROYW1lIF07XG4gICAgfSwgdGhyZXNob2xkICk7XG4gIH07XG59O1xuXG4vLyAtLS0tLSBkb2NSZWFkeSAtLS0tLSAvL1xuXG51dGlscy5kb2NSZWFkeSA9IGZ1bmN0aW9uKCBjYWxsYmFjayApIHtcbiAgdmFyIHJlYWR5U3RhdGUgPSBkb2N1bWVudC5yZWFkeVN0YXRlO1xuICBpZiAoIHJlYWR5U3RhdGUgPT0gJ2NvbXBsZXRlJyB8fCByZWFkeVN0YXRlID09ICdpbnRlcmFjdGl2ZScgKSB7XG4gICAgLy8gZG8gYXN5bmMgdG8gYWxsb3cgZm9yIG90aGVyIHNjcmlwdHMgdG8gcnVuLiBtZXRhZml6enkvZmxpY2tpdHkjNDQxXG4gICAgc2V0VGltZW91dCggY2FsbGJhY2sgKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnRE9NQ29udGVudExvYWRlZCcsIGNhbGxiYWNrICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tIGh0bWxJbml0IC0tLS0tIC8vXG5cbi8vIGh0dHA6Ly9qYW1lc3JvYmVydHMubmFtZS9ibG9nLzIwMTAvMDIvMjIvc3RyaW5nLWZ1bmN0aW9ucy1mb3ItamF2YXNjcmlwdC10cmltLXRvLWNhbWVsLWNhc2UtdG8tZGFzaGVkLWFuZC10by11bmRlcnNjb3JlL1xudXRpbHMudG9EYXNoZWQgPSBmdW5jdGlvbiggc3RyICkge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoIC8oLikoW0EtWl0pL2csIGZ1bmN0aW9uKCBtYXRjaCwgJDEsICQyICkge1xuICAgIHJldHVybiAkMSArICctJyArICQyO1xuICB9KS50b0xvd2VyQ2FzZSgpO1xufTtcblxudmFyIGNvbnNvbGUgPSB3aW5kb3cuY29uc29sZTtcbi8qKlxuICogYWxsb3cgdXNlciB0byBpbml0aWFsaXplIGNsYXNzZXMgdmlhIFtkYXRhLW5hbWVzcGFjZV0gb3IgLmpzLW5hbWVzcGFjZSBjbGFzc1xuICogaHRtbEluaXQoIFdpZGdldCwgJ3dpZGdldE5hbWUnIClcbiAqIG9wdGlvbnMgYXJlIHBhcnNlZCBmcm9tIGRhdGEtbmFtZXNwYWNlLW9wdGlvbnNcbiAqL1xudXRpbHMuaHRtbEluaXQgPSBmdW5jdGlvbiggV2lkZ2V0Q2xhc3MsIG5hbWVzcGFjZSApIHtcbiAgdXRpbHMuZG9jUmVhZHkoIGZ1bmN0aW9uKCkge1xuICAgIHZhciBkYXNoZWROYW1lc3BhY2UgPSB1dGlscy50b0Rhc2hlZCggbmFtZXNwYWNlICk7XG4gICAgdmFyIGRhdGFBdHRyID0gJ2RhdGEtJyArIGRhc2hlZE5hbWVzcGFjZTtcbiAgICB2YXIgZGF0YUF0dHJFbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICdbJyArIGRhdGFBdHRyICsgJ10nICk7XG4gICAgdmFyIGpzRGFzaEVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5qcy0nICsgZGFzaGVkTmFtZXNwYWNlICk7XG4gICAgdmFyIGVsZW1zID0gdXRpbHMubWFrZUFycmF5KCBkYXRhQXR0ckVsZW1zIClcbiAgICAgIC5jb25jYXQoIHV0aWxzLm1ha2VBcnJheSgganNEYXNoRWxlbXMgKSApO1xuICAgIHZhciBkYXRhT3B0aW9uc0F0dHIgPSBkYXRhQXR0ciArICctb3B0aW9ucyc7XG4gICAgdmFyIGpRdWVyeSA9IHdpbmRvdy5qUXVlcnk7XG5cbiAgICBlbGVtcy5mb3JFYWNoKCBmdW5jdGlvbiggZWxlbSApIHtcbiAgICAgIHZhciBhdHRyID0gZWxlbS5nZXRBdHRyaWJ1dGUoIGRhdGFBdHRyICkgfHxcbiAgICAgICAgZWxlbS5nZXRBdHRyaWJ1dGUoIGRhdGFPcHRpb25zQXR0ciApO1xuICAgICAgdmFyIG9wdGlvbnM7XG4gICAgICB0cnkge1xuICAgICAgICBvcHRpb25zID0gYXR0ciAmJiBKU09OLnBhcnNlKCBhdHRyICk7XG4gICAgICB9IGNhdGNoICggZXJyb3IgKSB7XG4gICAgICAgIC8vIGxvZyBlcnJvciwgZG8gbm90IGluaXRpYWxpemVcbiAgICAgICAgaWYgKCBjb25zb2xlICkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoICdFcnJvciBwYXJzaW5nICcgKyBkYXRhQXR0ciArICcgb24gJyArIGVsZW0uY2xhc3NOYW1lICtcbiAgICAgICAgICAnOiAnICsgZXJyb3IgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBpbml0aWFsaXplXG4gICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgV2lkZ2V0Q2xhc3MoIGVsZW0sIG9wdGlvbnMgKTtcbiAgICAgIC8vIG1ha2UgYXZhaWxhYmxlIHZpYSAkKCkuZGF0YSgnbmFtZXNwYWNlJylcbiAgICAgIGlmICggalF1ZXJ5ICkge1xuICAgICAgICBqUXVlcnkuZGF0YSggZWxlbSwgbmFtZXNwYWNlLCBpbnN0YW5jZSApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIH0pO1xufTtcblxuLy8gLS0tLS0gIC0tLS0tIC8vXG5cbnJldHVybiB1dGlscztcblxufSkpO1xuIiwiLy8gYWRkLCByZW1vdmUgY2VsbFxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi9cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIFtcbiAgICAgICcuL2ZsaWNraXR5JyxcbiAgICAgICdmaXp6eS11aS11dGlscy91dGlscydcbiAgICBdLCBmdW5jdGlvbiggRmxpY2tpdHksIHV0aWxzICkge1xuICAgICAgcmV0dXJuIGZhY3RvcnkoIHdpbmRvdywgRmxpY2tpdHksIHV0aWxzICk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICByZXF1aXJlKCcuL2ZsaWNraXR5JyksXG4gICAgICByZXF1aXJlKCdmaXp6eS11aS11dGlscycpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICB3aW5kb3cuRmxpY2tpdHksXG4gICAgICB3aW5kb3cuZml6enlVSVV0aWxzXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIHdpbmRvdywgRmxpY2tpdHksIHV0aWxzICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbi8vIGFwcGVuZCBjZWxscyB0byBhIGRvY3VtZW50IGZyYWdtZW50XG5mdW5jdGlvbiBnZXRDZWxsc0ZyYWdtZW50KCBjZWxscyApIHtcbiAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICBjZWxscy5mb3JFYWNoKCBmdW5jdGlvbiggY2VsbCApIHtcbiAgICBmcmFnbWVudC5hcHBlbmRDaGlsZCggY2VsbC5lbGVtZW50ICk7XG4gIH0pO1xuICByZXR1cm4gZnJhZ21lbnQ7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGFkZC9yZW1vdmUgY2VsbCBwcm90b3R5cGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxudmFyIHByb3RvID0gRmxpY2tpdHkucHJvdG90eXBlO1xuXG4vKipcbiAqIEluc2VydCwgcHJlcGVuZCwgb3IgYXBwZW5kIGNlbGxzXG4gKiBAcGFyYW0ge0VsZW1lbnQsIEFycmF5LCBOb2RlTGlzdH0gZWxlbXNcbiAqIEBwYXJhbSB7SW50ZWdlcn0gaW5kZXhcbiAqL1xucHJvdG8uaW5zZXJ0ID0gZnVuY3Rpb24oIGVsZW1zLCBpbmRleCApIHtcbiAgdmFyIGNlbGxzID0gdGhpcy5fbWFrZUNlbGxzKCBlbGVtcyApO1xuICBpZiAoICFjZWxscyB8fCAhY2VsbHMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbGVuID0gdGhpcy5jZWxscy5sZW5ndGg7XG4gIC8vIGRlZmF1bHQgdG8gYXBwZW5kXG4gIGluZGV4ID0gaW5kZXggPT09IHVuZGVmaW5lZCA/IGxlbiA6IGluZGV4O1xuICAvLyBhZGQgY2VsbHMgd2l0aCBkb2N1bWVudCBmcmFnbWVudFxuICB2YXIgZnJhZ21lbnQgPSBnZXRDZWxsc0ZyYWdtZW50KCBjZWxscyApO1xuICAvLyBhcHBlbmQgdG8gc2xpZGVyXG4gIHZhciBpc0FwcGVuZCA9IGluZGV4ID09IGxlbjtcbiAgaWYgKCBpc0FwcGVuZCApIHtcbiAgICB0aGlzLnNsaWRlci5hcHBlbmRDaGlsZCggZnJhZ21lbnQgKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgaW5zZXJ0Q2VsbEVsZW1lbnQgPSB0aGlzLmNlbGxzWyBpbmRleCBdLmVsZW1lbnQ7XG4gICAgdGhpcy5zbGlkZXIuaW5zZXJ0QmVmb3JlKCBmcmFnbWVudCwgaW5zZXJ0Q2VsbEVsZW1lbnQgKTtcbiAgfVxuICAvLyBhZGQgdG8gdGhpcy5jZWxsc1xuICBpZiAoIGluZGV4ID09PSAwICkge1xuICAgIC8vIHByZXBlbmQsIGFkZCB0byBzdGFydFxuICAgIHRoaXMuY2VsbHMgPSBjZWxscy5jb25jYXQoIHRoaXMuY2VsbHMgKTtcbiAgfSBlbHNlIGlmICggaXNBcHBlbmQgKSB7XG4gICAgLy8gYXBwZW5kLCBhZGQgdG8gZW5kXG4gICAgdGhpcy5jZWxscyA9IHRoaXMuY2VsbHMuY29uY2F0KCBjZWxscyApO1xuICB9IGVsc2Uge1xuICAgIC8vIGluc2VydCBpbiB0aGlzLmNlbGxzXG4gICAgdmFyIGVuZENlbGxzID0gdGhpcy5jZWxscy5zcGxpY2UoIGluZGV4LCBsZW4gLSBpbmRleCApO1xuICAgIHRoaXMuY2VsbHMgPSB0aGlzLmNlbGxzLmNvbmNhdCggY2VsbHMgKS5jb25jYXQoIGVuZENlbGxzICk7XG4gIH1cblxuICB0aGlzLl9zaXplQ2VsbHMoIGNlbGxzICk7XG4gIHRoaXMuY2VsbENoYW5nZSggaW5kZXgsIHRydWUgKTtcbn07XG5cbnByb3RvLmFwcGVuZCA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgdGhpcy5pbnNlcnQoIGVsZW1zLCB0aGlzLmNlbGxzLmxlbmd0aCApO1xufTtcblxucHJvdG8ucHJlcGVuZCA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgdGhpcy5pbnNlcnQoIGVsZW1zLCAwICk7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBjZWxsc1xuICogQHBhcmFtIHtFbGVtZW50LCBBcnJheSwgTm9kZUxpc3R9IGVsZW1zXG4gKi9cbnByb3RvLnJlbW92ZSA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgdmFyIGNlbGxzID0gdGhpcy5nZXRDZWxscyggZWxlbXMgKTtcbiAgaWYgKCAhY2VsbHMgfHwgIWNlbGxzLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgbWluQ2VsbEluZGV4ID0gdGhpcy5jZWxscy5sZW5ndGggLSAxO1xuICAvLyByZW1vdmUgY2VsbHMgZnJvbSBjb2xsZWN0aW9uICYgRE9NXG4gIGNlbGxzLmZvckVhY2goIGZ1bmN0aW9uKCBjZWxsICkge1xuICAgIGNlbGwucmVtb3ZlKCk7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5jZWxscy5pbmRleE9mKCBjZWxsICk7XG4gICAgbWluQ2VsbEluZGV4ID0gTWF0aC5taW4oIGluZGV4LCBtaW5DZWxsSW5kZXggKTtcbiAgICB1dGlscy5yZW1vdmVGcm9tKCB0aGlzLmNlbGxzLCBjZWxsICk7XG4gIH0sIHRoaXMgKTtcblxuICB0aGlzLmNlbGxDaGFuZ2UoIG1pbkNlbGxJbmRleCwgdHJ1ZSApO1xufTtcblxuLyoqXG4gKiBsb2dpYyB0byBiZSBydW4gYWZ0ZXIgYSBjZWxsJ3Mgc2l6ZSBjaGFuZ2VzXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW0gLSBjZWxsJ3MgZWxlbWVudFxuICovXG5wcm90by5jZWxsU2l6ZUNoYW5nZSA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICB2YXIgY2VsbCA9IHRoaXMuZ2V0Q2VsbCggZWxlbSApO1xuICBpZiAoICFjZWxsICkge1xuICAgIHJldHVybjtcbiAgfVxuICBjZWxsLmdldFNpemUoKTtcblxuICB2YXIgaW5kZXggPSB0aGlzLmNlbGxzLmluZGV4T2YoIGNlbGwgKTtcbiAgdGhpcy5jZWxsQ2hhbmdlKCBpbmRleCApO1xufTtcblxuLyoqXG4gKiBsb2dpYyBhbnkgdGltZSBhIGNlbGwgaXMgY2hhbmdlZDogYWRkZWQsIHJlbW92ZWQsIG9yIHNpemUgY2hhbmdlZFxuICogQHBhcmFtIHtJbnRlZ2VyfSBjaGFuZ2VkQ2VsbEluZGV4IC0gaW5kZXggb2YgdGhlIGNoYW5nZWQgY2VsbCwgb3B0aW9uYWxcbiAqL1xucHJvdG8uY2VsbENoYW5nZSA9IGZ1bmN0aW9uKCBjaGFuZ2VkQ2VsbEluZGV4LCBpc1Bvc2l0aW9uaW5nU2xpZGVyICkge1xuICB2YXIgcHJldlNlbGVjdGVkRWxlbSA9IHRoaXMuc2VsZWN0ZWRFbGVtZW50O1xuICB0aGlzLl9wb3NpdGlvbkNlbGxzKCBjaGFuZ2VkQ2VsbEluZGV4ICk7XG4gIHRoaXMuX2dldFdyYXBTaGlmdENlbGxzKCk7XG4gIHRoaXMuc2V0R2FsbGVyeVNpemUoKTtcbiAgLy8gdXBkYXRlIHNlbGVjdGVkSW5kZXhcbiAgLy8gdHJ5IHRvIG1haW50YWluIHBvc2l0aW9uICYgc2VsZWN0IHByZXZpb3VzIHNlbGVjdGVkIGVsZW1lbnRcbiAgdmFyIGNlbGwgPSB0aGlzLmdldENlbGwoIHByZXZTZWxlY3RlZEVsZW0gKTtcbiAgaWYgKCBjZWxsICkge1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHRoaXMuZ2V0Q2VsbFNsaWRlSW5kZXgoIGNlbGwgKTtcbiAgfVxuICB0aGlzLnNlbGVjdGVkSW5kZXggPSBNYXRoLm1pbiggdGhpcy5zbGlkZXMubGVuZ3RoIC0gMSwgdGhpcy5zZWxlY3RlZEluZGV4ICk7XG5cbiAgdGhpcy5lbWl0RXZlbnQoICdjZWxsQ2hhbmdlJywgWyBjaGFuZ2VkQ2VsbEluZGV4IF0gKTtcbiAgLy8gcG9zaXRpb24gc2xpZGVyXG4gIHRoaXMuc2VsZWN0KCB0aGlzLnNlbGVjdGVkSW5kZXggKTtcbiAgLy8gZG8gbm90IHBvc2l0aW9uIHNsaWRlciBhZnRlciBsYXp5IGxvYWRcbiAgaWYgKCBpc1Bvc2l0aW9uaW5nU2xpZGVyICkge1xuICAgIHRoaXMucG9zaXRpb25TbGlkZXJBdFNlbGVjdGVkKCk7XG4gIH1cbn07XG5cbi8vIC0tLS0tICAtLS0tLSAvL1xuXG5yZXR1cm4gRmxpY2tpdHk7XG5cbn0pKTtcbiIsIi8vIGFuaW1hdGVcbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAnZml6enktdWktdXRpbHMvdXRpbHMnXG4gICAgXSwgZnVuY3Rpb24oIHV0aWxzICkge1xuICAgICAgcmV0dXJuIGZhY3RvcnkoIHdpbmRvdywgdXRpbHMgKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHJlcXVpcmUoJ2Zpenp5LXVpLXV0aWxzJylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93LkZsaWNraXR5ID0gd2luZG93LkZsaWNraXR5IHx8IHt9O1xuICAgIHdpbmRvdy5GbGlja2l0eS5hbmltYXRlUHJvdG90eXBlID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHdpbmRvdy5maXp6eVVJVXRpbHNcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCB1dGlscyApIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBhbmltYXRlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnZhciBwcm90byA9IHt9O1xuXG5wcm90by5zdGFydEFuaW1hdGlvbiA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIHRoaXMuaXNBbmltYXRpbmcgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5pc0FuaW1hdGluZyA9IHRydWU7XG4gIHRoaXMucmVzdGluZ0ZyYW1lcyA9IDA7XG4gIHRoaXMuYW5pbWF0ZSgpO1xufTtcblxucHJvdG8uYW5pbWF0ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmFwcGx5RHJhZ0ZvcmNlKCk7XG4gIHRoaXMuYXBwbHlTZWxlY3RlZEF0dHJhY3Rpb24oKTtcblxuICB2YXIgcHJldmlvdXNYID0gdGhpcy54O1xuXG4gIHRoaXMuaW50ZWdyYXRlUGh5c2ljcygpO1xuICB0aGlzLnBvc2l0aW9uU2xpZGVyKCk7XG4gIHRoaXMuc2V0dGxlKCBwcmV2aW91c1ggKTtcbiAgLy8gYW5pbWF0ZSBuZXh0IGZyYW1lXG4gIGlmICggdGhpcy5pc0FuaW1hdGluZyApIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSggZnVuY3Rpb24gYW5pbWF0ZUZyYW1lKCkge1xuICAgICAgX3RoaXMuYW5pbWF0ZSgpO1xuICAgIH0pO1xuICB9XG59O1xuXG5wcm90by5wb3NpdGlvblNsaWRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgeCA9IHRoaXMueDtcbiAgLy8gd3JhcCBwb3NpdGlvbiBhcm91bmRcbiAgaWYgKCB0aGlzLm9wdGlvbnMud3JhcEFyb3VuZCAmJiB0aGlzLmNlbGxzLmxlbmd0aCA+IDEgKSB7XG4gICAgeCA9IHV0aWxzLm1vZHVsbyggeCwgdGhpcy5zbGlkZWFibGVXaWR0aCApO1xuICAgIHggPSB4IC0gdGhpcy5zbGlkZWFibGVXaWR0aDtcbiAgICB0aGlzLnNoaWZ0V3JhcENlbGxzKCB4ICk7XG4gIH1cblxuICB0aGlzLnNldFRyYW5zbGF0ZVgoIHgsIHRoaXMuaXNBbmltYXRpbmcgKTtcbiAgdGhpcy5kaXNwYXRjaFNjcm9sbEV2ZW50KCk7XG59O1xuXG5wcm90by5zZXRUcmFuc2xhdGVYID0gZnVuY3Rpb24oIHgsIGlzM2QgKSB7XG4gIHggKz0gdGhpcy5jdXJzb3JQb3NpdGlvbjtcbiAgLy8gcmV2ZXJzZSBpZiByaWdodC10by1sZWZ0IGFuZCB1c2luZyB0cmFuc2Zvcm1cbiAgeCA9IHRoaXMub3B0aW9ucy5yaWdodFRvTGVmdCA/IC14IDogeDtcbiAgdmFyIHRyYW5zbGF0ZVggPSB0aGlzLmdldFBvc2l0aW9uVmFsdWUoIHggKTtcbiAgLy8gdXNlIDNEIHRyYW5mb3JtcyBmb3IgaGFyZHdhcmUgYWNjZWxlcmF0aW9uIG9uIGlPU1xuICAvLyBidXQgdXNlIDJEIHdoZW4gc2V0dGxlZCwgZm9yIGJldHRlciBmb250LXJlbmRlcmluZ1xuICB0aGlzLnNsaWRlci5zdHlsZS50cmFuc2Zvcm0gPSBpczNkID9cbiAgICAndHJhbnNsYXRlM2QoJyArIHRyYW5zbGF0ZVggKyAnLDAsMCknIDogJ3RyYW5zbGF0ZVgoJyArIHRyYW5zbGF0ZVggKyAnKSc7XG59O1xuXG5wcm90by5kaXNwYXRjaFNjcm9sbEV2ZW50ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBmaXJzdFNsaWRlID0gdGhpcy5zbGlkZXNbMF07XG4gIGlmICggIWZpcnN0U2xpZGUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBwb3NpdGlvblggPSAtdGhpcy54IC0gZmlyc3RTbGlkZS50YXJnZXQ7XG4gIHZhciBwcm9ncmVzcyA9IHBvc2l0aW9uWCAvIHRoaXMuc2xpZGVzV2lkdGg7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCggJ3Njcm9sbCcsIG51bGwsIFsgcHJvZ3Jlc3MsIHBvc2l0aW9uWCBdICk7XG59O1xuXG5wcm90by5wb3NpdGlvblNsaWRlckF0U2VsZWN0ZWQgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCAhdGhpcy5jZWxscy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMueCA9IC10aGlzLnNlbGVjdGVkU2xpZGUudGFyZ2V0O1xuICB0aGlzLnZlbG9jaXR5ID0gMDsgLy8gc3RvcCB3b2JibGVcbiAgdGhpcy5wb3NpdGlvblNsaWRlcigpO1xufTtcblxucHJvdG8uZ2V0UG9zaXRpb25WYWx1ZSA9IGZ1bmN0aW9uKCBwb3NpdGlvbiApIHtcbiAgaWYgKCB0aGlzLm9wdGlvbnMucGVyY2VudFBvc2l0aW9uICkge1xuICAgIC8vIHBlcmNlbnQgcG9zaXRpb24sIHJvdW5kIHRvIDIgZGlnaXRzLCBsaWtlIDEyLjM0JVxuICAgIHJldHVybiAoIE1hdGgucm91bmQoICggcG9zaXRpb24gLyB0aGlzLnNpemUuaW5uZXJXaWR0aCApICogMTAwMDAgKSAqIDAuMDEgKSsgJyUnO1xuICB9IGVsc2Uge1xuICAgIC8vIHBpeGVsIHBvc2l0aW9uaW5nXG4gICAgcmV0dXJuIE1hdGgucm91bmQoIHBvc2l0aW9uICkgKyAncHgnO1xuICB9XG59O1xuXG5wcm90by5zZXR0bGUgPSBmdW5jdGlvbiggcHJldmlvdXNYICkge1xuICAvLyBrZWVwIHRyYWNrIG9mIGZyYW1lcyB3aGVyZSB4IGhhc24ndCBtb3ZlZFxuICBpZiAoICF0aGlzLmlzUG9pbnRlckRvd24gJiYgTWF0aC5yb3VuZCggdGhpcy54ICogMTAwICkgPT0gTWF0aC5yb3VuZCggcHJldmlvdXNYICogMTAwICkgKSB7XG4gICAgdGhpcy5yZXN0aW5nRnJhbWVzKys7XG4gIH1cbiAgLy8gc3RvcCBhbmltYXRpbmcgaWYgcmVzdGluZyBmb3IgMyBvciBtb3JlIGZyYW1lc1xuICBpZiAoIHRoaXMucmVzdGluZ0ZyYW1lcyA+IDIgKSB7XG4gICAgdGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlO1xuICAgIGRlbGV0ZSB0aGlzLmlzRnJlZVNjcm9sbGluZztcbiAgICAvLyByZW5kZXIgcG9zaXRpb24gd2l0aCB0cmFuc2xhdGVYIHdoZW4gc2V0dGxlZFxuICAgIHRoaXMucG9zaXRpb25TbGlkZXIoKTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoICdzZXR0bGUnLCBudWxsLCBbIHRoaXMuc2VsZWN0ZWRJbmRleCBdICk7XG4gIH1cbn07XG5cbnByb3RvLnNoaWZ0V3JhcENlbGxzID0gZnVuY3Rpb24oIHggKSB7XG4gIC8vIHNoaWZ0IGJlZm9yZSBjZWxsc1xuICB2YXIgYmVmb3JlR2FwID0gdGhpcy5jdXJzb3JQb3NpdGlvbiArIHg7XG4gIHRoaXMuX3NoaWZ0Q2VsbHMoIHRoaXMuYmVmb3JlU2hpZnRDZWxscywgYmVmb3JlR2FwLCAtMSApO1xuICAvLyBzaGlmdCBhZnRlciBjZWxsc1xuICB2YXIgYWZ0ZXJHYXAgPSB0aGlzLnNpemUuaW5uZXJXaWR0aCAtICggeCArIHRoaXMuc2xpZGVhYmxlV2lkdGggKyB0aGlzLmN1cnNvclBvc2l0aW9uICk7XG4gIHRoaXMuX3NoaWZ0Q2VsbHMoIHRoaXMuYWZ0ZXJTaGlmdENlbGxzLCBhZnRlckdhcCwgMSApO1xufTtcblxucHJvdG8uX3NoaWZ0Q2VsbHMgPSBmdW5jdGlvbiggY2VsbHMsIGdhcCwgc2hpZnQgKSB7XG4gIGZvciAoIHZhciBpPTA7IGkgPCBjZWxscy5sZW5ndGg7IGkrKyApIHtcbiAgICB2YXIgY2VsbCA9IGNlbGxzW2ldO1xuICAgIHZhciBjZWxsU2hpZnQgPSBnYXAgPiAwID8gc2hpZnQgOiAwO1xuICAgIGNlbGwud3JhcFNoaWZ0KCBjZWxsU2hpZnQgKTtcbiAgICBnYXAgLT0gY2VsbC5zaXplLm91dGVyV2lkdGg7XG4gIH1cbn07XG5cbnByb3RvLl91bnNoaWZ0Q2VsbHMgPSBmdW5jdGlvbiggY2VsbHMgKSB7XG4gIGlmICggIWNlbGxzIHx8ICFjZWxscy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGZvciAoIHZhciBpPTA7IGkgPCBjZWxscy5sZW5ndGg7IGkrKyApIHtcbiAgICBjZWxsc1tpXS53cmFwU2hpZnQoIDAgKTtcbiAgfVxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcGh5c2ljcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5wcm90by5pbnRlZ3JhdGVQaHlzaWNzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMueCArPSB0aGlzLnZlbG9jaXR5O1xuICB0aGlzLnZlbG9jaXR5ICo9IHRoaXMuZ2V0RnJpY3Rpb25GYWN0b3IoKTtcbn07XG5cbnByb3RvLmFwcGx5Rm9yY2UgPSBmdW5jdGlvbiggZm9yY2UgKSB7XG4gIHRoaXMudmVsb2NpdHkgKz0gZm9yY2U7XG59O1xuXG5wcm90by5nZXRGcmljdGlvbkZhY3RvciA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gMSAtIHRoaXMub3B0aW9uc1sgdGhpcy5pc0ZyZWVTY3JvbGxpbmcgPyAnZnJlZVNjcm9sbEZyaWN0aW9uJyA6ICdmcmljdGlvbicgXTtcbn07XG5cbnByb3RvLmdldFJlc3RpbmdQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAvLyBteSB0aGFua3MgdG8gU3RldmVuIFdpdHRlbnMsIHdobyBzaW1wbGlmaWVkIHRoaXMgbWF0aCBncmVhdGx5XG4gIHJldHVybiB0aGlzLnggKyB0aGlzLnZlbG9jaXR5IC8gKCAxIC0gdGhpcy5nZXRGcmljdGlvbkZhY3RvcigpICk7XG59O1xuXG5wcm90by5hcHBseURyYWdGb3JjZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoICF0aGlzLmlzRHJhZ2dhYmxlIHx8ICF0aGlzLmlzUG9pbnRlckRvd24gKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGNoYW5nZSB0aGUgcG9zaXRpb24gdG8gZHJhZyBwb3NpdGlvbiBieSBhcHBseWluZyBmb3JjZVxuICB2YXIgZHJhZ1ZlbG9jaXR5ID0gdGhpcy5kcmFnWCAtIHRoaXMueDtcbiAgdmFyIGRyYWdGb3JjZSA9IGRyYWdWZWxvY2l0eSAtIHRoaXMudmVsb2NpdHk7XG4gIHRoaXMuYXBwbHlGb3JjZSggZHJhZ0ZvcmNlICk7XG59O1xuXG5wcm90by5hcHBseVNlbGVjdGVkQXR0cmFjdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAvLyBkbyBub3QgYXR0cmFjdCBpZiBwb2ludGVyIGRvd24gb3Igbm8gc2xpZGVzXG4gIHZhciBkcmFnRG93biA9IHRoaXMuaXNEcmFnZ2FibGUgJiYgdGhpcy5pc1BvaW50ZXJEb3duO1xuICBpZiAoIGRyYWdEb3duIHx8IHRoaXMuaXNGcmVlU2Nyb2xsaW5nIHx8ICF0aGlzLnNsaWRlcy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBkaXN0YW5jZSA9IHRoaXMuc2VsZWN0ZWRTbGlkZS50YXJnZXQgKiAtMSAtIHRoaXMueDtcbiAgdmFyIGZvcmNlID0gZGlzdGFuY2UgKiB0aGlzLm9wdGlvbnMuc2VsZWN0ZWRBdHRyYWN0aW9uO1xuICB0aGlzLmFwcGx5Rm9yY2UoIGZvcmNlICk7XG59O1xuXG5yZXR1cm4gcHJvdG87XG5cbn0pKTtcbiIsIi8vIEZsaWNraXR5LkNlbGxcbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAnZ2V0LXNpemUvZ2V0LXNpemUnXG4gICAgXSwgZnVuY3Rpb24oIGdldFNpemUgKSB7XG4gICAgICByZXR1cm4gZmFjdG9yeSggd2luZG93LCBnZXRTaXplICk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICByZXF1aXJlKCdnZXQtc2l6ZScpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5GbGlja2l0eSA9IHdpbmRvdy5GbGlja2l0eSB8fCB7fTtcbiAgICB3aW5kb3cuRmxpY2tpdHkuQ2VsbCA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICB3aW5kb3cuZ2V0U2l6ZVxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIGdldFNpemUgKSB7XG5cbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gQ2VsbCggZWxlbSwgcGFyZW50ICkge1xuICB0aGlzLmVsZW1lbnQgPSBlbGVtO1xuICB0aGlzLnBhcmVudCA9IHBhcmVudDtcblxuICB0aGlzLmNyZWF0ZSgpO1xufVxuXG52YXIgcHJvdG8gPSBDZWxsLnByb3RvdHlwZTtcblxucHJvdG8uY3JlYXRlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWhpZGRlbicsICd0cnVlJyApO1xuICB0aGlzLnggPSAwO1xuICB0aGlzLnNoaWZ0ID0gMDtcbn07XG5cbnByb3RvLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgLy8gcmVzZXQgc3R5bGVcbiAgdGhpcy51bnNlbGVjdCgpO1xuICB0aGlzLmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnJztcbiAgdmFyIHNpZGUgPSB0aGlzLnBhcmVudC5vcmlnaW5TaWRlO1xuICB0aGlzLmVsZW1lbnQuc3R5bGVbIHNpZGUgXSA9ICcnO1xufTtcblxucHJvdG8uZ2V0U2l6ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNpemUgPSBnZXRTaXplKCB0aGlzLmVsZW1lbnQgKTtcbn07XG5cbnByb3RvLnNldFBvc2l0aW9uID0gZnVuY3Rpb24oIHggKSB7XG4gIHRoaXMueCA9IHg7XG4gIHRoaXMudXBkYXRlVGFyZ2V0KCk7XG4gIHRoaXMucmVuZGVyUG9zaXRpb24oIHggKTtcbn07XG5cbi8vIHNldERlZmF1bHRUYXJnZXQgdjEgbWV0aG9kLCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSwgcmVtb3ZlIGluIHYzXG5wcm90by51cGRhdGVUYXJnZXQgPSBwcm90by5zZXREZWZhdWx0VGFyZ2V0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBtYXJnaW5Qcm9wZXJ0eSA9IHRoaXMucGFyZW50Lm9yaWdpblNpZGUgPT0gJ2xlZnQnID8gJ21hcmdpbkxlZnQnIDogJ21hcmdpblJpZ2h0JztcbiAgdGhpcy50YXJnZXQgPSB0aGlzLnggKyB0aGlzLnNpemVbIG1hcmdpblByb3BlcnR5IF0gK1xuICAgIHRoaXMuc2l6ZS53aWR0aCAqIHRoaXMucGFyZW50LmNlbGxBbGlnbjtcbn07XG5cbnByb3RvLnJlbmRlclBvc2l0aW9uID0gZnVuY3Rpb24oIHggKSB7XG4gIC8vIHJlbmRlciBwb3NpdGlvbiBvZiBjZWxsIHdpdGggaW4gc2xpZGVyXG4gIHZhciBzaWRlID0gdGhpcy5wYXJlbnQub3JpZ2luU2lkZTtcbiAgdGhpcy5lbGVtZW50LnN0eWxlWyBzaWRlIF0gPSB0aGlzLnBhcmVudC5nZXRQb3NpdGlvblZhbHVlKCB4ICk7XG59O1xuXG5wcm90by5zZWxlY3QgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2lzLXNlbGVjdGVkJyk7XG4gIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG59O1xuXG5wcm90by51bnNlbGVjdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtc2VsZWN0ZWQnKTtcbiAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtaGlkZGVuJywgJ3RydWUnICk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7SW50ZWdlcn0gZmFjdG9yIC0gMCwgMSwgb3IgLTFcbioqL1xucHJvdG8ud3JhcFNoaWZ0ID0gZnVuY3Rpb24oIHNoaWZ0ICkge1xuICB0aGlzLnNoaWZ0ID0gc2hpZnQ7XG4gIHRoaXMucmVuZGVyUG9zaXRpb24oIHRoaXMueCArIHRoaXMucGFyZW50LnNsaWRlYWJsZVdpZHRoICogc2hpZnQgKTtcbn07XG5cbnByb3RvLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggdGhpcy5lbGVtZW50ICk7XG59O1xuXG5yZXR1cm4gQ2VsbDtcblxufSkpO1xuIiwiLy8gZHJhZ1xuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi9cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIFtcbiAgICAgICcuL2ZsaWNraXR5JyxcbiAgICAgICd1bmlkcmFnZ2VyL3VuaWRyYWdnZXInLFxuICAgICAgJ2Zpenp5LXVpLXV0aWxzL3V0aWxzJ1xuICAgIF0sIGZ1bmN0aW9uKCBGbGlja2l0eSwgVW5pZHJhZ2dlciwgdXRpbHMgKSB7XG4gICAgICByZXR1cm4gZmFjdG9yeSggd2luZG93LCBGbGlja2l0eSwgVW5pZHJhZ2dlciwgdXRpbHMgKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHJlcXVpcmUoJy4vZmxpY2tpdHknKSxcbiAgICAgIHJlcXVpcmUoJ3VuaWRyYWdnZXInKSxcbiAgICAgIHJlcXVpcmUoJ2Zpenp5LXVpLXV0aWxzJylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93LkZsaWNraXR5ID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHdpbmRvdy5GbGlja2l0eSxcbiAgICAgIHdpbmRvdy5VbmlkcmFnZ2VyLFxuICAgICAgd2luZG93LmZpenp5VUlVdGlsc1xuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIEZsaWNraXR5LCBVbmlkcmFnZ2VyLCB1dGlscyApIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLSBkZWZhdWx0cyAtLS0tLSAvL1xuXG51dGlscy5leHRlbmQoIEZsaWNraXR5LmRlZmF1bHRzLCB7XG4gIGRyYWdnYWJsZTogJz4xJyxcbiAgZHJhZ1RocmVzaG9sZDogMyxcbn0pO1xuXG4vLyAtLS0tLSBjcmVhdGUgLS0tLS0gLy9cblxuRmxpY2tpdHkuY3JlYXRlTWV0aG9kcy5wdXNoKCdfY3JlYXRlRHJhZycpO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkcmFnIHByb3RvdHlwZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG52YXIgcHJvdG8gPSBGbGlja2l0eS5wcm90b3R5cGU7XG51dGlscy5leHRlbmQoIHByb3RvLCBVbmlkcmFnZ2VyLnByb3RvdHlwZSApO1xucHJvdG8uX3RvdWNoQWN0aW9uVmFsdWUgPSAncGFuLXknO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxudmFyIGlzVG91Y2ggPSAnY3JlYXRlVG91Y2gnIGluIGRvY3VtZW50O1xudmFyIGlzVG91Y2htb3ZlU2Nyb2xsQ2FuY2VsZWQgPSBmYWxzZTtcblxucHJvdG8uX2NyZWF0ZURyYWcgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5vbiggJ2FjdGl2YXRlJywgdGhpcy5vbkFjdGl2YXRlRHJhZyApO1xuICB0aGlzLm9uKCAndWlDaGFuZ2UnLCB0aGlzLl91aUNoYW5nZURyYWcgKTtcbiAgdGhpcy5vbiggJ2RlYWN0aXZhdGUnLCB0aGlzLm9uRGVhY3RpdmF0ZURyYWcgKTtcbiAgdGhpcy5vbiggJ2NlbGxDaGFuZ2UnLCB0aGlzLnVwZGF0ZURyYWdnYWJsZSApO1xuICAvLyBUT0RPIHVwZGF0ZURyYWdnYWJsZSBvbiByZXNpemU/IGlmIGdyb3VwQ2VsbHMgJiBzbGlkZXMgY2hhbmdlXG4gIC8vIEhBQ0sgLSBhZGQgc2VlbWluZ2x5IGlubm9jdW91cyBoYW5kbGVyIHRvIGZpeCBpT1MgMTAgc2Nyb2xsIGJlaGF2aW9yXG4gIC8vICM0NTcsIFJ1YmFYYS9Tb3J0YWJsZSM5NzNcbiAgaWYgKCBpc1RvdWNoICYmICFpc1RvdWNobW92ZVNjcm9sbENhbmNlbGVkICkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgZnVuY3Rpb24oKSB7fSk7XG4gICAgaXNUb3VjaG1vdmVTY3JvbGxDYW5jZWxlZCA9IHRydWU7XG4gIH1cbn07XG5cbnByb3RvLm9uQWN0aXZhdGVEcmFnID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuaGFuZGxlcyA9IFsgdGhpcy52aWV3cG9ydCBdO1xuICB0aGlzLmJpbmRIYW5kbGVzKCk7XG4gIHRoaXMudXBkYXRlRHJhZ2dhYmxlKCk7XG59O1xuXG5wcm90by5vbkRlYWN0aXZhdGVEcmFnID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMudW5iaW5kSGFuZGxlcygpO1xuICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZHJhZ2dhYmxlJyk7XG59O1xuXG5wcm90by51cGRhdGVEcmFnZ2FibGUgPSBmdW5jdGlvbigpIHtcbiAgLy8gZGlzYWJsZSBkcmFnZ2luZyBpZiBsZXNzIHRoYW4gMiBzbGlkZXMuICMyNzhcbiAgaWYgKCB0aGlzLm9wdGlvbnMuZHJhZ2dhYmxlID09ICc+MScgKSB7XG4gICAgdGhpcy5pc0RyYWdnYWJsZSA9IHRoaXMuc2xpZGVzLmxlbmd0aCA+IDE7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5pc0RyYWdnYWJsZSA9IHRoaXMub3B0aW9ucy5kcmFnZ2FibGU7XG4gIH1cbiAgaWYgKCB0aGlzLmlzRHJhZ2dhYmxlICkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpcy1kcmFnZ2FibGUnKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZHJhZ2dhYmxlJyk7XG4gIH1cbn07XG5cbi8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG5wcm90by5iaW5kRHJhZyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLm9wdGlvbnMuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgdGhpcy51cGRhdGVEcmFnZ2FibGUoKTtcbn07XG5cbnByb3RvLnVuYmluZERyYWcgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5vcHRpb25zLmRyYWdnYWJsZSA9IGZhbHNlO1xuICB0aGlzLnVwZGF0ZURyYWdnYWJsZSgpO1xufTtcblxucHJvdG8uX3VpQ2hhbmdlRHJhZyA9IGZ1bmN0aW9uKCkge1xuICBkZWxldGUgdGhpcy5pc0ZyZWVTY3JvbGxpbmc7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBwb2ludGVyIGV2ZW50cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5wcm90by5wb2ludGVyRG93biA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgaWYgKCAhdGhpcy5pc0RyYWdnYWJsZSApIHtcbiAgICB0aGlzLl9wb2ludGVyRG93bkRlZmF1bHQoIGV2ZW50LCBwb2ludGVyICk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBpc09rYXkgPSB0aGlzLm9rYXlQb2ludGVyRG93biggZXZlbnQgKTtcbiAgaWYgKCAhaXNPa2F5ICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuX3BvaW50ZXJEb3duUHJldmVudERlZmF1bHQoIGV2ZW50ICk7XG4gIHRoaXMucG9pbnRlckRvd25Gb2N1cyggZXZlbnQgKTtcbiAgLy8gYmx1clxuICBpZiAoIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT0gdGhpcy5lbGVtZW50ICkge1xuICAgIC8vIGRvIG5vdCBibHVyIGlmIGFscmVhZHkgZm9jdXNlZFxuICAgIHRoaXMucG9pbnRlckRvd25CbHVyKCk7XG4gIH1cblxuICAvLyBzdG9wIGlmIGl0IHdhcyBtb3ZpbmdcbiAgdGhpcy5kcmFnWCA9IHRoaXMueDtcbiAgdGhpcy52aWV3cG9ydC5jbGFzc0xpc3QuYWRkKCdpcy1wb2ludGVyLWRvd24nKTtcbiAgLy8gdHJhY2sgc2Nyb2xsaW5nXG4gIHRoaXMucG9pbnRlckRvd25TY3JvbGwgPSBnZXRTY3JvbGxQb3NpdGlvbigpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3Njcm9sbCcsIHRoaXMgKTtcblxuICB0aGlzLl9wb2ludGVyRG93bkRlZmF1bHQoIGV2ZW50LCBwb2ludGVyICk7XG59O1xuXG4vLyBkZWZhdWx0IHBvaW50ZXJEb3duIGxvZ2ljLCB1c2VkIGZvciBzdGF0aWNDbGlja1xucHJvdG8uX3BvaW50ZXJEb3duRGVmYXVsdCA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgLy8gdHJhY2sgc3RhcnQgZXZlbnQgcG9zaXRpb25cbiAgLy8gU2FmYXJpIDkgb3ZlcnJpZGVzIHBhZ2VYIGFuZCBwYWdlWS4gVGhlc2UgdmFsdWVzIG5lZWRzIHRvIGJlIGNvcGllZC4gIzc3OVxuICB0aGlzLnBvaW50ZXJEb3duUG9pbnRlciA9IHtcbiAgICBwYWdlWDogcG9pbnRlci5wYWdlWCxcbiAgICBwYWdlWTogcG9pbnRlci5wYWdlWSxcbiAgfTtcbiAgLy8gYmluZCBtb3ZlIGFuZCBlbmQgZXZlbnRzXG4gIHRoaXMuX2JpbmRQb3N0U3RhcnRFdmVudHMoIGV2ZW50ICk7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCggJ3BvaW50ZXJEb3duJywgZXZlbnQsIFsgcG9pbnRlciBdICk7XG59O1xuXG52YXIgZm9jdXNOb2RlcyA9IHtcbiAgSU5QVVQ6IHRydWUsXG4gIFRFWFRBUkVBOiB0cnVlLFxuICBTRUxFQ1Q6IHRydWUsXG59O1xuXG5wcm90by5wb2ludGVyRG93bkZvY3VzID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICB2YXIgaXNGb2N1c05vZGUgPSBmb2N1c05vZGVzWyBldmVudC50YXJnZXQubm9kZU5hbWUgXTtcbiAgaWYgKCAhaXNGb2N1c05vZGUgKSB7XG4gICAgdGhpcy5mb2N1cygpO1xuICB9XG59O1xuXG5wcm90by5fcG9pbnRlckRvd25QcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgdmFyIGlzVG91Y2hTdGFydCA9IGV2ZW50LnR5cGUgPT0gJ3RvdWNoc3RhcnQnO1xuICB2YXIgaXNUb3VjaFBvaW50ZXIgPSBldmVudC5wb2ludGVyVHlwZSA9PSAndG91Y2gnO1xuICB2YXIgaXNGb2N1c05vZGUgPSBmb2N1c05vZGVzWyBldmVudC50YXJnZXQubm9kZU5hbWUgXTtcbiAgaWYgKCAhaXNUb3VjaFN0YXJ0ICYmICFpc1RvdWNoUG9pbnRlciAmJiAhaXNGb2N1c05vZGUgKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxufTtcblxuLy8gLS0tLS0gbW92ZSAtLS0tLSAvL1xuXG5wcm90by5oYXNEcmFnU3RhcnRlZCA9IGZ1bmN0aW9uKCBtb3ZlVmVjdG9yICkge1xuICByZXR1cm4gTWF0aC5hYnMoIG1vdmVWZWN0b3IueCApID4gdGhpcy5vcHRpb25zLmRyYWdUaHJlc2hvbGQ7XG59O1xuXG4vLyAtLS0tLSB1cCAtLS0tLSAvL1xuXG5wcm90by5wb2ludGVyVXAgPSBmdW5jdGlvbiggZXZlbnQsIHBvaW50ZXIgKSB7XG4gIGRlbGV0ZSB0aGlzLmlzVG91Y2hTY3JvbGxpbmc7XG4gIHRoaXMudmlld3BvcnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtcG9pbnRlci1kb3duJyk7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCggJ3BvaW50ZXJVcCcsIGV2ZW50LCBbIHBvaW50ZXIgXSApO1xuICB0aGlzLl9kcmFnUG9pbnRlclVwKCBldmVudCwgcG9pbnRlciApO1xufTtcblxucHJvdG8ucG9pbnRlckRvbmUgPSBmdW5jdGlvbigpIHtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdzY3JvbGwnLCB0aGlzICk7XG4gIGRlbGV0ZSB0aGlzLnBvaW50ZXJEb3duU2Nyb2xsO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZHJhZ2dpbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxucHJvdG8uZHJhZ1N0YXJ0ID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICBpZiAoICF0aGlzLmlzRHJhZ2dhYmxlICkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLmRyYWdTdGFydFBvc2l0aW9uID0gdGhpcy54O1xuICB0aGlzLnN0YXJ0QW5pbWF0aW9uKCk7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAnc2Nyb2xsJywgdGhpcyApO1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoICdkcmFnU3RhcnQnLCBldmVudCwgWyBwb2ludGVyIF0gKTtcbn07XG5cbnByb3RvLnBvaW50ZXJNb3ZlID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICB2YXIgbW92ZVZlY3RvciA9IHRoaXMuX2RyYWdQb2ludGVyTW92ZSggZXZlbnQsIHBvaW50ZXIgKTtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCAncG9pbnRlck1vdmUnLCBldmVudCwgWyBwb2ludGVyLCBtb3ZlVmVjdG9yIF0gKTtcbiAgdGhpcy5fZHJhZ01vdmUoIGV2ZW50LCBwb2ludGVyLCBtb3ZlVmVjdG9yICk7XG59O1xuXG5wcm90by5kcmFnTW92ZSA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciwgbW92ZVZlY3RvciApIHtcbiAgaWYgKCAhdGhpcy5pc0RyYWdnYWJsZSApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICB0aGlzLnByZXZpb3VzRHJhZ1ggPSB0aGlzLmRyYWdYO1xuICAvLyByZXZlcnNlIGlmIHJpZ2h0LXRvLWxlZnRcbiAgdmFyIGRpcmVjdGlvbiA9IHRoaXMub3B0aW9ucy5yaWdodFRvTGVmdCA/IC0xIDogMTtcbiAgaWYgKCB0aGlzLm9wdGlvbnMud3JhcEFyb3VuZCApIHtcbiAgICAvLyB3cmFwIGFyb3VuZCBtb3ZlLiAjNTg5XG4gICAgbW92ZVZlY3Rvci54ID0gbW92ZVZlY3Rvci54ICUgdGhpcy5zbGlkZWFibGVXaWR0aDtcbiAgfVxuICB2YXIgZHJhZ1ggPSB0aGlzLmRyYWdTdGFydFBvc2l0aW9uICsgbW92ZVZlY3Rvci54ICogZGlyZWN0aW9uO1xuXG4gIGlmICggIXRoaXMub3B0aW9ucy53cmFwQXJvdW5kICYmIHRoaXMuc2xpZGVzLmxlbmd0aCApIHtcbiAgICAvLyBzbG93IGRyYWdcbiAgICB2YXIgb3JpZ2luQm91bmQgPSBNYXRoLm1heCggLXRoaXMuc2xpZGVzWzBdLnRhcmdldCwgdGhpcy5kcmFnU3RhcnRQb3NpdGlvbiApO1xuICAgIGRyYWdYID0gZHJhZ1ggPiBvcmlnaW5Cb3VuZCA/ICggZHJhZ1ggKyBvcmlnaW5Cb3VuZCApICogMC41IDogZHJhZ1g7XG4gICAgdmFyIGVuZEJvdW5kID0gTWF0aC5taW4oIC10aGlzLmdldExhc3RTbGlkZSgpLnRhcmdldCwgdGhpcy5kcmFnU3RhcnRQb3NpdGlvbiApO1xuICAgIGRyYWdYID0gZHJhZ1ggPCBlbmRCb3VuZCA/ICggZHJhZ1ggKyBlbmRCb3VuZCApICogMC41IDogZHJhZ1g7XG4gIH1cblxuICB0aGlzLmRyYWdYID0gZHJhZ1g7XG5cbiAgdGhpcy5kcmFnTW92ZVRpbWUgPSBuZXcgRGF0ZSgpO1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoICdkcmFnTW92ZScsIGV2ZW50LCBbIHBvaW50ZXIsIG1vdmVWZWN0b3IgXSApO1xufTtcblxucHJvdG8uZHJhZ0VuZCA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgaWYgKCAhdGhpcy5pc0RyYWdnYWJsZSApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKCB0aGlzLm9wdGlvbnMuZnJlZVNjcm9sbCApIHtcbiAgICB0aGlzLmlzRnJlZVNjcm9sbGluZyA9IHRydWU7XG4gIH1cbiAgLy8gc2V0IHNlbGVjdGVkSW5kZXggYmFzZWQgb24gd2hlcmUgZmxpY2sgd2lsbCBlbmQgdXBcbiAgdmFyIGluZGV4ID0gdGhpcy5kcmFnRW5kUmVzdGluZ1NlbGVjdCgpO1xuXG4gIGlmICggdGhpcy5vcHRpb25zLmZyZWVTY3JvbGwgJiYgIXRoaXMub3B0aW9ucy53cmFwQXJvdW5kICkge1xuICAgIC8vIGlmIGZyZWUtc2Nyb2xsICYgbm90IHdyYXAgYXJvdW5kXG4gICAgLy8gZG8gbm90IGZyZWUtc2Nyb2xsIGlmIGdvaW5nIG91dHNpZGUgb2YgYm91bmRpbmcgc2xpZGVzXG4gICAgLy8gc28gYm91bmRpbmcgc2xpZGVzIGNhbiBhdHRyYWN0IHNsaWRlciwgYW5kIGtlZXAgaXQgaW4gYm91bmRzXG4gICAgdmFyIHJlc3RpbmdYID0gdGhpcy5nZXRSZXN0aW5nUG9zaXRpb24oKTtcbiAgICB0aGlzLmlzRnJlZVNjcm9sbGluZyA9IC1yZXN0aW5nWCA+IHRoaXMuc2xpZGVzWzBdLnRhcmdldCAmJlxuICAgICAgLXJlc3RpbmdYIDwgdGhpcy5nZXRMYXN0U2xpZGUoKS50YXJnZXQ7XG4gIH0gZWxzZSBpZiAoICF0aGlzLm9wdGlvbnMuZnJlZVNjcm9sbCAmJiBpbmRleCA9PSB0aGlzLnNlbGVjdGVkSW5kZXggKSB7XG4gICAgLy8gYm9vc3Qgc2VsZWN0aW9uIGlmIHNlbGVjdGVkIGluZGV4IGhhcyBub3QgY2hhbmdlZFxuICAgIGluZGV4ICs9IHRoaXMuZHJhZ0VuZEJvb3N0U2VsZWN0KCk7XG4gIH1cbiAgZGVsZXRlIHRoaXMucHJldmlvdXNEcmFnWDtcbiAgLy8gYXBwbHkgc2VsZWN0aW9uXG4gIC8vIFRPRE8gcmVmYWN0b3IgdGhpcywgc2VsZWN0aW5nIGhlcmUgZmVlbHMgd2VpcmRcbiAgLy8gSEFDSywgc2V0IGZsYWcgc28gZHJhZ2dpbmcgc3RheXMgaW4gY29ycmVjdCBkaXJlY3Rpb25cbiAgdGhpcy5pc0RyYWdTZWxlY3QgPSB0aGlzLm9wdGlvbnMud3JhcEFyb3VuZDtcbiAgdGhpcy5zZWxlY3QoIGluZGV4ICk7XG4gIGRlbGV0ZSB0aGlzLmlzRHJhZ1NlbGVjdDtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCAnZHJhZ0VuZCcsIGV2ZW50LCBbIHBvaW50ZXIgXSApO1xufTtcblxucHJvdG8uZHJhZ0VuZFJlc3RpbmdTZWxlY3QgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHJlc3RpbmdYID0gdGhpcy5nZXRSZXN0aW5nUG9zaXRpb24oKTtcbiAgLy8gaG93IGZhciBhd2F5IGZyb20gc2VsZWN0ZWQgc2xpZGVcbiAgdmFyIGRpc3RhbmNlID0gTWF0aC5hYnMoIHRoaXMuZ2V0U2xpZGVEaXN0YW5jZSggLXJlc3RpbmdYLCB0aGlzLnNlbGVjdGVkSW5kZXggKSApO1xuICAvLyBnZXQgY2xvc2V0IHJlc3RpbmcgZ29pbmcgdXAgYW5kIGdvaW5nIGRvd25cbiAgdmFyIHBvc2l0aXZlUmVzdGluZyA9IHRoaXMuX2dldENsb3Nlc3RSZXN0aW5nKCByZXN0aW5nWCwgZGlzdGFuY2UsIDEgKTtcbiAgdmFyIG5lZ2F0aXZlUmVzdGluZyA9IHRoaXMuX2dldENsb3Nlc3RSZXN0aW5nKCByZXN0aW5nWCwgZGlzdGFuY2UsIC0xICk7XG4gIC8vIHVzZSBjbG9zZXIgcmVzdGluZyBmb3Igd3JhcC1hcm91bmRcbiAgdmFyIGluZGV4ID0gcG9zaXRpdmVSZXN0aW5nLmRpc3RhbmNlIDwgbmVnYXRpdmVSZXN0aW5nLmRpc3RhbmNlID9cbiAgICBwb3NpdGl2ZVJlc3RpbmcuaW5kZXggOiBuZWdhdGl2ZVJlc3RpbmcuaW5kZXg7XG4gIHJldHVybiBpbmRleDtcbn07XG5cbi8qKlxuICogZ2l2ZW4gcmVzdGluZyBYIGFuZCBkaXN0YW5jZSB0byBzZWxlY3RlZCBjZWxsXG4gKiBnZXQgdGhlIGRpc3RhbmNlIGFuZCBpbmRleCBvZiB0aGUgY2xvc2VzdCBjZWxsXG4gKiBAcGFyYW0ge051bWJlcn0gcmVzdGluZ1ggLSBlc3RpbWF0ZWQgcG9zdC1mbGljayByZXN0aW5nIHBvc2l0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0gZGlzdGFuY2UgLSBkaXN0YW5jZSB0byBzZWxlY3RlZCBjZWxsXG4gKiBAcGFyYW0ge0ludGVnZXJ9IGluY3JlbWVudCAtICsxIG9yIC0xLCBnb2luZyB1cCBvciBkb3duXG4gKiBAcmV0dXJucyB7T2JqZWN0fSAtIHsgZGlzdGFuY2U6IHtOdW1iZXJ9LCBpbmRleDoge0ludGVnZXJ9IH1cbiAqL1xucHJvdG8uX2dldENsb3Nlc3RSZXN0aW5nID0gZnVuY3Rpb24oIHJlc3RpbmdYLCBkaXN0YW5jZSwgaW5jcmVtZW50ICkge1xuICB2YXIgaW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXg7XG4gIHZhciBtaW5EaXN0YW5jZSA9IEluZmluaXR5O1xuICB2YXIgY29uZGl0aW9uID0gdGhpcy5vcHRpb25zLmNvbnRhaW4gJiYgIXRoaXMub3B0aW9ucy53cmFwQXJvdW5kID9cbiAgICAvLyBpZiBjb250YWluLCBrZWVwIGdvaW5nIGlmIGRpc3RhbmNlIGlzIGVxdWFsIHRvIG1pbkRpc3RhbmNlXG4gICAgZnVuY3Rpb24oIGQsIG1kICkgeyByZXR1cm4gZCA8PSBtZDsgfSA6IGZ1bmN0aW9uKCBkLCBtZCApIHsgcmV0dXJuIGQgPCBtZDsgfTtcbiAgd2hpbGUgKCBjb25kaXRpb24oIGRpc3RhbmNlLCBtaW5EaXN0YW5jZSApICkge1xuICAgIC8vIG1lYXN1cmUgZGlzdGFuY2UgdG8gbmV4dCBjZWxsXG4gICAgaW5kZXggKz0gaW5jcmVtZW50O1xuICAgIG1pbkRpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgZGlzdGFuY2UgPSB0aGlzLmdldFNsaWRlRGlzdGFuY2UoIC1yZXN0aW5nWCwgaW5kZXggKTtcbiAgICBpZiAoIGRpc3RhbmNlID09PSBudWxsICkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGRpc3RhbmNlID0gTWF0aC5hYnMoIGRpc3RhbmNlICk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBkaXN0YW5jZTogbWluRGlzdGFuY2UsXG4gICAgLy8gc2VsZWN0ZWQgd2FzIHByZXZpb3VzIGluZGV4XG4gICAgaW5kZXg6IGluZGV4IC0gaW5jcmVtZW50XG4gIH07XG59O1xuXG4vKipcbiAqIG1lYXN1cmUgZGlzdGFuY2UgYmV0d2VlbiB4IGFuZCBhIHNsaWRlIHRhcmdldFxuICogQHBhcmFtIHtOdW1iZXJ9IHhcbiAqIEBwYXJhbSB7SW50ZWdlcn0gaW5kZXggLSBzbGlkZSBpbmRleFxuICovXG5wcm90by5nZXRTbGlkZURpc3RhbmNlID0gZnVuY3Rpb24oIHgsIGluZGV4ICkge1xuICB2YXIgbGVuID0gdGhpcy5zbGlkZXMubGVuZ3RoO1xuICAvLyB3cmFwIGFyb3VuZCBpZiBhdCBsZWFzdCAyIHNsaWRlc1xuICB2YXIgaXNXcmFwQXJvdW5kID0gdGhpcy5vcHRpb25zLndyYXBBcm91bmQgJiYgbGVuID4gMTtcbiAgdmFyIHNsaWRlSW5kZXggPSBpc1dyYXBBcm91bmQgPyB1dGlscy5tb2R1bG8oIGluZGV4LCBsZW4gKSA6IGluZGV4O1xuICB2YXIgc2xpZGUgPSB0aGlzLnNsaWRlc1sgc2xpZGVJbmRleCBdO1xuICBpZiAoICFzbGlkZSApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICAvLyBhZGQgZGlzdGFuY2UgZm9yIHdyYXAtYXJvdW5kIHNsaWRlc1xuICB2YXIgd3JhcCA9IGlzV3JhcEFyb3VuZCA/IHRoaXMuc2xpZGVhYmxlV2lkdGggKiBNYXRoLmZsb29yKCBpbmRleCAvIGxlbiApIDogMDtcbiAgcmV0dXJuIHggLSAoIHNsaWRlLnRhcmdldCArIHdyYXAgKTtcbn07XG5cbnByb3RvLmRyYWdFbmRCb29zdFNlbGVjdCA9IGZ1bmN0aW9uKCkge1xuICAvLyBkbyBub3QgYm9vc3QgaWYgbm8gcHJldmlvdXNEcmFnWCBvciBkcmFnTW92ZVRpbWVcbiAgaWYgKCB0aGlzLnByZXZpb3VzRHJhZ1ggPT09IHVuZGVmaW5lZCB8fCAhdGhpcy5kcmFnTW92ZVRpbWUgfHxcbiAgICAvLyBvciBpZiBkcmFnIHdhcyBoZWxkIGZvciAxMDAgbXNcbiAgICBuZXcgRGF0ZSgpIC0gdGhpcy5kcmFnTW92ZVRpbWUgPiAxMDAgKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICB2YXIgZGlzdGFuY2UgPSB0aGlzLmdldFNsaWRlRGlzdGFuY2UoIC10aGlzLmRyYWdYLCB0aGlzLnNlbGVjdGVkSW5kZXggKTtcbiAgdmFyIGRlbHRhID0gdGhpcy5wcmV2aW91c0RyYWdYIC0gdGhpcy5kcmFnWDtcbiAgaWYgKCBkaXN0YW5jZSA+IDAgJiYgZGVsdGEgPiAwICkge1xuICAgIC8vIGJvb3N0IHRvIG5leHQgaWYgbW92aW5nIHRvd2FyZHMgdGhlIHJpZ2h0LCBhbmQgcG9zaXRpdmUgdmVsb2NpdHlcbiAgICByZXR1cm4gMTtcbiAgfSBlbHNlIGlmICggZGlzdGFuY2UgPCAwICYmIGRlbHRhIDwgMCApIHtcbiAgICAvLyBib29zdCB0byBwcmV2aW91cyBpZiBtb3ZpbmcgdG93YXJkcyB0aGUgbGVmdCwgYW5kIG5lZ2F0aXZlIHZlbG9jaXR5XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIHJldHVybiAwO1xufTtcblxuLy8gLS0tLS0gc3RhdGljQ2xpY2sgLS0tLS0gLy9cblxucHJvdG8uc3RhdGljQ2xpY2sgPSBmdW5jdGlvbiggZXZlbnQsIHBvaW50ZXIgKSB7XG4gIC8vIGdldCBjbGlja2VkQ2VsbCwgaWYgY2VsbCB3YXMgY2xpY2tlZFxuICB2YXIgY2xpY2tlZENlbGwgPSB0aGlzLmdldFBhcmVudENlbGwoIGV2ZW50LnRhcmdldCApO1xuICB2YXIgY2VsbEVsZW0gPSBjbGlja2VkQ2VsbCAmJiBjbGlja2VkQ2VsbC5lbGVtZW50O1xuICB2YXIgY2VsbEluZGV4ID0gY2xpY2tlZENlbGwgJiYgdGhpcy5jZWxscy5pbmRleE9mKCBjbGlja2VkQ2VsbCApO1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoICdzdGF0aWNDbGljaycsIGV2ZW50LCBbIHBvaW50ZXIsIGNlbGxFbGVtLCBjZWxsSW5kZXggXSApO1xufTtcblxuLy8gLS0tLS0gc2Nyb2xsIC0tLS0tIC8vXG5cbnByb3RvLm9uc2Nyb2xsID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzY3JvbGwgPSBnZXRTY3JvbGxQb3NpdGlvbigpO1xuICB2YXIgc2Nyb2xsTW92ZVggPSB0aGlzLnBvaW50ZXJEb3duU2Nyb2xsLnggLSBzY3JvbGwueDtcbiAgdmFyIHNjcm9sbE1vdmVZID0gdGhpcy5wb2ludGVyRG93blNjcm9sbC55IC0gc2Nyb2xsLnk7XG4gIC8vIGNhbmNlbCBjbGljay90YXAgaWYgc2Nyb2xsIGlzIHRvbyBtdWNoXG4gIGlmICggTWF0aC5hYnMoIHNjcm9sbE1vdmVYICkgPiAzIHx8IE1hdGguYWJzKCBzY3JvbGxNb3ZlWSApID4gMyApIHtcbiAgICB0aGlzLl9wb2ludGVyRG9uZSgpO1xuICB9XG59O1xuXG4vLyAtLS0tLSB1dGlscyAtLS0tLSAvL1xuXG5mdW5jdGlvbiBnZXRTY3JvbGxQb3NpdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICB4OiB3aW5kb3cucGFnZVhPZmZzZXQsXG4gICAgeTogd2luZG93LnBhZ2VZT2Zmc2V0XG4gIH07XG59XG5cbi8vIC0tLS0tICAtLS0tLSAvL1xuXG5yZXR1cm4gRmxpY2tpdHk7XG5cbn0pKTtcbiIsIi8vIEZsaWNraXR5IG1haW5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAnZXYtZW1pdHRlci9ldi1lbWl0dGVyJyxcbiAgICAgICdnZXQtc2l6ZS9nZXQtc2l6ZScsXG4gICAgICAnZml6enktdWktdXRpbHMvdXRpbHMnLFxuICAgICAgJy4vY2VsbCcsXG4gICAgICAnLi9zbGlkZScsXG4gICAgICAnLi9hbmltYXRlJ1xuICAgIF0sIGZ1bmN0aW9uKCBFdkVtaXR0ZXIsIGdldFNpemUsIHV0aWxzLCBDZWxsLCBTbGlkZSwgYW5pbWF0ZVByb3RvdHlwZSApIHtcbiAgICAgIHJldHVybiBmYWN0b3J5KCB3aW5kb3csIEV2RW1pdHRlciwgZ2V0U2l6ZSwgdXRpbHMsIENlbGwsIFNsaWRlLCBhbmltYXRlUHJvdG90eXBlICk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICByZXF1aXJlKCdldi1lbWl0dGVyJyksXG4gICAgICByZXF1aXJlKCdnZXQtc2l6ZScpLFxuICAgICAgcmVxdWlyZSgnZml6enktdWktdXRpbHMnKSxcbiAgICAgIHJlcXVpcmUoJy4vY2VsbCcpLFxuICAgICAgcmVxdWlyZSgnLi9zbGlkZScpLFxuICAgICAgcmVxdWlyZSgnLi9hbmltYXRlJylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgdmFyIF9GbGlja2l0eSA9IHdpbmRvdy5GbGlja2l0eTtcblxuICAgIHdpbmRvdy5GbGlja2l0eSA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICB3aW5kb3cuRXZFbWl0dGVyLFxuICAgICAgd2luZG93LmdldFNpemUsXG4gICAgICB3aW5kb3cuZml6enlVSVV0aWxzLFxuICAgICAgX0ZsaWNraXR5LkNlbGwsXG4gICAgICBfRmxpY2tpdHkuU2xpZGUsXG4gICAgICBfRmxpY2tpdHkuYW5pbWF0ZVByb3RvdHlwZVxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIEV2RW1pdHRlciwgZ2V0U2l6ZSxcbiAgdXRpbHMsIENlbGwsIFNsaWRlLCBhbmltYXRlUHJvdG90eXBlICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbi8vIHZhcnNcbnZhciBqUXVlcnkgPSB3aW5kb3cualF1ZXJ5O1xudmFyIGdldENvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZTtcbnZhciBjb25zb2xlID0gd2luZG93LmNvbnNvbGU7XG5cbmZ1bmN0aW9uIG1vdmVFbGVtZW50cyggZWxlbXMsIHRvRWxlbSApIHtcbiAgZWxlbXMgPSB1dGlscy5tYWtlQXJyYXkoIGVsZW1zICk7XG4gIHdoaWxlICggZWxlbXMubGVuZ3RoICkge1xuICAgIHRvRWxlbS5hcHBlbmRDaGlsZCggZWxlbXMuc2hpZnQoKSApO1xuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEZsaWNraXR5IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8vIGdsb2JhbGx5IHVuaXF1ZSBpZGVudGlmaWVyc1xudmFyIEdVSUQgPSAwO1xuLy8gaW50ZXJuYWwgc3RvcmUgb2YgYWxsIEZsaWNraXR5IGludGFuY2VzXG52YXIgaW5zdGFuY2VzID0ge307XG5cbmZ1bmN0aW9uIEZsaWNraXR5KCBlbGVtZW50LCBvcHRpb25zICkge1xuICB2YXIgcXVlcnlFbGVtZW50ID0gdXRpbHMuZ2V0UXVlcnlFbGVtZW50KCBlbGVtZW50ICk7XG4gIGlmICggIXF1ZXJ5RWxlbWVudCApIHtcbiAgICBpZiAoIGNvbnNvbGUgKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCAnQmFkIGVsZW1lbnQgZm9yIEZsaWNraXR5OiAnICsgKCBxdWVyeUVsZW1lbnQgfHwgZWxlbWVudCApICk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLmVsZW1lbnQgPSBxdWVyeUVsZW1lbnQ7XG4gIC8vIGRvIG5vdCBpbml0aWFsaXplIHR3aWNlIG9uIHNhbWUgZWxlbWVudFxuICBpZiAoIHRoaXMuZWxlbWVudC5mbGlja2l0eUdVSUQgKSB7XG4gICAgdmFyIGluc3RhbmNlID0gaW5zdGFuY2VzWyB0aGlzLmVsZW1lbnQuZmxpY2tpdHlHVUlEIF07XG4gICAgaW5zdGFuY2Uub3B0aW9uKCBvcHRpb25zICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLy8gYWRkIGpRdWVyeVxuICBpZiAoIGpRdWVyeSApIHtcbiAgICB0aGlzLiRlbGVtZW50ID0galF1ZXJ5KCB0aGlzLmVsZW1lbnQgKTtcbiAgfVxuICAvLyBvcHRpb25zXG4gIHRoaXMub3B0aW9ucyA9IHV0aWxzLmV4dGVuZCgge30sIHRoaXMuY29uc3RydWN0b3IuZGVmYXVsdHMgKTtcbiAgdGhpcy5vcHRpb24oIG9wdGlvbnMgKTtcblxuICAvLyBraWNrIHRoaW5ncyBvZmZcbiAgdGhpcy5fY3JlYXRlKCk7XG59XG5cbkZsaWNraXR5LmRlZmF1bHRzID0ge1xuICBhY2Nlc3NpYmlsaXR5OiB0cnVlLFxuICAvLyBhZGFwdGl2ZUhlaWdodDogZmFsc2UsXG4gIGNlbGxBbGlnbjogJ2NlbnRlcicsXG4gIC8vIGNlbGxTZWxlY3RvcjogdW5kZWZpbmVkLFxuICAvLyBjb250YWluOiBmYWxzZSxcbiAgZnJlZVNjcm9sbEZyaWN0aW9uOiAwLjA3NSwgLy8gZnJpY3Rpb24gd2hlbiBmcmVlLXNjcm9sbGluZ1xuICBmcmljdGlvbjogMC4yOCwgLy8gZnJpY3Rpb24gd2hlbiBzZWxlY3RpbmdcbiAgbmFtZXNwYWNlSlF1ZXJ5RXZlbnRzOiB0cnVlLFxuICAvLyBpbml0aWFsSW5kZXg6IDAsXG4gIHBlcmNlbnRQb3NpdGlvbjogdHJ1ZSxcbiAgcmVzaXplOiB0cnVlLFxuICBzZWxlY3RlZEF0dHJhY3Rpb246IDAuMDI1LFxuICBzZXRHYWxsZXJ5U2l6ZTogdHJ1ZVxuICAvLyB3YXRjaENTUzogZmFsc2UsXG4gIC8vIHdyYXBBcm91bmQ6IGZhbHNlXG59O1xuXG4vLyBoYXNoIG9mIG1ldGhvZHMgdHJpZ2dlcmVkIG9uIF9jcmVhdGUoKVxuRmxpY2tpdHkuY3JlYXRlTWV0aG9kcyA9IFtdO1xuXG52YXIgcHJvdG8gPSBGbGlja2l0eS5wcm90b3R5cGU7XG4vLyBpbmhlcml0IEV2ZW50RW1pdHRlclxudXRpbHMuZXh0ZW5kKCBwcm90bywgRXZFbWl0dGVyLnByb3RvdHlwZSApO1xuXG5wcm90by5fY3JlYXRlID0gZnVuY3Rpb24oKSB7XG4gIC8vIGFkZCBpZCBmb3IgRmxpY2tpdHkuZGF0YVxuICB2YXIgaWQgPSB0aGlzLmd1aWQgPSArK0dVSUQ7XG4gIHRoaXMuZWxlbWVudC5mbGlja2l0eUdVSUQgPSBpZDsgLy8gZXhwYW5kb1xuICBpbnN0YW5jZXNbIGlkIF0gPSB0aGlzOyAvLyBhc3NvY2lhdGUgdmlhIGlkXG4gIC8vIGluaXRpYWwgcHJvcGVydGllc1xuICB0aGlzLnNlbGVjdGVkSW5kZXggPSAwO1xuICAvLyBob3cgbWFueSBmcmFtZXMgc2xpZGVyIGhhcyBiZWVuIGluIHNhbWUgcG9zaXRpb25cbiAgdGhpcy5yZXN0aW5nRnJhbWVzID0gMDtcbiAgLy8gaW5pdGlhbCBwaHlzaWNzIHByb3BlcnRpZXNcbiAgdGhpcy54ID0gMDtcbiAgdGhpcy52ZWxvY2l0eSA9IDA7XG4gIHRoaXMub3JpZ2luU2lkZSA9IHRoaXMub3B0aW9ucy5yaWdodFRvTGVmdCA/ICdyaWdodCcgOiAnbGVmdCc7XG4gIC8vIGNyZWF0ZSB2aWV3cG9ydCAmIHNsaWRlclxuICB0aGlzLnZpZXdwb3J0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRoaXMudmlld3BvcnQuY2xhc3NOYW1lID0gJ2ZsaWNraXR5LXZpZXdwb3J0JztcbiAgdGhpcy5fY3JlYXRlU2xpZGVyKCk7XG5cbiAgaWYgKCB0aGlzLm9wdGlvbnMucmVzaXplIHx8IHRoaXMub3B0aW9ucy53YXRjaENTUyApIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsIHRoaXMgKTtcbiAgfVxuXG4gIC8vIGFkZCBsaXN0ZW5lcnMgZnJvbSBvbiBvcHRpb25cbiAgZm9yICggdmFyIGV2ZW50TmFtZSBpbiB0aGlzLm9wdGlvbnMub24gKSB7XG4gICAgdmFyIGxpc3RlbmVyID0gdGhpcy5vcHRpb25zLm9uWyBldmVudE5hbWUgXTtcbiAgICB0aGlzLm9uKCBldmVudE5hbWUsIGxpc3RlbmVyICk7XG4gIH1cblxuICBGbGlja2l0eS5jcmVhdGVNZXRob2RzLmZvckVhY2goIGZ1bmN0aW9uKCBtZXRob2QgKSB7XG4gICAgdGhpc1sgbWV0aG9kIF0oKTtcbiAgfSwgdGhpcyApO1xuXG4gIGlmICggdGhpcy5vcHRpb25zLndhdGNoQ1NTICkge1xuICAgIHRoaXMud2F0Y2hDU1MoKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmFjdGl2YXRlKCk7XG4gIH1cblxufTtcblxuLyoqXG4gKiBzZXQgb3B0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAqL1xucHJvdG8ub3B0aW9uID0gZnVuY3Rpb24oIG9wdHMgKSB7XG4gIHV0aWxzLmV4dGVuZCggdGhpcy5vcHRpb25zLCBvcHRzICk7XG59O1xuXG5wcm90by5hY3RpdmF0ZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIHRoaXMuaXNBY3RpdmUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZmxpY2tpdHktZW5hYmxlZCcpO1xuICBpZiAoIHRoaXMub3B0aW9ucy5yaWdodFRvTGVmdCApIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZmxpY2tpdHktcnRsJyk7XG4gIH1cblxuICB0aGlzLmdldFNpemUoKTtcbiAgLy8gbW92ZSBpbml0aWFsIGNlbGwgZWxlbWVudHMgc28gdGhleSBjYW4gYmUgbG9hZGVkIGFzIGNlbGxzXG4gIHZhciBjZWxsRWxlbXMgPSB0aGlzLl9maWx0ZXJGaW5kQ2VsbEVsZW1lbnRzKCB0aGlzLmVsZW1lbnQuY2hpbGRyZW4gKTtcbiAgbW92ZUVsZW1lbnRzKCBjZWxsRWxlbXMsIHRoaXMuc2xpZGVyICk7XG4gIHRoaXMudmlld3BvcnQuYXBwZW5kQ2hpbGQoIHRoaXMuc2xpZGVyICk7XG4gIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCggdGhpcy52aWV3cG9ydCApO1xuICAvLyBnZXQgY2VsbHMgZnJvbSBjaGlsZHJlblxuICB0aGlzLnJlbG9hZENlbGxzKCk7XG5cbiAgaWYgKCB0aGlzLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSApIHtcbiAgICAvLyBhbGxvdyBlbGVtZW50IHRvIGZvY3VzYWJsZVxuICAgIHRoaXMuZWxlbWVudC50YWJJbmRleCA9IDA7XG4gICAgLy8gbGlzdGVuIGZvciBrZXkgcHJlc3Nlc1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIHRoaXMgKTtcbiAgfVxuXG4gIHRoaXMuZW1pdEV2ZW50KCdhY3RpdmF0ZScpO1xuICB0aGlzLnNlbGVjdEluaXRpYWxJbmRleCgpO1xuICAvLyBmbGFnIGZvciBpbml0aWFsIGFjdGl2YXRpb24sIGZvciB1c2luZyBpbml0aWFsSW5kZXhcbiAgdGhpcy5pc0luaXRBY3RpdmF0ZWQgPSB0cnVlO1xuICAvLyByZWFkeSBldmVudC4gIzQ5M1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoJ3JlYWR5Jyk7XG59O1xuXG4vLyBzbGlkZXIgcG9zaXRpb25zIHRoZSBjZWxsc1xucHJvdG8uX2NyZWF0ZVNsaWRlciA9IGZ1bmN0aW9uKCkge1xuICAvLyBzbGlkZXIgZWxlbWVudCBkb2VzIGFsbCB0aGUgcG9zaXRpb25pbmdcbiAgdmFyIHNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzbGlkZXIuY2xhc3NOYW1lID0gJ2ZsaWNraXR5LXNsaWRlcic7XG4gIHNsaWRlci5zdHlsZVsgdGhpcy5vcmlnaW5TaWRlIF0gPSAwO1xuICB0aGlzLnNsaWRlciA9IHNsaWRlcjtcbn07XG5cbnByb3RvLl9maWx0ZXJGaW5kQ2VsbEVsZW1lbnRzID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICByZXR1cm4gdXRpbHMuZmlsdGVyRmluZEVsZW1lbnRzKCBlbGVtcywgdGhpcy5vcHRpb25zLmNlbGxTZWxlY3RvciApO1xufTtcblxuLy8gZ29lcyB0aHJvdWdoIGFsbCBjaGlsZHJlblxucHJvdG8ucmVsb2FkQ2VsbHMgPSBmdW5jdGlvbigpIHtcbiAgLy8gY29sbGVjdGlvbiBvZiBpdGVtIGVsZW1lbnRzXG4gIHRoaXMuY2VsbHMgPSB0aGlzLl9tYWtlQ2VsbHMoIHRoaXMuc2xpZGVyLmNoaWxkcmVuICk7XG4gIHRoaXMucG9zaXRpb25DZWxscygpO1xuICB0aGlzLl9nZXRXcmFwU2hpZnRDZWxscygpO1xuICB0aGlzLnNldEdhbGxlcnlTaXplKCk7XG59O1xuXG4vKipcbiAqIHR1cm4gZWxlbWVudHMgaW50byBGbGlja2l0eS5DZWxsc1xuICogQHBhcmFtIHtBcnJheSBvciBOb2RlTGlzdCBvciBIVE1MRWxlbWVudH0gZWxlbXNcbiAqIEByZXR1cm5zIHtBcnJheX0gaXRlbXMgLSBjb2xsZWN0aW9uIG9mIG5ldyBGbGlja2l0eSBDZWxsc1xuICovXG5wcm90by5fbWFrZUNlbGxzID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICB2YXIgY2VsbEVsZW1zID0gdGhpcy5fZmlsdGVyRmluZENlbGxFbGVtZW50cyggZWxlbXMgKTtcblxuICAvLyBjcmVhdGUgbmV3IEZsaWNraXR5IGZvciBjb2xsZWN0aW9uXG4gIHZhciBjZWxscyA9IGNlbGxFbGVtcy5tYXAoIGZ1bmN0aW9uKCBjZWxsRWxlbSApIHtcbiAgICByZXR1cm4gbmV3IENlbGwoIGNlbGxFbGVtLCB0aGlzICk7XG4gIH0sIHRoaXMgKTtcblxuICByZXR1cm4gY2VsbHM7XG59O1xuXG5wcm90by5nZXRMYXN0Q2VsbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5jZWxsc1sgdGhpcy5jZWxscy5sZW5ndGggLSAxIF07XG59O1xuXG5wcm90by5nZXRMYXN0U2xpZGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuc2xpZGVzWyB0aGlzLnNsaWRlcy5sZW5ndGggLSAxIF07XG59O1xuXG4vLyBwb3NpdGlvbnMgYWxsIGNlbGxzXG5wcm90by5wb3NpdGlvbkNlbGxzID0gZnVuY3Rpb24oKSB7XG4gIC8vIHNpemUgYWxsIGNlbGxzXG4gIHRoaXMuX3NpemVDZWxscyggdGhpcy5jZWxscyApO1xuICAvLyBwb3NpdGlvbiBhbGwgY2VsbHNcbiAgdGhpcy5fcG9zaXRpb25DZWxscyggMCApO1xufTtcblxuLyoqXG4gKiBwb3NpdGlvbiBjZXJ0YWluIGNlbGxzXG4gKiBAcGFyYW0ge0ludGVnZXJ9IGluZGV4IC0gd2hpY2ggY2VsbCB0byBzdGFydCB3aXRoXG4gKi9cbnByb3RvLl9wb3NpdGlvbkNlbGxzID0gZnVuY3Rpb24oIGluZGV4ICkge1xuICBpbmRleCA9IGluZGV4IHx8IDA7XG4gIC8vIGFsc28gbWVhc3VyZSBtYXhDZWxsSGVpZ2h0XG4gIC8vIHN0YXJ0IDAgaWYgcG9zaXRpb25pbmcgYWxsIGNlbGxzXG4gIHRoaXMubWF4Q2VsbEhlaWdodCA9IGluZGV4ID8gdGhpcy5tYXhDZWxsSGVpZ2h0IHx8IDAgOiAwO1xuICB2YXIgY2VsbFggPSAwO1xuICAvLyBnZXQgY2VsbFhcbiAgaWYgKCBpbmRleCA+IDAgKSB7XG4gICAgdmFyIHN0YXJ0Q2VsbCA9IHRoaXMuY2VsbHNbIGluZGV4IC0gMSBdO1xuICAgIGNlbGxYID0gc3RhcnRDZWxsLnggKyBzdGFydENlbGwuc2l6ZS5vdXRlcldpZHRoO1xuICB9XG4gIHZhciBsZW4gPSB0aGlzLmNlbGxzLmxlbmd0aDtcbiAgZm9yICggdmFyIGk9aW5kZXg7IGkgPCBsZW47IGkrKyApIHtcbiAgICB2YXIgY2VsbCA9IHRoaXMuY2VsbHNbaV07XG4gICAgY2VsbC5zZXRQb3NpdGlvbiggY2VsbFggKTtcbiAgICBjZWxsWCArPSBjZWxsLnNpemUub3V0ZXJXaWR0aDtcbiAgICB0aGlzLm1heENlbGxIZWlnaHQgPSBNYXRoLm1heCggY2VsbC5zaXplLm91dGVySGVpZ2h0LCB0aGlzLm1heENlbGxIZWlnaHQgKTtcbiAgfVxuICAvLyBrZWVwIHRyYWNrIG9mIGNlbGxYIGZvciB3cmFwLWFyb3VuZFxuICB0aGlzLnNsaWRlYWJsZVdpZHRoID0gY2VsbFg7XG4gIC8vIHNsaWRlc1xuICB0aGlzLnVwZGF0ZVNsaWRlcygpO1xuICAvLyBjb250YWluIHNsaWRlcyB0YXJnZXRcbiAgdGhpcy5fY29udGFpblNsaWRlcygpO1xuICAvLyB1cGRhdGUgc2xpZGVzV2lkdGhcbiAgdGhpcy5zbGlkZXNXaWR0aCA9IGxlbiA/IHRoaXMuZ2V0TGFzdFNsaWRlKCkudGFyZ2V0IC0gdGhpcy5zbGlkZXNbMF0udGFyZ2V0IDogMDtcbn07XG5cbi8qKlxuICogY2VsbC5nZXRTaXplKCkgb24gbXVsdGlwbGUgY2VsbHNcbiAqIEBwYXJhbSB7QXJyYXl9IGNlbGxzXG4gKi9cbnByb3RvLl9zaXplQ2VsbHMgPSBmdW5jdGlvbiggY2VsbHMgKSB7XG4gIGNlbGxzLmZvckVhY2goIGZ1bmN0aW9uKCBjZWxsICkge1xuICAgIGNlbGwuZ2V0U2l6ZSgpO1xuICB9KTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5wcm90by51cGRhdGVTbGlkZXMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zbGlkZXMgPSBbXTtcbiAgaWYgKCAhdGhpcy5jZWxscy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHNsaWRlID0gbmV3IFNsaWRlKCB0aGlzICk7XG4gIHRoaXMuc2xpZGVzLnB1c2goIHNsaWRlICk7XG4gIHZhciBpc09yaWdpbkxlZnQgPSB0aGlzLm9yaWdpblNpZGUgPT0gJ2xlZnQnO1xuICB2YXIgbmV4dE1hcmdpbiA9IGlzT3JpZ2luTGVmdCA/ICdtYXJnaW5SaWdodCcgOiAnbWFyZ2luTGVmdCc7XG5cbiAgdmFyIGNhbkNlbGxGaXQgPSB0aGlzLl9nZXRDYW5DZWxsRml0KCk7XG5cbiAgdGhpcy5jZWxscy5mb3JFYWNoKCBmdW5jdGlvbiggY2VsbCwgaSApIHtcbiAgICAvLyBqdXN0IGFkZCBjZWxsIGlmIGZpcnN0IGNlbGwgaW4gc2xpZGVcbiAgICBpZiAoICFzbGlkZS5jZWxscy5sZW5ndGggKSB7XG4gICAgICBzbGlkZS5hZGRDZWxsKCBjZWxsICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHNsaWRlV2lkdGggPSAoIHNsaWRlLm91dGVyV2lkdGggLSBzbGlkZS5maXJzdE1hcmdpbiApICtcbiAgICAgICggY2VsbC5zaXplLm91dGVyV2lkdGggLSBjZWxsLnNpemVbIG5leHRNYXJnaW4gXSApO1xuXG4gICAgaWYgKCBjYW5DZWxsRml0LmNhbGwoIHRoaXMsIGksIHNsaWRlV2lkdGggKSApIHtcbiAgICAgIHNsaWRlLmFkZENlbGwoIGNlbGwgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZG9lc24ndCBmaXQsIG5ldyBzbGlkZVxuICAgICAgc2xpZGUudXBkYXRlVGFyZ2V0KCk7XG5cbiAgICAgIHNsaWRlID0gbmV3IFNsaWRlKCB0aGlzICk7XG4gICAgICB0aGlzLnNsaWRlcy5wdXNoKCBzbGlkZSApO1xuICAgICAgc2xpZGUuYWRkQ2VsbCggY2VsbCApO1xuICAgIH1cbiAgfSwgdGhpcyApO1xuICAvLyBsYXN0IHNsaWRlXG4gIHNsaWRlLnVwZGF0ZVRhcmdldCgpO1xuICAvLyB1cGRhdGUgLnNlbGVjdGVkU2xpZGVcbiAgdGhpcy51cGRhdGVTZWxlY3RlZFNsaWRlKCk7XG59O1xuXG5wcm90by5fZ2V0Q2FuQ2VsbEZpdCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZ3JvdXBDZWxscyA9IHRoaXMub3B0aW9ucy5ncm91cENlbGxzO1xuICBpZiAoICFncm91cENlbGxzICkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgZ3JvdXBDZWxscyA9PSAnbnVtYmVyJyApIHtcbiAgICAvLyBncm91cCBieSBudW1iZXIuIDMgLT4gWzAsMSwyXSwgWzMsNCw1XSwgLi4uXG4gICAgdmFyIG51bWJlciA9IHBhcnNlSW50KCBncm91cENlbGxzLCAxMCApO1xuICAgIHJldHVybiBmdW5jdGlvbiggaSApIHtcbiAgICAgIHJldHVybiAoIGkgJSBudW1iZXIgKSAhPT0gMDtcbiAgICB9O1xuICB9XG4gIC8vIGRlZmF1bHQsIGdyb3VwIGJ5IHdpZHRoIG9mIHNsaWRlXG4gIC8vIHBhcnNlICc3NSVcbiAgdmFyIHBlcmNlbnRNYXRjaCA9IHR5cGVvZiBncm91cENlbGxzID09ICdzdHJpbmcnICYmXG4gICAgZ3JvdXBDZWxscy5tYXRjaCgvXihcXGQrKSUkLyk7XG4gIHZhciBwZXJjZW50ID0gcGVyY2VudE1hdGNoID8gcGFyc2VJbnQoIHBlcmNlbnRNYXRjaFsxXSwgMTAgKSAvIDEwMCA6IDE7XG4gIHJldHVybiBmdW5jdGlvbiggaSwgc2xpZGVXaWR0aCApIHtcbiAgICByZXR1cm4gc2xpZGVXaWR0aCA8PSAoIHRoaXMuc2l6ZS5pbm5lcldpZHRoICsgMSApICogcGVyY2VudDtcbiAgfTtcbn07XG5cbi8vIGFsaWFzIF9pbml0IGZvciBqUXVlcnkgcGx1Z2luIC5mbGlja2l0eSgpXG5wcm90by5faW5pdCA9XG5wcm90by5yZXBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucG9zaXRpb25DZWxscygpO1xuICB0aGlzLnBvc2l0aW9uU2xpZGVyQXRTZWxlY3RlZCgpO1xufTtcblxucHJvdG8uZ2V0U2l6ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNpemUgPSBnZXRTaXplKCB0aGlzLmVsZW1lbnQgKTtcbiAgdGhpcy5zZXRDZWxsQWxpZ24oKTtcbiAgdGhpcy5jdXJzb3JQb3NpdGlvbiA9IHRoaXMuc2l6ZS5pbm5lcldpZHRoICogdGhpcy5jZWxsQWxpZ247XG59O1xuXG52YXIgY2VsbEFsaWduU2hvcnRoYW5kcyA9IHtcbiAgLy8gY2VsbCBhbGlnbiwgdGhlbiBiYXNlZCBvbiBvcmlnaW4gc2lkZVxuICBjZW50ZXI6IHtcbiAgICBsZWZ0OiAwLjUsXG4gICAgcmlnaHQ6IDAuNVxuICB9LFxuICBsZWZ0OiB7XG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMVxuICB9LFxuICByaWdodDoge1xuICAgIHJpZ2h0OiAwLFxuICAgIGxlZnQ6IDFcbiAgfVxufTtcblxucHJvdG8uc2V0Q2VsbEFsaWduID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzaG9ydGhhbmQgPSBjZWxsQWxpZ25TaG9ydGhhbmRzWyB0aGlzLm9wdGlvbnMuY2VsbEFsaWduIF07XG4gIHRoaXMuY2VsbEFsaWduID0gc2hvcnRoYW5kID8gc2hvcnRoYW5kWyB0aGlzLm9yaWdpblNpZGUgXSA6IHRoaXMub3B0aW9ucy5jZWxsQWxpZ247XG59O1xuXG5wcm90by5zZXRHYWxsZXJ5U2l6ZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIHRoaXMub3B0aW9ucy5zZXRHYWxsZXJ5U2l6ZSApIHtcbiAgICB2YXIgaGVpZ2h0ID0gdGhpcy5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0ICYmIHRoaXMuc2VsZWN0ZWRTbGlkZSA/XG4gICAgICB0aGlzLnNlbGVjdGVkU2xpZGUuaGVpZ2h0IDogdGhpcy5tYXhDZWxsSGVpZ2h0O1xuICAgIHRoaXMudmlld3BvcnQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcbiAgfVxufTtcblxucHJvdG8uX2dldFdyYXBTaGlmdENlbGxzID0gZnVuY3Rpb24oKSB7XG4gIC8vIG9ubHkgZm9yIHdyYXAtYXJvdW5kXG4gIGlmICggIXRoaXMub3B0aW9ucy53cmFwQXJvdW5kICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyB1bnNoaWZ0IHByZXZpb3VzIGNlbGxzXG4gIHRoaXMuX3Vuc2hpZnRDZWxscyggdGhpcy5iZWZvcmVTaGlmdENlbGxzICk7XG4gIHRoaXMuX3Vuc2hpZnRDZWxscyggdGhpcy5hZnRlclNoaWZ0Q2VsbHMgKTtcbiAgLy8gZ2V0IGJlZm9yZSBjZWxsc1xuICAvLyBpbml0aWFsIGdhcFxuICB2YXIgZ2FwWCA9IHRoaXMuY3Vyc29yUG9zaXRpb247XG4gIHZhciBjZWxsSW5kZXggPSB0aGlzLmNlbGxzLmxlbmd0aCAtIDE7XG4gIHRoaXMuYmVmb3JlU2hpZnRDZWxscyA9IHRoaXMuX2dldEdhcENlbGxzKCBnYXBYLCBjZWxsSW5kZXgsIC0xICk7XG4gIC8vIGdldCBhZnRlciBjZWxsc1xuICAvLyBlbmRpbmcgZ2FwIGJldHdlZW4gbGFzdCBjZWxsIGFuZCBlbmQgb2YgZ2FsbGVyeSB2aWV3cG9ydFxuICBnYXBYID0gdGhpcy5zaXplLmlubmVyV2lkdGggLSB0aGlzLmN1cnNvclBvc2l0aW9uO1xuICAvLyBzdGFydCBjbG9uaW5nIGF0IGZpcnN0IGNlbGwsIHdvcmtpbmcgZm9yd2FyZHNcbiAgdGhpcy5hZnRlclNoaWZ0Q2VsbHMgPSB0aGlzLl9nZXRHYXBDZWxscyggZ2FwWCwgMCwgMSApO1xufTtcblxucHJvdG8uX2dldEdhcENlbGxzID0gZnVuY3Rpb24oIGdhcFgsIGNlbGxJbmRleCwgaW5jcmVtZW50ICkge1xuICAvLyBrZWVwIGFkZGluZyBjZWxscyB1bnRpbCB0aGUgY292ZXIgdGhlIGluaXRpYWwgZ2FwXG4gIHZhciBjZWxscyA9IFtdO1xuICB3aGlsZSAoIGdhcFggPiAwICkge1xuICAgIHZhciBjZWxsID0gdGhpcy5jZWxsc1sgY2VsbEluZGV4IF07XG4gICAgaWYgKCAhY2VsbCApIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjZWxscy5wdXNoKCBjZWxsICk7XG4gICAgY2VsbEluZGV4ICs9IGluY3JlbWVudDtcbiAgICBnYXBYIC09IGNlbGwuc2l6ZS5vdXRlcldpZHRoO1xuICB9XG4gIHJldHVybiBjZWxscztcbn07XG5cbi8vIC0tLS0tIGNvbnRhaW4gLS0tLS0gLy9cblxuLy8gY29udGFpbiBjZWxsIHRhcmdldHMgc28gbm8gZXhjZXNzIHNsaWRpbmdcbnByb3RvLl9jb250YWluU2xpZGVzID0gZnVuY3Rpb24oKSB7XG4gIGlmICggIXRoaXMub3B0aW9ucy5jb250YWluIHx8IHRoaXMub3B0aW9ucy53cmFwQXJvdW5kIHx8ICF0aGlzLmNlbGxzLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIGlzUmlnaHRUb0xlZnQgPSB0aGlzLm9wdGlvbnMucmlnaHRUb0xlZnQ7XG4gIHZhciBiZWdpbk1hcmdpbiA9IGlzUmlnaHRUb0xlZnQgPyAnbWFyZ2luUmlnaHQnIDogJ21hcmdpbkxlZnQnO1xuICB2YXIgZW5kTWFyZ2luID0gaXNSaWdodFRvTGVmdCA/ICdtYXJnaW5MZWZ0JyA6ICdtYXJnaW5SaWdodCc7XG4gIHZhciBjb250ZW50V2lkdGggPSB0aGlzLnNsaWRlYWJsZVdpZHRoIC0gdGhpcy5nZXRMYXN0Q2VsbCgpLnNpemVbIGVuZE1hcmdpbiBdO1xuICAvLyBjb250ZW50IGlzIGxlc3MgdGhhbiBnYWxsZXJ5IHNpemVcbiAgdmFyIGlzQ29udGVudFNtYWxsZXIgPSBjb250ZW50V2lkdGggPCB0aGlzLnNpemUuaW5uZXJXaWR0aDtcbiAgLy8gYm91bmRzXG4gIHZhciBiZWdpbkJvdW5kID0gdGhpcy5jdXJzb3JQb3NpdGlvbiArIHRoaXMuY2VsbHNbMF0uc2l6ZVsgYmVnaW5NYXJnaW4gXTtcbiAgdmFyIGVuZEJvdW5kID0gY29udGVudFdpZHRoIC0gdGhpcy5zaXplLmlubmVyV2lkdGggKiAoIDEgLSB0aGlzLmNlbGxBbGlnbiApO1xuICAvLyBjb250YWluIGVhY2ggY2VsbCB0YXJnZXRcbiAgdGhpcy5zbGlkZXMuZm9yRWFjaCggZnVuY3Rpb24oIHNsaWRlICkge1xuICAgIGlmICggaXNDb250ZW50U21hbGxlciApIHtcbiAgICAgIC8vIGFsbCBjZWxscyBmaXQgaW5zaWRlIGdhbGxlcnlcbiAgICAgIHNsaWRlLnRhcmdldCA9IGNvbnRlbnRXaWR0aCAqIHRoaXMuY2VsbEFsaWduO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjb250YWluIHRvIGJvdW5kc1xuICAgICAgc2xpZGUudGFyZ2V0ID0gTWF0aC5tYXgoIHNsaWRlLnRhcmdldCwgYmVnaW5Cb3VuZCApO1xuICAgICAgc2xpZGUudGFyZ2V0ID0gTWF0aC5taW4oIHNsaWRlLnRhcmdldCwgZW5kQm91bmQgKTtcbiAgICB9XG4gIH0sIHRoaXMgKTtcbn07XG5cbi8vIC0tLS0tICAtLS0tLSAvL1xuXG4vKipcbiAqIGVtaXRzIGV2ZW50cyB2aWEgZXZlbnRFbWl0dGVyIGFuZCBqUXVlcnkgZXZlbnRzXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSAtIG5hbWUgb2YgZXZlbnRcbiAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gb3JpZ2luYWwgZXZlbnRcbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3MgLSBleHRyYSBhcmd1bWVudHNcbiAqL1xucHJvdG8uZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uKCB0eXBlLCBldmVudCwgYXJncyApIHtcbiAgdmFyIGVtaXRBcmdzID0gZXZlbnQgPyBbIGV2ZW50IF0uY29uY2F0KCBhcmdzICkgOiBhcmdzO1xuICB0aGlzLmVtaXRFdmVudCggdHlwZSwgZW1pdEFyZ3MgKTtcblxuICBpZiAoIGpRdWVyeSAmJiB0aGlzLiRlbGVtZW50ICkge1xuICAgIC8vIGRlZmF1bHQgdHJpZ2dlciB3aXRoIHR5cGUgaWYgbm8gZXZlbnRcbiAgICB0eXBlICs9IHRoaXMub3B0aW9ucy5uYW1lc3BhY2VKUXVlcnlFdmVudHMgPyAnLmZsaWNraXR5JyA6ICcnO1xuICAgIHZhciAkZXZlbnQgPSB0eXBlO1xuICAgIGlmICggZXZlbnQgKSB7XG4gICAgICAvLyBjcmVhdGUgalF1ZXJ5IGV2ZW50XG4gICAgICB2YXIgalFFdmVudCA9IGpRdWVyeS5FdmVudCggZXZlbnQgKTtcbiAgICAgIGpRRXZlbnQudHlwZSA9IHR5cGU7XG4gICAgICAkZXZlbnQgPSBqUUV2ZW50O1xuICAgIH1cbiAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoICRldmVudCwgYXJncyApO1xuICB9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBzZWxlY3QgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLyoqXG4gKiBAcGFyYW0ge0ludGVnZXJ9IGluZGV4IC0gaW5kZXggb2YgdGhlIHNsaWRlXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzV3JhcCAtIHdpbGwgd3JhcC1hcm91bmQgdG8gbGFzdC9maXJzdCBpZiBhdCB0aGUgZW5kXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzSW5zdGFudCAtIHdpbGwgaW1tZWRpYXRlbHkgc2V0IHBvc2l0aW9uIGF0IHNlbGVjdGVkIGNlbGxcbiAqL1xucHJvdG8uc2VsZWN0ID0gZnVuY3Rpb24oIGluZGV4LCBpc1dyYXAsIGlzSW5zdGFudCApIHtcbiAgaWYgKCAhdGhpcy5pc0FjdGl2ZSApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaW5kZXggPSBwYXJzZUludCggaW5kZXgsIDEwICk7XG4gIHRoaXMuX3dyYXBTZWxlY3QoIGluZGV4ICk7XG5cbiAgaWYgKCB0aGlzLm9wdGlvbnMud3JhcEFyb3VuZCB8fCBpc1dyYXAgKSB7XG4gICAgaW5kZXggPSB1dGlscy5tb2R1bG8oIGluZGV4LCB0aGlzLnNsaWRlcy5sZW5ndGggKTtcbiAgfVxuICAvLyBiYWlsIGlmIGludmFsaWQgaW5kZXhcbiAgaWYgKCAhdGhpcy5zbGlkZXNbIGluZGV4IF0gKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBwcmV2SW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXg7XG4gIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICB0aGlzLnVwZGF0ZVNlbGVjdGVkU2xpZGUoKTtcbiAgaWYgKCBpc0luc3RhbnQgKSB7XG4gICAgdGhpcy5wb3NpdGlvblNsaWRlckF0U2VsZWN0ZWQoKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnN0YXJ0QW5pbWF0aW9uKCk7XG4gIH1cbiAgaWYgKCB0aGlzLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQgKSB7XG4gICAgdGhpcy5zZXRHYWxsZXJ5U2l6ZSgpO1xuICB9XG4gIC8vIGV2ZW50c1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoICdzZWxlY3QnLCBudWxsLCBbIGluZGV4IF0gKTtcbiAgLy8gY2hhbmdlIGV2ZW50IGlmIG5ldyBpbmRleFxuICBpZiAoIGluZGV4ICE9IHByZXZJbmRleCApIHtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoICdjaGFuZ2UnLCBudWxsLCBbIGluZGV4IF0gKTtcbiAgfVxuICAvLyBvbGQgdjEgZXZlbnQgbmFtZSwgcmVtb3ZlIGluIHYzXG4gIHRoaXMuZGlzcGF0Y2hFdmVudCgnY2VsbFNlbGVjdCcpO1xufTtcblxuLy8gd3JhcHMgcG9zaXRpb24gZm9yIHdyYXBBcm91bmQsIHRvIG1vdmUgdG8gY2xvc2VzdCBzbGlkZS4gIzExM1xucHJvdG8uX3dyYXBTZWxlY3QgPSBmdW5jdGlvbiggaW5kZXggKSB7XG4gIHZhciBsZW4gPSB0aGlzLnNsaWRlcy5sZW5ndGg7XG4gIHZhciBpc1dyYXBwaW5nID0gdGhpcy5vcHRpb25zLndyYXBBcm91bmQgJiYgbGVuID4gMTtcbiAgaWYgKCAhaXNXcmFwcGluZyApIHtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cbiAgdmFyIHdyYXBJbmRleCA9IHV0aWxzLm1vZHVsbyggaW5kZXgsIGxlbiApO1xuICAvLyBnbyB0byBzaG9ydGVzdFxuICB2YXIgZGVsdGEgPSBNYXRoLmFicyggd3JhcEluZGV4IC0gdGhpcy5zZWxlY3RlZEluZGV4ICk7XG4gIHZhciBiYWNrV3JhcERlbHRhID0gTWF0aC5hYnMoICggd3JhcEluZGV4ICsgbGVuICkgLSB0aGlzLnNlbGVjdGVkSW5kZXggKTtcbiAgdmFyIGZvcmV3YXJkV3JhcERlbHRhID0gTWF0aC5hYnMoICggd3JhcEluZGV4IC0gbGVuICkgLSB0aGlzLnNlbGVjdGVkSW5kZXggKTtcbiAgaWYgKCAhdGhpcy5pc0RyYWdTZWxlY3QgJiYgYmFja1dyYXBEZWx0YSA8IGRlbHRhICkge1xuICAgIGluZGV4ICs9IGxlbjtcbiAgfSBlbHNlIGlmICggIXRoaXMuaXNEcmFnU2VsZWN0ICYmIGZvcmV3YXJkV3JhcERlbHRhIDwgZGVsdGEgKSB7XG4gICAgaW5kZXggLT0gbGVuO1xuICB9XG4gIC8vIHdyYXAgcG9zaXRpb24gc28gc2xpZGVyIGlzIHdpdGhpbiBub3JtYWwgYXJlYVxuICBpZiAoIGluZGV4IDwgMCApIHtcbiAgICB0aGlzLnggLT0gdGhpcy5zbGlkZWFibGVXaWR0aDtcbiAgfSBlbHNlIGlmICggaW5kZXggPj0gbGVuICkge1xuICAgIHRoaXMueCArPSB0aGlzLnNsaWRlYWJsZVdpZHRoO1xuICB9XG59O1xuXG5wcm90by5wcmV2aW91cyA9IGZ1bmN0aW9uKCBpc1dyYXAsIGlzSW5zdGFudCApIHtcbiAgdGhpcy5zZWxlY3QoIHRoaXMuc2VsZWN0ZWRJbmRleCAtIDEsIGlzV3JhcCwgaXNJbnN0YW50ICk7XG59O1xuXG5wcm90by5uZXh0ID0gZnVuY3Rpb24oIGlzV3JhcCwgaXNJbnN0YW50ICkge1xuICB0aGlzLnNlbGVjdCggdGhpcy5zZWxlY3RlZEluZGV4ICsgMSwgaXNXcmFwLCBpc0luc3RhbnQgKTtcbn07XG5cbnByb3RvLnVwZGF0ZVNlbGVjdGVkU2xpZGUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHNsaWRlID0gdGhpcy5zbGlkZXNbIHRoaXMuc2VsZWN0ZWRJbmRleCBdO1xuICAvLyBzZWxlY3RlZEluZGV4IGNvdWxkIGJlIG91dHNpZGUgb2Ygc2xpZGVzLCBpZiB0cmlnZ2VyZWQgYmVmb3JlIHJlc2l6ZSgpXG4gIGlmICggIXNsaWRlICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyB1bnNlbGVjdCBwcmV2aW91cyBzZWxlY3RlZCBzbGlkZVxuICB0aGlzLnVuc2VsZWN0U2VsZWN0ZWRTbGlkZSgpO1xuICAvLyB1cGRhdGUgbmV3IHNlbGVjdGVkIHNsaWRlXG4gIHRoaXMuc2VsZWN0ZWRTbGlkZSA9IHNsaWRlO1xuICBzbGlkZS5zZWxlY3QoKTtcbiAgdGhpcy5zZWxlY3RlZENlbGxzID0gc2xpZGUuY2VsbHM7XG4gIHRoaXMuc2VsZWN0ZWRFbGVtZW50cyA9IHNsaWRlLmdldENlbGxFbGVtZW50cygpO1xuICAvLyBIQUNLOiBzZWxlY3RlZENlbGwgJiBzZWxlY3RlZEVsZW1lbnQgaXMgZmlyc3QgY2VsbCBpbiBzbGlkZSwgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAgLy8gUmVtb3ZlIGluIHYzP1xuICB0aGlzLnNlbGVjdGVkQ2VsbCA9IHNsaWRlLmNlbGxzWzBdO1xuICB0aGlzLnNlbGVjdGVkRWxlbWVudCA9IHRoaXMuc2VsZWN0ZWRFbGVtZW50c1swXTtcbn07XG5cbnByb3RvLnVuc2VsZWN0U2VsZWN0ZWRTbGlkZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIHRoaXMuc2VsZWN0ZWRTbGlkZSApIHtcbiAgICB0aGlzLnNlbGVjdGVkU2xpZGUudW5zZWxlY3QoKTtcbiAgfVxufTtcblxucHJvdG8uc2VsZWN0SW5pdGlhbEluZGV4ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBpbml0aWFsSW5kZXggPSB0aGlzLm9wdGlvbnMuaW5pdGlhbEluZGV4O1xuICAvLyBhbHJlYWR5IGFjdGl2YXRlZCwgc2VsZWN0IHByZXZpb3VzIHNlbGVjdGVkSW5kZXhcbiAgaWYgKCB0aGlzLmlzSW5pdEFjdGl2YXRlZCApIHtcbiAgICB0aGlzLnNlbGVjdCggdGhpcy5zZWxlY3RlZEluZGV4LCBmYWxzZSwgdHJ1ZSApO1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBzZWxlY3Qgd2l0aCBzZWxlY3RvciBzdHJpbmdcbiAgaWYgKCBpbml0aWFsSW5kZXggJiYgdHlwZW9mIGluaXRpYWxJbmRleCA9PSAnc3RyaW5nJyApIHtcbiAgICB2YXIgY2VsbCA9IHRoaXMucXVlcnlDZWxsKCBpbml0aWFsSW5kZXggKTtcbiAgICBpZiAoIGNlbGwgKSB7XG4gICAgICB0aGlzLnNlbGVjdENlbGwoIGluaXRpYWxJbmRleCwgZmFsc2UsIHRydWUgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICB2YXIgaW5kZXggPSAwO1xuICAvLyBzZWxlY3Qgd2l0aCBudW1iZXJcbiAgaWYgKCBpbml0aWFsSW5kZXggJiYgdGhpcy5zbGlkZXNbIGluaXRpYWxJbmRleCBdICkge1xuICAgIGluZGV4ID0gaW5pdGlhbEluZGV4O1xuICB9XG4gIC8vIHNlbGVjdCBpbnN0YW50bHlcbiAgdGhpcy5zZWxlY3QoIGluZGV4LCBmYWxzZSwgdHJ1ZSApO1xufTtcblxuLyoqXG4gKiBzZWxlY3Qgc2xpZGUgZnJvbSBudW1iZXIgb3IgY2VsbCBlbGVtZW50XG4gKiBAcGFyYW0ge0VsZW1lbnQgb3IgTnVtYmVyfSBlbGVtXG4gKi9cbnByb3RvLnNlbGVjdENlbGwgPSBmdW5jdGlvbiggdmFsdWUsIGlzV3JhcCwgaXNJbnN0YW50ICkge1xuICAvLyBnZXQgY2VsbFxuICB2YXIgY2VsbCA9IHRoaXMucXVlcnlDZWxsKCB2YWx1ZSApO1xuICBpZiAoICFjZWxsICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBpbmRleCA9IHRoaXMuZ2V0Q2VsbFNsaWRlSW5kZXgoIGNlbGwgKTtcbiAgdGhpcy5zZWxlY3QoIGluZGV4LCBpc1dyYXAsIGlzSW5zdGFudCApO1xufTtcblxucHJvdG8uZ2V0Q2VsbFNsaWRlSW5kZXggPSBmdW5jdGlvbiggY2VsbCApIHtcbiAgLy8gZ2V0IGluZGV4IG9mIHNsaWRlcyB0aGF0IGhhcyBjZWxsXG4gIGZvciAoIHZhciBpPTA7IGkgPCB0aGlzLnNsaWRlcy5sZW5ndGg7IGkrKyApIHtcbiAgICB2YXIgc2xpZGUgPSB0aGlzLnNsaWRlc1tpXTtcbiAgICB2YXIgaW5kZXggPSBzbGlkZS5jZWxscy5pbmRleE9mKCBjZWxsICk7XG4gICAgaWYgKCBpbmRleCAhPSAtMSApIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2V0IGNlbGxzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8qKlxuICogZ2V0IEZsaWNraXR5LkNlbGwsIGdpdmVuIGFuIEVsZW1lbnRcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbVxuICogQHJldHVybnMge0ZsaWNraXR5LkNlbGx9IGl0ZW1cbiAqL1xucHJvdG8uZ2V0Q2VsbCA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICAvLyBsb29wIHRocm91Z2ggY2VsbHMgdG8gZ2V0IHRoZSBvbmUgdGhhdCBtYXRjaGVzXG4gIGZvciAoIHZhciBpPTA7IGkgPCB0aGlzLmNlbGxzLmxlbmd0aDsgaSsrICkge1xuICAgIHZhciBjZWxsID0gdGhpcy5jZWxsc1tpXTtcbiAgICBpZiAoIGNlbGwuZWxlbWVudCA9PSBlbGVtICkge1xuICAgICAgcmV0dXJuIGNlbGw7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIGdldCBjb2xsZWN0aW9uIG9mIEZsaWNraXR5LkNlbGxzLCBnaXZlbiBFbGVtZW50c1xuICogQHBhcmFtIHtFbGVtZW50LCBBcnJheSwgTm9kZUxpc3R9IGVsZW1zXG4gKiBAcmV0dXJucyB7QXJyYXl9IGNlbGxzIC0gRmxpY2tpdHkuQ2VsbHNcbiAqL1xucHJvdG8uZ2V0Q2VsbHMgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIGVsZW1zID0gdXRpbHMubWFrZUFycmF5KCBlbGVtcyApO1xuICB2YXIgY2VsbHMgPSBbXTtcbiAgZWxlbXMuZm9yRWFjaCggZnVuY3Rpb24oIGVsZW0gKSB7XG4gICAgdmFyIGNlbGwgPSB0aGlzLmdldENlbGwoIGVsZW0gKTtcbiAgICBpZiAoIGNlbGwgKSB7XG4gICAgICBjZWxscy5wdXNoKCBjZWxsICk7XG4gICAgfVxuICB9LCB0aGlzICk7XG4gIHJldHVybiBjZWxscztcbn07XG5cbi8qKlxuICogZ2V0IGNlbGwgZWxlbWVudHNcbiAqIEByZXR1cm5zIHtBcnJheX0gY2VsbEVsZW1zXG4gKi9cbnByb3RvLmdldENlbGxFbGVtZW50cyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5jZWxscy5tYXAoIGZ1bmN0aW9uKCBjZWxsICkge1xuICAgIHJldHVybiBjZWxsLmVsZW1lbnQ7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBnZXQgcGFyZW50IGNlbGwgZnJvbSBhbiBlbGVtZW50XG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1cbiAqIEByZXR1cm5zIHtGbGlja2l0LkNlbGx9IGNlbGxcbiAqL1xucHJvdG8uZ2V0UGFyZW50Q2VsbCA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICAvLyBmaXJzdCBjaGVjayBpZiBlbGVtIGlzIGNlbGxcbiAgdmFyIGNlbGwgPSB0aGlzLmdldENlbGwoIGVsZW0gKTtcbiAgaWYgKCBjZWxsICkge1xuICAgIHJldHVybiBjZWxsO1xuICB9XG4gIC8vIHRyeSB0byBnZXQgcGFyZW50IGNlbGwgZWxlbVxuICBlbGVtID0gdXRpbHMuZ2V0UGFyZW50KCBlbGVtLCAnLmZsaWNraXR5LXNsaWRlciA+IConICk7XG4gIHJldHVybiB0aGlzLmdldENlbGwoIGVsZW0gKTtcbn07XG5cbi8qKlxuICogZ2V0IGNlbGxzIGFkamFjZW50IHRvIGEgc2xpZGVcbiAqIEBwYXJhbSB7SW50ZWdlcn0gYWRqQ291bnQgLSBudW1iZXIgb2YgYWRqYWNlbnQgc2xpZGVzXG4gKiBAcGFyYW0ge0ludGVnZXJ9IGluZGV4IC0gaW5kZXggb2Ygc2xpZGUgdG8gc3RhcnRcbiAqIEByZXR1cm5zIHtBcnJheX0gY2VsbHMgLSBhcnJheSBvZiBGbGlja2l0eS5DZWxsc1xuICovXG5wcm90by5nZXRBZGphY2VudENlbGxFbGVtZW50cyA9IGZ1bmN0aW9uKCBhZGpDb3VudCwgaW5kZXggKSB7XG4gIGlmICggIWFkakNvdW50ICkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkU2xpZGUuZ2V0Q2VsbEVsZW1lbnRzKCk7XG4gIH1cbiAgaW5kZXggPSBpbmRleCA9PT0gdW5kZWZpbmVkID8gdGhpcy5zZWxlY3RlZEluZGV4IDogaW5kZXg7XG5cbiAgdmFyIGxlbiA9IHRoaXMuc2xpZGVzLmxlbmd0aDtcbiAgaWYgKCAxICsgKCBhZGpDb3VudCAqIDIgKSA+PSBsZW4gKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2VsbEVsZW1lbnRzKCk7XG4gIH1cblxuICB2YXIgY2VsbEVsZW1zID0gW107XG4gIGZvciAoIHZhciBpID0gaW5kZXggLSBhZGpDb3VudDsgaSA8PSBpbmRleCArIGFkakNvdW50IDsgaSsrICkge1xuICAgIHZhciBzbGlkZUluZGV4ID0gdGhpcy5vcHRpb25zLndyYXBBcm91bmQgPyB1dGlscy5tb2R1bG8oIGksIGxlbiApIDogaTtcbiAgICB2YXIgc2xpZGUgPSB0aGlzLnNsaWRlc1sgc2xpZGVJbmRleCBdO1xuICAgIGlmICggc2xpZGUgKSB7XG4gICAgICBjZWxsRWxlbXMgPSBjZWxsRWxlbXMuY29uY2F0KCBzbGlkZS5nZXRDZWxsRWxlbWVudHMoKSApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY2VsbEVsZW1zO1xufTtcblxuLyoqXG4gKiBzZWxlY3Qgc2xpZGUgZnJvbSBudW1iZXIgb3IgY2VsbCBlbGVtZW50XG4gKiBAcGFyYW0ge0VsZW1lbnQsIFNlbGVjdG9yIFN0cmluZywgb3IgTnVtYmVyfSBzZWxlY3RvclxuICovXG5wcm90by5xdWVyeUNlbGwgPSBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG4gIGlmICggdHlwZW9mIHNlbGVjdG9yID09ICdudW1iZXInICkge1xuICAgIC8vIHVzZSBudW1iZXIgYXMgaW5kZXhcbiAgICByZXR1cm4gdGhpcy5jZWxsc1sgc2VsZWN0b3IgXTtcbiAgfVxuICBpZiAoIHR5cGVvZiBzZWxlY3RvciA9PSAnc3RyaW5nJyApIHtcbiAgICAvLyBkbyBub3Qgc2VsZWN0IGludmFsaWQgc2VsZWN0b3JzIGZyb20gaGFzaDogIzEyMywgIy8uICM3OTFcbiAgICBpZiAoIHNlbGVjdG9yLm1hdGNoKC9eWyNcXC5dP1tcXGRcXC9dLykgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIHVzZSBzdHJpbmcgYXMgc2VsZWN0b3IsIGdldCBlbGVtZW50XG4gICAgc2VsZWN0b3IgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3Rvciggc2VsZWN0b3IgKTtcbiAgfVxuICAvLyBnZXQgY2VsbCBmcm9tIGVsZW1lbnRcbiAgcmV0dXJuIHRoaXMuZ2V0Q2VsbCggc2VsZWN0b3IgKTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGV2ZW50cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5wcm90by51aUNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmVtaXRFdmVudCgndWlDaGFuZ2UnKTtcbn07XG5cbi8vIGtlZXAgZm9jdXMgb24gZWxlbWVudCB3aGVuIGNoaWxkIFVJIGVsZW1lbnRzIGFyZSBjbGlja2VkXG5wcm90by5jaGlsZFVJUG9pbnRlckRvd24gPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIC8vIEhBQ0sgaU9TIGRvZXMgbm90IGFsbG93IHRvdWNoIGV2ZW50cyB0byBidWJibGUgdXA/IVxuICBpZiAoIGV2ZW50LnR5cGUgIT0gJ3RvdWNoc3RhcnQnICkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbiAgdGhpcy5mb2N1cygpO1xufTtcblxuLy8gLS0tLS0gcmVzaXplIC0tLS0tIC8vXG5cbnByb3RvLm9ucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMud2F0Y2hDU1MoKTtcbiAgdGhpcy5yZXNpemUoKTtcbn07XG5cbnV0aWxzLmRlYm91bmNlTWV0aG9kKCBGbGlja2l0eSwgJ29ucmVzaXplJywgMTUwICk7XG5cbnByb3RvLnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoICF0aGlzLmlzQWN0aXZlICkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLmdldFNpemUoKTtcbiAgLy8gd3JhcCB2YWx1ZXNcbiAgaWYgKCB0aGlzLm9wdGlvbnMud3JhcEFyb3VuZCApIHtcbiAgICB0aGlzLnggPSB1dGlscy5tb2R1bG8oIHRoaXMueCwgdGhpcy5zbGlkZWFibGVXaWR0aCApO1xuICB9XG4gIHRoaXMucG9zaXRpb25DZWxscygpO1xuICB0aGlzLl9nZXRXcmFwU2hpZnRDZWxscygpO1xuICB0aGlzLnNldEdhbGxlcnlTaXplKCk7XG4gIHRoaXMuZW1pdEV2ZW50KCdyZXNpemUnKTtcbiAgLy8gdXBkYXRlIHNlbGVjdGVkIGluZGV4IGZvciBncm91cCBzbGlkZXMsIGluc3RhbnRcbiAgLy8gVE9ETzogcG9zaXRpb24gY2FuIGJlIGxvc3QgYmV0d2VlbiBncm91cHMgb2YgdmFyaW91cyBudW1iZXJzXG4gIHZhciBzZWxlY3RlZEVsZW1lbnQgPSB0aGlzLnNlbGVjdGVkRWxlbWVudHMgJiYgdGhpcy5zZWxlY3RlZEVsZW1lbnRzWzBdO1xuICB0aGlzLnNlbGVjdENlbGwoIHNlbGVjdGVkRWxlbWVudCwgZmFsc2UsIHRydWUgKTtcbn07XG5cbi8vIHdhdGNoZXMgdGhlIDphZnRlciBwcm9wZXJ0eSwgYWN0aXZhdGVzL2RlYWN0aXZhdGVzXG5wcm90by53YXRjaENTUyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgd2F0Y2hPcHRpb24gPSB0aGlzLm9wdGlvbnMud2F0Y2hDU1M7XG4gIGlmICggIXdhdGNoT3B0aW9uICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBhZnRlckNvbnRlbnQgPSBnZXRDb21wdXRlZFN0eWxlKCB0aGlzLmVsZW1lbnQsICc6YWZ0ZXInICkuY29udGVudDtcbiAgLy8gYWN0aXZhdGUgaWYgOmFmdGVyIHsgY29udGVudDogJ2ZsaWNraXR5JyB9XG4gIGlmICggYWZ0ZXJDb250ZW50LmluZGV4T2YoJ2ZsaWNraXR5JykgIT0gLTEgKSB7XG4gICAgdGhpcy5hY3RpdmF0ZSgpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuZGVhY3RpdmF0ZSgpO1xuICB9XG59O1xuXG4vLyAtLS0tLSBrZXlkb3duIC0tLS0tIC8vXG5cbi8vIGdvIHByZXZpb3VzL25leHQgaWYgbGVmdC9yaWdodCBrZXlzIHByZXNzZWRcbnByb3RvLm9ua2V5ZG93biA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgLy8gb25seSB3b3JrIGlmIGVsZW1lbnQgaXMgaW4gZm9jdXNcbiAgdmFyIGlzTm90Rm9jdXNlZCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPSB0aGlzLmVsZW1lbnQ7XG4gIGlmICggIXRoaXMub3B0aW9ucy5hY2Nlc3NpYmlsaXR5IHx8aXNOb3RGb2N1c2VkICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBoYW5kbGVyID0gRmxpY2tpdHkua2V5Ym9hcmRIYW5kbGVyc1sgZXZlbnQua2V5Q29kZSBdO1xuICBpZiAoIGhhbmRsZXIgKSB7XG4gICAgaGFuZGxlci5jYWxsKCB0aGlzICk7XG4gIH1cbn07XG5cbkZsaWNraXR5LmtleWJvYXJkSGFuZGxlcnMgPSB7XG4gIC8vIGxlZnQgYXJyb3dcbiAgMzc6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsZWZ0TWV0aG9kID0gdGhpcy5vcHRpb25zLnJpZ2h0VG9MZWZ0ID8gJ25leHQnIDogJ3ByZXZpb3VzJztcbiAgICB0aGlzLnVpQ2hhbmdlKCk7XG4gICAgdGhpc1sgbGVmdE1ldGhvZCBdKCk7XG4gIH0sXG4gIC8vIHJpZ2h0IGFycm93XG4gIDM5OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmlnaHRNZXRob2QgPSB0aGlzLm9wdGlvbnMucmlnaHRUb0xlZnQgPyAncHJldmlvdXMnIDogJ25leHQnO1xuICAgIHRoaXMudWlDaGFuZ2UoKTtcbiAgICB0aGlzWyByaWdodE1ldGhvZCBdKCk7XG4gIH0sXG59O1xuXG4vLyAtLS0tLSBmb2N1cyAtLS0tLSAvL1xuXG5wcm90by5mb2N1cyA9IGZ1bmN0aW9uKCkge1xuICAvLyBUT0RPIHJlbW92ZSBzY3JvbGxUbyBvbmNlIGZvY3VzIG9wdGlvbnMgZ2V0cyBtb3JlIHN1cHBvcnRcbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hUTUxFbGVtZW50L2ZvY3VzI0Jyb3dzZXJfY29tcGF0aWJpbGl0eVxuICB2YXIgcHJldlNjcm9sbFkgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gIHRoaXMuZWxlbWVudC5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XG4gIC8vIGhhY2sgdG8gZml4IHNjcm9sbCBqdW1wIGFmdGVyIGZvY3VzLCAjNzZcbiAgaWYgKCB3aW5kb3cucGFnZVlPZmZzZXQgIT0gcHJldlNjcm9sbFkgKSB7XG4gICAgd2luZG93LnNjcm9sbFRvKCB3aW5kb3cucGFnZVhPZmZzZXQsIHByZXZTY3JvbGxZICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGRlc3Ryb3kgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLy8gZGVhY3RpdmF0ZSBhbGwgRmxpY2tpdHkgZnVuY3Rpb25hbGl0eSwgYnV0IGtlZXAgc3R1ZmYgYXZhaWxhYmxlXG5wcm90by5kZWFjdGl2YXRlID0gZnVuY3Rpb24oKSB7XG4gIGlmICggIXRoaXMuaXNBY3RpdmUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdmbGlja2l0eS1lbmFibGVkJyk7XG4gIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdmbGlja2l0eS1ydGwnKTtcbiAgdGhpcy51bnNlbGVjdFNlbGVjdGVkU2xpZGUoKTtcbiAgLy8gZGVzdHJveSBjZWxsc1xuICB0aGlzLmNlbGxzLmZvckVhY2goIGZ1bmN0aW9uKCBjZWxsICkge1xuICAgIGNlbGwuZGVzdHJveSgpO1xuICB9KTtcbiAgdGhpcy5lbGVtZW50LnJlbW92ZUNoaWxkKCB0aGlzLnZpZXdwb3J0ICk7XG4gIC8vIG1vdmUgY2hpbGQgZWxlbWVudHMgYmFjayBpbnRvIGVsZW1lbnRcbiAgbW92ZUVsZW1lbnRzKCB0aGlzLnNsaWRlci5jaGlsZHJlbiwgdGhpcy5lbGVtZW50ICk7XG4gIGlmICggdGhpcy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgKSB7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGFiSW5kZXgnKTtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCB0aGlzICk7XG4gIH1cbiAgLy8gc2V0IGZsYWdzXG4gIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgdGhpcy5lbWl0RXZlbnQoJ2RlYWN0aXZhdGUnKTtcbn07XG5cbnByb3RvLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5kZWFjdGl2YXRlKCk7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAncmVzaXplJywgdGhpcyApO1xuICB0aGlzLmFsbE9mZigpO1xuICB0aGlzLmVtaXRFdmVudCgnZGVzdHJveScpO1xuICBpZiAoIGpRdWVyeSAmJiB0aGlzLiRlbGVtZW50ICkge1xuICAgIGpRdWVyeS5yZW1vdmVEYXRhKCB0aGlzLmVsZW1lbnQsICdmbGlja2l0eScgKTtcbiAgfVxuICBkZWxldGUgdGhpcy5lbGVtZW50LmZsaWNraXR5R1VJRDtcbiAgZGVsZXRlIGluc3RhbmNlc1sgdGhpcy5ndWlkIF07XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBwcm90b3R5cGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxudXRpbHMuZXh0ZW5kKCBwcm90bywgYW5pbWF0ZVByb3RvdHlwZSApO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBleHRyYXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLyoqXG4gKiBnZXQgRmxpY2tpdHkgaW5zdGFuY2UgZnJvbSBlbGVtZW50XG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1cbiAqIEByZXR1cm5zIHtGbGlja2l0eX1cbiAqL1xuRmxpY2tpdHkuZGF0YSA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICBlbGVtID0gdXRpbHMuZ2V0UXVlcnlFbGVtZW50KCBlbGVtICk7XG4gIHZhciBpZCA9IGVsZW0gJiYgZWxlbS5mbGlja2l0eUdVSUQ7XG4gIHJldHVybiBpZCAmJiBpbnN0YW5jZXNbIGlkIF07XG59O1xuXG51dGlscy5odG1sSW5pdCggRmxpY2tpdHksICdmbGlja2l0eScgKTtcblxuaWYgKCBqUXVlcnkgJiYgalF1ZXJ5LmJyaWRnZXQgKSB7XG4gIGpRdWVyeS5icmlkZ2V0KCAnZmxpY2tpdHknLCBGbGlja2l0eSApO1xufVxuXG4vLyBzZXQgaW50ZXJuYWwgalF1ZXJ5LCBmb3IgV2VicGFjayArIGpRdWVyeSB2MywgIzQ3OFxuRmxpY2tpdHkuc2V0SlF1ZXJ5ID0gZnVuY3Rpb24oIGpxICkge1xuICBqUXVlcnkgPSBqcTtcbn07XG5cbkZsaWNraXR5LkNlbGwgPSBDZWxsO1xuRmxpY2tpdHkuU2xpZGUgPSBTbGlkZTtcblxucmV0dXJuIEZsaWNraXR5O1xuXG59KSk7XG4iLCIvKiFcbiAqIEZsaWNraXR5IHYyLjIuMVxuICogVG91Y2gsIHJlc3BvbnNpdmUsIGZsaWNrYWJsZSBjYXJvdXNlbHNcbiAqXG4gKiBMaWNlbnNlZCBHUEx2MyBmb3Igb3BlbiBzb3VyY2UgdXNlXG4gKiBvciBGbGlja2l0eSBDb21tZXJjaWFsIExpY2Vuc2UgZm9yIGNvbW1lcmNpYWwgdXNlXG4gKlxuICogaHR0cHM6Ly9mbGlja2l0eS5tZXRhZml6enkuY29cbiAqIENvcHlyaWdodCAyMDE1LTIwMTkgTWV0YWZpenp5XG4gKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi9cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIFtcbiAgICAgICcuL2ZsaWNraXR5JyxcbiAgICAgICcuL2RyYWcnLFxuICAgICAgJy4vcHJldi1uZXh0LWJ1dHRvbicsXG4gICAgICAnLi9wYWdlLWRvdHMnLFxuICAgICAgJy4vcGxheWVyJyxcbiAgICAgICcuL2FkZC1yZW1vdmUtY2VsbCcsXG4gICAgICAnLi9sYXp5bG9hZCdcbiAgICBdLCBmYWN0b3J5ICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICByZXF1aXJlKCcuL2ZsaWNraXR5JyksXG4gICAgICByZXF1aXJlKCcuL2RyYWcnKSxcbiAgICAgIHJlcXVpcmUoJy4vcHJldi1uZXh0LWJ1dHRvbicpLFxuICAgICAgcmVxdWlyZSgnLi9wYWdlLWRvdHMnKSxcbiAgICAgIHJlcXVpcmUoJy4vcGxheWVyJyksXG4gICAgICByZXF1aXJlKCcuL2FkZC1yZW1vdmUtY2VsbCcpLFxuICAgICAgcmVxdWlyZSgnLi9sYXp5bG9hZCcpXG4gICAgKTtcbiAgfVxuXG59KSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCBGbGlja2l0eSApIHtcbiAgLypqc2hpbnQgc3RyaWN0OiBmYWxzZSovXG4gIHJldHVybiBGbGlja2l0eTtcbn0pO1xuIiwiLy8gbGF6eWxvYWRcbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAnLi9mbGlja2l0eScsXG4gICAgICAnZml6enktdWktdXRpbHMvdXRpbHMnXG4gICAgXSwgZnVuY3Rpb24oIEZsaWNraXR5LCB1dGlscyApIHtcbiAgICAgIHJldHVybiBmYWN0b3J5KCB3aW5kb3csIEZsaWNraXR5LCB1dGlscyApO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgcmVxdWlyZSgnLi9mbGlja2l0eScpLFxuICAgICAgcmVxdWlyZSgnZml6enktdWktdXRpbHMnKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgd2luZG93LkZsaWNraXR5LFxuICAgICAgd2luZG93LmZpenp5VUlVdGlsc1xuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIEZsaWNraXR5LCB1dGlscyApIHtcbid1c2Ugc3RyaWN0JztcblxuRmxpY2tpdHkuY3JlYXRlTWV0aG9kcy5wdXNoKCdfY3JlYXRlTGF6eWxvYWQnKTtcbnZhciBwcm90byA9IEZsaWNraXR5LnByb3RvdHlwZTtcblxucHJvdG8uX2NyZWF0ZUxhenlsb2FkID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMub24oICdzZWxlY3QnLCB0aGlzLmxhenlMb2FkICk7XG59O1xuXG5wcm90by5sYXp5TG9hZCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbGF6eUxvYWQgPSB0aGlzLm9wdGlvbnMubGF6eUxvYWQ7XG4gIGlmICggIWxhenlMb2FkICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBnZXQgYWRqYWNlbnQgY2VsbHMsIHVzZSBsYXp5TG9hZCBvcHRpb24gZm9yIGFkamFjZW50IGNvdW50XG4gIHZhciBhZGpDb3VudCA9IHR5cGVvZiBsYXp5TG9hZCA9PSAnbnVtYmVyJyA/IGxhenlMb2FkIDogMDtcbiAgdmFyIGNlbGxFbGVtcyA9IHRoaXMuZ2V0QWRqYWNlbnRDZWxsRWxlbWVudHMoIGFkakNvdW50ICk7XG4gIC8vIGdldCBsYXp5IGltYWdlcyBpbiB0aG9zZSBjZWxsc1xuICB2YXIgbGF6eUltYWdlcyA9IFtdO1xuICBjZWxsRWxlbXMuZm9yRWFjaCggZnVuY3Rpb24oIGNlbGxFbGVtICkge1xuICAgIHZhciBsYXp5Q2VsbEltYWdlcyA9IGdldENlbGxMYXp5SW1hZ2VzKCBjZWxsRWxlbSApO1xuICAgIGxhenlJbWFnZXMgPSBsYXp5SW1hZ2VzLmNvbmNhdCggbGF6eUNlbGxJbWFnZXMgKTtcbiAgfSk7XG4gIC8vIGxvYWQgbGF6eSBpbWFnZXNcbiAgbGF6eUltYWdlcy5mb3JFYWNoKCBmdW5jdGlvbiggaW1nICkge1xuICAgIG5ldyBMYXp5TG9hZGVyKCBpbWcsIHRoaXMgKTtcbiAgfSwgdGhpcyApO1xufTtcblxuZnVuY3Rpb24gZ2V0Q2VsbExhenlJbWFnZXMoIGNlbGxFbGVtICkge1xuICAvLyBjaGVjayBpZiBjZWxsIGVsZW1lbnQgaXMgbGF6eSBpbWFnZVxuICBpZiAoIGNlbGxFbGVtLm5vZGVOYW1lID09ICdJTUcnICkge1xuICAgIHZhciBsYXp5bG9hZEF0dHIgPSBjZWxsRWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmxpY2tpdHktbGF6eWxvYWQnKTtcbiAgICB2YXIgc3JjQXR0ciA9IGNlbGxFbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1mbGlja2l0eS1sYXp5bG9hZC1zcmMnKTtcbiAgICB2YXIgc3Jjc2V0QXR0ciA9IGNlbGxFbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1mbGlja2l0eS1sYXp5bG9hZC1zcmNzZXQnKTtcbiAgICBpZiAoIGxhenlsb2FkQXR0ciB8fCBzcmNBdHRyIHx8IHNyY3NldEF0dHIgKSB7XG4gICAgICByZXR1cm4gWyBjZWxsRWxlbSBdO1xuICAgIH1cbiAgfVxuICAvLyBzZWxlY3QgbGF6eSBpbWFnZXMgaW4gY2VsbFxuICB2YXIgbGF6eVNlbGVjdG9yID0gJ2ltZ1tkYXRhLWZsaWNraXR5LWxhenlsb2FkXSwgJyArXG4gICAgJ2ltZ1tkYXRhLWZsaWNraXR5LWxhenlsb2FkLXNyY10sIGltZ1tkYXRhLWZsaWNraXR5LWxhenlsb2FkLXNyY3NldF0nO1xuICB2YXIgaW1ncyA9IGNlbGxFbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoIGxhenlTZWxlY3RvciApO1xuICByZXR1cm4gdXRpbHMubWFrZUFycmF5KCBpbWdzICk7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIExhenlMb2FkZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLyoqXG4gKiBjbGFzcyB0byBoYW5kbGUgbG9hZGluZyBpbWFnZXNcbiAqL1xuZnVuY3Rpb24gTGF6eUxvYWRlciggaW1nLCBmbGlja2l0eSApIHtcbiAgdGhpcy5pbWcgPSBpbWc7XG4gIHRoaXMuZmxpY2tpdHkgPSBmbGlja2l0eTtcbiAgdGhpcy5sb2FkKCk7XG59XG5cbkxhenlMb2FkZXIucHJvdG90eXBlLmhhbmRsZUV2ZW50ID0gdXRpbHMuaGFuZGxlRXZlbnQ7XG5cbkxhenlMb2FkZXIucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5pbWcuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCB0aGlzICk7XG4gIHRoaXMuaW1nLmFkZEV2ZW50TGlzdGVuZXIoICdlcnJvcicsIHRoaXMgKTtcbiAgLy8gZ2V0IHNyYyAmIHNyY3NldFxuICB2YXIgc3JjID0gdGhpcy5pbWcuZ2V0QXR0cmlidXRlKCdkYXRhLWZsaWNraXR5LWxhenlsb2FkJykgfHxcbiAgICB0aGlzLmltZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmxpY2tpdHktbGF6eWxvYWQtc3JjJyk7XG4gIHZhciBzcmNzZXQgPSB0aGlzLmltZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmxpY2tpdHktbGF6eWxvYWQtc3Jjc2V0Jyk7XG4gIC8vIHNldCBzcmMgJiBzZXJzZXRcbiAgdGhpcy5pbWcuc3JjID0gc3JjO1xuICBpZiAoIHNyY3NldCApIHtcbiAgICB0aGlzLmltZy5zZXRBdHRyaWJ1dGUoICdzcmNzZXQnLCBzcmNzZXQgKTtcbiAgfVxuICAvLyByZW1vdmUgYXR0clxuICB0aGlzLmltZy5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtZmxpY2tpdHktbGF6eWxvYWQnKTtcbiAgdGhpcy5pbWcucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWZsaWNraXR5LWxhenlsb2FkLXNyYycpO1xuICB0aGlzLmltZy5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtZmxpY2tpdHktbGF6eWxvYWQtc3Jjc2V0Jyk7XG59O1xuXG5MYXp5TG9hZGVyLnByb3RvdHlwZS5vbmxvYWQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHRoaXMuY29tcGxldGUoIGV2ZW50LCAnZmxpY2tpdHktbGF6eWxvYWRlZCcgKTtcbn07XG5cbkxhenlMb2FkZXIucHJvdG90eXBlLm9uZXJyb3IgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHRoaXMuY29tcGxldGUoIGV2ZW50LCAnZmxpY2tpdHktbGF6eWVycm9yJyApO1xufTtcblxuTGF6eUxvYWRlci5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiggZXZlbnQsIGNsYXNzTmFtZSApIHtcbiAgLy8gdW5iaW5kIGV2ZW50c1xuICB0aGlzLmltZy5yZW1vdmVFdmVudExpc3RlbmVyKCAnbG9hZCcsIHRoaXMgKTtcbiAgdGhpcy5pbWcucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2Vycm9yJywgdGhpcyApO1xuXG4gIHZhciBjZWxsID0gdGhpcy5mbGlja2l0eS5nZXRQYXJlbnRDZWxsKCB0aGlzLmltZyApO1xuICB2YXIgY2VsbEVsZW0gPSBjZWxsICYmIGNlbGwuZWxlbWVudDtcbiAgdGhpcy5mbGlja2l0eS5jZWxsU2l6ZUNoYW5nZSggY2VsbEVsZW0gKTtcblxuICB0aGlzLmltZy5jbGFzc0xpc3QuYWRkKCBjbGFzc05hbWUgKTtcbiAgdGhpcy5mbGlja2l0eS5kaXNwYXRjaEV2ZW50KCAnbGF6eUxvYWQnLCBldmVudCwgY2VsbEVsZW0gKTtcbn07XG5cbi8vIC0tLS0tICAtLS0tLSAvL1xuXG5GbGlja2l0eS5MYXp5TG9hZGVyID0gTGF6eUxvYWRlcjtcblxucmV0dXJuIEZsaWNraXR5O1xuXG59KSk7XG4iLCIvLyBwYWdlIGRvdHNcbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAnLi9mbGlja2l0eScsXG4gICAgICAndW5pcG9pbnRlci91bmlwb2ludGVyJyxcbiAgICAgICdmaXp6eS11aS11dGlscy91dGlscydcbiAgICBdLCBmdW5jdGlvbiggRmxpY2tpdHksIFVuaXBvaW50ZXIsIHV0aWxzICkge1xuICAgICAgcmV0dXJuIGZhY3RvcnkoIHdpbmRvdywgRmxpY2tpdHksIFVuaXBvaW50ZXIsIHV0aWxzICk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICByZXF1aXJlKCcuL2ZsaWNraXR5JyksXG4gICAgICByZXF1aXJlKCd1bmlwb2ludGVyJyksXG4gICAgICByZXF1aXJlKCdmaXp6eS11aS11dGlscycpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICB3aW5kb3cuRmxpY2tpdHksXG4gICAgICB3aW5kb3cuVW5pcG9pbnRlcixcbiAgICAgIHdpbmRvdy5maXp6eVVJVXRpbHNcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBGbGlja2l0eSwgVW5pcG9pbnRlciwgdXRpbHMgKSB7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFBhZ2VEb3RzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gUGFnZURvdHMoIHBhcmVudCApIHtcbiAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gIHRoaXMuX2NyZWF0ZSgpO1xufVxuXG5QYWdlRG90cy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBVbmlwb2ludGVyLnByb3RvdHlwZSApO1xuXG5QYWdlRG90cy5wcm90b3R5cGUuX2NyZWF0ZSA9IGZ1bmN0aW9uKCkge1xuICAvLyBjcmVhdGUgaG9sZGVyIGVsZW1lbnRcbiAgdGhpcy5ob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvbCcpO1xuICB0aGlzLmhvbGRlci5jbGFzc05hbWUgPSAnZmxpY2tpdHktcGFnZS1kb3RzJztcbiAgLy8gY3JlYXRlIGRvdHMsIGFycmF5IG9mIGVsZW1lbnRzXG4gIHRoaXMuZG90cyA9IFtdO1xuICAvLyBldmVudHNcbiAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMub25DbGljay5iaW5kKCB0aGlzICk7XG4gIHRoaXMub24oICdwb2ludGVyRG93bicsIHRoaXMucGFyZW50LmNoaWxkVUlQb2ludGVyRG93bi5iaW5kKCB0aGlzLnBhcmVudCApICk7XG59O1xuXG5QYWdlRG90cy5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zZXREb3RzKCk7XG4gIHRoaXMuaG9sZGVyLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2sgKTtcbiAgdGhpcy5iaW5kU3RhcnRFdmVudCggdGhpcy5ob2xkZXIgKTtcbiAgLy8gYWRkIHRvIERPTVxuICB0aGlzLnBhcmVudC5lbGVtZW50LmFwcGVuZENoaWxkKCB0aGlzLmhvbGRlciApO1xufTtcblxuUGFnZURvdHMucHJvdG90eXBlLmRlYWN0aXZhdGUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5ob2xkZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljayApO1xuICB0aGlzLnVuYmluZFN0YXJ0RXZlbnQoIHRoaXMuaG9sZGVyICk7XG4gIC8vIHJlbW92ZSBmcm9tIERPTVxuICB0aGlzLnBhcmVudC5lbGVtZW50LnJlbW92ZUNoaWxkKCB0aGlzLmhvbGRlciApO1xufTtcblxuUGFnZURvdHMucHJvdG90eXBlLnNldERvdHMgPSBmdW5jdGlvbigpIHtcbiAgLy8gZ2V0IGRpZmZlcmVuY2UgYmV0d2VlbiBudW1iZXIgb2Ygc2xpZGVzIGFuZCBudW1iZXIgb2YgZG90c1xuICB2YXIgZGVsdGEgPSB0aGlzLnBhcmVudC5zbGlkZXMubGVuZ3RoIC0gdGhpcy5kb3RzLmxlbmd0aDtcbiAgaWYgKCBkZWx0YSA+IDAgKSB7XG4gICAgdGhpcy5hZGREb3RzKCBkZWx0YSApO1xuICB9IGVsc2UgaWYgKCBkZWx0YSA8IDAgKSB7XG4gICAgdGhpcy5yZW1vdmVEb3RzKCAtZGVsdGEgKTtcbiAgfVxufTtcblxuUGFnZURvdHMucHJvdG90eXBlLmFkZERvdHMgPSBmdW5jdGlvbiggY291bnQgKSB7XG4gIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgdmFyIG5ld0RvdHMgPSBbXTtcbiAgdmFyIGxlbmd0aCA9IHRoaXMuZG90cy5sZW5ndGg7XG4gIHZhciBtYXggPSBsZW5ndGggKyBjb3VudDtcblxuICBmb3IgKCB2YXIgaSA9IGxlbmd0aDsgaSA8IG1heDsgaSsrICkge1xuICAgIHZhciBkb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGRvdC5jbGFzc05hbWUgPSAnZG90JztcbiAgICBkb3Quc2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcsICdQYWdlIGRvdCAnICsgKCBpICsgMSApICk7XG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoIGRvdCApO1xuICAgIG5ld0RvdHMucHVzaCggZG90ICk7XG4gIH1cblxuICB0aGlzLmhvbGRlci5hcHBlbmRDaGlsZCggZnJhZ21lbnQgKTtcbiAgdGhpcy5kb3RzID0gdGhpcy5kb3RzLmNvbmNhdCggbmV3RG90cyApO1xufTtcblxuUGFnZURvdHMucHJvdG90eXBlLnJlbW92ZURvdHMgPSBmdW5jdGlvbiggY291bnQgKSB7XG4gIC8vIHJlbW92ZSBmcm9tIHRoaXMuZG90cyBjb2xsZWN0aW9uXG4gIHZhciByZW1vdmVEb3RzID0gdGhpcy5kb3RzLnNwbGljZSggdGhpcy5kb3RzLmxlbmd0aCAtIGNvdW50LCBjb3VudCApO1xuICAvLyByZW1vdmUgZnJvbSBET01cbiAgcmVtb3ZlRG90cy5mb3JFYWNoKCBmdW5jdGlvbiggZG90ICkge1xuICAgIHRoaXMuaG9sZGVyLnJlbW92ZUNoaWxkKCBkb3QgKTtcbiAgfSwgdGhpcyApO1xufTtcblxuUGFnZURvdHMucHJvdG90eXBlLnVwZGF0ZVNlbGVjdGVkID0gZnVuY3Rpb24oKSB7XG4gIC8vIHJlbW92ZSBzZWxlY3RlZCBjbGFzcyBvbiBwcmV2aW91c1xuICBpZiAoIHRoaXMuc2VsZWN0ZWREb3QgKSB7XG4gICAgdGhpcy5zZWxlY3RlZERvdC5jbGFzc05hbWUgPSAnZG90JztcbiAgICB0aGlzLnNlbGVjdGVkRG90LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50Jyk7XG4gIH1cbiAgLy8gZG9uJ3QgcHJvY2VlZCBpZiBubyBkb3RzXG4gIGlmICggIXRoaXMuZG90cy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuc2VsZWN0ZWREb3QgPSB0aGlzLmRvdHNbIHRoaXMucGFyZW50LnNlbGVjdGVkSW5kZXggXTtcbiAgdGhpcy5zZWxlY3RlZERvdC5jbGFzc05hbWUgPSAnZG90IGlzLXNlbGVjdGVkJztcbiAgdGhpcy5zZWxlY3RlZERvdC5zZXRBdHRyaWJ1dGUoICdhcmlhLWN1cnJlbnQnLCAnc3RlcCcgKTtcbn07XG5cblBhZ2VEb3RzLnByb3RvdHlwZS5vblRhcCA9IC8vIG9sZCBtZXRob2QgbmFtZSwgYmFja3dhcmRzLWNvbXBhdGlibGVcblBhZ2VEb3RzLnByb3RvdHlwZS5vbkNsaWNrID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAvLyBvbmx5IGNhcmUgYWJvdXQgZG90IGNsaWNrc1xuICBpZiAoIHRhcmdldC5ub2RlTmFtZSAhPSAnTEknICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMucGFyZW50LnVpQ2hhbmdlKCk7XG4gIHZhciBpbmRleCA9IHRoaXMuZG90cy5pbmRleE9mKCB0YXJnZXQgKTtcbiAgdGhpcy5wYXJlbnQuc2VsZWN0KCBpbmRleCApO1xufTtcblxuUGFnZURvdHMucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5kZWFjdGl2YXRlKCk7XG4gIHRoaXMuYWxsT2ZmKCk7XG59O1xuXG5GbGlja2l0eS5QYWdlRG90cyA9IFBhZ2VEb3RzO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBGbGlja2l0eSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG51dGlscy5leHRlbmQoIEZsaWNraXR5LmRlZmF1bHRzLCB7XG4gIHBhZ2VEb3RzOiB0cnVlXG59KTtcblxuRmxpY2tpdHkuY3JlYXRlTWV0aG9kcy5wdXNoKCdfY3JlYXRlUGFnZURvdHMnKTtcblxudmFyIHByb3RvID0gRmxpY2tpdHkucHJvdG90eXBlO1xuXG5wcm90by5fY3JlYXRlUGFnZURvdHMgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCAhdGhpcy5vcHRpb25zLnBhZ2VEb3RzICkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLnBhZ2VEb3RzID0gbmV3IFBhZ2VEb3RzKCB0aGlzICk7XG4gIC8vIGV2ZW50c1xuICB0aGlzLm9uKCAnYWN0aXZhdGUnLCB0aGlzLmFjdGl2YXRlUGFnZURvdHMgKTtcbiAgdGhpcy5vbiggJ3NlbGVjdCcsIHRoaXMudXBkYXRlU2VsZWN0ZWRQYWdlRG90cyApO1xuICB0aGlzLm9uKCAnY2VsbENoYW5nZScsIHRoaXMudXBkYXRlUGFnZURvdHMgKTtcbiAgdGhpcy5vbiggJ3Jlc2l6ZScsIHRoaXMudXBkYXRlUGFnZURvdHMgKTtcbiAgdGhpcy5vbiggJ2RlYWN0aXZhdGUnLCB0aGlzLmRlYWN0aXZhdGVQYWdlRG90cyApO1xufTtcblxucHJvdG8uYWN0aXZhdGVQYWdlRG90cyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnBhZ2VEb3RzLmFjdGl2YXRlKCk7XG59O1xuXG5wcm90by51cGRhdGVTZWxlY3RlZFBhZ2VEb3RzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucGFnZURvdHMudXBkYXRlU2VsZWN0ZWQoKTtcbn07XG5cbnByb3RvLnVwZGF0ZVBhZ2VEb3RzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucGFnZURvdHMuc2V0RG90cygpO1xufTtcblxucHJvdG8uZGVhY3RpdmF0ZVBhZ2VEb3RzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucGFnZURvdHMuZGVhY3RpdmF0ZSgpO1xufTtcblxuLy8gLS0tLS0gIC0tLS0tIC8vXG5cbkZsaWNraXR5LlBhZ2VEb3RzID0gUGFnZURvdHM7XG5cbnJldHVybiBGbGlja2l0eTtcblxufSkpO1xuIiwiLy8gcGxheWVyICYgYXV0b1BsYXlcbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAnZXYtZW1pdHRlci9ldi1lbWl0dGVyJyxcbiAgICAgICdmaXp6eS11aS11dGlscy91dGlscycsXG4gICAgICAnLi9mbGlja2l0eSdcbiAgICBdLCBmdW5jdGlvbiggRXZFbWl0dGVyLCB1dGlscywgRmxpY2tpdHkgKSB7XG4gICAgICByZXR1cm4gZmFjdG9yeSggRXZFbWl0dGVyLCB1dGlscywgRmxpY2tpdHkgKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHJlcXVpcmUoJ2V2LWVtaXR0ZXInKSxcbiAgICAgIHJlcXVpcmUoJ2Zpenp5LXVpLXV0aWxzJyksXG4gICAgICByZXF1aXJlKCcuL2ZsaWNraXR5JylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgZmFjdG9yeShcbiAgICAgIHdpbmRvdy5FdkVtaXR0ZXIsXG4gICAgICB3aW5kb3cuZml6enlVSVV0aWxzLFxuICAgICAgd2luZG93LkZsaWNraXR5XG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIEV2RW1pdHRlciwgdXRpbHMsIEZsaWNraXR5ICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFBsYXllciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5mdW5jdGlvbiBQbGF5ZXIoIHBhcmVudCApIHtcbiAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gIHRoaXMuc3RhdGUgPSAnc3RvcHBlZCc7XG4gIC8vIHZpc2liaWxpdHkgY2hhbmdlIGV2ZW50IGhhbmRsZXJcbiAgdGhpcy5vblZpc2liaWxpdHlDaGFuZ2UgPSB0aGlzLnZpc2liaWxpdHlDaGFuZ2UuYmluZCggdGhpcyApO1xuICB0aGlzLm9uVmlzaWJpbGl0eVBsYXkgPSB0aGlzLnZpc2liaWxpdHlQbGF5LmJpbmQoIHRoaXMgKTtcbn1cblxuUGxheWVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEV2RW1pdHRlci5wcm90b3R5cGUgKTtcblxuLy8gc3RhcnQgcGxheVxuUGxheWVyLnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24oKSB7XG4gIGlmICggdGhpcy5zdGF0ZSA9PSAncGxheWluZycgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGRvIG5vdCBwbGF5IGlmIHBhZ2UgaXMgaGlkZGVuLCBzdGFydCBwbGF5aW5nIHdoZW4gcGFnZSBpcyB2aXNpYmxlXG4gIHZhciBpc1BhZ2VIaWRkZW4gPSBkb2N1bWVudC5oaWRkZW47XG4gIGlmICggaXNQYWdlSGlkZGVuICkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd2aXNpYmlsaXR5Y2hhbmdlJywgdGhpcy5vblZpc2liaWxpdHlQbGF5ICk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5zdGF0ZSA9ICdwbGF5aW5nJztcbiAgLy8gbGlzdGVuIHRvIHZpc2liaWxpdHkgY2hhbmdlXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd2aXNpYmlsaXR5Y2hhbmdlJywgdGhpcy5vblZpc2liaWxpdHlDaGFuZ2UgKTtcbiAgLy8gc3RhcnQgdGlja2luZ1xuICB0aGlzLnRpY2soKTtcbn07XG5cblBsYXllci5wcm90b3R5cGUudGljayA9IGZ1bmN0aW9uKCkge1xuICAvLyBkbyBub3QgdGljayBpZiBub3QgcGxheWluZ1xuICBpZiAoIHRoaXMuc3RhdGUgIT0gJ3BsYXlpbmcnICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciB0aW1lID0gdGhpcy5wYXJlbnQub3B0aW9ucy5hdXRvUGxheTtcbiAgLy8gZGVmYXVsdCB0byAzIHNlY29uZHNcbiAgdGltZSA9IHR5cGVvZiB0aW1lID09ICdudW1iZXInID8gdGltZSA6IDMwMDA7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG4gIC8vIEhBQ0s6IHJlc2V0IHRpY2tzIGlmIHN0b3BwZWQgYW5kIHN0YXJ0ZWQgd2l0aGluIGludGVydmFsXG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgX3RoaXMucGFyZW50Lm5leHQoIHRydWUgKTtcbiAgICBfdGhpcy50aWNrKCk7XG4gIH0sIHRpbWUgKTtcbn07XG5cblBsYXllci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnN0YXRlID0gJ3N0b3BwZWQnO1xuICB0aGlzLmNsZWFyKCk7XG4gIC8vIHJlbW92ZSB2aXNpYmlsaXR5IGNoYW5nZSBldmVudFxuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndmlzaWJpbGl0eWNoYW5nZScsIHRoaXMub25WaXNpYmlsaXR5Q2hhbmdlICk7XG59O1xuXG5QbGF5ZXIucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24oKSB7XG4gIGNsZWFyVGltZW91dCggdGhpcy50aW1lb3V0ICk7XG59O1xuXG5QbGF5ZXIucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24oKSB7XG4gIGlmICggdGhpcy5zdGF0ZSA9PSAncGxheWluZycgKSB7XG4gICAgdGhpcy5zdGF0ZSA9ICdwYXVzZWQnO1xuICAgIHRoaXMuY2xlYXIoKTtcbiAgfVxufTtcblxuUGxheWVyLnByb3RvdHlwZS51bnBhdXNlID0gZnVuY3Rpb24oKSB7XG4gIC8vIHJlLXN0YXJ0IHBsYXkgaWYgcGF1c2VkXG4gIGlmICggdGhpcy5zdGF0ZSA9PSAncGF1c2VkJyApIHtcbiAgICB0aGlzLnBsYXkoKTtcbiAgfVxufTtcblxuLy8gcGF1c2UgaWYgcGFnZSB2aXNpYmlsaXR5IGlzIGhpZGRlbiwgdW5wYXVzZSBpZiB2aXNpYmxlXG5QbGF5ZXIucHJvdG90eXBlLnZpc2liaWxpdHlDaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGlzUGFnZUhpZGRlbiA9IGRvY3VtZW50LmhpZGRlbjtcbiAgdGhpc1sgaXNQYWdlSGlkZGVuID8gJ3BhdXNlJyA6ICd1bnBhdXNlJyBdKCk7XG59O1xuXG5QbGF5ZXIucHJvdG90eXBlLnZpc2liaWxpdHlQbGF5ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucGxheSgpO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndmlzaWJpbGl0eWNoYW5nZScsIHRoaXMub25WaXNpYmlsaXR5UGxheSApO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRmxpY2tpdHkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxudXRpbHMuZXh0ZW5kKCBGbGlja2l0eS5kZWZhdWx0cywge1xuICBwYXVzZUF1dG9QbGF5T25Ib3ZlcjogdHJ1ZVxufSk7XG5cbkZsaWNraXR5LmNyZWF0ZU1ldGhvZHMucHVzaCgnX2NyZWF0ZVBsYXllcicpO1xudmFyIHByb3RvID0gRmxpY2tpdHkucHJvdG90eXBlO1xuXG5wcm90by5fY3JlYXRlUGxheWVyID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucGxheWVyID0gbmV3IFBsYXllciggdGhpcyApO1xuXG4gIHRoaXMub24oICdhY3RpdmF0ZScsIHRoaXMuYWN0aXZhdGVQbGF5ZXIgKTtcbiAgdGhpcy5vbiggJ3VpQ2hhbmdlJywgdGhpcy5zdG9wUGxheWVyICk7XG4gIHRoaXMub24oICdwb2ludGVyRG93bicsIHRoaXMuc3RvcFBsYXllciApO1xuICB0aGlzLm9uKCAnZGVhY3RpdmF0ZScsIHRoaXMuZGVhY3RpdmF0ZVBsYXllciApO1xufTtcblxucHJvdG8uYWN0aXZhdGVQbGF5ZXIgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCAhdGhpcy5vcHRpb25zLmF1dG9QbGF5ICkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLnBsYXllci5wbGF5KCk7XG4gIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2VlbnRlcicsIHRoaXMgKTtcbn07XG5cbi8vIFBsYXllciBBUEksIGRvbid0IGhhdGUgdGhlIC4uLiB0aGFua3MgSSBrbm93IHdoZXJlIHRoZSBkb29yIGlzXG5cbnByb3RvLnBsYXlQbGF5ZXIgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5wbGF5ZXIucGxheSgpO1xufTtcblxucHJvdG8uc3RvcFBsYXllciA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnBsYXllci5zdG9wKCk7XG59O1xuXG5wcm90by5wYXVzZVBsYXllciA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnBsYXllci5wYXVzZSgpO1xufTtcblxucHJvdG8udW5wYXVzZVBsYXllciA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnBsYXllci51bnBhdXNlKCk7XG59O1xuXG5wcm90by5kZWFjdGl2YXRlUGxheWVyID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucGxheWVyLnN0b3AoKTtcbiAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZWVudGVyJywgdGhpcyApO1xufTtcblxuLy8gLS0tLS0gbW91c2VlbnRlci9sZWF2ZSAtLS0tLSAvL1xuXG4vLyBwYXVzZSBhdXRvLXBsYXkgb24gaG92ZXJcbnByb3RvLm9ubW91c2VlbnRlciA9IGZ1bmN0aW9uKCkge1xuICBpZiAoICF0aGlzLm9wdGlvbnMucGF1c2VBdXRvUGxheU9uSG92ZXIgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMucGxheWVyLnBhdXNlKCk7XG4gIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2VsZWF2ZScsIHRoaXMgKTtcbn07XG5cbi8vIHJlc3VtZSBhdXRvLXBsYXkgb24gaG92ZXIgb2ZmXG5wcm90by5vbm1vdXNlbGVhdmUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5wbGF5ZXIudW5wYXVzZSgpO1xuICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlbGVhdmUnLCB0aGlzICk7XG59O1xuXG4vLyAtLS0tLSAgLS0tLS0gLy9cblxuRmxpY2tpdHkuUGxheWVyID0gUGxheWVyO1xuXG5yZXR1cm4gRmxpY2tpdHk7XG5cbn0pKTtcbiIsIi8vIHByZXYvbmV4dCBidXR0b25zXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggW1xuICAgICAgJy4vZmxpY2tpdHknLFxuICAgICAgJ3VuaXBvaW50ZXIvdW5pcG9pbnRlcicsXG4gICAgICAnZml6enktdWktdXRpbHMvdXRpbHMnXG4gICAgXSwgZnVuY3Rpb24oIEZsaWNraXR5LCBVbmlwb2ludGVyLCB1dGlscyApIHtcbiAgICAgIHJldHVybiBmYWN0b3J5KCB3aW5kb3csIEZsaWNraXR5LCBVbmlwb2ludGVyLCB1dGlscyApO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgcmVxdWlyZSgnLi9mbGlja2l0eScpLFxuICAgICAgcmVxdWlyZSgndW5pcG9pbnRlcicpLFxuICAgICAgcmVxdWlyZSgnZml6enktdWktdXRpbHMnKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgd2luZG93LkZsaWNraXR5LFxuICAgICAgd2luZG93LlVuaXBvaW50ZXIsXG4gICAgICB3aW5kb3cuZml6enlVSVV0aWxzXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIHdpbmRvdywgRmxpY2tpdHksIFVuaXBvaW50ZXIsIHV0aWxzICkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgc3ZnVVJJID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gUHJldk5leHRCdXR0b24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuZnVuY3Rpb24gUHJldk5leHRCdXR0b24oIGRpcmVjdGlvbiwgcGFyZW50ICkge1xuICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gIHRoaXMuX2NyZWF0ZSgpO1xufVxuXG5QcmV2TmV4dEJ1dHRvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBVbmlwb2ludGVyLnByb3RvdHlwZSApO1xuXG5QcmV2TmV4dEJ1dHRvbi5wcm90b3R5cGUuX2NyZWF0ZSA9IGZ1bmN0aW9uKCkge1xuICAvLyBwcm9wZXJ0aWVzXG4gIHRoaXMuaXNFbmFibGVkID0gdHJ1ZTtcbiAgdGhpcy5pc1ByZXZpb3VzID0gdGhpcy5kaXJlY3Rpb24gPT0gLTE7XG4gIHZhciBsZWZ0RGlyZWN0aW9uID0gdGhpcy5wYXJlbnQub3B0aW9ucy5yaWdodFRvTGVmdCA/IDEgOiAtMTtcbiAgdGhpcy5pc0xlZnQgPSB0aGlzLmRpcmVjdGlvbiA9PSBsZWZ0RGlyZWN0aW9uO1xuXG4gIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gJ2ZsaWNraXR5LWJ1dHRvbiBmbGlja2l0eS1wcmV2LW5leHQtYnV0dG9uJztcbiAgZWxlbWVudC5jbGFzc05hbWUgKz0gdGhpcy5pc1ByZXZpb3VzID8gJyBwcmV2aW91cycgOiAnIG5leHQnO1xuICAvLyBwcmV2ZW50IGJ1dHRvbiBmcm9tIHN1Ym1pdHRpbmcgZm9ybSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xMDgzNjA3Ni8xODIxODNcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoICd0eXBlJywgJ2J1dHRvbicgKTtcbiAgLy8gaW5pdCBhcyBkaXNhYmxlZFxuICB0aGlzLmRpc2FibGUoKTtcblxuICBlbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnLCB0aGlzLmlzUHJldmlvdXMgPyAnUHJldmlvdXMnIDogJ05leHQnICk7XG5cbiAgLy8gY3JlYXRlIGFycm93XG4gIHZhciBzdmcgPSB0aGlzLmNyZWF0ZVNWRygpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKCBzdmcgKTtcbiAgLy8gZXZlbnRzXG4gIHRoaXMucGFyZW50Lm9uKCAnc2VsZWN0JywgdGhpcy51cGRhdGUuYmluZCggdGhpcyApICk7XG4gIHRoaXMub24oICdwb2ludGVyRG93bicsIHRoaXMucGFyZW50LmNoaWxkVUlQb2ludGVyRG93bi5iaW5kKCB0aGlzLnBhcmVudCApICk7XG59O1xuXG5QcmV2TmV4dEJ1dHRvbi5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5iaW5kU3RhcnRFdmVudCggdGhpcy5lbGVtZW50ICk7XG4gIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCB0aGlzICk7XG4gIC8vIGFkZCB0byBET01cbiAgdGhpcy5wYXJlbnQuZWxlbWVudC5hcHBlbmRDaGlsZCggdGhpcy5lbGVtZW50ICk7XG59O1xuXG5QcmV2TmV4dEJ1dHRvbi5wcm90b3R5cGUuZGVhY3RpdmF0ZSA9IGZ1bmN0aW9uKCkge1xuICAvLyByZW1vdmUgZnJvbSBET01cbiAgdGhpcy5wYXJlbnQuZWxlbWVudC5yZW1vdmVDaGlsZCggdGhpcy5lbGVtZW50ICk7XG4gIC8vIGNsaWNrIGV2ZW50c1xuICB0aGlzLnVuYmluZFN0YXJ0RXZlbnQoIHRoaXMuZWxlbWVudCApO1xuICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgdGhpcyApO1xufTtcblxuUHJldk5leHRCdXR0b24ucHJvdG90eXBlLmNyZWF0ZVNWRyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCBzdmdVUkksICdzdmcnKTtcbiAgc3ZnLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2ZsaWNraXR5LWJ1dHRvbi1pY29uJyApO1xuICBzdmcuc2V0QXR0cmlidXRlKCAndmlld0JveCcsICcwIDAgMTAwIDEwMCcgKTtcbiAgdmFyIHBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoIHN2Z1VSSSwgJ3BhdGgnKTtcbiAgdmFyIHBhdGhNb3ZlbWVudHMgPSBnZXRBcnJvd01vdmVtZW50cyggdGhpcy5wYXJlbnQub3B0aW9ucy5hcnJvd1NoYXBlICk7XG4gIHBhdGguc2V0QXR0cmlidXRlKCAnZCcsIHBhdGhNb3ZlbWVudHMgKTtcbiAgcGF0aC5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdhcnJvdycgKTtcbiAgLy8gcm90YXRlIGFycm93XG4gIGlmICggIXRoaXMuaXNMZWZ0ICkge1xuICAgIHBhdGguc2V0QXR0cmlidXRlKCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgxMDAsIDEwMCkgcm90YXRlKDE4MCkgJyApO1xuICB9XG4gIHN2Zy5hcHBlbmRDaGlsZCggcGF0aCApO1xuICByZXR1cm4gc3ZnO1xufTtcblxuLy8gZ2V0IFNWRyBwYXRoIG1vdm1lbWVudFxuZnVuY3Rpb24gZ2V0QXJyb3dNb3ZlbWVudHMoIHNoYXBlICkge1xuICAvLyB1c2Ugc2hhcGUgYXMgbW92ZW1lbnQgaWYgc3RyaW5nXG4gIGlmICggdHlwZW9mIHNoYXBlID09ICdzdHJpbmcnICkge1xuICAgIHJldHVybiBzaGFwZTtcbiAgfVxuICAvLyBjcmVhdGUgbW92ZW1lbnQgc3RyaW5nXG4gIHJldHVybiAnTSAnICsgc2hhcGUueDAgKyAnLDUwJyArXG4gICAgJyBMICcgKyBzaGFwZS54MSArICcsJyArICggc2hhcGUueTEgKyA1MCApICtcbiAgICAnIEwgJyArIHNoYXBlLngyICsgJywnICsgKCBzaGFwZS55MiArIDUwICkgK1xuICAgICcgTCAnICsgc2hhcGUueDMgKyAnLDUwICcgK1xuICAgICcgTCAnICsgc2hhcGUueDIgKyAnLCcgKyAoIDUwIC0gc2hhcGUueTIgKSArXG4gICAgJyBMICcgKyBzaGFwZS54MSArICcsJyArICggNTAgLSBzaGFwZS55MSApICtcbiAgICAnIFonO1xufVxuXG5QcmV2TmV4dEJ1dHRvbi5wcm90b3R5cGUuaGFuZGxlRXZlbnQgPSB1dGlscy5oYW5kbGVFdmVudDtcblxuUHJldk5leHRCdXR0b24ucHJvdG90eXBlLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCAhdGhpcy5pc0VuYWJsZWQgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMucGFyZW50LnVpQ2hhbmdlKCk7XG4gIHZhciBtZXRob2QgPSB0aGlzLmlzUHJldmlvdXMgPyAncHJldmlvdXMnIDogJ25leHQnO1xuICB0aGlzLnBhcmVudFsgbWV0aG9kIF0oKTtcbn07XG5cbi8vIC0tLS0tICAtLS0tLSAvL1xuXG5QcmV2TmV4dEJ1dHRvbi5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24oKSB7XG4gIGlmICggdGhpcy5pc0VuYWJsZWQgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuZWxlbWVudC5kaXNhYmxlZCA9IGZhbHNlO1xuICB0aGlzLmlzRW5hYmxlZCA9IHRydWU7XG59O1xuXG5QcmV2TmV4dEJ1dHRvbi5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoICF0aGlzLmlzRW5hYmxlZCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5lbGVtZW50LmRpc2FibGVkID0gdHJ1ZTtcbiAgdGhpcy5pc0VuYWJsZWQgPSBmYWxzZTtcbn07XG5cblByZXZOZXh0QnV0dG9uLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgLy8gaW5kZXggb2YgZmlyc3Qgb3IgbGFzdCBzbGlkZSwgaWYgcHJldmlvdXMgb3IgbmV4dFxuICB2YXIgc2xpZGVzID0gdGhpcy5wYXJlbnQuc2xpZGVzO1xuICAvLyBlbmFibGUgaXMgd3JhcEFyb3VuZCBhbmQgYXQgbGVhc3QgMiBzbGlkZXNcbiAgaWYgKCB0aGlzLnBhcmVudC5vcHRpb25zLndyYXBBcm91bmQgJiYgc2xpZGVzLmxlbmd0aCA+IDEgKSB7XG4gICAgdGhpcy5lbmFibGUoKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IHNsaWRlcy5sZW5ndGggPyBzbGlkZXMubGVuZ3RoIC0gMSA6IDA7XG4gIHZhciBib3VuZEluZGV4ID0gdGhpcy5pc1ByZXZpb3VzID8gMCA6IGxhc3RJbmRleDtcbiAgdmFyIG1ldGhvZCA9IHRoaXMucGFyZW50LnNlbGVjdGVkSW5kZXggPT0gYm91bmRJbmRleCA/ICdkaXNhYmxlJyA6ICdlbmFibGUnO1xuICB0aGlzWyBtZXRob2QgXSgpO1xufTtcblxuUHJldk5leHRCdXR0b24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5kZWFjdGl2YXRlKCk7XG4gIHRoaXMuYWxsT2ZmKCk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBGbGlja2l0eSBwcm90b3R5cGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxudXRpbHMuZXh0ZW5kKCBGbGlja2l0eS5kZWZhdWx0cywge1xuICBwcmV2TmV4dEJ1dHRvbnM6IHRydWUsXG4gIGFycm93U2hhcGU6IHtcbiAgICB4MDogMTAsXG4gICAgeDE6IDYwLCB5MTogNTAsXG4gICAgeDI6IDcwLCB5MjogNDAsXG4gICAgeDM6IDMwXG4gIH1cbn0pO1xuXG5GbGlja2l0eS5jcmVhdGVNZXRob2RzLnB1c2goJ19jcmVhdGVQcmV2TmV4dEJ1dHRvbnMnKTtcbnZhciBwcm90byA9IEZsaWNraXR5LnByb3RvdHlwZTtcblxucHJvdG8uX2NyZWF0ZVByZXZOZXh0QnV0dG9ucyA9IGZ1bmN0aW9uKCkge1xuICBpZiAoICF0aGlzLm9wdGlvbnMucHJldk5leHRCdXR0b25zICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMucHJldkJ1dHRvbiA9IG5ldyBQcmV2TmV4dEJ1dHRvbiggLTEsIHRoaXMgKTtcbiAgdGhpcy5uZXh0QnV0dG9uID0gbmV3IFByZXZOZXh0QnV0dG9uKCAxLCB0aGlzICk7XG5cbiAgdGhpcy5vbiggJ2FjdGl2YXRlJywgdGhpcy5hY3RpdmF0ZVByZXZOZXh0QnV0dG9ucyApO1xufTtcblxucHJvdG8uYWN0aXZhdGVQcmV2TmV4dEJ1dHRvbnMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5wcmV2QnV0dG9uLmFjdGl2YXRlKCk7XG4gIHRoaXMubmV4dEJ1dHRvbi5hY3RpdmF0ZSgpO1xuICB0aGlzLm9uKCAnZGVhY3RpdmF0ZScsIHRoaXMuZGVhY3RpdmF0ZVByZXZOZXh0QnV0dG9ucyApO1xufTtcblxucHJvdG8uZGVhY3RpdmF0ZVByZXZOZXh0QnV0dG9ucyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnByZXZCdXR0b24uZGVhY3RpdmF0ZSgpO1xuICB0aGlzLm5leHRCdXR0b24uZGVhY3RpdmF0ZSgpO1xuICB0aGlzLm9mZiggJ2RlYWN0aXZhdGUnLCB0aGlzLmRlYWN0aXZhdGVQcmV2TmV4dEJ1dHRvbnMgKTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5GbGlja2l0eS5QcmV2TmV4dEJ1dHRvbiA9IFByZXZOZXh0QnV0dG9uO1xuXG5yZXR1cm4gRmxpY2tpdHk7XG5cbn0pKTtcbiIsIi8vIHNsaWRlXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggZmFjdG9yeSApO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cuRmxpY2tpdHkgPSB3aW5kb3cuRmxpY2tpdHkgfHwge307XG4gICAgd2luZG93LkZsaWNraXR5LlNsaWRlID0gZmFjdG9yeSgpO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSgpIHtcbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gU2xpZGUoIHBhcmVudCApIHtcbiAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gIHRoaXMuaXNPcmlnaW5MZWZ0ID0gcGFyZW50Lm9yaWdpblNpZGUgPT0gJ2xlZnQnO1xuICB0aGlzLmNlbGxzID0gW107XG4gIHRoaXMub3V0ZXJXaWR0aCA9IDA7XG4gIHRoaXMuaGVpZ2h0ID0gMDtcbn1cblxudmFyIHByb3RvID0gU2xpZGUucHJvdG90eXBlO1xuXG5wcm90by5hZGRDZWxsID0gZnVuY3Rpb24oIGNlbGwgKSB7XG4gIHRoaXMuY2VsbHMucHVzaCggY2VsbCApO1xuICB0aGlzLm91dGVyV2lkdGggKz0gY2VsbC5zaXplLm91dGVyV2lkdGg7XG4gIHRoaXMuaGVpZ2h0ID0gTWF0aC5tYXgoIGNlbGwuc2l6ZS5vdXRlckhlaWdodCwgdGhpcy5oZWlnaHQgKTtcbiAgLy8gZmlyc3QgY2VsbCBzdHVmZlxuICBpZiAoIHRoaXMuY2VsbHMubGVuZ3RoID09IDEgKSB7XG4gICAgdGhpcy54ID0gY2VsbC54OyAvLyB4IGNvbWVzIGZyb20gZmlyc3QgY2VsbFxuICAgIHZhciBiZWdpbk1hcmdpbiA9IHRoaXMuaXNPcmlnaW5MZWZ0ID8gJ21hcmdpbkxlZnQnIDogJ21hcmdpblJpZ2h0JztcbiAgICB0aGlzLmZpcnN0TWFyZ2luID0gY2VsbC5zaXplWyBiZWdpbk1hcmdpbiBdO1xuICB9XG59O1xuXG5wcm90by51cGRhdGVUYXJnZXQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGVuZE1hcmdpbiA9IHRoaXMuaXNPcmlnaW5MZWZ0ID8gJ21hcmdpblJpZ2h0JyA6ICdtYXJnaW5MZWZ0JztcbiAgdmFyIGxhc3RDZWxsID0gdGhpcy5nZXRMYXN0Q2VsbCgpO1xuICB2YXIgbGFzdE1hcmdpbiA9IGxhc3RDZWxsID8gbGFzdENlbGwuc2l6ZVsgZW5kTWFyZ2luIF0gOiAwO1xuICB2YXIgc2xpZGVXaWR0aCA9IHRoaXMub3V0ZXJXaWR0aCAtICggdGhpcy5maXJzdE1hcmdpbiArIGxhc3RNYXJnaW4gKTtcbiAgdGhpcy50YXJnZXQgPSB0aGlzLnggKyB0aGlzLmZpcnN0TWFyZ2luICsgc2xpZGVXaWR0aCAqIHRoaXMucGFyZW50LmNlbGxBbGlnbjtcbn07XG5cbnByb3RvLmdldExhc3RDZWxsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmNlbGxzWyB0aGlzLmNlbGxzLmxlbmd0aCAtIDEgXTtcbn07XG5cbnByb3RvLnNlbGVjdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmNlbGxzLmZvckVhY2goIGZ1bmN0aW9uKCBjZWxsICkge1xuICAgIGNlbGwuc2VsZWN0KCk7XG4gIH0pO1xufTtcblxucHJvdG8udW5zZWxlY3QgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5jZWxscy5mb3JFYWNoKCBmdW5jdGlvbiggY2VsbCApIHtcbiAgICBjZWxsLnVuc2VsZWN0KCk7XG4gIH0pO1xufTtcblxucHJvdG8uZ2V0Q2VsbEVsZW1lbnRzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmNlbGxzLm1hcCggZnVuY3Rpb24oIGNlbGwgKSB7XG4gICAgcmV0dXJuIGNlbGwuZWxlbWVudDtcbiAgfSk7XG59O1xuXG5yZXR1cm4gU2xpZGU7XG5cbn0pKTtcbiIsIi8qIVxuICogZ2V0U2l6ZSB2Mi4wLjNcbiAqIG1lYXN1cmUgc2l6ZSBvZiBlbGVtZW50c1xuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vKiBqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgc3RyaWN0OiB0cnVlLCB1bmRlZjogdHJ1ZSwgdW51c2VkOiB0cnVlICovXG4vKiBnbG9iYWxzIGNvbnNvbGU6IGZhbHNlICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi8gLyogZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggZmFjdG9yeSApO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cuZ2V0U2l6ZSA9IGZhY3RvcnkoKTtcbiAgfVxuXG59KSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBoZWxwZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8vIGdldCBhIG51bWJlciBmcm9tIGEgc3RyaW5nLCBub3QgYSBwZXJjZW50YWdlXG5mdW5jdGlvbiBnZXRTdHlsZVNpemUoIHZhbHVlICkge1xuICB2YXIgbnVtID0gcGFyc2VGbG9hdCggdmFsdWUgKTtcbiAgLy8gbm90IGEgcGVyY2VudCBsaWtlICcxMDAlJywgYW5kIGEgbnVtYmVyXG4gIHZhciBpc1ZhbGlkID0gdmFsdWUuaW5kZXhPZignJScpID09IC0xICYmICFpc05hTiggbnVtICk7XG4gIHJldHVybiBpc1ZhbGlkICYmIG51bTtcbn1cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnZhciBsb2dFcnJvciA9IHR5cGVvZiBjb25zb2xlID09ICd1bmRlZmluZWQnID8gbm9vcCA6XG4gIGZ1bmN0aW9uKCBtZXNzYWdlICkge1xuICAgIGNvbnNvbGUuZXJyb3IoIG1lc3NhZ2UgKTtcbiAgfTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWVhc3VyZW1lbnRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnZhciBtZWFzdXJlbWVudHMgPSBbXG4gICdwYWRkaW5nTGVmdCcsXG4gICdwYWRkaW5nUmlnaHQnLFxuICAncGFkZGluZ1RvcCcsXG4gICdwYWRkaW5nQm90dG9tJyxcbiAgJ21hcmdpbkxlZnQnLFxuICAnbWFyZ2luUmlnaHQnLFxuICAnbWFyZ2luVG9wJyxcbiAgJ21hcmdpbkJvdHRvbScsXG4gICdib3JkZXJMZWZ0V2lkdGgnLFxuICAnYm9yZGVyUmlnaHRXaWR0aCcsXG4gICdib3JkZXJUb3BXaWR0aCcsXG4gICdib3JkZXJCb3R0b21XaWR0aCdcbl07XG5cbnZhciBtZWFzdXJlbWVudHNMZW5ndGggPSBtZWFzdXJlbWVudHMubGVuZ3RoO1xuXG5mdW5jdGlvbiBnZXRaZXJvU2l6ZSgpIHtcbiAgdmFyIHNpemUgPSB7XG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIGlubmVyV2lkdGg6IDAsXG4gICAgaW5uZXJIZWlnaHQ6IDAsXG4gICAgb3V0ZXJXaWR0aDogMCxcbiAgICBvdXRlckhlaWdodDogMFxuICB9O1xuICBmb3IgKCB2YXIgaT0wOyBpIDwgbWVhc3VyZW1lbnRzTGVuZ3RoOyBpKysgKSB7XG4gICAgdmFyIG1lYXN1cmVtZW50ID0gbWVhc3VyZW1lbnRzW2ldO1xuICAgIHNpemVbIG1lYXN1cmVtZW50IF0gPSAwO1xuICB9XG4gIHJldHVybiBzaXplO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnZXRTdHlsZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vKipcbiAqIGdldFN0eWxlLCBnZXQgc3R5bGUgb2YgZWxlbWVudCwgY2hlY2sgZm9yIEZpcmVmb3ggYnVnXG4gKiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD01NDgzOTdcbiAqL1xuZnVuY3Rpb24gZ2V0U3R5bGUoIGVsZW0gKSB7XG4gIHZhciBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoIGVsZW0gKTtcbiAgaWYgKCAhc3R5bGUgKSB7XG4gICAgbG9nRXJyb3IoICdTdHlsZSByZXR1cm5lZCAnICsgc3R5bGUgK1xuICAgICAgJy4gQXJlIHlvdSBydW5uaW5nIHRoaXMgY29kZSBpbiBhIGhpZGRlbiBpZnJhbWUgb24gRmlyZWZveD8gJyArXG4gICAgICAnU2VlIGh0dHBzOi8vYml0Lmx5L2dldHNpemVidWcxJyApO1xuICB9XG4gIHJldHVybiBzdHlsZTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gc2V0dXAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxudmFyIGlzU2V0dXAgPSBmYWxzZTtcblxudmFyIGlzQm94U2l6ZU91dGVyO1xuXG4vKipcbiAqIHNldHVwXG4gKiBjaGVjayBpc0JveFNpemVyT3V0ZXJcbiAqIGRvIG9uIGZpcnN0IGdldFNpemUoKSByYXRoZXIgdGhhbiBvbiBwYWdlIGxvYWQgZm9yIEZpcmVmb3ggYnVnXG4gKi9cbmZ1bmN0aW9uIHNldHVwKCkge1xuICAvLyBzZXR1cCBvbmNlXG4gIGlmICggaXNTZXR1cCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaXNTZXR1cCA9IHRydWU7XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYm94IHNpemluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4gIC8qKlxuICAgKiBDaHJvbWUgJiBTYWZhcmkgbWVhc3VyZSB0aGUgb3V0ZXItd2lkdGggb24gc3R5bGUud2lkdGggb24gYm9yZGVyLWJveCBlbGVtc1xuICAgKiBJRTExICYgRmlyZWZveDwyOSBtZWFzdXJlcyB0aGUgaW5uZXItd2lkdGhcbiAgICovXG4gIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LnN0eWxlLndpZHRoID0gJzIwMHB4JztcbiAgZGl2LnN0eWxlLnBhZGRpbmcgPSAnMXB4IDJweCAzcHggNHB4JztcbiAgZGl2LnN0eWxlLmJvcmRlclN0eWxlID0gJ3NvbGlkJztcbiAgZGl2LnN0eWxlLmJvcmRlcldpZHRoID0gJzFweCAycHggM3B4IDRweCc7XG4gIGRpdi5zdHlsZS5ib3hTaXppbmcgPSAnYm9yZGVyLWJveCc7XG5cbiAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgYm9keS5hcHBlbmRDaGlsZCggZGl2ICk7XG4gIHZhciBzdHlsZSA9IGdldFN0eWxlKCBkaXYgKTtcbiAgLy8gcm91bmQgdmFsdWUgZm9yIGJyb3dzZXIgem9vbS4gZGVzYW5kcm8vbWFzb25yeSM5MjhcbiAgaXNCb3hTaXplT3V0ZXIgPSBNYXRoLnJvdW5kKCBnZXRTdHlsZVNpemUoIHN0eWxlLndpZHRoICkgKSA9PSAyMDA7XG4gIGdldFNpemUuaXNCb3hTaXplT3V0ZXIgPSBpc0JveFNpemVPdXRlcjtcblxuICBib2R5LnJlbW92ZUNoaWxkKCBkaXYgKTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2V0U2l6ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5mdW5jdGlvbiBnZXRTaXplKCBlbGVtICkge1xuICBzZXR1cCgpO1xuXG4gIC8vIHVzZSBxdWVyeVNlbGV0b3IgaWYgZWxlbSBpcyBzdHJpbmdcbiAgaWYgKCB0eXBlb2YgZWxlbSA9PSAnc3RyaW5nJyApIHtcbiAgICBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggZWxlbSApO1xuICB9XG5cbiAgLy8gZG8gbm90IHByb2NlZWQgb24gbm9uLW9iamVjdHNcbiAgaWYgKCAhZWxlbSB8fCB0eXBlb2YgZWxlbSAhPSAnb2JqZWN0JyB8fCAhZWxlbS5ub2RlVHlwZSApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgc3R5bGUgPSBnZXRTdHlsZSggZWxlbSApO1xuXG4gIC8vIGlmIGhpZGRlbiwgZXZlcnl0aGluZyBpcyAwXG4gIGlmICggc3R5bGUuZGlzcGxheSA9PSAnbm9uZScgKSB7XG4gICAgcmV0dXJuIGdldFplcm9TaXplKCk7XG4gIH1cblxuICB2YXIgc2l6ZSA9IHt9O1xuICBzaXplLndpZHRoID0gZWxlbS5vZmZzZXRXaWR0aDtcbiAgc2l6ZS5oZWlnaHQgPSBlbGVtLm9mZnNldEhlaWdodDtcblxuICB2YXIgaXNCb3JkZXJCb3ggPSBzaXplLmlzQm9yZGVyQm94ID0gc3R5bGUuYm94U2l6aW5nID09ICdib3JkZXItYm94JztcblxuICAvLyBnZXQgYWxsIG1lYXN1cmVtZW50c1xuICBmb3IgKCB2YXIgaT0wOyBpIDwgbWVhc3VyZW1lbnRzTGVuZ3RoOyBpKysgKSB7XG4gICAgdmFyIG1lYXN1cmVtZW50ID0gbWVhc3VyZW1lbnRzW2ldO1xuICAgIHZhciB2YWx1ZSA9IHN0eWxlWyBtZWFzdXJlbWVudCBdO1xuICAgIHZhciBudW0gPSBwYXJzZUZsb2F0KCB2YWx1ZSApO1xuICAgIC8vIGFueSAnYXV0bycsICdtZWRpdW0nIHZhbHVlIHdpbGwgYmUgMFxuICAgIHNpemVbIG1lYXN1cmVtZW50IF0gPSAhaXNOYU4oIG51bSApID8gbnVtIDogMDtcbiAgfVxuXG4gIHZhciBwYWRkaW5nV2lkdGggPSBzaXplLnBhZGRpbmdMZWZ0ICsgc2l6ZS5wYWRkaW5nUmlnaHQ7XG4gIHZhciBwYWRkaW5nSGVpZ2h0ID0gc2l6ZS5wYWRkaW5nVG9wICsgc2l6ZS5wYWRkaW5nQm90dG9tO1xuICB2YXIgbWFyZ2luV2lkdGggPSBzaXplLm1hcmdpbkxlZnQgKyBzaXplLm1hcmdpblJpZ2h0O1xuICB2YXIgbWFyZ2luSGVpZ2h0ID0gc2l6ZS5tYXJnaW5Ub3AgKyBzaXplLm1hcmdpbkJvdHRvbTtcbiAgdmFyIGJvcmRlcldpZHRoID0gc2l6ZS5ib3JkZXJMZWZ0V2lkdGggKyBzaXplLmJvcmRlclJpZ2h0V2lkdGg7XG4gIHZhciBib3JkZXJIZWlnaHQgPSBzaXplLmJvcmRlclRvcFdpZHRoICsgc2l6ZS5ib3JkZXJCb3R0b21XaWR0aDtcblxuICB2YXIgaXNCb3JkZXJCb3hTaXplT3V0ZXIgPSBpc0JvcmRlckJveCAmJiBpc0JveFNpemVPdXRlcjtcblxuICAvLyBvdmVyd3JpdGUgd2lkdGggYW5kIGhlaWdodCBpZiB3ZSBjYW4gZ2V0IGl0IGZyb20gc3R5bGVcbiAgdmFyIHN0eWxlV2lkdGggPSBnZXRTdHlsZVNpemUoIHN0eWxlLndpZHRoICk7XG4gIGlmICggc3R5bGVXaWR0aCAhPT0gZmFsc2UgKSB7XG4gICAgc2l6ZS53aWR0aCA9IHN0eWxlV2lkdGggK1xuICAgICAgLy8gYWRkIHBhZGRpbmcgYW5kIGJvcmRlciB1bmxlc3MgaXQncyBhbHJlYWR5IGluY2x1ZGluZyBpdFxuICAgICAgKCBpc0JvcmRlckJveFNpemVPdXRlciA/IDAgOiBwYWRkaW5nV2lkdGggKyBib3JkZXJXaWR0aCApO1xuICB9XG5cbiAgdmFyIHN0eWxlSGVpZ2h0ID0gZ2V0U3R5bGVTaXplKCBzdHlsZS5oZWlnaHQgKTtcbiAgaWYgKCBzdHlsZUhlaWdodCAhPT0gZmFsc2UgKSB7XG4gICAgc2l6ZS5oZWlnaHQgPSBzdHlsZUhlaWdodCArXG4gICAgICAvLyBhZGQgcGFkZGluZyBhbmQgYm9yZGVyIHVubGVzcyBpdCdzIGFscmVhZHkgaW5jbHVkaW5nIGl0XG4gICAgICAoIGlzQm9yZGVyQm94U2l6ZU91dGVyID8gMCA6IHBhZGRpbmdIZWlnaHQgKyBib3JkZXJIZWlnaHQgKTtcbiAgfVxuXG4gIHNpemUuaW5uZXJXaWR0aCA9IHNpemUud2lkdGggLSAoIHBhZGRpbmdXaWR0aCArIGJvcmRlcldpZHRoICk7XG4gIHNpemUuaW5uZXJIZWlnaHQgPSBzaXplLmhlaWdodCAtICggcGFkZGluZ0hlaWdodCArIGJvcmRlckhlaWdodCApO1xuXG4gIHNpemUub3V0ZXJXaWR0aCA9IHNpemUud2lkdGggKyBtYXJnaW5XaWR0aDtcbiAgc2l6ZS5vdXRlckhlaWdodCA9IHNpemUuaGVpZ2h0ICsgbWFyZ2luSGVpZ2h0O1xuXG4gIHJldHVybiBzaXplO1xufVxuXG5yZXR1cm4gZ2V0U2l6ZTtcblxufSk7XG4iLCIvKiFcbiAqIFxuICogICB0eXBlZC5qcyAtIEEgSmF2YVNjcmlwdCBUeXBpbmcgQW5pbWF0aW9uIExpYnJhcnlcbiAqICAgQXV0aG9yOiBNYXR0IEJvbGR0IDxtZUBtYXR0Ym9sZHQuY29tPlxuICogICBWZXJzaW9uOiB2Mi4wLjExXG4gKiAgIFVybDogaHR0cHM6Ly9naXRodWIuY29tL21hdHRib2xkdC90eXBlZC5qc1xuICogICBMaWNlbnNlKHMpOiBNSVRcbiAqIFxuICovXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJUeXBlZFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJUeXBlZFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9LFxuLyoqKioqKi8gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bG9hZGVkOiBmYWxzZVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdHZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cdFxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblx0XG5cdHZhciBfaW5pdGlhbGl6ZXJKcyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cdFxuXHR2YXIgX2h0bWxQYXJzZXJKcyA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cdFxuXHQvKipcblx0ICogV2VsY29tZSB0byBUeXBlZC5qcyFcblx0ICogQHBhcmFtIHtzdHJpbmd9IGVsZW1lbnRJZCBIVE1MIGVsZW1lbnQgSUQgX09SXyBIVE1MIGVsZW1lbnRcblx0ICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgb3B0aW9ucyBvYmplY3Rcblx0ICogQHJldHVybnMge29iamVjdH0gYSBuZXcgVHlwZWQgb2JqZWN0XG5cdCAqL1xuXHRcblx0dmFyIFR5cGVkID0gKGZ1bmN0aW9uICgpIHtcblx0ICBmdW5jdGlvbiBUeXBlZChlbGVtZW50SWQsIG9wdGlvbnMpIHtcblx0ICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUeXBlZCk7XG5cdFxuXHQgICAgLy8gSW5pdGlhbGl6ZSBpdCB1cFxuXHQgICAgX2luaXRpYWxpemVySnMuaW5pdGlhbGl6ZXIubG9hZCh0aGlzLCBvcHRpb25zLCBlbGVtZW50SWQpO1xuXHQgICAgLy8gQWxsIHN5c3RlbXMgZ28hXG5cdCAgICB0aGlzLmJlZ2luKCk7XG5cdCAgfVxuXHRcblx0ICAvKipcblx0ICAgKiBUb2dnbGUgc3RhcnQoKSBhbmQgc3RvcCgpIG9mIHRoZSBUeXBlZCBpbnN0YW5jZVxuXHQgICAqIEBwdWJsaWNcblx0ICAgKi9cblx0XG5cdCAgX2NyZWF0ZUNsYXNzKFR5cGVkLCBbe1xuXHQgICAga2V5OiAndG9nZ2xlJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiB0b2dnbGUoKSB7XG5cdCAgICAgIHRoaXMucGF1c2Uuc3RhdHVzID8gdGhpcy5zdGFydCgpIDogdGhpcy5zdG9wKCk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBTdG9wIHR5cGluZyAvIGJhY2tzcGFjaW5nIGFuZCBlbmFibGUgY3Vyc29yIGJsaW5raW5nXG5cdCAgICAgKiBAcHVibGljXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdzdG9wJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wKCkge1xuXHQgICAgICBpZiAodGhpcy50eXBpbmdDb21wbGV0ZSkgcmV0dXJuO1xuXHQgICAgICBpZiAodGhpcy5wYXVzZS5zdGF0dXMpIHJldHVybjtcblx0ICAgICAgdGhpcy50b2dnbGVCbGlua2luZyh0cnVlKTtcblx0ICAgICAgdGhpcy5wYXVzZS5zdGF0dXMgPSB0cnVlO1xuXHQgICAgICB0aGlzLm9wdGlvbnMub25TdG9wKHRoaXMuYXJyYXlQb3MsIHRoaXMpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogU3RhcnQgdHlwaW5nIC8gYmFja3NwYWNpbmcgYWZ0ZXIgYmVpbmcgc3RvcHBlZFxuXHQgICAgICogQHB1YmxpY1xuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnc3RhcnQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0KCkge1xuXHQgICAgICBpZiAodGhpcy50eXBpbmdDb21wbGV0ZSkgcmV0dXJuO1xuXHQgICAgICBpZiAoIXRoaXMucGF1c2Uuc3RhdHVzKSByZXR1cm47XG5cdCAgICAgIHRoaXMucGF1c2Uuc3RhdHVzID0gZmFsc2U7XG5cdCAgICAgIGlmICh0aGlzLnBhdXNlLnR5cGV3cml0ZSkge1xuXHQgICAgICAgIHRoaXMudHlwZXdyaXRlKHRoaXMucGF1c2UuY3VyU3RyaW5nLCB0aGlzLnBhdXNlLmN1clN0clBvcyk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgdGhpcy5iYWNrc3BhY2UodGhpcy5wYXVzZS5jdXJTdHJpbmcsIHRoaXMucGF1c2UuY3VyU3RyUG9zKTtcblx0ICAgICAgfVxuXHQgICAgICB0aGlzLm9wdGlvbnMub25TdGFydCh0aGlzLmFycmF5UG9zLCB0aGlzKTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIERlc3Ryb3kgdGhpcyBpbnN0YW5jZSBvZiBUeXBlZFxuXHQgICAgICogQHB1YmxpY1xuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnZGVzdHJveScsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcblx0ICAgICAgdGhpcy5yZXNldChmYWxzZSk7XG5cdCAgICAgIHRoaXMub3B0aW9ucy5vbkRlc3Ryb3kodGhpcyk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBSZXNldCBUeXBlZCBhbmQgb3B0aW9uYWxseSByZXN0YXJ0c1xuXHQgICAgICogQHBhcmFtIHtib29sZWFufSByZXN0YXJ0XG5cdCAgICAgKiBAcHVibGljXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdyZXNldCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XG5cdCAgICAgIHZhciByZXN0YXJ0ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGFyZ3VtZW50c1swXTtcblx0XG5cdCAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lb3V0KTtcblx0ICAgICAgdGhpcy5yZXBsYWNlVGV4dCgnJyk7XG5cdCAgICAgIGlmICh0aGlzLmN1cnNvciAmJiB0aGlzLmN1cnNvci5wYXJlbnROb2RlKSB7XG5cdCAgICAgICAgdGhpcy5jdXJzb3IucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmN1cnNvcik7XG5cdCAgICAgICAgdGhpcy5jdXJzb3IgPSBudWxsO1xuXHQgICAgICB9XG5cdCAgICAgIHRoaXMuc3RyUG9zID0gMDtcblx0ICAgICAgdGhpcy5hcnJheVBvcyA9IDA7XG5cdCAgICAgIHRoaXMuY3VyTG9vcCA9IDA7XG5cdCAgICAgIGlmIChyZXN0YXJ0KSB7XG5cdCAgICAgICAgdGhpcy5pbnNlcnRDdXJzb3IoKTtcblx0ICAgICAgICB0aGlzLm9wdGlvbnMub25SZXNldCh0aGlzKTtcblx0ICAgICAgICB0aGlzLmJlZ2luKCk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIEJlZ2lucyB0aGUgdHlwaW5nIGFuaW1hdGlvblxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2JlZ2luJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBiZWdpbigpIHtcblx0ICAgICAgdmFyIF90aGlzID0gdGhpcztcblx0XG5cdCAgICAgIHRoaXMub3B0aW9ucy5vbkJlZ2luKHRoaXMpO1xuXHQgICAgICB0aGlzLnR5cGluZ0NvbXBsZXRlID0gZmFsc2U7XG5cdCAgICAgIHRoaXMuc2h1ZmZsZVN0cmluZ3NJZk5lZWRlZCh0aGlzKTtcblx0ICAgICAgdGhpcy5pbnNlcnRDdXJzb3IoKTtcblx0ICAgICAgaWYgKHRoaXMuYmluZElucHV0Rm9jdXNFdmVudHMpIHRoaXMuYmluZEZvY3VzRXZlbnRzKCk7XG5cdCAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIHNvbWUgdGV4dCBpbiB0aGUgZWxlbWVudCwgaWYgeWVzIHN0YXJ0IGJ5IGJhY2tzcGFjaW5nIHRoZSBkZWZhdWx0IG1lc3NhZ2Vcblx0ICAgICAgICBpZiAoIV90aGlzLmN1cnJlbnRFbENvbnRlbnQgfHwgX3RoaXMuY3VycmVudEVsQ29udGVudC5sZW5ndGggPT09IDApIHtcblx0ICAgICAgICAgIF90aGlzLnR5cGV3cml0ZShfdGhpcy5zdHJpbmdzW190aGlzLnNlcXVlbmNlW190aGlzLmFycmF5UG9zXV0sIF90aGlzLnN0clBvcyk7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIC8vIFN0YXJ0IHR5cGluZ1xuXHQgICAgICAgICAgX3RoaXMuYmFja3NwYWNlKF90aGlzLmN1cnJlbnRFbENvbnRlbnQsIF90aGlzLmN1cnJlbnRFbENvbnRlbnQubGVuZ3RoKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH0sIHRoaXMuc3RhcnREZWxheSk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBDYWxsZWQgZm9yIGVhY2ggY2hhcmFjdGVyIHR5cGVkXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gY3VyU3RyaW5nIHRoZSBjdXJyZW50IHN0cmluZyBpbiB0aGUgc3RyaW5ncyBhcnJheVxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IGN1clN0clBvcyB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgY3VyU3RyaW5nXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAndHlwZXdyaXRlJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiB0eXBld3JpdGUoY3VyU3RyaW5nLCBjdXJTdHJQb3MpIHtcblx0ICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cdFxuXHQgICAgICBpZiAodGhpcy5mYWRlT3V0ICYmIHRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuZmFkZU91dENsYXNzKSkge1xuXHQgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmZhZGVPdXRDbGFzcyk7XG5cdCAgICAgICAgaWYgKHRoaXMuY3Vyc29yKSB0aGlzLmN1cnNvci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZmFkZU91dENsYXNzKTtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgdmFyIGh1bWFuaXplID0gdGhpcy5odW1hbml6ZXIodGhpcy50eXBlU3BlZWQpO1xuXHQgICAgICB2YXIgbnVtQ2hhcnMgPSAxO1xuXHRcblx0ICAgICAgaWYgKHRoaXMucGF1c2Uuc3RhdHVzID09PSB0cnVlKSB7XG5cdCAgICAgICAgdGhpcy5zZXRQYXVzZVN0YXR1cyhjdXJTdHJpbmcsIGN1clN0clBvcywgdHJ1ZSk7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICAvLyBjb250YWluIHR5cGluZyBmdW5jdGlvbiBpbiBhIHRpbWVvdXQgaHVtYW5pemUnZCBkZWxheVxuXHQgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAvLyBza2lwIG92ZXIgYW55IEhUTUwgY2hhcnNcblx0ICAgICAgICBjdXJTdHJQb3MgPSBfaHRtbFBhcnNlckpzLmh0bWxQYXJzZXIudHlwZUh0bWxDaGFycyhjdXJTdHJpbmcsIGN1clN0clBvcywgX3RoaXMyKTtcblx0XG5cdCAgICAgICAgdmFyIHBhdXNlVGltZSA9IDA7XG5cdCAgICAgICAgdmFyIHN1YnN0ciA9IGN1clN0cmluZy5zdWJzdHIoY3VyU3RyUG9zKTtcblx0ICAgICAgICAvLyBjaGVjayBmb3IgYW4gZXNjYXBlIGNoYXJhY3RlciBiZWZvcmUgYSBwYXVzZSB2YWx1ZVxuXHQgICAgICAgIC8vIGZvcm1hdDogXFxeXFxkKyAuLiBlZzogXjEwMDAgLi4gc2hvdWxkIGJlIGFibGUgdG8gcHJpbnQgdGhlIF4gdG9vIHVzaW5nIF5eXG5cdCAgICAgICAgLy8gc2luZ2xlIF4gYXJlIHJlbW92ZWQgZnJvbSBzdHJpbmdcblx0ICAgICAgICBpZiAoc3Vic3RyLmNoYXJBdCgwKSA9PT0gJ14nKSB7XG5cdCAgICAgICAgICBpZiAoL15cXF5cXGQrLy50ZXN0KHN1YnN0cikpIHtcblx0ICAgICAgICAgICAgdmFyIHNraXAgPSAxOyAvLyBza2lwIGF0IGxlYXN0IDFcblx0ICAgICAgICAgICAgc3Vic3RyID0gL1xcZCsvLmV4ZWMoc3Vic3RyKVswXTtcblx0ICAgICAgICAgICAgc2tpcCArPSBzdWJzdHIubGVuZ3RoO1xuXHQgICAgICAgICAgICBwYXVzZVRpbWUgPSBwYXJzZUludChzdWJzdHIpO1xuXHQgICAgICAgICAgICBfdGhpczIudGVtcG9yYXJ5UGF1c2UgPSB0cnVlO1xuXHQgICAgICAgICAgICBfdGhpczIub3B0aW9ucy5vblR5cGluZ1BhdXNlZChfdGhpczIuYXJyYXlQb3MsIF90aGlzMik7XG5cdCAgICAgICAgICAgIC8vIHN0cmlwIG91dCB0aGUgZXNjYXBlIGNoYXJhY3RlciBhbmQgcGF1c2UgdmFsdWUgc28gdGhleSdyZSBub3QgcHJpbnRlZFxuXHQgICAgICAgICAgICBjdXJTdHJpbmcgPSBjdXJTdHJpbmcuc3Vic3RyaW5nKDAsIGN1clN0clBvcykgKyBjdXJTdHJpbmcuc3Vic3RyaW5nKGN1clN0clBvcyArIHNraXApO1xuXHQgICAgICAgICAgICBfdGhpczIudG9nZ2xlQmxpbmtpbmcodHJ1ZSk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHRcblx0ICAgICAgICAvLyBjaGVjayBmb3Igc2tpcCBjaGFyYWN0ZXJzIGZvcm1hdHRlZCBhc1xuXHQgICAgICAgIC8vIFwidGhpcyBpcyBhIGBzdHJpbmcgdG8gcHJpbnQgTk9XYCAuLi5cIlxuXHQgICAgICAgIGlmIChzdWJzdHIuY2hhckF0KDApID09PSAnYCcpIHtcblx0ICAgICAgICAgIHdoaWxlIChjdXJTdHJpbmcuc3Vic3RyKGN1clN0clBvcyArIG51bUNoYXJzKS5jaGFyQXQoMCkgIT09ICdgJykge1xuXHQgICAgICAgICAgICBudW1DaGFycysrO1xuXHQgICAgICAgICAgICBpZiAoY3VyU3RyUG9zICsgbnVtQ2hhcnMgPiBjdXJTdHJpbmcubGVuZ3RoKSBicmVhaztcblx0ICAgICAgICAgIH1cblx0ICAgICAgICAgIC8vIHN0cmlwIG91dCB0aGUgZXNjYXBlIGNoYXJhY3RlcnMgYW5kIGFwcGVuZCBhbGwgdGhlIHN0cmluZyBpbiBiZXR3ZWVuXG5cdCAgICAgICAgICB2YXIgc3RyaW5nQmVmb3JlU2tpcCA9IGN1clN0cmluZy5zdWJzdHJpbmcoMCwgY3VyU3RyUG9zKTtcblx0ICAgICAgICAgIHZhciBzdHJpbmdTa2lwcGVkID0gY3VyU3RyaW5nLnN1YnN0cmluZyhzdHJpbmdCZWZvcmVTa2lwLmxlbmd0aCArIDEsIGN1clN0clBvcyArIG51bUNoYXJzKTtcblx0ICAgICAgICAgIHZhciBzdHJpbmdBZnRlclNraXAgPSBjdXJTdHJpbmcuc3Vic3RyaW5nKGN1clN0clBvcyArIG51bUNoYXJzICsgMSk7XG5cdCAgICAgICAgICBjdXJTdHJpbmcgPSBzdHJpbmdCZWZvcmVTa2lwICsgc3RyaW5nU2tpcHBlZCArIHN0cmluZ0FmdGVyU2tpcDtcblx0ICAgICAgICAgIG51bUNoYXJzLS07XG5cdCAgICAgICAgfVxuXHRcblx0ICAgICAgICAvLyB0aW1lb3V0IGZvciBhbnkgcGF1c2UgYWZ0ZXIgYSBjaGFyYWN0ZXJcblx0ICAgICAgICBfdGhpczIudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgLy8gQWNjb3VudHMgZm9yIGJsaW5raW5nIHdoaWxlIHBhdXNlZFxuXHQgICAgICAgICAgX3RoaXMyLnRvZ2dsZUJsaW5raW5nKGZhbHNlKTtcblx0XG5cdCAgICAgICAgICAvLyBXZSdyZSBkb25lIHdpdGggdGhpcyBzZW50ZW5jZSFcblx0ICAgICAgICAgIGlmIChjdXJTdHJQb3MgPj0gY3VyU3RyaW5nLmxlbmd0aCkge1xuXHQgICAgICAgICAgICBfdGhpczIuZG9uZVR5cGluZyhjdXJTdHJpbmcsIGN1clN0clBvcyk7XG5cdCAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICBfdGhpczIua2VlcFR5cGluZyhjdXJTdHJpbmcsIGN1clN0clBvcywgbnVtQ2hhcnMpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgICAgLy8gZW5kIG9mIGNoYXJhY3RlciBwYXVzZVxuXHQgICAgICAgICAgaWYgKF90aGlzMi50ZW1wb3JhcnlQYXVzZSkge1xuXHQgICAgICAgICAgICBfdGhpczIudGVtcG9yYXJ5UGF1c2UgPSBmYWxzZTtcblx0ICAgICAgICAgICAgX3RoaXMyLm9wdGlvbnMub25UeXBpbmdSZXN1bWVkKF90aGlzMi5hcnJheVBvcywgX3RoaXMyKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9LCBwYXVzZVRpbWUpO1xuXHRcblx0ICAgICAgICAvLyBodW1hbml6ZWQgdmFsdWUgZm9yIHR5cGluZ1xuXHQgICAgICB9LCBodW1hbml6ZSk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBDb250aW51ZSB0byB0aGUgbmV4dCBzdHJpbmcgJiBiZWdpbiB0eXBpbmdcblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJTdHJpbmcgdGhlIGN1cnJlbnQgc3RyaW5nIGluIHRoZSBzdHJpbmdzIGFycmF5XG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gY3VyU3RyUG9zIHRoZSBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBjdXJTdHJpbmdcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdrZWVwVHlwaW5nJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBrZWVwVHlwaW5nKGN1clN0cmluZywgY3VyU3RyUG9zLCBudW1DaGFycykge1xuXHQgICAgICAvLyBjYWxsIGJlZm9yZSBmdW5jdGlvbnMgaWYgYXBwbGljYWJsZVxuXHQgICAgICBpZiAoY3VyU3RyUG9zID09PSAwKSB7XG5cdCAgICAgICAgdGhpcy50b2dnbGVCbGlua2luZyhmYWxzZSk7XG5cdCAgICAgICAgdGhpcy5vcHRpb25zLnByZVN0cmluZ1R5cGVkKHRoaXMuYXJyYXlQb3MsIHRoaXMpO1xuXHQgICAgICB9XG5cdCAgICAgIC8vIHN0YXJ0IHR5cGluZyBlYWNoIG5ldyBjaGFyIGludG8gZXhpc3Rpbmcgc3RyaW5nXG5cdCAgICAgIC8vIGN1clN0cmluZzogYXJnLCB0aGlzLmVsLmh0bWw6IG9yaWdpbmFsIHRleHQgaW5zaWRlIGVsZW1lbnRcblx0ICAgICAgY3VyU3RyUG9zICs9IG51bUNoYXJzO1xuXHQgICAgICB2YXIgbmV4dFN0cmluZyA9IGN1clN0cmluZy5zdWJzdHIoMCwgY3VyU3RyUG9zKTtcblx0ICAgICAgdGhpcy5yZXBsYWNlVGV4dChuZXh0U3RyaW5nKTtcblx0ICAgICAgLy8gbG9vcCB0aGUgZnVuY3Rpb25cblx0ICAgICAgdGhpcy50eXBld3JpdGUoY3VyU3RyaW5nLCBjdXJTdHJQb3MpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogV2UncmUgZG9uZSB0eXBpbmcgdGhlIGN1cnJlbnQgc3RyaW5nXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gY3VyU3RyaW5nIHRoZSBjdXJyZW50IHN0cmluZyBpbiB0aGUgc3RyaW5ncyBhcnJheVxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IGN1clN0clBvcyB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgY3VyU3RyaW5nXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnZG9uZVR5cGluZycsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gZG9uZVR5cGluZyhjdXJTdHJpbmcsIGN1clN0clBvcykge1xuXHQgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblx0XG5cdCAgICAgIC8vIGZpcmVzIGNhbGxiYWNrIGZ1bmN0aW9uXG5cdCAgICAgIHRoaXMub3B0aW9ucy5vblN0cmluZ1R5cGVkKHRoaXMuYXJyYXlQb3MsIHRoaXMpO1xuXHQgICAgICB0aGlzLnRvZ2dsZUJsaW5raW5nKHRydWUpO1xuXHQgICAgICAvLyBpcyB0aGlzIHRoZSBmaW5hbCBzdHJpbmdcblx0ICAgICAgaWYgKHRoaXMuYXJyYXlQb3MgPT09IHRoaXMuc3RyaW5ncy5sZW5ndGggLSAxKSB7XG5cdCAgICAgICAgLy8gY2FsbGJhY2sgdGhhdCBvY2N1cnMgb24gdGhlIGxhc3QgdHlwZWQgc3RyaW5nXG5cdCAgICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuXHQgICAgICAgIC8vIHF1aXQgaWYgd2Ugd29udCBsb29wIGJhY2tcblx0ICAgICAgICBpZiAodGhpcy5sb29wID09PSBmYWxzZSB8fCB0aGlzLmN1ckxvb3AgPT09IHRoaXMubG9vcENvdW50KSB7XG5cdCAgICAgICAgICByZXR1cm47XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIF90aGlzMy5iYWNrc3BhY2UoY3VyU3RyaW5nLCBjdXJTdHJQb3MpO1xuXHQgICAgICB9LCB0aGlzLmJhY2tEZWxheSk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBCYWNrc3BhY2VzIDEgY2hhcmFjdGVyIGF0IGEgdGltZVxuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGN1clN0cmluZyB0aGUgY3VycmVudCBzdHJpbmcgaW4gdGhlIHN0cmluZ3MgYXJyYXlcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJTdHJQb3MgdGhlIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGN1clN0cmluZ1xuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2JhY2tzcGFjZScsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gYmFja3NwYWNlKGN1clN0cmluZywgY3VyU3RyUG9zKSB7XG5cdCAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXHRcblx0ICAgICAgaWYgKHRoaXMucGF1c2Uuc3RhdHVzID09PSB0cnVlKSB7XG5cdCAgICAgICAgdGhpcy5zZXRQYXVzZVN0YXR1cyhjdXJTdHJpbmcsIGN1clN0clBvcywgdHJ1ZSk7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdCAgICAgIGlmICh0aGlzLmZhZGVPdXQpIHJldHVybiB0aGlzLmluaXRGYWRlT3V0KCk7XG5cdFxuXHQgICAgICB0aGlzLnRvZ2dsZUJsaW5raW5nKGZhbHNlKTtcblx0ICAgICAgdmFyIGh1bWFuaXplID0gdGhpcy5odW1hbml6ZXIodGhpcy5iYWNrU3BlZWQpO1xuXHRcblx0ICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgY3VyU3RyUG9zID0gX2h0bWxQYXJzZXJKcy5odG1sUGFyc2VyLmJhY2tTcGFjZUh0bWxDaGFycyhjdXJTdHJpbmcsIGN1clN0clBvcywgX3RoaXM0KTtcblx0ICAgICAgICAvLyByZXBsYWNlIHRleHQgd2l0aCBiYXNlIHRleHQgKyB0eXBlZCBjaGFyYWN0ZXJzXG5cdCAgICAgICAgdmFyIGN1clN0cmluZ0F0UG9zaXRpb24gPSBjdXJTdHJpbmcuc3Vic3RyKDAsIGN1clN0clBvcyk7XG5cdCAgICAgICAgX3RoaXM0LnJlcGxhY2VUZXh0KGN1clN0cmluZ0F0UG9zaXRpb24pO1xuXHRcblx0ICAgICAgICAvLyBpZiBzbWFydEJhY2sgaXMgZW5hYmxlZFxuXHQgICAgICAgIGlmIChfdGhpczQuc21hcnRCYWNrc3BhY2UpIHtcblx0ICAgICAgICAgIC8vIHRoZSByZW1haW5pbmcgcGFydCBvZiB0aGUgY3VycmVudCBzdHJpbmcgaXMgZXF1YWwgb2YgdGhlIHNhbWUgcGFydCBvZiB0aGUgbmV3IHN0cmluZ1xuXHQgICAgICAgICAgdmFyIG5leHRTdHJpbmcgPSBfdGhpczQuc3RyaW5nc1tfdGhpczQuYXJyYXlQb3MgKyAxXTtcblx0ICAgICAgICAgIGlmIChuZXh0U3RyaW5nICYmIGN1clN0cmluZ0F0UG9zaXRpb24gPT09IG5leHRTdHJpbmcuc3Vic3RyKDAsIGN1clN0clBvcykpIHtcblx0ICAgICAgICAgICAgX3RoaXM0LnN0b3BOdW0gPSBjdXJTdHJQb3M7XG5cdCAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICBfdGhpczQuc3RvcE51bSA9IDA7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHRcblx0ICAgICAgICAvLyBpZiB0aGUgbnVtYmVyIChpZCBvZiBjaGFyYWN0ZXIgaW4gY3VycmVudCBzdHJpbmcpIGlzXG5cdCAgICAgICAgLy8gbGVzcyB0aGFuIHRoZSBzdG9wIG51bWJlciwga2VlcCBnb2luZ1xuXHQgICAgICAgIGlmIChjdXJTdHJQb3MgPiBfdGhpczQuc3RvcE51bSkge1xuXHQgICAgICAgICAgLy8gc3VidHJhY3QgY2hhcmFjdGVycyBvbmUgYnkgb25lXG5cdCAgICAgICAgICBjdXJTdHJQb3MtLTtcblx0ICAgICAgICAgIC8vIGxvb3AgdGhlIGZ1bmN0aW9uXG5cdCAgICAgICAgICBfdGhpczQuYmFja3NwYWNlKGN1clN0cmluZywgY3VyU3RyUG9zKTtcblx0ICAgICAgICB9IGVsc2UgaWYgKGN1clN0clBvcyA8PSBfdGhpczQuc3RvcE51bSkge1xuXHQgICAgICAgICAgLy8gaWYgdGhlIHN0b3AgbnVtYmVyIGhhcyBiZWVuIHJlYWNoZWQsIGluY3JlYXNlXG5cdCAgICAgICAgICAvLyBhcnJheSBwb3NpdGlvbiB0byBuZXh0IHN0cmluZ1xuXHQgICAgICAgICAgX3RoaXM0LmFycmF5UG9zKys7XG5cdCAgICAgICAgICAvLyBXaGVuIGxvb3BpbmcsIGJlZ2luIGF0IHRoZSBiZWdpbm5pbmcgYWZ0ZXIgYmFja3NwYWNlIGNvbXBsZXRlXG5cdCAgICAgICAgICBpZiAoX3RoaXM0LmFycmF5UG9zID09PSBfdGhpczQuc3RyaW5ncy5sZW5ndGgpIHtcblx0ICAgICAgICAgICAgX3RoaXM0LmFycmF5UG9zID0gMDtcblx0ICAgICAgICAgICAgX3RoaXM0Lm9wdGlvbnMub25MYXN0U3RyaW5nQmFja3NwYWNlZCgpO1xuXHQgICAgICAgICAgICBfdGhpczQuc2h1ZmZsZVN0cmluZ3NJZk5lZWRlZCgpO1xuXHQgICAgICAgICAgICBfdGhpczQuYmVnaW4oKTtcblx0ICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIF90aGlzNC50eXBld3JpdGUoX3RoaXM0LnN0cmluZ3NbX3RoaXM0LnNlcXVlbmNlW190aGlzNC5hcnJheVBvc11dLCBjdXJTdHJQb3MpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICAvLyBodW1hbml6ZWQgdmFsdWUgZm9yIHR5cGluZ1xuXHQgICAgICB9LCBodW1hbml6ZSk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBGdWxsIGFuaW1hdGlvbiBpcyBjb21wbGV0ZVxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2NvbXBsZXRlJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcblx0ICAgICAgdGhpcy5vcHRpb25zLm9uQ29tcGxldGUodGhpcyk7XG5cdCAgICAgIGlmICh0aGlzLmxvb3ApIHtcblx0ICAgICAgICB0aGlzLmN1ckxvb3ArKztcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICB0aGlzLnR5cGluZ0NvbXBsZXRlID0gdHJ1ZTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogSGFzIHRoZSB0eXBpbmcgYmVlbiBzdG9wcGVkXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gY3VyU3RyaW5nIHRoZSBjdXJyZW50IHN0cmluZyBpbiB0aGUgc3RyaW5ncyBhcnJheVxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IGN1clN0clBvcyB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgY3VyU3RyaW5nXG5cdCAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzVHlwaW5nXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnc2V0UGF1c2VTdGF0dXMnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFBhdXNlU3RhdHVzKGN1clN0cmluZywgY3VyU3RyUG9zLCBpc1R5cGluZykge1xuXHQgICAgICB0aGlzLnBhdXNlLnR5cGV3cml0ZSA9IGlzVHlwaW5nO1xuXHQgICAgICB0aGlzLnBhdXNlLmN1clN0cmluZyA9IGN1clN0cmluZztcblx0ICAgICAgdGhpcy5wYXVzZS5jdXJTdHJQb3MgPSBjdXJTdHJQb3M7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBUb2dnbGUgdGhlIGJsaW5raW5nIGN1cnNvclxuXHQgICAgICogQHBhcmFtIHtib29sZWFufSBpc0JsaW5raW5nXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAndG9nZ2xlQmxpbmtpbmcnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHRvZ2dsZUJsaW5raW5nKGlzQmxpbmtpbmcpIHtcblx0ICAgICAgaWYgKCF0aGlzLmN1cnNvcikgcmV0dXJuO1xuXHQgICAgICAvLyBpZiBpbiBwYXVzZWQgc3RhdGUsIGRvbid0IHRvZ2dsZSBibGlua2luZyBhIDJuZCB0aW1lXG5cdCAgICAgIGlmICh0aGlzLnBhdXNlLnN0YXR1cykgcmV0dXJuO1xuXHQgICAgICBpZiAodGhpcy5jdXJzb3JCbGlua2luZyA9PT0gaXNCbGlua2luZykgcmV0dXJuO1xuXHQgICAgICB0aGlzLmN1cnNvckJsaW5raW5nID0gaXNCbGlua2luZztcblx0ICAgICAgaWYgKGlzQmxpbmtpbmcpIHtcblx0ICAgICAgICB0aGlzLmN1cnNvci5jbGFzc0xpc3QuYWRkKCd0eXBlZC1jdXJzb3ItLWJsaW5rJyk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgdGhpcy5jdXJzb3IuY2xhc3NMaXN0LnJlbW92ZSgndHlwZWQtY3Vyc29yLS1ibGluaycpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBTcGVlZCBpbiBNUyB0byB0eXBlXG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gc3BlZWRcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdodW1hbml6ZXInLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGh1bWFuaXplcihzcGVlZCkge1xuXHQgICAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogc3BlZWQgLyAyKSArIHNwZWVkO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogU2h1ZmZsZSB0aGUgc2VxdWVuY2Ugb2YgdGhlIHN0cmluZ3MgYXJyYXlcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdzaHVmZmxlU3RyaW5nc0lmTmVlZGVkJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBzaHVmZmxlU3RyaW5nc0lmTmVlZGVkKCkge1xuXHQgICAgICBpZiAoIXRoaXMuc2h1ZmZsZSkgcmV0dXJuO1xuXHQgICAgICB0aGlzLnNlcXVlbmNlID0gdGhpcy5zZXF1ZW5jZS5zb3J0KGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAtIDAuNTtcblx0ICAgICAgfSk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBBZGRzIGEgQ1NTIGNsYXNzIHRvIGZhZGUgb3V0IGN1cnJlbnQgc3RyaW5nXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnaW5pdEZhZGVPdXQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGluaXRGYWRlT3V0KCkge1xuXHQgICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblx0XG5cdCAgICAgIHRoaXMuZWwuY2xhc3NOYW1lICs9ICcgJyArIHRoaXMuZmFkZU91dENsYXNzO1xuXHQgICAgICBpZiAodGhpcy5jdXJzb3IpIHRoaXMuY3Vyc29yLmNsYXNzTmFtZSArPSAnICcgKyB0aGlzLmZhZGVPdXRDbGFzcztcblx0ICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIF90aGlzNS5hcnJheVBvcysrO1xuXHQgICAgICAgIF90aGlzNS5yZXBsYWNlVGV4dCgnJyk7XG5cdFxuXHQgICAgICAgIC8vIFJlc2V0cyBjdXJyZW50IHN0cmluZyBpZiBlbmQgb2YgbG9vcCByZWFjaGVkXG5cdCAgICAgICAgaWYgKF90aGlzNS5zdHJpbmdzLmxlbmd0aCA+IF90aGlzNS5hcnJheVBvcykge1xuXHQgICAgICAgICAgX3RoaXM1LnR5cGV3cml0ZShfdGhpczUuc3RyaW5nc1tfdGhpczUuc2VxdWVuY2VbX3RoaXM1LmFycmF5UG9zXV0sIDApO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICBfdGhpczUudHlwZXdyaXRlKF90aGlzNS5zdHJpbmdzWzBdLCAwKTtcblx0ICAgICAgICAgIF90aGlzNS5hcnJheVBvcyA9IDA7XG5cdCAgICAgICAgfVxuXHQgICAgICB9LCB0aGlzLmZhZGVPdXREZWxheSk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBSZXBsYWNlcyBjdXJyZW50IHRleHQgaW4gdGhlIEhUTUwgZWxlbWVudFxuXHQgICAgICogZGVwZW5kaW5nIG9uIGVsZW1lbnQgdHlwZVxuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ3JlcGxhY2VUZXh0Jyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiByZXBsYWNlVGV4dChzdHIpIHtcblx0ICAgICAgaWYgKHRoaXMuYXR0cikge1xuXHQgICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKHRoaXMuYXR0ciwgc3RyKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBpZiAodGhpcy5pc0lucHV0KSB7XG5cdCAgICAgICAgICB0aGlzLmVsLnZhbHVlID0gc3RyO1xuXHQgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jb250ZW50VHlwZSA9PT0gJ2h0bWwnKSB7XG5cdCAgICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9IHN0cjtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgdGhpcy5lbC50ZXh0Q29udGVudCA9IHN0cjtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIElmIHVzaW5nIGlucHV0IGVsZW1lbnRzLCBiaW5kIGZvY3VzIGluIG9yZGVyIHRvXG5cdCAgICAgKiBzdGFydCBhbmQgc3RvcCB0aGUgYW5pbWF0aW9uXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnYmluZEZvY3VzRXZlbnRzJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBiaW5kRm9jdXNFdmVudHMoKSB7XG5cdCAgICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXHRcblx0ICAgICAgaWYgKCF0aGlzLmlzSW5wdXQpIHJldHVybjtcblx0ICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uIChlKSB7XG5cdCAgICAgICAgX3RoaXM2LnN0b3AoKTtcblx0ICAgICAgfSk7XG5cdCAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uIChlKSB7XG5cdCAgICAgICAgaWYgKF90aGlzNi5lbC52YWx1ZSAmJiBfdGhpczYuZWwudmFsdWUubGVuZ3RoICE9PSAwKSB7XG5cdCAgICAgICAgICByZXR1cm47XG5cdCAgICAgICAgfVxuXHQgICAgICAgIF90aGlzNi5zdGFydCgpO1xuXHQgICAgICB9KTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIE9uIGluaXQsIGluc2VydCB0aGUgY3Vyc29yIGVsZW1lbnRcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdpbnNlcnRDdXJzb3InLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGluc2VydEN1cnNvcigpIHtcblx0ICAgICAgaWYgKCF0aGlzLnNob3dDdXJzb3IpIHJldHVybjtcblx0ICAgICAgaWYgKHRoaXMuY3Vyc29yKSByZXR1cm47XG5cdCAgICAgIHRoaXMuY3Vyc29yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHQgICAgICB0aGlzLmN1cnNvci5jbGFzc05hbWUgPSAndHlwZWQtY3Vyc29yJztcblx0ICAgICAgdGhpcy5jdXJzb3IuaW5uZXJIVE1MID0gdGhpcy5jdXJzb3JDaGFyO1xuXHQgICAgICB0aGlzLmVsLnBhcmVudE5vZGUgJiYgdGhpcy5lbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLmN1cnNvciwgdGhpcy5lbC5uZXh0U2libGluZyk7XG5cdCAgICB9XG5cdCAgfV0pO1xuXHRcblx0ICByZXR1cm4gVHlwZWQ7XG5cdH0pKCk7XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBUeXBlZDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdHZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cdFxuXHR2YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXHRcblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXHRcblx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cdFxuXHR2YXIgX2RlZmF1bHRzSnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXHRcblx0dmFyIF9kZWZhdWx0c0pzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmF1bHRzSnMpO1xuXHRcblx0LyoqXG5cdCAqIEluaXRpYWxpemUgdGhlIFR5cGVkIG9iamVjdFxuXHQgKi9cblx0XG5cdHZhciBJbml0aWFsaXplciA9IChmdW5jdGlvbiAoKSB7XG5cdCAgZnVuY3Rpb24gSW5pdGlhbGl6ZXIoKSB7XG5cdCAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5pdGlhbGl6ZXIpO1xuXHQgIH1cblx0XG5cdCAgX2NyZWF0ZUNsYXNzKEluaXRpYWxpemVyLCBbe1xuXHQgICAga2V5OiAnbG9hZCcsXG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBMb2FkIHVwIGRlZmF1bHRzICYgb3B0aW9ucyBvbiB0aGUgVHlwZWQgaW5zdGFuY2Vcblx0ICAgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGYgaW5zdGFuY2Ugb2YgVHlwZWRcblx0ICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIG9wdGlvbnMgb2JqZWN0XG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gZWxlbWVudElkIEhUTUwgZWxlbWVudCBJRCBfT1JfIGluc3RhbmNlIG9mIEhUTUwgZWxlbWVudFxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHRcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkKHNlbGYsIG9wdGlvbnMsIGVsZW1lbnRJZCkge1xuXHQgICAgICAvLyBjaG9zZW4gZWxlbWVudCB0byBtYW5pcHVsYXRlIHRleHRcblx0ICAgICAgaWYgKHR5cGVvZiBlbGVtZW50SWQgPT09ICdzdHJpbmcnKSB7XG5cdCAgICAgICAgc2VsZi5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudElkKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBzZWxmLmVsID0gZWxlbWVudElkO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICBzZWxmLm9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgX2RlZmF1bHRzSnMyWydkZWZhdWx0J10sIG9wdGlvbnMpO1xuXHRcblx0ICAgICAgLy8gYXR0cmlidXRlIHRvIHR5cGUgaW50b1xuXHQgICAgICBzZWxmLmlzSW5wdXQgPSBzZWxmLmVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0Jztcblx0ICAgICAgc2VsZi5hdHRyID0gc2VsZi5vcHRpb25zLmF0dHI7XG5cdCAgICAgIHNlbGYuYmluZElucHV0Rm9jdXNFdmVudHMgPSBzZWxmLm9wdGlvbnMuYmluZElucHV0Rm9jdXNFdmVudHM7XG5cdFxuXHQgICAgICAvLyBzaG93IGN1cnNvclxuXHQgICAgICBzZWxmLnNob3dDdXJzb3IgPSBzZWxmLmlzSW5wdXQgPyBmYWxzZSA6IHNlbGYub3B0aW9ucy5zaG93Q3Vyc29yO1xuXHRcblx0ICAgICAgLy8gY3VzdG9tIGN1cnNvclxuXHQgICAgICBzZWxmLmN1cnNvckNoYXIgPSBzZWxmLm9wdGlvbnMuY3Vyc29yQ2hhcjtcblx0XG5cdCAgICAgIC8vIElzIHRoZSBjdXJzb3IgYmxpbmtpbmdcblx0ICAgICAgc2VsZi5jdXJzb3JCbGlua2luZyA9IHRydWU7XG5cdFxuXHQgICAgICAvLyB0ZXh0IGNvbnRlbnQgb2YgZWxlbWVudFxuXHQgICAgICBzZWxmLmVsQ29udGVudCA9IHNlbGYuYXR0ciA/IHNlbGYuZWwuZ2V0QXR0cmlidXRlKHNlbGYuYXR0cikgOiBzZWxmLmVsLnRleHRDb250ZW50O1xuXHRcblx0ICAgICAgLy8gaHRtbCBvciBwbGFpbiB0ZXh0XG5cdCAgICAgIHNlbGYuY29udGVudFR5cGUgPSBzZWxmLm9wdGlvbnMuY29udGVudFR5cGU7XG5cdFxuXHQgICAgICAvLyB0eXBpbmcgc3BlZWRcblx0ICAgICAgc2VsZi50eXBlU3BlZWQgPSBzZWxmLm9wdGlvbnMudHlwZVNwZWVkO1xuXHRcblx0ICAgICAgLy8gYWRkIGEgZGVsYXkgYmVmb3JlIHR5cGluZyBzdGFydHNcblx0ICAgICAgc2VsZi5zdGFydERlbGF5ID0gc2VsZi5vcHRpb25zLnN0YXJ0RGVsYXk7XG5cdFxuXHQgICAgICAvLyBiYWNrc3BhY2luZyBzcGVlZFxuXHQgICAgICBzZWxmLmJhY2tTcGVlZCA9IHNlbGYub3B0aW9ucy5iYWNrU3BlZWQ7XG5cdFxuXHQgICAgICAvLyBvbmx5IGJhY2tzcGFjZSB3aGF0IGRvZXNuJ3QgbWF0Y2ggdGhlIHByZXZpb3VzIHN0cmluZ1xuXHQgICAgICBzZWxmLnNtYXJ0QmFja3NwYWNlID0gc2VsZi5vcHRpb25zLnNtYXJ0QmFja3NwYWNlO1xuXHRcblx0ICAgICAgLy8gYW1vdW50IG9mIHRpbWUgdG8gd2FpdCBiZWZvcmUgYmFja3NwYWNpbmdcblx0ICAgICAgc2VsZi5iYWNrRGVsYXkgPSBzZWxmLm9wdGlvbnMuYmFja0RlbGF5O1xuXHRcblx0ICAgICAgLy8gRmFkZSBvdXQgaW5zdGVhZCBvZiBiYWNrc3BhY2Vcblx0ICAgICAgc2VsZi5mYWRlT3V0ID0gc2VsZi5vcHRpb25zLmZhZGVPdXQ7XG5cdCAgICAgIHNlbGYuZmFkZU91dENsYXNzID0gc2VsZi5vcHRpb25zLmZhZGVPdXRDbGFzcztcblx0ICAgICAgc2VsZi5mYWRlT3V0RGVsYXkgPSBzZWxmLm9wdGlvbnMuZmFkZU91dERlbGF5O1xuXHRcblx0ICAgICAgLy8gdmFyaWFibGUgdG8gY2hlY2sgd2hldGhlciB0eXBpbmcgaXMgY3VycmVudGx5IHBhdXNlZFxuXHQgICAgICBzZWxmLmlzUGF1c2VkID0gZmFsc2U7XG5cdFxuXHQgICAgICAvLyBpbnB1dCBzdHJpbmdzIG9mIHRleHRcblx0ICAgICAgc2VsZi5zdHJpbmdzID0gc2VsZi5vcHRpb25zLnN0cmluZ3MubWFwKGZ1bmN0aW9uIChzKSB7XG5cdCAgICAgICAgcmV0dXJuIHMudHJpbSgpO1xuXHQgICAgICB9KTtcblx0XG5cdCAgICAgIC8vIGRpdiBjb250YWluaW5nIHN0cmluZ3Ncblx0ICAgICAgaWYgKHR5cGVvZiBzZWxmLm9wdGlvbnMuc3RyaW5nc0VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG5cdCAgICAgICAgc2VsZi5zdHJpbmdzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZi5vcHRpb25zLnN0cmluZ3NFbGVtZW50KTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBzZWxmLnN0cmluZ3NFbGVtZW50ID0gc2VsZi5vcHRpb25zLnN0cmluZ3NFbGVtZW50O1xuXHQgICAgICB9XG5cdFxuXHQgICAgICBpZiAoc2VsZi5zdHJpbmdzRWxlbWVudCkge1xuXHQgICAgICAgIHNlbGYuc3RyaW5ncyA9IFtdO1xuXHQgICAgICAgIHNlbGYuc3RyaW5nc0VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0ICAgICAgICB2YXIgc3RyaW5ncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShzZWxmLnN0cmluZ3NFbGVtZW50LmNoaWxkcmVuKTtcblx0ICAgICAgICB2YXIgc3RyaW5nc0xlbmd0aCA9IHN0cmluZ3MubGVuZ3RoO1xuXHRcblx0ICAgICAgICBpZiAoc3RyaW5nc0xlbmd0aCkge1xuXHQgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHJpbmdzTGVuZ3RoOyBpICs9IDEpIHtcblx0ICAgICAgICAgICAgdmFyIHN0cmluZ0VsID0gc3RyaW5nc1tpXTtcblx0ICAgICAgICAgICAgc2VsZi5zdHJpbmdzLnB1c2goc3RyaW5nRWwuaW5uZXJIVE1MLnRyaW0oKSk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdFxuXHQgICAgICAvLyBjaGFyYWN0ZXIgbnVtYmVyIHBvc2l0aW9uIG9mIGN1cnJlbnQgc3RyaW5nXG5cdCAgICAgIHNlbGYuc3RyUG9zID0gMDtcblx0XG5cdCAgICAgIC8vIGN1cnJlbnQgYXJyYXkgcG9zaXRpb25cblx0ICAgICAgc2VsZi5hcnJheVBvcyA9IDA7XG5cdFxuXHQgICAgICAvLyBpbmRleCBvZiBzdHJpbmcgdG8gc3RvcCBiYWNrc3BhY2luZyBvblxuXHQgICAgICBzZWxmLnN0b3BOdW0gPSAwO1xuXHRcblx0ICAgICAgLy8gTG9vcGluZyBsb2dpY1xuXHQgICAgICBzZWxmLmxvb3AgPSBzZWxmLm9wdGlvbnMubG9vcDtcblx0ICAgICAgc2VsZi5sb29wQ291bnQgPSBzZWxmLm9wdGlvbnMubG9vcENvdW50O1xuXHQgICAgICBzZWxmLmN1ckxvb3AgPSAwO1xuXHRcblx0ICAgICAgLy8gc2h1ZmZsZSB0aGUgc3RyaW5nc1xuXHQgICAgICBzZWxmLnNodWZmbGUgPSBzZWxmLm9wdGlvbnMuc2h1ZmZsZTtcblx0ICAgICAgLy8gdGhlIG9yZGVyIG9mIHN0cmluZ3Ncblx0ICAgICAgc2VsZi5zZXF1ZW5jZSA9IFtdO1xuXHRcblx0ICAgICAgc2VsZi5wYXVzZSA9IHtcblx0ICAgICAgICBzdGF0dXM6IGZhbHNlLFxuXHQgICAgICAgIHR5cGV3cml0ZTogdHJ1ZSxcblx0ICAgICAgICBjdXJTdHJpbmc6ICcnLFxuXHQgICAgICAgIGN1clN0clBvczogMFxuXHQgICAgICB9O1xuXHRcblx0ICAgICAgLy8gV2hlbiB0aGUgdHlwaW5nIGlzIGNvbXBsZXRlICh3aGVuIG5vdCBsb29wZWQpXG5cdCAgICAgIHNlbGYudHlwaW5nQ29tcGxldGUgPSBmYWxzZTtcblx0XG5cdCAgICAgIC8vIFNldCB0aGUgb3JkZXIgaW4gd2hpY2ggdGhlIHN0cmluZ3MgYXJlIHR5cGVkXG5cdCAgICAgIGZvciAodmFyIGkgaW4gc2VsZi5zdHJpbmdzKSB7XG5cdCAgICAgICAgc2VsZi5zZXF1ZW5jZVtpXSA9IGk7XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIC8vIElmIHRoZXJlIGlzIHNvbWUgdGV4dCBpbiB0aGUgZWxlbWVudFxuXHQgICAgICBzZWxmLmN1cnJlbnRFbENvbnRlbnQgPSB0aGlzLmdldEN1cnJlbnRFbENvbnRlbnQoc2VsZik7XG5cdFxuXHQgICAgICBzZWxmLmF1dG9JbnNlcnRDc3MgPSBzZWxmLm9wdGlvbnMuYXV0b0luc2VydENzcztcblx0XG5cdCAgICAgIHRoaXMuYXBwZW5kQW5pbWF0aW9uQ3NzKHNlbGYpO1xuXHQgICAgfVxuXHQgIH0sIHtcblx0ICAgIGtleTogJ2dldEN1cnJlbnRFbENvbnRlbnQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEN1cnJlbnRFbENvbnRlbnQoc2VsZikge1xuXHQgICAgICB2YXIgZWxDb250ZW50ID0gJyc7XG5cdCAgICAgIGlmIChzZWxmLmF0dHIpIHtcblx0ICAgICAgICBlbENvbnRlbnQgPSBzZWxmLmVsLmdldEF0dHJpYnV0ZShzZWxmLmF0dHIpO1xuXHQgICAgICB9IGVsc2UgaWYgKHNlbGYuaXNJbnB1dCkge1xuXHQgICAgICAgIGVsQ29udGVudCA9IHNlbGYuZWwudmFsdWU7XG5cdCAgICAgIH0gZWxzZSBpZiAoc2VsZi5jb250ZW50VHlwZSA9PT0gJ2h0bWwnKSB7XG5cdCAgICAgICAgZWxDb250ZW50ID0gc2VsZi5lbC5pbm5lckhUTUw7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgZWxDb250ZW50ID0gc2VsZi5lbC50ZXh0Q29udGVudDtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gZWxDb250ZW50O1xuXHQgICAgfVxuXHQgIH0sIHtcblx0ICAgIGtleTogJ2FwcGVuZEFuaW1hdGlvbkNzcycsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kQW5pbWF0aW9uQ3NzKHNlbGYpIHtcblx0ICAgICAgdmFyIGNzc0RhdGFOYW1lID0gJ2RhdGEtdHlwZWQtanMtY3NzJztcblx0ICAgICAgaWYgKCFzZWxmLmF1dG9JbnNlcnRDc3MpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKCFzZWxmLnNob3dDdXJzb3IgJiYgIXNlbGYuZmFkZU91dCkge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHQgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignWycgKyBjc3NEYXRhTmFtZSArICddJykpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIHZhciBjc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXHQgICAgICBjc3MudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cdCAgICAgIGNzcy5zZXRBdHRyaWJ1dGUoY3NzRGF0YU5hbWUsIHRydWUpO1xuXHRcblx0ICAgICAgdmFyIGlubmVyQ3NzID0gJyc7XG5cdCAgICAgIGlmIChzZWxmLnNob3dDdXJzb3IpIHtcblx0ICAgICAgICBpbm5lckNzcyArPSAnXFxuICAgICAgICAudHlwZWQtY3Vyc29ye1xcbiAgICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnR5cGVkLWN1cnNvci50eXBlZC1jdXJzb3ItLWJsaW5re1xcbiAgICAgICAgICBhbmltYXRpb246IHR5cGVkanNCbGluayAwLjdzIGluZmluaXRlO1xcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogdHlwZWRqc0JsaW5rIDAuN3MgaW5maW5pdGU7XFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB0eXBlZGpzQmxpbmsgMC43cyBpbmZpbml0ZTtcXG4gICAgICAgIH1cXG4gICAgICAgIEBrZXlmcmFtZXMgdHlwZWRqc0JsaW5re1xcbiAgICAgICAgICA1MCUgeyBvcGFjaXR5OiAwLjA7IH1cXG4gICAgICAgIH1cXG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyB0eXBlZGpzQmxpbmt7XFxuICAgICAgICAgIDAlIHsgb3BhY2l0eTogMTsgfVxcbiAgICAgICAgICA1MCUgeyBvcGFjaXR5OiAwLjA7IH1cXG4gICAgICAgICAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cXG4gICAgICAgIH1cXG4gICAgICAnO1xuXHQgICAgICB9XG5cdCAgICAgIGlmIChzZWxmLmZhZGVPdXQpIHtcblx0ICAgICAgICBpbm5lckNzcyArPSAnXFxuICAgICAgICAudHlwZWQtZmFkZS1vdXR7XFxuICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjI1cztcXG4gICAgICAgIH1cXG4gICAgICAgIC50eXBlZC1jdXJzb3IudHlwZWQtY3Vyc29yLS1ibGluay50eXBlZC1mYWRlLW91dHtcXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IDA7XFxuICAgICAgICAgIGFuaW1hdGlvbjogMDtcXG4gICAgICAgIH1cXG4gICAgICAnO1xuXHQgICAgICB9XG5cdCAgICAgIGlmIChjc3MubGVuZ3RoID09PSAwKSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdCAgICAgIGNzcy5pbm5lckhUTUwgPSBpbm5lckNzcztcblx0ICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjc3MpO1xuXHQgICAgfVxuXHQgIH1dKTtcblx0XG5cdCAgcmV0dXJuIEluaXRpYWxpemVyO1xuXHR9KSgpO1xuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gSW5pdGlhbGl6ZXI7XG5cdHZhciBpbml0aWFsaXplciA9IG5ldyBJbml0aWFsaXplcigpO1xuXHRleHBvcnRzLmluaXRpYWxpemVyID0gaW5pdGlhbGl6ZXI7XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8qKlxuXHQgKiBEZWZhdWx0cyAmIG9wdGlvbnNcblx0ICogQHJldHVybnMge29iamVjdH0gVHlwZWQgZGVmYXVsdHMgJiBvcHRpb25zXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdFxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdHZhciBkZWZhdWx0cyA9IHtcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge2FycmF5fSBzdHJpbmdzIHN0cmluZ3MgdG8gYmUgdHlwZWRcblx0ICAgKiBAcHJvcGVydHkge3N0cmluZ30gc3RyaW5nc0VsZW1lbnQgSUQgb2YgZWxlbWVudCBjb250YWluaW5nIHN0cmluZyBjaGlsZHJlblxuXHQgICAqL1xuXHQgIHN0cmluZ3M6IFsnVGhlc2UgYXJlIHRoZSBkZWZhdWx0IHZhbHVlcy4uLicsICdZb3Uga25vdyB3aGF0IHlvdSBzaG91bGQgZG8/JywgJ1VzZSB5b3VyIG93biEnLCAnSGF2ZSBhIGdyZWF0IGRheSEnXSxcblx0ICBzdHJpbmdzRWxlbWVudDogbnVsbCxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtudW1iZXJ9IHR5cGVTcGVlZCB0eXBlIHNwZWVkIGluIG1pbGxpc2Vjb25kc1xuXHQgICAqL1xuXHQgIHR5cGVTcGVlZDogMCxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtudW1iZXJ9IHN0YXJ0RGVsYXkgdGltZSBiZWZvcmUgdHlwaW5nIHN0YXJ0cyBpbiBtaWxsaXNlY29uZHNcblx0ICAgKi9cblx0ICBzdGFydERlbGF5OiAwLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge251bWJlcn0gYmFja1NwZWVkIGJhY2tzcGFjaW5nIHNwZWVkIGluIG1pbGxpc2Vjb25kc1xuXHQgICAqL1xuXHQgIGJhY2tTcGVlZDogMCxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtib29sZWFufSBzbWFydEJhY2tzcGFjZSBvbmx5IGJhY2tzcGFjZSB3aGF0IGRvZXNuJ3QgbWF0Y2ggdGhlIHByZXZpb3VzIHN0cmluZ1xuXHQgICAqL1xuXHQgIHNtYXJ0QmFja3NwYWNlOiB0cnVlLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHNodWZmbGUgc2h1ZmZsZSB0aGUgc3RyaW5nc1xuXHQgICAqL1xuXHQgIHNodWZmbGU6IGZhbHNlLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge251bWJlcn0gYmFja0RlbGF5IHRpbWUgYmVmb3JlIGJhY2tzcGFjaW5nIGluIG1pbGxpc2Vjb25kc1xuXHQgICAqL1xuXHQgIGJhY2tEZWxheTogNzAwLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGZhZGVPdXQgRmFkZSBvdXQgaW5zdGVhZCBvZiBiYWNrc3BhY2Vcblx0ICAgKiBAcHJvcGVydHkge3N0cmluZ30gZmFkZU91dENsYXNzIGNzcyBjbGFzcyBmb3IgZmFkZSBhbmltYXRpb25cblx0ICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGZhZGVPdXREZWxheSBGYWRlIG91dCBkZWxheSBpbiBtaWxsaXNlY29uZHNcblx0ICAgKi9cblx0ICBmYWRlT3V0OiBmYWxzZSxcblx0ICBmYWRlT3V0Q2xhc3M6ICd0eXBlZC1mYWRlLW91dCcsXG5cdCAgZmFkZU91dERlbGF5OiA1MDAsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbG9vcCBsb29wIHN0cmluZ3Ncblx0ICAgKiBAcHJvcGVydHkge251bWJlcn0gbG9vcENvdW50IGFtb3VudCBvZiBsb29wc1xuXHQgICAqL1xuXHQgIGxvb3A6IGZhbHNlLFxuXHQgIGxvb3BDb3VudDogSW5maW5pdHksXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gc2hvd0N1cnNvciBzaG93IGN1cnNvclxuXHQgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBjdXJzb3JDaGFyIGNoYXJhY3RlciBmb3IgY3Vyc29yXG5cdCAgICogQHByb3BlcnR5IHtib29sZWFufSBhdXRvSW5zZXJ0Q3NzIGluc2VydCBDU1MgZm9yIGN1cnNvciBhbmQgZmFkZU91dCBpbnRvIEhUTUwgPGhlYWQ+XG5cdCAgICovXG5cdCAgc2hvd0N1cnNvcjogdHJ1ZSxcblx0ICBjdXJzb3JDaGFyOiAnfCcsXG5cdCAgYXV0b0luc2VydENzczogdHJ1ZSxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtzdHJpbmd9IGF0dHIgYXR0cmlidXRlIGZvciB0eXBpbmdcblx0ICAgKiBFeDogaW5wdXQgcGxhY2Vob2xkZXIsIHZhbHVlLCBvciBqdXN0IEhUTUwgdGV4dFxuXHQgICAqL1xuXHQgIGF0dHI6IG51bGwsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gYmluZElucHV0Rm9jdXNFdmVudHMgYmluZCB0byBmb2N1cyBhbmQgYmx1ciBpZiBlbCBpcyB0ZXh0IGlucHV0XG5cdCAgICovXG5cdCAgYmluZElucHV0Rm9jdXNFdmVudHM6IGZhbHNlLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge3N0cmluZ30gY29udGVudFR5cGUgJ2h0bWwnIG9yICdudWxsJyBmb3IgcGxhaW50ZXh0XG5cdCAgICovXG5cdCAgY29udGVudFR5cGU6ICdodG1sJyxcblx0XG5cdCAgLyoqXG5cdCAgICogQmVmb3JlIGl0IGJlZ2lucyB0eXBpbmdcblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25CZWdpbjogZnVuY3Rpb24gb25CZWdpbihzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogQWxsIHR5cGluZyBpcyBjb21wbGV0ZVxuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvbkNvbXBsZXRlOiBmdW5jdGlvbiBvbkNvbXBsZXRlKHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBCZWZvcmUgZWFjaCBzdHJpbmcgaXMgdHlwZWRcblx0ICAgKiBAcGFyYW0ge251bWJlcn0gYXJyYXlQb3Ncblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgcHJlU3RyaW5nVHlwZWQ6IGZ1bmN0aW9uIHByZVN0cmluZ1R5cGVkKGFycmF5UG9zLCBzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogQWZ0ZXIgZWFjaCBzdHJpbmcgaXMgdHlwZWRcblx0ICAgKiBAcGFyYW0ge251bWJlcn0gYXJyYXlQb3Ncblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25TdHJpbmdUeXBlZDogZnVuY3Rpb24gb25TdHJpbmdUeXBlZChhcnJheVBvcywgc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIER1cmluZyBsb29waW5nLCBhZnRlciBsYXN0IHN0cmluZyBpcyB0eXBlZFxuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvbkxhc3RTdHJpbmdCYWNrc3BhY2VkOiBmdW5jdGlvbiBvbkxhc3RTdHJpbmdCYWNrc3BhY2VkKHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBUeXBpbmcgaGFzIGJlZW4gc3RvcHBlZFxuXHQgICAqIEBwYXJhbSB7bnVtYmVyfSBhcnJheVBvc1xuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvblR5cGluZ1BhdXNlZDogZnVuY3Rpb24gb25UeXBpbmdQYXVzZWQoYXJyYXlQb3MsIHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBUeXBpbmcgaGFzIGJlZW4gc3RhcnRlZCBhZnRlciBiZWluZyBzdG9wcGVkXG5cdCAgICogQHBhcmFtIHtudW1iZXJ9IGFycmF5UG9zXG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uVHlwaW5nUmVzdW1lZDogZnVuY3Rpb24gb25UeXBpbmdSZXN1bWVkKGFycmF5UG9zLCBzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogQWZ0ZXIgcmVzZXRcblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25SZXNldDogZnVuY3Rpb24gb25SZXNldChzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogQWZ0ZXIgc3RvcFxuXHQgICAqIEBwYXJhbSB7bnVtYmVyfSBhcnJheVBvc1xuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvblN0b3A6IGZ1bmN0aW9uIG9uU3RvcChhcnJheVBvcywgc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEFmdGVyIHN0YXJ0XG5cdCAgICogQHBhcmFtIHtudW1iZXJ9IGFycmF5UG9zXG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uU3RhcnQ6IGZ1bmN0aW9uIG9uU3RhcnQoYXJyYXlQb3MsIHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBBZnRlciBkZXN0cm95XG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uRGVzdHJveTogZnVuY3Rpb24gb25EZXN0cm95KHNlbGYpIHt9XG5cdH07XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBkZWZhdWx0cztcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8qKlxuXHQgKiBUT0RPOiBUaGVzZSBtZXRob2RzIGNhbiBwcm9iYWJseSBiZSBjb21iaW5lZCBzb21laG93XG5cdCAqIFBhcnNlIEhUTUwgdGFncyAmIEhUTUwgQ2hhcmFjdGVyc1xuXHQgKi9cblx0XG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdHZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cdFxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblx0XG5cdHZhciBIVE1MUGFyc2VyID0gKGZ1bmN0aW9uICgpIHtcblx0ICBmdW5jdGlvbiBIVE1MUGFyc2VyKCkge1xuXHQgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhUTUxQYXJzZXIpO1xuXHQgIH1cblx0XG5cdCAgX2NyZWF0ZUNsYXNzKEhUTUxQYXJzZXIsIFt7XG5cdCAgICBrZXk6ICd0eXBlSHRtbENoYXJzJyxcblx0XG5cdCAgICAvKipcblx0ICAgICAqIFR5cGUgSFRNTCB0YWdzICYgSFRNTCBDaGFyYWN0ZXJzXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gY3VyU3RyaW5nIEN1cnJlbnQgc3RyaW5nXG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gY3VyU3RyUG9zIFBvc2l0aW9uIGluIGN1cnJlbnQgc3RyaW5nXG5cdCAgICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmIGluc3RhbmNlIG9mIFR5cGVkXG5cdCAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBhIG5ldyBzdHJpbmcgcG9zaXRpb25cblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0XG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gdHlwZUh0bWxDaGFycyhjdXJTdHJpbmcsIGN1clN0clBvcywgc2VsZikge1xuXHQgICAgICBpZiAoc2VsZi5jb250ZW50VHlwZSAhPT0gJ2h0bWwnKSByZXR1cm4gY3VyU3RyUG9zO1xuXHQgICAgICB2YXIgY3VyQ2hhciA9IGN1clN0cmluZy5zdWJzdHIoY3VyU3RyUG9zKS5jaGFyQXQoMCk7XG5cdCAgICAgIGlmIChjdXJDaGFyID09PSAnPCcgfHwgY3VyQ2hhciA9PT0gJyYnKSB7XG5cdCAgICAgICAgdmFyIGVuZFRhZyA9ICcnO1xuXHQgICAgICAgIGlmIChjdXJDaGFyID09PSAnPCcpIHtcblx0ICAgICAgICAgIGVuZFRhZyA9ICc+Jztcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgZW5kVGFnID0gJzsnO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB3aGlsZSAoY3VyU3RyaW5nLnN1YnN0cihjdXJTdHJQb3MgKyAxKS5jaGFyQXQoMCkgIT09IGVuZFRhZykge1xuXHQgICAgICAgICAgY3VyU3RyUG9zKys7XG5cdCAgICAgICAgICBpZiAoY3VyU3RyUG9zICsgMSA+IGN1clN0cmluZy5sZW5ndGgpIHtcblx0ICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGN1clN0clBvcysrO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBjdXJTdHJQb3M7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBCYWNrc3BhY2UgSFRNTCB0YWdzIGFuZCBIVE1MIENoYXJhY3RlcnNcblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJTdHJpbmcgQ3VycmVudCBzdHJpbmdcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJTdHJQb3MgUG9zaXRpb24gaW4gY3VycmVudCBzdHJpbmdcblx0ICAgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGYgaW5zdGFuY2Ugb2YgVHlwZWRcblx0ICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IGEgbmV3IHN0cmluZyBwb3NpdGlvblxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2JhY2tTcGFjZUh0bWxDaGFycycsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gYmFja1NwYWNlSHRtbENoYXJzKGN1clN0cmluZywgY3VyU3RyUG9zLCBzZWxmKSB7XG5cdCAgICAgIGlmIChzZWxmLmNvbnRlbnRUeXBlICE9PSAnaHRtbCcpIHJldHVybiBjdXJTdHJQb3M7XG5cdCAgICAgIHZhciBjdXJDaGFyID0gY3VyU3RyaW5nLnN1YnN0cihjdXJTdHJQb3MpLmNoYXJBdCgwKTtcblx0ICAgICAgaWYgKGN1ckNoYXIgPT09ICc+JyB8fCBjdXJDaGFyID09PSAnOycpIHtcblx0ICAgICAgICB2YXIgZW5kVGFnID0gJyc7XG5cdCAgICAgICAgaWYgKGN1ckNoYXIgPT09ICc+Jykge1xuXHQgICAgICAgICAgZW5kVGFnID0gJzwnO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICBlbmRUYWcgPSAnJic7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHdoaWxlIChjdXJTdHJpbmcuc3Vic3RyKGN1clN0clBvcyAtIDEpLmNoYXJBdCgwKSAhPT0gZW5kVGFnKSB7XG5cdCAgICAgICAgICBjdXJTdHJQb3MtLTtcblx0ICAgICAgICAgIGlmIChjdXJTdHJQb3MgPCAwKSB7XG5cdCAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICBjdXJTdHJQb3MtLTtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gY3VyU3RyUG9zO1xuXHQgICAgfVxuXHQgIH1dKTtcblx0XG5cdCAgcmV0dXJuIEhUTUxQYXJzZXI7XG5cdH0pKCk7XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBIVE1MUGFyc2VyO1xuXHR2YXIgaHRtbFBhcnNlciA9IG5ldyBIVE1MUGFyc2VyKCk7XG5cdGV4cG9ydHMuaHRtbFBhcnNlciA9IGh0bWxQYXJzZXI7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKVxufSk7XG47IiwiLyohXG4gKiBVbmlkcmFnZ2VyIHYyLjMuMFxuICogRHJhZ2dhYmxlIGJhc2UgY2xhc3NcbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgdW51c2VkOiB0cnVlLCB1bmRlZjogdHJ1ZSwgc3RyaWN0OiB0cnVlICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qanNoaW50IHN0cmljdDogZmFsc2UgKi8gLypnbG9iYWxzIGRlZmluZSwgbW9kdWxlLCByZXF1aXJlICovXG5cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIFtcbiAgICAgICd1bmlwb2ludGVyL3VuaXBvaW50ZXInXG4gICAgXSwgZnVuY3Rpb24oIFVuaXBvaW50ZXIgKSB7XG4gICAgICByZXR1cm4gZmFjdG9yeSggd2luZG93LCBVbmlwb2ludGVyICk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICByZXF1aXJlKCd1bmlwb2ludGVyJylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93LlVuaWRyYWdnZXIgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgd2luZG93LlVuaXBvaW50ZXJcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBVbmlwb2ludGVyICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFVuaWRyYWdnZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuZnVuY3Rpb24gVW5pZHJhZ2dlcigpIHt9XG5cbi8vIGluaGVyaXQgVW5pcG9pbnRlciAmIEV2RW1pdHRlclxudmFyIHByb3RvID0gVW5pZHJhZ2dlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBVbmlwb2ludGVyLnByb3RvdHlwZSApO1xuXG4vLyAtLS0tLSBiaW5kIHN0YXJ0IC0tLS0tIC8vXG5cbnByb3RvLmJpbmRIYW5kbGVzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2JpbmRIYW5kbGVzKCB0cnVlICk7XG59O1xuXG5wcm90by51bmJpbmRIYW5kbGVzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2JpbmRIYW5kbGVzKCBmYWxzZSApO1xufTtcblxuLyoqXG4gKiBBZGQgb3IgcmVtb3ZlIHN0YXJ0IGV2ZW50XG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzQWRkXG4gKi9cbnByb3RvLl9iaW5kSGFuZGxlcyA9IGZ1bmN0aW9uKCBpc0FkZCApIHtcbiAgLy8gbXVuZ2UgaXNBZGQsIGRlZmF1bHQgdG8gdHJ1ZVxuICBpc0FkZCA9IGlzQWRkID09PSB1bmRlZmluZWQgPyB0cnVlIDogaXNBZGQ7XG4gIC8vIGJpbmQgZWFjaCBoYW5kbGVcbiAgdmFyIGJpbmRNZXRob2QgPSBpc0FkZCA/ICdhZGRFdmVudExpc3RlbmVyJyA6ICdyZW1vdmVFdmVudExpc3RlbmVyJztcbiAgdmFyIHRvdWNoQWN0aW9uID0gaXNBZGQgPyB0aGlzLl90b3VjaEFjdGlvblZhbHVlIDogJyc7XG4gIGZvciAoIHZhciBpPTA7IGkgPCB0aGlzLmhhbmRsZXMubGVuZ3RoOyBpKysgKSB7XG4gICAgdmFyIGhhbmRsZSA9IHRoaXMuaGFuZGxlc1tpXTtcbiAgICB0aGlzLl9iaW5kU3RhcnRFdmVudCggaGFuZGxlLCBpc0FkZCApO1xuICAgIGhhbmRsZVsgYmluZE1ldGhvZCBdKCAnY2xpY2snLCB0aGlzICk7XG4gICAgLy8gdG91Y2gtYWN0aW9uOiBub25lIHRvIG92ZXJyaWRlIGJyb3dzZXIgdG91Y2ggZ2VzdHVyZXMuIG1ldGFmaXp6eS9mbGlja2l0eSM1NDBcbiAgICBpZiAoIHdpbmRvdy5Qb2ludGVyRXZlbnQgKSB7XG4gICAgICBoYW5kbGUuc3R5bGUudG91Y2hBY3Rpb24gPSB0b3VjaEFjdGlvbjtcbiAgICB9XG4gIH1cbn07XG5cbi8vIHByb3RvdHlwZSBzbyBpdCBjYW4gYmUgb3ZlcndyaXRlYWJsZSBieSBGbGlja2l0eVxucHJvdG8uX3RvdWNoQWN0aW9uVmFsdWUgPSAnbm9uZSc7XG5cbi8vIC0tLS0tIHN0YXJ0IGV2ZW50IC0tLS0tIC8vXG5cbi8qKlxuICogcG9pbnRlciBzdGFydFxuICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAqIEBwYXJhbSB7RXZlbnQgb3IgVG91Y2h9IHBvaW50ZXJcbiAqL1xucHJvdG8ucG9pbnRlckRvd24gPSBmdW5jdGlvbiggZXZlbnQsIHBvaW50ZXIgKSB7XG4gIHZhciBpc09rYXkgPSB0aGlzLm9rYXlQb2ludGVyRG93biggZXZlbnQgKTtcbiAgaWYgKCAhaXNPa2F5ICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyB0cmFjayBzdGFydCBldmVudCBwb3NpdGlvblxuICB0aGlzLnBvaW50ZXJEb3duUG9pbnRlciA9IHBvaW50ZXI7XG5cbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgdGhpcy5wb2ludGVyRG93bkJsdXIoKTtcbiAgLy8gYmluZCBtb3ZlIGFuZCBlbmQgZXZlbnRzXG4gIHRoaXMuX2JpbmRQb3N0U3RhcnRFdmVudHMoIGV2ZW50ICk7XG4gIHRoaXMuZW1pdEV2ZW50KCAncG9pbnRlckRvd24nLCBbIGV2ZW50LCBwb2ludGVyIF0gKTtcbn07XG5cbi8vIG5vZGVzIHRoYXQgaGF2ZSB0ZXh0IGZpZWxkc1xudmFyIGN1cnNvck5vZGVzID0ge1xuICBURVhUQVJFQTogdHJ1ZSxcbiAgSU5QVVQ6IHRydWUsXG4gIFNFTEVDVDogdHJ1ZSxcbiAgT1BUSU9OOiB0cnVlLFxufTtcblxuLy8gaW5wdXQgdHlwZXMgdGhhdCBkbyBub3QgaGF2ZSB0ZXh0IGZpZWxkc1xudmFyIGNsaWNrVHlwZXMgPSB7XG4gIHJhZGlvOiB0cnVlLFxuICBjaGVja2JveDogdHJ1ZSxcbiAgYnV0dG9uOiB0cnVlLFxuICBzdWJtaXQ6IHRydWUsXG4gIGltYWdlOiB0cnVlLFxuICBmaWxlOiB0cnVlLFxufTtcblxuLy8gZGlzbWlzcyBpbnB1dHMgd2l0aCB0ZXh0IGZpZWxkcy4gZmxpY2tpdHkjNDAzLCBmbGlja2l0eSM0MDRcbnByb3RvLm9rYXlQb2ludGVyRG93biA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgdmFyIGlzQ3Vyc29yTm9kZSA9IGN1cnNvck5vZGVzWyBldmVudC50YXJnZXQubm9kZU5hbWUgXTtcbiAgdmFyIGlzQ2xpY2tUeXBlID0gY2xpY2tUeXBlc1sgZXZlbnQudGFyZ2V0LnR5cGUgXTtcbiAgdmFyIGlzT2theSA9ICFpc0N1cnNvck5vZGUgfHwgaXNDbGlja1R5cGU7XG4gIGlmICggIWlzT2theSApIHtcbiAgICB0aGlzLl9wb2ludGVyUmVzZXQoKTtcbiAgfVxuICByZXR1cm4gaXNPa2F5O1xufTtcblxuLy8ga2x1ZGdlIHRvIGJsdXIgcHJldmlvdXNseSBmb2N1c2VkIGlucHV0XG5wcm90by5wb2ludGVyRG93bkJsdXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGZvY3VzZWQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAvLyBkbyBub3QgYmx1ciBib2R5IGZvciBJRTEwLCBtZXRhZml6enkvZmxpY2tpdHkjMTE3XG4gIHZhciBjYW5CbHVyID0gZm9jdXNlZCAmJiBmb2N1c2VkLmJsdXIgJiYgZm9jdXNlZCAhPSBkb2N1bWVudC5ib2R5O1xuICBpZiAoIGNhbkJsdXIgKSB7XG4gICAgZm9jdXNlZC5ibHVyKCk7XG4gIH1cbn07XG5cbi8vIC0tLS0tIG1vdmUgZXZlbnQgLS0tLS0gLy9cblxuLyoqXG4gKiBkcmFnIG1vdmVcbiAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gKiBAcGFyYW0ge0V2ZW50IG9yIFRvdWNofSBwb2ludGVyXG4gKi9cbnByb3RvLnBvaW50ZXJNb3ZlID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICB2YXIgbW92ZVZlY3RvciA9IHRoaXMuX2RyYWdQb2ludGVyTW92ZSggZXZlbnQsIHBvaW50ZXIgKTtcbiAgdGhpcy5lbWl0RXZlbnQoICdwb2ludGVyTW92ZScsIFsgZXZlbnQsIHBvaW50ZXIsIG1vdmVWZWN0b3IgXSApO1xuICB0aGlzLl9kcmFnTW92ZSggZXZlbnQsIHBvaW50ZXIsIG1vdmVWZWN0b3IgKTtcbn07XG5cbi8vIGJhc2UgcG9pbnRlciBtb3ZlIGxvZ2ljXG5wcm90by5fZHJhZ1BvaW50ZXJNb3ZlID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICB2YXIgbW92ZVZlY3RvciA9IHtcbiAgICB4OiBwb2ludGVyLnBhZ2VYIC0gdGhpcy5wb2ludGVyRG93blBvaW50ZXIucGFnZVgsXG4gICAgeTogcG9pbnRlci5wYWdlWSAtIHRoaXMucG9pbnRlckRvd25Qb2ludGVyLnBhZ2VZXG4gIH07XG4gIC8vIHN0YXJ0IGRyYWcgaWYgcG9pbnRlciBoYXMgbW92ZWQgZmFyIGVub3VnaCB0byBzdGFydCBkcmFnXG4gIGlmICggIXRoaXMuaXNEcmFnZ2luZyAmJiB0aGlzLmhhc0RyYWdTdGFydGVkKCBtb3ZlVmVjdG9yICkgKSB7XG4gICAgdGhpcy5fZHJhZ1N0YXJ0KCBldmVudCwgcG9pbnRlciApO1xuICB9XG4gIHJldHVybiBtb3ZlVmVjdG9yO1xufTtcblxuLy8gY29uZGl0aW9uIGlmIHBvaW50ZXIgaGFzIG1vdmVkIGZhciBlbm91Z2ggdG8gc3RhcnQgZHJhZ1xucHJvdG8uaGFzRHJhZ1N0YXJ0ZWQgPSBmdW5jdGlvbiggbW92ZVZlY3RvciApIHtcbiAgcmV0dXJuIE1hdGguYWJzKCBtb3ZlVmVjdG9yLnggKSA+IDMgfHwgTWF0aC5hYnMoIG1vdmVWZWN0b3IueSApID4gMztcbn07XG5cbi8vIC0tLS0tIGVuZCBldmVudCAtLS0tLSAvL1xuXG4vKipcbiAqIHBvaW50ZXIgdXBcbiAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gKiBAcGFyYW0ge0V2ZW50IG9yIFRvdWNofSBwb2ludGVyXG4gKi9cbnByb3RvLnBvaW50ZXJVcCA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgdGhpcy5lbWl0RXZlbnQoICdwb2ludGVyVXAnLCBbIGV2ZW50LCBwb2ludGVyIF0gKTtcbiAgdGhpcy5fZHJhZ1BvaW50ZXJVcCggZXZlbnQsIHBvaW50ZXIgKTtcbn07XG5cbnByb3RvLl9kcmFnUG9pbnRlclVwID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICBpZiAoIHRoaXMuaXNEcmFnZ2luZyApIHtcbiAgICB0aGlzLl9kcmFnRW5kKCBldmVudCwgcG9pbnRlciApO1xuICB9IGVsc2Uge1xuICAgIC8vIHBvaW50ZXIgZGlkbid0IG1vdmUgZW5vdWdoIGZvciBkcmFnIHRvIHN0YXJ0XG4gICAgdGhpcy5fc3RhdGljQ2xpY2soIGV2ZW50LCBwb2ludGVyICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGRyYWcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLy8gZHJhZ1N0YXJ0XG5wcm90by5fZHJhZ1N0YXJ0ID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlO1xuICAvLyBwcmV2ZW50IGNsaWNrc1xuICB0aGlzLmlzUHJldmVudGluZ0NsaWNrcyA9IHRydWU7XG4gIHRoaXMuZHJhZ1N0YXJ0KCBldmVudCwgcG9pbnRlciApO1xufTtcblxucHJvdG8uZHJhZ1N0YXJ0ID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICB0aGlzLmVtaXRFdmVudCggJ2RyYWdTdGFydCcsIFsgZXZlbnQsIHBvaW50ZXIgXSApO1xufTtcblxuLy8gZHJhZ01vdmVcbnByb3RvLl9kcmFnTW92ZSA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciwgbW92ZVZlY3RvciApIHtcbiAgLy8gZG8gbm90IGRyYWcgaWYgbm90IGRyYWdnaW5nIHlldFxuICBpZiAoICF0aGlzLmlzRHJhZ2dpbmcgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5kcmFnTW92ZSggZXZlbnQsIHBvaW50ZXIsIG1vdmVWZWN0b3IgKTtcbn07XG5cbnByb3RvLmRyYWdNb3ZlID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyLCBtb3ZlVmVjdG9yICkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB0aGlzLmVtaXRFdmVudCggJ2RyYWdNb3ZlJywgWyBldmVudCwgcG9pbnRlciwgbW92ZVZlY3RvciBdICk7XG59O1xuXG4vLyBkcmFnRW5kXG5wcm90by5fZHJhZ0VuZCA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgLy8gc2V0IGZsYWdzXG4gIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAvLyByZS1lbmFibGUgY2xpY2tpbmcgYXN5bmNcbiAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgZGVsZXRlIHRoaXMuaXNQcmV2ZW50aW5nQ2xpY2tzO1xuICB9LmJpbmQoIHRoaXMgKSApO1xuXG4gIHRoaXMuZHJhZ0VuZCggZXZlbnQsIHBvaW50ZXIgKTtcbn07XG5cbnByb3RvLmRyYWdFbmQgPSBmdW5jdGlvbiggZXZlbnQsIHBvaW50ZXIgKSB7XG4gIHRoaXMuZW1pdEV2ZW50KCAnZHJhZ0VuZCcsIFsgZXZlbnQsIHBvaW50ZXIgXSApO1xufTtcblxuLy8gLS0tLS0gb25jbGljayAtLS0tLSAvL1xuXG4vLyBoYW5kbGUgYWxsIGNsaWNrcyBhbmQgcHJldmVudCBjbGlja3Mgd2hlbiBkcmFnZ2luZ1xucHJvdG8ub25jbGljayA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgaWYgKCB0aGlzLmlzUHJldmVudGluZ0NsaWNrcyApIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59O1xuXG4vLyAtLS0tLSBzdGF0aWNDbGljayAtLS0tLSAvL1xuXG4vLyB0cmlnZ2VyZWQgYWZ0ZXIgcG9pbnRlciBkb3duICYgdXAgd2l0aCBuby90aW55IG1vdmVtZW50XG5wcm90by5fc3RhdGljQ2xpY2sgPSBmdW5jdGlvbiggZXZlbnQsIHBvaW50ZXIgKSB7XG4gIC8vIGlnbm9yZSBlbXVsYXRlZCBtb3VzZSB1cCBjbGlja3NcbiAgaWYgKCB0aGlzLmlzSWdub3JpbmdNb3VzZVVwICYmIGV2ZW50LnR5cGUgPT0gJ21vdXNldXAnICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuc3RhdGljQ2xpY2soIGV2ZW50LCBwb2ludGVyICk7XG5cbiAgLy8gc2V0IGZsYWcgZm9yIGVtdWxhdGVkIGNsaWNrcyAzMDBtcyBhZnRlciB0b3VjaGVuZFxuICBpZiAoIGV2ZW50LnR5cGUgIT0gJ21vdXNldXAnICkge1xuICAgIHRoaXMuaXNJZ25vcmluZ01vdXNlVXAgPSB0cnVlO1xuICAgIC8vIHJlc2V0IGZsYWcgYWZ0ZXIgMzAwbXNcbiAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmlzSWdub3JpbmdNb3VzZVVwO1xuICAgIH0uYmluZCggdGhpcyApLCA0MDAgKTtcbiAgfVxufTtcblxucHJvdG8uc3RhdGljQ2xpY2sgPSBmdW5jdGlvbiggZXZlbnQsIHBvaW50ZXIgKSB7XG4gIHRoaXMuZW1pdEV2ZW50KCAnc3RhdGljQ2xpY2snLCBbIGV2ZW50LCBwb2ludGVyIF0gKTtcbn07XG5cbi8vIC0tLS0tIHV0aWxzIC0tLS0tIC8vXG5cblVuaWRyYWdnZXIuZ2V0UG9pbnRlclBvaW50ID0gVW5pcG9pbnRlci5nZXRQb2ludGVyUG9pbnQ7XG5cbi8vIC0tLS0tICAtLS0tLSAvL1xuXG5yZXR1cm4gVW5pZHJhZ2dlcjtcblxufSkpO1xuIiwiLyohXG4gKiBVbmlwb2ludGVyIHYyLjMuMFxuICogYmFzZSBjbGFzcyBmb3IgZG9pbmcgb25lIHRoaW5nIHdpdGggcG9pbnRlciBldmVudFxuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vKmpzaGludCBicm93c2VyOiB0cnVlLCB1bmRlZjogdHJ1ZSwgdW51c2VkOiB0cnVlLCBzdHJpY3Q6IHRydWUgKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi8gLypnbG9iYWwgZGVmaW5lLCBtb2R1bGUsIHJlcXVpcmUgKi9cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIFtcbiAgICAgICdldi1lbWl0dGVyL2V2LWVtaXR0ZXInXG4gICAgXSwgZnVuY3Rpb24oIEV2RW1pdHRlciApIHtcbiAgICAgIHJldHVybiBmYWN0b3J5KCB3aW5kb3csIEV2RW1pdHRlciApO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgcmVxdWlyZSgnZXYtZW1pdHRlcicpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5Vbmlwb2ludGVyID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHdpbmRvdy5FdkVtaXR0ZXJcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBFdkVtaXR0ZXIgKSB7XG5cbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbmZ1bmN0aW9uIFVuaXBvaW50ZXIoKSB7fVxuXG4vLyBpbmhlcml0IEV2RW1pdHRlclxudmFyIHByb3RvID0gVW5pcG9pbnRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBFdkVtaXR0ZXIucHJvdG90eXBlICk7XG5cbnByb3RvLmJpbmRTdGFydEV2ZW50ID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gIHRoaXMuX2JpbmRTdGFydEV2ZW50KCBlbGVtLCB0cnVlICk7XG59O1xuXG5wcm90by51bmJpbmRTdGFydEV2ZW50ID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gIHRoaXMuX2JpbmRTdGFydEV2ZW50KCBlbGVtLCBmYWxzZSApO1xufTtcblxuLyoqXG4gKiBBZGQgb3IgcmVtb3ZlIHN0YXJ0IGV2ZW50XG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzQWRkIC0gcmVtb3ZlIGlmIGZhbHNleVxuICovXG5wcm90by5fYmluZFN0YXJ0RXZlbnQgPSBmdW5jdGlvbiggZWxlbSwgaXNBZGQgKSB7XG4gIC8vIG11bmdlIGlzQWRkLCBkZWZhdWx0IHRvIHRydWVcbiAgaXNBZGQgPSBpc0FkZCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGlzQWRkO1xuICB2YXIgYmluZE1ldGhvZCA9IGlzQWRkID8gJ2FkZEV2ZW50TGlzdGVuZXInIDogJ3JlbW92ZUV2ZW50TGlzdGVuZXInO1xuXG4gIC8vIGRlZmF1bHQgdG8gbW91c2UgZXZlbnRzXG4gIHZhciBzdGFydEV2ZW50ID0gJ21vdXNlZG93bic7XG4gIGlmICggd2luZG93LlBvaW50ZXJFdmVudCApIHtcbiAgICAvLyBQb2ludGVyIEV2ZW50c1xuICAgIHN0YXJ0RXZlbnQgPSAncG9pbnRlcmRvd24nO1xuICB9IGVsc2UgaWYgKCAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgKSB7XG4gICAgLy8gVG91Y2ggRXZlbnRzLiBpT1MgU2FmYXJpXG4gICAgc3RhcnRFdmVudCA9ICd0b3VjaHN0YXJ0JztcbiAgfVxuICBlbGVtWyBiaW5kTWV0aG9kIF0oIHN0YXJ0RXZlbnQsIHRoaXMgKTtcbn07XG5cbi8vIHRyaWdnZXIgaGFuZGxlciBtZXRob2RzIGZvciBldmVudHNcbnByb3RvLmhhbmRsZUV2ZW50ID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICB2YXIgbWV0aG9kID0gJ29uJyArIGV2ZW50LnR5cGU7XG4gIGlmICggdGhpc1sgbWV0aG9kIF0gKSB7XG4gICAgdGhpc1sgbWV0aG9kIF0oIGV2ZW50ICk7XG4gIH1cbn07XG5cbi8vIHJldHVybnMgdGhlIHRvdWNoIHRoYXQgd2UncmUga2VlcGluZyB0cmFjayBvZlxucHJvdG8uZ2V0VG91Y2ggPSBmdW5jdGlvbiggdG91Y2hlcyApIHtcbiAgZm9yICggdmFyIGk9MDsgaSA8IHRvdWNoZXMubGVuZ3RoOyBpKysgKSB7XG4gICAgdmFyIHRvdWNoID0gdG91Y2hlc1tpXTtcbiAgICBpZiAoIHRvdWNoLmlkZW50aWZpZXIgPT0gdGhpcy5wb2ludGVySWRlbnRpZmllciApIHtcbiAgICAgIHJldHVybiB0b3VjaDtcbiAgICB9XG4gIH1cbn07XG5cbi8vIC0tLS0tIHN0YXJ0IGV2ZW50IC0tLS0tIC8vXG5cbnByb3RvLm9ubW91c2Vkb3duID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICAvLyBkaXNtaXNzIGNsaWNrcyBmcm9tIHJpZ2h0IG9yIG1pZGRsZSBidXR0b25zXG4gIHZhciBidXR0b24gPSBldmVudC5idXR0b247XG4gIGlmICggYnV0dG9uICYmICggYnV0dG9uICE9PSAwICYmIGJ1dHRvbiAhPT0gMSApICkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLl9wb2ludGVyRG93biggZXZlbnQsIGV2ZW50ICk7XG59O1xuXG5wcm90by5vbnRvdWNoc3RhcnQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHRoaXMuX3BvaW50ZXJEb3duKCBldmVudCwgZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0gKTtcbn07XG5cbnByb3RvLm9ucG9pbnRlcmRvd24gPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHRoaXMuX3BvaW50ZXJEb3duKCBldmVudCwgZXZlbnQgKTtcbn07XG5cbi8qKlxuICogcG9pbnRlciBzdGFydFxuICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAqIEBwYXJhbSB7RXZlbnQgb3IgVG91Y2h9IHBvaW50ZXJcbiAqL1xucHJvdG8uX3BvaW50ZXJEb3duID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICAvLyBkaXNtaXNzIHJpZ2h0IGNsaWNrIGFuZCBvdGhlciBwb2ludGVyc1xuICAvLyBidXR0b24gPSAwIGlzIG9rYXksIDEtNCBub3RcbiAgaWYgKCBldmVudC5idXR0b24gfHwgdGhpcy5pc1BvaW50ZXJEb3duICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuaXNQb2ludGVyRG93biA9IHRydWU7XG4gIC8vIHNhdmUgcG9pbnRlciBpZGVudGlmaWVyIHRvIG1hdGNoIHVwIHRvdWNoIGV2ZW50c1xuICB0aGlzLnBvaW50ZXJJZGVudGlmaWVyID0gcG9pbnRlci5wb2ludGVySWQgIT09IHVuZGVmaW5lZCA/XG4gICAgLy8gcG9pbnRlcklkIGZvciBwb2ludGVyIGV2ZW50cywgdG91Y2guaW5kZW50aWZpZXIgZm9yIHRvdWNoIGV2ZW50c1xuICAgIHBvaW50ZXIucG9pbnRlcklkIDogcG9pbnRlci5pZGVudGlmaWVyO1xuXG4gIHRoaXMucG9pbnRlckRvd24oIGV2ZW50LCBwb2ludGVyICk7XG59O1xuXG5wcm90by5wb2ludGVyRG93biA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgdGhpcy5fYmluZFBvc3RTdGFydEV2ZW50cyggZXZlbnQgKTtcbiAgdGhpcy5lbWl0RXZlbnQoICdwb2ludGVyRG93bicsIFsgZXZlbnQsIHBvaW50ZXIgXSApO1xufTtcblxuLy8gaGFzaCBvZiBldmVudHMgdG8gYmUgYm91bmQgYWZ0ZXIgc3RhcnQgZXZlbnRcbnZhciBwb3N0U3RhcnRFdmVudHMgPSB7XG4gIG1vdXNlZG93bjogWyAnbW91c2Vtb3ZlJywgJ21vdXNldXAnIF0sXG4gIHRvdWNoc3RhcnQ6IFsgJ3RvdWNobW92ZScsICd0b3VjaGVuZCcsICd0b3VjaGNhbmNlbCcgXSxcbiAgcG9pbnRlcmRvd246IFsgJ3BvaW50ZXJtb3ZlJywgJ3BvaW50ZXJ1cCcsICdwb2ludGVyY2FuY2VsJyBdLFxufTtcblxucHJvdG8uX2JpbmRQb3N0U3RhcnRFdmVudHMgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIGlmICggIWV2ZW50ICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBnZXQgcHJvcGVyIGV2ZW50cyB0byBtYXRjaCBzdGFydCBldmVudFxuICB2YXIgZXZlbnRzID0gcG9zdFN0YXJ0RXZlbnRzWyBldmVudC50eXBlIF07XG4gIC8vIGJpbmQgZXZlbnRzIHRvIG5vZGVcbiAgZXZlbnRzLmZvckVhY2goIGZ1bmN0aW9uKCBldmVudE5hbWUgKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoIGV2ZW50TmFtZSwgdGhpcyApO1xuICB9LCB0aGlzICk7XG4gIC8vIHNhdmUgdGhlc2UgYXJndW1lbnRzXG4gIHRoaXMuX2JvdW5kUG9pbnRlckV2ZW50cyA9IGV2ZW50cztcbn07XG5cbnByb3RvLl91bmJpbmRQb3N0U3RhcnRFdmVudHMgPSBmdW5jdGlvbigpIHtcbiAgLy8gY2hlY2sgZm9yIF9ib3VuZEV2ZW50cywgaW4gY2FzZSBkcmFnRW5kIHRyaWdnZXJlZCB0d2ljZSAob2xkIElFOCBidWcpXG4gIGlmICggIXRoaXMuX2JvdW5kUG9pbnRlckV2ZW50cyApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5fYm91bmRQb2ludGVyRXZlbnRzLmZvckVhY2goIGZ1bmN0aW9uKCBldmVudE5hbWUgKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoIGV2ZW50TmFtZSwgdGhpcyApO1xuICB9LCB0aGlzICk7XG5cbiAgZGVsZXRlIHRoaXMuX2JvdW5kUG9pbnRlckV2ZW50cztcbn07XG5cbi8vIC0tLS0tIG1vdmUgZXZlbnQgLS0tLS0gLy9cblxucHJvdG8ub25tb3VzZW1vdmUgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHRoaXMuX3BvaW50ZXJNb3ZlKCBldmVudCwgZXZlbnQgKTtcbn07XG5cbnByb3RvLm9ucG9pbnRlcm1vdmUgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIGlmICggZXZlbnQucG9pbnRlcklkID09IHRoaXMucG9pbnRlcklkZW50aWZpZXIgKSB7XG4gICAgdGhpcy5fcG9pbnRlck1vdmUoIGV2ZW50LCBldmVudCApO1xuICB9XG59O1xuXG5wcm90by5vbnRvdWNobW92ZSA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgdmFyIHRvdWNoID0gdGhpcy5nZXRUb3VjaCggZXZlbnQuY2hhbmdlZFRvdWNoZXMgKTtcbiAgaWYgKCB0b3VjaCApIHtcbiAgICB0aGlzLl9wb2ludGVyTW92ZSggZXZlbnQsIHRvdWNoICk7XG4gIH1cbn07XG5cbi8qKlxuICogcG9pbnRlciBtb3ZlXG4gKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICogQHBhcmFtIHtFdmVudCBvciBUb3VjaH0gcG9pbnRlclxuICogQHByaXZhdGVcbiAqL1xucHJvdG8uX3BvaW50ZXJNb3ZlID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICB0aGlzLnBvaW50ZXJNb3ZlKCBldmVudCwgcG9pbnRlciApO1xufTtcblxuLy8gcHVibGljXG5wcm90by5wb2ludGVyTW92ZSA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgdGhpcy5lbWl0RXZlbnQoICdwb2ludGVyTW92ZScsIFsgZXZlbnQsIHBvaW50ZXIgXSApO1xufTtcblxuLy8gLS0tLS0gZW5kIGV2ZW50IC0tLS0tIC8vXG5cblxucHJvdG8ub25tb3VzZXVwID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICB0aGlzLl9wb2ludGVyVXAoIGV2ZW50LCBldmVudCApO1xufTtcblxucHJvdG8ub25wb2ludGVydXAgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIGlmICggZXZlbnQucG9pbnRlcklkID09IHRoaXMucG9pbnRlcklkZW50aWZpZXIgKSB7XG4gICAgdGhpcy5fcG9pbnRlclVwKCBldmVudCwgZXZlbnQgKTtcbiAgfVxufTtcblxucHJvdG8ub250b3VjaGVuZCA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgdmFyIHRvdWNoID0gdGhpcy5nZXRUb3VjaCggZXZlbnQuY2hhbmdlZFRvdWNoZXMgKTtcbiAgaWYgKCB0b3VjaCApIHtcbiAgICB0aGlzLl9wb2ludGVyVXAoIGV2ZW50LCB0b3VjaCApO1xuICB9XG59O1xuXG4vKipcbiAqIHBvaW50ZXIgdXBcbiAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gKiBAcGFyYW0ge0V2ZW50IG9yIFRvdWNofSBwb2ludGVyXG4gKiBAcHJpdmF0ZVxuICovXG5wcm90by5fcG9pbnRlclVwID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICB0aGlzLl9wb2ludGVyRG9uZSgpO1xuICB0aGlzLnBvaW50ZXJVcCggZXZlbnQsIHBvaW50ZXIgKTtcbn07XG5cbi8vIHB1YmxpY1xucHJvdG8ucG9pbnRlclVwID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICB0aGlzLmVtaXRFdmVudCggJ3BvaW50ZXJVcCcsIFsgZXZlbnQsIHBvaW50ZXIgXSApO1xufTtcblxuLy8gLS0tLS0gcG9pbnRlciBkb25lIC0tLS0tIC8vXG5cbi8vIHRyaWdnZXJlZCBvbiBwb2ludGVyIHVwICYgcG9pbnRlciBjYW5jZWxcbnByb3RvLl9wb2ludGVyRG9uZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9wb2ludGVyUmVzZXQoKTtcbiAgdGhpcy5fdW5iaW5kUG9zdFN0YXJ0RXZlbnRzKCk7XG4gIHRoaXMucG9pbnRlckRvbmUoKTtcbn07XG5cbnByb3RvLl9wb2ludGVyUmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgLy8gcmVzZXQgcHJvcGVydGllc1xuICB0aGlzLmlzUG9pbnRlckRvd24gPSBmYWxzZTtcbiAgZGVsZXRlIHRoaXMucG9pbnRlcklkZW50aWZpZXI7XG59O1xuXG5wcm90by5wb2ludGVyRG9uZSA9IG5vb3A7XG5cbi8vIC0tLS0tIHBvaW50ZXIgY2FuY2VsIC0tLS0tIC8vXG5cbnByb3RvLm9ucG9pbnRlcmNhbmNlbCA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgaWYgKCBldmVudC5wb2ludGVySWQgPT0gdGhpcy5wb2ludGVySWRlbnRpZmllciApIHtcbiAgICB0aGlzLl9wb2ludGVyQ2FuY2VsKCBldmVudCwgZXZlbnQgKTtcbiAgfVxufTtcblxucHJvdG8ub250b3VjaGNhbmNlbCA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgdmFyIHRvdWNoID0gdGhpcy5nZXRUb3VjaCggZXZlbnQuY2hhbmdlZFRvdWNoZXMgKTtcbiAgaWYgKCB0b3VjaCApIHtcbiAgICB0aGlzLl9wb2ludGVyQ2FuY2VsKCBldmVudCwgdG91Y2ggKTtcbiAgfVxufTtcblxuLyoqXG4gKiBwb2ludGVyIGNhbmNlbFxuICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAqIEBwYXJhbSB7RXZlbnQgb3IgVG91Y2h9IHBvaW50ZXJcbiAqIEBwcml2YXRlXG4gKi9cbnByb3RvLl9wb2ludGVyQ2FuY2VsID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICB0aGlzLl9wb2ludGVyRG9uZSgpO1xuICB0aGlzLnBvaW50ZXJDYW5jZWwoIGV2ZW50LCBwb2ludGVyICk7XG59O1xuXG4vLyBwdWJsaWNcbnByb3RvLnBvaW50ZXJDYW5jZWwgPSBmdW5jdGlvbiggZXZlbnQsIHBvaW50ZXIgKSB7XG4gIHRoaXMuZW1pdEV2ZW50KCAncG9pbnRlckNhbmNlbCcsIFsgZXZlbnQsIHBvaW50ZXIgXSApO1xufTtcblxuLy8gLS0tLS0gIC0tLS0tIC8vXG5cbi8vIHV0aWxpdHkgZnVuY3Rpb24gZm9yIGdldHRpbmcgeC95IGNvb3JkcyBmcm9tIGV2ZW50XG5Vbmlwb2ludGVyLmdldFBvaW50ZXJQb2ludCA9IGZ1bmN0aW9uKCBwb2ludGVyICkge1xuICByZXR1cm4ge1xuICAgIHg6IHBvaW50ZXIucGFnZVgsXG4gICAgeTogcG9pbnRlci5wYWdlWVxuICB9O1xufTtcblxuLy8gLS0tLS0gIC0tLS0tIC8vXG5cbnJldHVybiBVbmlwb2ludGVyO1xuXG59KSk7XG4iXSwic291cmNlUm9vdCI6IiJ9