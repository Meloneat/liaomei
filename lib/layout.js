
var layout = Object.create(null)

module.exports = layout

layout.init = function(container) {
    container ? this.containerLayout(container) : this.iframelayout() 
}

layout.iframelayout = function() {
}

layout.containerLayout = function(container) {
}

