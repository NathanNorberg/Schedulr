const knex = require("../db/knex.js");

module.exports = {

  index: function(req, res) {
    res.render("register");
  },

  create:  function(req, res){
    knex("users").insert(req.body).then((results) =>{
      res.redirect("/")
    })
  }

}
