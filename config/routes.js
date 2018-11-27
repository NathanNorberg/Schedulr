//Update the name of the controller below and rename the file.
const login = require("../controllers/login.js")
const register = require("../controllers/register.js")
const homepage = require("../controllers/homepage.js")
const new_driver = require("../controllers/new_driver.js")
const new_truck = require("../controllers/new_truck.js")
const new_route = require("../controllers/new_route.js")


module.exports = function(app){


// Login
  app.get('/login', login.index);
  app.post('/login', login.login);

  app.get('/register', register.index);
  app.post('/register', register.create)

//Require authentication past this point

  // app.use(auth)

  app.get('/homepage', homepage.index);

//Forms to create new drivers, trucks and routes
  app.get('/new_driver', new_driver.index);
  app.post('/new_driver', new_driver.add);

  app.get('/new_truck', new_truck.index);
  app.post('/new_truck', new_truck.add);

  app.get('/new_route', new_route.index);
  app.post('/new_route', new_route.add);



}


// const auth = (req, res, next) => {
//   if(!req.session.user){
//     res.redirect("/")
//     return;
//   }
//   next();
// }
