var db = require("../models");

module.exports = function(app) {
  // Get all meals and Route to home page 
  app.get("/", function(req, res) {
    db.Meal.findAll({}).then(function(dbMeals) {
      res.render("homepage", {
        meals: dbMeals
      });
    });
  });

  // Search by meal name and route to meal page
  app.get("/meal/:name", function(req, res) {
    db.Meal.findOne({ where: { mealName: req.params.name } }).then(function(dbMeal) {
      console.log(dbMeal.dataValues);
      res.render("mealpage", {
        meal: dbMeal
      });
    });
  });

  // Route to Login Page
  app.get("/login", function(req, res) {
    res.render("auth/login");
  });

  app.get("/register", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("auth/register", {
        msg: "register",
        examples: dbExamples
      });
    });
  });

  app.get("/meals", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("user/mealpage", {
        msg: "meals on meals",
        examples: dbExamples
      });
    });
  });

  app.get("/swipe", function(req, res) {
    db.User.findAll({
      include: [{
       model: db.Meal
  }]
    }).then(function(dbMeals) {
      res.render("user/swipe", {
        msg: "swipe",
        meals: dbMeals
      });
    });
  });

  app.get("/dashboard", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("chef/dashboard", {
        msg: "dashboard",
        examples: dbExamples
      });
    });
  });

  app.get("/mealpage", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("mealpage", {
        msg: "mealpage",
        examples: dbExamples
      });
    });
  });


  app.get("/chef/meals/", function(req, res) {
    db.Meal.findAll({}).then(function(dbMeals) {
      res.render("chef/meals/index", {
        msg: "meals index",
        meals: dbMeals
      });
    });
  });


  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};