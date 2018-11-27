//Update the name of the controller below and rename the file.
const login = require("../controllers/login.js")
const register = require("../controllers/register.js")
const homepage = require("../controllers/homepage.js")
const new_driver = require("../controllers/new_driver.js")
const new_truck = require("../controllers/new_truck.js")
const new_route = require("../controllers/new_route.js")


module.exports = function(app){
<<<<<<< HEAD
// Login
  app.get('/', login.index);

// Register
=======


  app.get('/login', login.index);
  app.post('/login/login', login.login);

>>>>>>> 659b2f2a702e8cae5749df0aae54679adcfc0e39
  app.get('/register', register.index);
  app.post('/register', register.create)

//Require authentication past this point

<<<<<<< HEAD
  app.use(auth)
=======
// app.use(auth)

>>>>>>> 659b2f2a702e8cae5749df0aae54679adcfc0e39
  app.get('/homepage', homepage.index);

//Forms to create new drivers, trucks and routes
  app.get('/new_driver', new_driver.index);
  app.post('/new_driver/add', new_driver.add);

  app.get('/new_truck', new_truck.index);
  app.post('/new_truck/add', new_truck.add);

  app.get('/new_route', new_route.index);
  app.post('/new_route/add', new_route.add);



}


const auth = (req, res, next) => {
  if(!req.session.doctor){
    res.redirect("/")
    return;
  }
  next();
}

