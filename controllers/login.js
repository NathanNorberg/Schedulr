const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    res.render("login", {});
  },

  login: function (req, res) {
    knex('users').where('user_email', req.body.user_email)
      .then((user) => {
        // verify a user exists that matches this username
        if (user[0]) {
          // user exists, now verify passwords match
          if (user[0].user_password === req.body.user_password) {
            // User is valid
            req.session.user = user[0];
            req.session.save(() => {
              res.redirect('/homepage');
            })
          } else {
            res.redirect('/');
          }
        } else {
          res.redirect('/');
        }
      })
  }
}
