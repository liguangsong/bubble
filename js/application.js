/**
 * Created by hyfy on 14-4-4.
 */
angular.module('bubble', ['ngRoute', 'bubble.directives']).
    config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'pages/bubble.html',
            controller: BubbleController,
            resolve: {}
        }).otherwise('/');
    });
