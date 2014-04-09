/**
 * Created by hyfy on 14-4-4.
 */
function BubbleController($scope, $compile, $timeout) {
//    console.log($scope)
    var questions = [
        {
            body: '提问: 1 + 1 = ?',
            answer: 2,
            choices: ['A:1',
                'B:2',
                'C:3',
                'D:4'],
            type: 'choice'
        },
        {
            body: '提问: 2 + 2 = ?',
            answer: 4,
            choices: ['A:1',
                'B:2',
                'C:3',
                'D:4'],
            type: 'choice'
        },
        {
            body: '提问: 4 + 4 = ?',
            answer: 8,
            choices: ['A:5',
                'B:6',
                'C:7',
                'D:8'],
            type: 'choice'
        },
        {
            body: '提问: 1 + 2 = ?',
            answer: 3,
            choices: ['A:3',
                'B:4',
                'C:5',
                'D:6'],
            type: 'choice'
        },
        {
            body: '提问: 3 + 4 = ?',
            answer: 7,
            choices: ['A:5',
                'B:4',
                'C:7',
                'D:0'],
            type: 'choice'
        },
        {
            body: '提问: 1 + 4 = ?',
            answer: 5,
            choices: ['A:5',
                'B:1',
                'C:2',
                'D:3'],
            type: 'choice'
        }
    ];
    var current_question = 0;
    var length = questions.length;
    var give_question = function () {
        $scope.role = 'teacher';
        if (current_question != length) {
            $scope.question = questions[current_question];
            $scope.question.type == 'choice' ? $scope.choice = true : $scope.choice = false;
            return;
        }
        $scope.question.body = '题目做完啦';
    }
    $scope.submit = function (index) {
        if(typeof index != 'number'){
            $scope.role = 'student';
            $scope.answer = index;
            $timeout(function () {
                $scope.give_video();
            }, 1000);
            return;
        }
        $scope.role = 'student'
        $scope.answer = '我选第' + index + '个';
        if (parseInt($scope.question['choices'][index].substr(2)) == $scope.question.answer) {
            ++current_question
            $timeout(function () {
                give_question();
            }, 1000);
            return;
        }
    }
    $scope.give_video = function(){
        $scope.role = 'video';
    }
    give_question();
}