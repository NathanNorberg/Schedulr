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
<<<<<<< HEAD
=======

>>>>>>> 469b423379c5fadc9faeec759cc2bfbdfc906f37
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
<<<<<<< HEAD
//     res.redirect("/login")
=======
//     res.redirect("/")
>>>>>>> 469b423379c5fadc9faeec759cc2bfbdfc906f37
//     return;
//   }
//   next();
// }
<<<<<<< HEAD

=======
>>>>>>> 469b423379c5fadc9faeec759cc2bfbdfc906f37
