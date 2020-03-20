// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/home");
    }
    res.sendFile(path.join(__dirname, "../public/splash.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/home");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/signup", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/home");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/home", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  //Routes for category pages
  app.get("/travel", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/travel.html"));
  });
  app.get("/food", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/food.html"));
  });
  app.get("/work", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/work.html"));
  });
  app.get("/social", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/social.html"));
  });
  app.get("/yourmomjokes", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/yourmomjokes.html"));
  });
};