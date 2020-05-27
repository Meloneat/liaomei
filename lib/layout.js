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
    let src = "https://opensourcerover.jpl.nasa.gov/#!/home"
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

