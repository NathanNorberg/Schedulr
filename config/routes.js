//Update the name of the controller below and rename the file.
const login = require("../controllers/login.js")
module.exports = function(app){

  app.get('/', login.index);

}
