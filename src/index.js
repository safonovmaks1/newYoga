window.addEventListener('DOMContentLoaded', function () {
    
    'use strict';

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