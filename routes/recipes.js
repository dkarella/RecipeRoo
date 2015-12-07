var express = require('express');
var router = express.Router();
var Recipes = require('../models/recipes.js');


router.get('/', function(req, res){
    Recipes.find({}, function(err, docs){
        if(err) res.sendStatus(400);
        else{
            res.json(docs);
        }
    });
});

router.post('/create', function(req, res){
    console.log(req.body);

    // create a new recipe
    var newRecipe = Recipes(req.body);

    // save the recipe
    newRecipe.save(function(err) {
        if (err) throw err;
        console.log('Recipe created!');
    });

    // send success
    res.sendStatus(200);
});

module.exports = router;