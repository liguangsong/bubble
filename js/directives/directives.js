/**
 * Created by hyfy on 14-4-7.
 */
angular.module('bubble.directives', []).
    directive('teacher',function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'pages/teacher.html'
        }
    }).
    directive('student',function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'pages/student.html'
        }
    }).
    directive('bubbleChat', function ($compile) {
        return {
            restrict: 'A',
            replace: true,
            controller: ['$scope', '$element', '$attrs', '$timeout', function ($scope, $element, $attrs, $timeout) {
                $timeout(function () {
                    $scope.$apply(function () {
                        $scope.$watch($attrs.bubbleChat, function (nvalue, ovalue) {
                            switch(nvalue){
                                case 'teacher': $element.append('<div class="outer_teacher" ng-controller="BubbleController">' +
                                    '<div class="avatar_teacher"></div>' +
                                    '<div class="bubble_teacher"></div>' +
                                    '<div class="box_teacher">' +
                                    '<div class="character">' + $scope.question.body + '</div>' +
                                    '</div>' +
                                    '</div>');break;
                                case 'student': $element.append('<div class="outer_student" ng-controller="BubbleController">' +
                                    '<div class="avatar_student"></div>' +
                                    '<div class="bubble_student"></div>' +
                                    '<div class="box_student">' + $scope.answer + '</div>' +
                                    '</div>');break;
                                case 'video': $element.append('<div class="outer_teacher" ng-controller="BubbleController">' +
                                    '<div class="avatar_teacher"></div>' +
                                    '<div class="bubble_teacher"></div>' +
                                    '<div class="box_teacher">' +
                                    '<div class="character"><video class="video" poster="http://www.html5rocks.com/en/tutorials/video/basics/star.png" controls>' +
                                    '<source src="http://www.html5rocks.com/en/tutorials/video/basics/Chrome_ImF.mp4" />' +
                                    '</video></div>' +
                                    '</div>' +
                                    '</div>');break;
                            }
                        });
                    });
                }, 0);
            }],
            link: function($scope, $element, $attrs){
//                $scope.role = 'student'
            }
        }
    });