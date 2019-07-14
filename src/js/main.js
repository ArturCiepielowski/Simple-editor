"use strict";

import moment from 'moment';

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))


const focusInput = document.querySelector('.textarea--js');
const buttSave = document.querySelector('.buttons__save--js');
const buttRet = document.querySelector('.buttons__return--js');




buttSave.addEventListener('click' , (e) =>{

    localStorage.setItem('focusInput' , focusInput.value);

    console.log(focusInput.value)
});


buttRet.addEventListener('click' , (e) =>{

    focusInput.value=localStorage.getItem('focusInput');
});