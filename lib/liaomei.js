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


