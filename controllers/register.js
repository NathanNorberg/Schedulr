const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    res.render("register");
  },

  create: (req,res)=> {
    if (req.body.user_password !== req.body.confirmation){
      res.redirect('/register')
    }
      knex('users').insert({
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        user_password: req.body.user_password
      }).then(()=>{
        res.redirect('/')
      })
  }
}
