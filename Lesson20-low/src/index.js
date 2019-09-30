'use strict';

import validator from './modules/validator';
import sliderCarousel from './modules/sliderCarousel';
import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import hoverCommand from './modules/hoverCommand';
import numeralCalculate from './modules/numeralCalculate';
import sendForm from './modules/sendForm';
import correctInput from './modules/correctInput';


    sliderCarousel();
    validator();
    //Timer 
    countTimer();

    //Menu
    toggleMenu();

    //popup
    togglePopUp();

    //Tabs
    tabs();

    //Slider
    slider();

    //Calculation
    calc(100);

    //Team 
    hoverCommand();

    //Numeral calculate
    numeralCalculate();

    //Send-ajax-form
    sendForm();

    //Блокировка полей ввода имени и кoмментария
    correctInput();
