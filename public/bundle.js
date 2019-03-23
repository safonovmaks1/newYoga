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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var tabs = __webpack_require__(/*! ./parts/tabs */ "./parts/tabs.js"),
      timer = __webpack_require__(/*! ./parts/timer */ "./parts/timer.js"),
      modal = __webpack_require__(/*! ./parts/modal */ "./parts/modal.js"),
      scroll = __webpack_require__(/*! ./parts/scroll */ "./parts/scroll.js"),
      forms = __webpack_require__(/*! ./parts/form */ "./parts/form.js"),
      slider = __webpack_require__(/*! ./parts/slider */ "./parts/slider.js"),
      calc = __webpack_require__(/*! ./parts/calc */ "./parts/calc.js");

  tabs();
  timer();
  modal();
  scroll();
  forms();
  slider();
  calc();
});

/***/ }),

/***/ "./parts/calc.js":
/*!***********************!*\
  !*** ./parts/calc.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {
  var persons = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      calcInput = document.querySelectorAll('.counter-block-input'),
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personsSum = 0,
      daysSum = 0,
      total = 0;
  totalValue.innerHTML = 0;
  persons.addEventListener('change', function () {
    personsSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (restDays.value == '' || persons.value == '') {
      totalValue.innerHTML = 0;
      return;
    } else {
      totalValue.innerHTML = total;
    }
  });
  restDays.addEventListener('change', function () {
    daysSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (persons.value == '' || restDays.value == '') {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });
  place.addEventListener('change', function () {
    if (restDays.value == '' || persons.value == '') {
      totalValue.innerHTML = 0;
    } else {
      var a = total;
      totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
  });
  calcInput.forEach(function (item) {
    item.addEventListener('input', function () {
      if (item != 0) {
        item.value = item.value.replace(/\D+/g);
      }
    });
  });
}

module.exports = calc;

/***/ }),

/***/ "./parts/form.js":
/*!***********************!*\
  !*** ./parts/form.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function forms() {
  var message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
  };
  var form = document.querySelector('.main-form'),
      form2 = document.querySelector('#form'),
      input = document.querySelectorAll('form > input'),
      statusMessage = document.createElement('div');
  statusMessage.classList.add('status');

  function formSend(elem) {
    elem.addEventListener('submit', function (e) {
      e.preventDefault();
      elem.appendChild(statusMessage);
      var formData = new FormData(elem);
      var obj = {};
      formData.forEach(function (value, key) {
        obj[key] = value;
      });
      var json = JSON.stringify(obj);

      function postData(data) {
        return new Promise(function (resolve, reject) {
          var request = new XMLHttpRequest();
          request.open("POST", 'server.php');
          request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8'); // JSON

          request.onreadystatechange = function () {
            if (request.readyState < 4) {
              resolve();
            } else if (request.readyState === 4) {
              if (request.status == 200 && request.status < 3) {
                resolve();
              } else {
                reject();
              }
            }
          };

          request.send(json); // JSON
        });
      } // end postData


      postData(formData).then(function () {
        return statusMessage.innerHTML = message.loading;
      }).then(function () {
        // thanksModal.style.display = 'block';
        // overlay.style.display = 'none';
        statusMessage.innerHTML = message.success;
      }).catch(function () {
        return statusMessage.innerHTML = message.failure;
      }).then(clearInput);

      function clearInput() {
        for (var i = 0; i < input.length; i++) {
          input[i].value = ''; // Очищаем инпуты  
        }
      }
    });
  }

  formSend(form);
  formSend(form2);
  var tel = document.querySelectorAll('input[type="tel"]');
  tel.forEach(function (item) {
    item.addEventListener('input', function () {
      if (item != 0) {
        if (!checkValidSum(item.value)) {
          item.value = item.value.slice(0, -1);
        }
      }
    });
  });

  function checkValidSum(input) {
    return /^\+?[()\d \-]*$/.test(input);
  }
}

module.exports = forms;

/***/ }),

/***/ "./parts/modal.js":
/*!************************!*\
  !*** ./parts/modal.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {
  var more = document.querySelector('.more'),
      descrBtn = document.querySelectorAll('.description-btn'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close');

  function openModal() {
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
  }

  more.addEventListener('click', openModal);
  descrBtn.forEach(function (btn) {
    btn.addEventListener('click', openModal);
  });
  window.addEventListener('click', function (e) {
    if (e.target == overlay) {
      overlay.style.display = 'none';
      document.body.style.overflow = '';
    }

    close.addEventListener('click', function () {
      overlay.style.display = 'none';
      more.classList.remove('more-splash');
      document.body.style.overflow = '';
    });
  });
}

module.exports = modal;

/***/ }),

/***/ "./parts/scroll.js":
/*!*************************!*\
  !*** ./parts/scroll.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function scroll() {
  var anchors = document.querySelectorAll('a');
  anchors.forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var id = anchor.getAttribute('href');
      document.querySelector('' + id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
}

module.exports = scroll;

/***/ }),

/***/ "./parts/slider.js":
/*!*************************!*\
  !*** ./parts/slider.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {
  var slideIndex = 1,
      slides = document.querySelectorAll('.slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotsWrap = document.querySelector('.slider-dots'),
      dots = document.querySelectorAll('.dot');
  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach(function (item) {
      return item.style.display = 'none';
    }); // for (let i = 0; i < slides.length; i++) {
    //     slides[i].style.display = 'none'
    // }

    dots.forEach(function (item) {
      return item.classList.remove('dot-active');
    });
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlides(n) {
    showSlides(slideIndex = n);
  }

  prev.addEventListener('click', function () {
    plusSlides(-1);
  });
  next.addEventListener('click', function () {
    plusSlides(1);
  });
  dotsWrap.addEventListener('click', function (event) {
    for (var i = 0; i < dots.length + 1; i++) {
      if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
        currentSlides(i);
      }
    }
  });
}

module.exports = slider;

/***/ }),

/***/ "./parts/tabs.js":
/*!***********************!*\
  !*** ./parts/tabs.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
  var tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent');

  function hideTabContent(a) {
    for (var i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  info.addEventListener('click', function (event) {
    var target = event.target;

    if (target && target.classList.contains('info-header-tab')) {
      for (var i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });
}

module.exports = tabs;

/***/ }),

/***/ "./parts/timer.js":
/*!************************!*\
  !*** ./parts/timer.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
  var deadline = 'March 14 2019 21:17:00 GMT+0300';

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor(t / 1000 % 60),
        minutes = Math.floor(t / 1000 / 60 % 60),
        hours = Math.floor(t / (1000 * 60 * 60));
    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function setClock(id, endtime) {
    var timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      var t = getTimeRemaining(endtime);
      hours.textContent = timeForm(t.hours);
      minutes.textContent = timeForm(t.minutes);
      seconds.textContent = timeForm(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }

    function timeForm(time) {
      var t = time;

      if (time < 0) {
        t = '00';
      } else if (time < 10) {
        t = '0' + time;
      }

      return t;
    }
  }

  setClock('timer', deadline);
}

module.exports = timer;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map