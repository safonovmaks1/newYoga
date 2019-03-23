window.addEventListener('DOMContentLoaded', function () {
    
    'use strict';

    if ('NodeList' in window && !NodeList.prototype.forEach) {
        // console.info('polyfill for IE11');
        NodeList.prototype.forEach = function (callback, thisArg) {
            thisArg = thisArg || window;
            for (var i = 0; i < this.length; i++) {
                callback.call(thisArg, this[i], i, this);
            }
        };
    }

    let tabs = require('./parts/tabs'),
        timer = require('./parts/timer'),
        modal = require('./parts/modal'),
        scroll = require('./parts/scroll'),
        forms = require('./parts/form'),
        slider = require('./parts/slider'),
        calc = require('./parts/calc');

    tabs();
    timer();
    modal();
    scroll();
    forms();
    slider();
    calc();
    
});