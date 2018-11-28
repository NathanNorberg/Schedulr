const knex = require("../db/knex.js");

module.exports = {

  index: function(req, res) {
    res.render("register");
  },

  create:  function(req, res){
    if (req.body.user_password !== req.body.passwordConfirm){
      res.redirect("/register")
    } else {
      knex("users").insert({
        company: req.body.company || 'Big Truckin\' Company',
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        user_password: req.body.user_password
      }).then(() =>{
        res.redirect("/")
      })
    } 
  }
}
