//Update the name of the controller below and rename the file.
const login = require("../controllers/login.js")
const register = require("../controllers/register.js")
const homepage = require("../controllers/homepage.js")
const new_driver = require("../controllers/new_driver.js")
const new_truck = require("../controllers/new_truck.js")
const new_route = require("../controllers/new_route.js")


module.exports = function(app){

  app.get('/', login.index);


  app.get('/register', register.index);


//Require authentication past this point

  // app.use(auth)

  app.get('/homepage', homepage.index);


//Forms to create new drivers, trucks and routes
  app.get('/new_driver', new_driver.index);


  app.get('/new_truck', new_truck.index);


  app.get('/new_route', new_route.index);



}

/*
const auth = (req, res, next) => {
  if(!req.session.doctor){
    res.redirect("/login")
    return;
  }
  next();
}
*/
