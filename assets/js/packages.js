/*
npm install -g watchify
npm init
install packages
import here
watchify assets/js/packages.js -o assets/js/bundle.js
*/

// polyfill for Safary scrollIntoView options
var seamless = require("seamless-scroll-polyfill");
seamless.polyfill();


// inView check
var inView = require('in-view');

window.addEventListener('DOMContentLoaded', function(event) {


    // This is for navigation highlight
    inView.threshold(0.8);
    inView.offset(400);

    inView('.js-nav')
        .on('enter', el => {
            let item = '.navigation a[href="#' + el.getAttribute("id") + '"]'
            if(document.querySelector(item)) {
                document.querySelectorAll('.navigation a').forEach(function(el) {
                    el.classList.remove('active')
                });
                  
                document.querySelector(item).classList.add('active')
            }
        })

    // For animation, draw once
    inView.threshold(0);
    inView('.animate-inside')
        .on('enter', el => {
            el.classList.add('inview')
        })


    function sendData(formObj) {
        const XHR = new XMLHttpRequest();
        const FD = new FormData( formObj );
       
        XHR.addEventListener( "load", function() {
            formObj.querySelector('.js-form-register--status').innerHTML = 'Thanks, your application has been sent!'
        } );

        XHR.addEventListener( "error", function() {
            // event.target.responseText
            formObj.querySelector('.js-form-register--status').innerHTML = 'Oops! Something went wrong, try later or contact us'
        } );
    
        XHR.open( "POST", "https://script.google.com/macros/s/AKfycbybkfiRn-UbyhJ97O7X1b0-8ATvEug1Kr8VI1o_arV2ws7K9jFYuwvdyMTwbqB1ePXwKg/exec" );
        XHR.send( FD );
    }
    
    const forms = document.querySelectorAll( ".js-form-register" );

    forms.forEach((form) => {
        form.addEventListener( "submit", function ( event ) {
            event.preventDefault();
            this.querySelector( "input[type='submit']").disabled = true;
    
            sendData(this)
        });
    });
});