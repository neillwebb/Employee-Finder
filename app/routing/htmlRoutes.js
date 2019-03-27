const path = require("path");


module.exports = function(app) {

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey"))
})

app.get("/employees", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home"))
})

} ;



