const router = require('express').Router();
const passport = require('passport');
const db = require('../models');
var path = require("path");

// auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['email']
}));

// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    const userId =req.user.dataValues.id
    res.redirect(`/#/main`)

});


module.exports = router;