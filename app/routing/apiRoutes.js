const employees = require("../data/Employees");


module.exports = function(app) {

app.get("/api/employees", function(req, res) {
    res.json(employees)
})

app.post("/api/employees", function(req, res) {
    post.json(employees)
})

} ;