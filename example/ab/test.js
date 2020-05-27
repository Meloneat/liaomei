const liaomei = require("../liaomei")

const app = liaomei()

// init
// app.init()
setTimeout(app.init.bind(app),3000)





console.log(liaomei.lover,liaomei.insidewords)