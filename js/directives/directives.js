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
    directive('mathjaxBind', function ($compile) {
        return {
            restrict: 'A',
            replace: true,
            controller: ['$scope', '$element', '$attrs', '$timeout', function ($scope, $element, $attrs, $timeout) {
                $timeout(function () {
                    $scope.$apply(function () {
                        $scope.$watch($attrs.mathjaxBind, function (nvalue, ovalue) {
                            console.log(nvalue)
                            $element.append(nvalue == 'teacher' ? '<div class="outer_teacher" ng-controller="BubbleController">' +
                                '<div class="avatar_teacher"></div>' +
                                '<div class="bubble_teacher"></div>' +
                                '<div class="box_teacher">' +
                                '<div class="character">' + $scope.question.body + '</div>' +
                                '</div>' +
                                '</div>' : '<div class="outer_student" ng-controller="BubbleController">' +
                                '<div class="avatar_student"></div>' +
                                '<div class="bubble_student"></div>' +
                                '<div class="box_student">' + $scope.answer + '</div>' +
                                '</div>');
                            $compile($element.contents())($scope);
                        });
                    });
                }, 0);
            }],
            link: function($scope, $element, $attrs){
//                $scope.role = 'student'
            }
        }
    })