// Importing the required modules
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user');

// Use the local strategy for authentication, provided by the User model
exports.local = passport.use(new LocalStrategy(User.authenticate()));

// Serialize user information to store in session
passport.serializeUser(User.serializeUser());

// Deserialize user information from session
passport.deserializeUser(User.deserializeUser());
