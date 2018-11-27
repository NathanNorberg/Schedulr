const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    res.render("login");
  },

  login: (req, res) => {
    knex("users").where("user_email", req.body.user_email).then((results) =>{
      if(results.length !== 0){
        let user = results[0];
        if(user.user_password == req.body.password){
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

}
