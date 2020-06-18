(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const liaomei = require("../../../liaomei")

const app = liaomei()

// init
// app.init()
setTimeout(app.init.bind(app),3000)





console.log(liaomei.lover,liaomei.insidewords)
},{"../../../liaomei":2}],2:[function(require,module,exports){
"use struct"

module.exports = require("./lib/liaomei")
},{"./lib/liaomei":5}],3:[function(require,module,exports){

var animation = Object.create(null)

module.exports = animation




},{}],4:[function(require,module,exports){
/**
 * liaomei
 * a UI biaobai artifact
 * 
 * Copyright(c) meloneat
 * MIT Licensed
 */
'use strict'

function layout() {
    
}

module.exports = layout

layout.prototype.init = function(container) {
    container ? this.containerLayout(container) : this.iframelayout() 
}

layout.prototype.iframelayout = function() {
    let localE = 'body',localP = "beforeend"
    let dde = document.documentElement
    // let src = "https://opensourcerover.jpl.nasa.gov/#!/home"
    let src = "../../template/ilove.html"
    let opacity = "0.75"

    var iframe = `<iframe
        id="inlineFrame"
        title="Inline Frame"
        width="${dde.clientWidth}"
        height="${dde.clientHeight}"
        src="${src}"
        style="z-index:9999 !important;position:fixed;top:0;opacity:${opacity}" 
    >
    </iframe>`


    for(let el of dde.children) {
        if (el && el.nodeName === localE.toUpperCase()) {
            el.insertAdjacentHTML(localP ,iframe)
            break
        }
    }

    dde = null
   

}

layout.prototype.containerLayout = function(container) {
}


},{}],5:[function(require,module,exports){
/**
 * liaomei
 * a UI biaobai artifact
 * 
 * Copyright(c) meloneat
 * MIT Licensed
 */

'use strict'

// var module = new Module()
// var exports = module.exports

var Layout = require("./layout")
var draw = require("./animation")

exports = module.exports = createFloatlayout

function createFloatlayout() {

    var process =  function() {

        Layout.call(this)
        // init document,add a layout covers the whole viewbox
        // asy events
        // todo
        /**
         * 1. layout DOM
         * 2. create brush
         * 3. painting 
         */
        // createBrush
        

    }

    process.prototype = new Layout()

    
    return (
        new process()
    )
}

exports.lover = "WSY"
exports.insidewords = "i love you forever"

// listen emitt
exports.listen = function(timer) {
    
}



},{"./animation":3,"./layout":4}]},{},[1]);
