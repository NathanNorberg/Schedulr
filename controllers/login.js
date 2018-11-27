const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    res.render("login");
  },
<<<<<<< HEAD
  
  login: function (req, res) {
    knex('users').where('user_email', req.body.user_email)
      .then((user) => {
        console.log(user);
        // verify a user exists that matches this username
        if (user[0]) {
          // user exists, now verify passwords match
          if (user[0].user_password === req.body.user_password) {
            // User is valid
            console.log('user is valid', req.body.user_password);
            req.session.user = user[0];
            req.session.save(() => {
              res.redirect('/main');
            })
          } else {
            res.redirect('/login');
          }
        } else {
          res.redirect('/login');
        }
      })
  }
=======

  login: (req, res) => {
    knex("users").where("email", req.body.email).then((results) =>{
      if(results.length !== 0){
        let user = results[0];
        if(user.password == req.body.password){
          req.session.user = user;
          res.redirect("/homepage")
        }else{
          res.redirect("/login")
        }
      }else{
        res.redirect("/login")
      }
    })
  },


>>>>>>> 659b2f2a702e8cae5749df0aae54679adcfc0e39
}
