//create the module
var app = angular.module('app', ['ngRoute']);

//configure routes
app.config(function($routeProvider){
    $routeProvider
        // route for the cookbook
        .when('/', {
            templateUrl : 'modules/cookbook/cookbook.html',
            controller: 'cookbookController'
        })

        // route for the explore page
        .when('/explore', {
            templateUrl : 'modules/explore/explore.html', 
            controller: 'exploreController'
        })
        .when('/recipe/:id', {
            templateUrl : 'modules/recipe/recipe.html',
            controller: 'recipeController'
        })
        .when('/groceries', {
            templateUrl: 'modules/grocery/grocery.html',
            controller: 'groceryController'
        })
        .when('/forms', {
            templateUrl: 'modules/forms/forms.html',
            controller: 'formsController'
        })
        .otherwise({
            redirect: '/'
        });
});

window.onload = function () {
    //active navbar
    $(".nav a").on("click", function(){
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });
};