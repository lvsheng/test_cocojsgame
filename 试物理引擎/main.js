angular.module('myApp', []).controller('myController', function ($scope, $interval) {
    cc.game.onStart = function(){
        cc.view.setDesignResolutionSize(480, 320, cc.ResolutionPolicy.SHOW_ALL);
        cc.view.resizeWithBrowserSize(true);
        //load resources
        cc.LoaderScene.preload(g_resources, function () {
            var scene = new PlayScene();
            cc.director.runScene(scene);

            //为了在控制台中调试时数据实时更新至页面
            scene.schedule(function () {
                $scope.$digest();
            },.5);
        }, this);
    };
    cc.game.run();

    //TODO: for debug
    window.$scope = $scope;

    window.initialRunnerPosition = {x:g_runnerStartX,y:g_groundHight + 29};
    $scope.placeInitial = function () {
        runnerSprite.setPosition(initialRunnerPosition);
        runnerSprite.flippedX = false;
    };
    $scope.actionFunctionList = [
        function move () {
            var moveByAction = new cc.MoveBy(.5, 300, 0);
            runnerSprite.runAction(moveByAction);
        },
        function jump () {
            var jumpByAction = new cc.JumpBy(.5, {x:100,y:0}, 100, 1);
            var flipXAction = new cc.FlipX(!runnerSprite.flippedX);
            runnerSprite.runAction(new cc.Sequence(jumpByAction, flipXAction, jumpByAction.reverse(), flipXAction.reverse()));
        },
        function bezier() {
            var bezierAction = new cc.BezierBy(.5, [cc.p(100, 0), cc.p(100, 100), cc.p(0, 100)]);
            runnerSprite.runAction(bezierAction);
        },
        function scale () {
            var bezierAction = new cc.BezierBy(.5, [cc.p(100, 0), cc.p(100, 100), cc.p(0, 100)]);
            var scaleAction = new cc.ScaleBy(.5, 3);
            runnerSprite.runAction(new cc.Spawn( //spawn为同时执行多个动作
                new cc.Sequence(bezierAction, bezierAction.reverse()),
                new cc.Sequence(scaleAction, scaleAction.reverse())
            ));
        },
        function rotate () {
            var bezierAction = new cc.BezierBy(.8, [cc.p(100, 0), cc.p(100, 100), cc.p(0, 100)]);
            var rotateAction = new cc.RotateBy(.8, -180);
            runnerSprite.runAction(new cc.Spawn(
                new cc.Sequence(
                    bezierAction,
                    new cc.FlipX(!runnerSprite.flippedX),
                    bezierAction.reverse(),
                    new cc.FlipX(!runnerSprite.flippedX)
                ),
                new cc.Sequence(rotateAction, rotateAction.reverse())
            ));
        },
        function fade () {
            runnerSprite.runAction(new cc.Sequence(
                new cc.FadeOut(0.3),
                new cc.FadeIn(0.3),
                new cc.FadeTo(0.7, 0.7),
                new cc.FadeIn(0.7, 1)
            ));
        },
        function tint () {
            runnerSprite.runAction(new cc.Sequence(
                new cc.TintTo(.5, 255, 0, 0),
                new cc.TintTo(1.5, 255, 255, 255)
            ));
        },
        function blink () {
            runnerSprite.runAction(
                new cc.Blink(.5, 5)
            );
        },
        function repeat () {
            var moveAction = new cc.MoveBy(.2, 100, 0);
            runnerSprite.runAction(
                new cc.Repeat(
                    new cc.Sequence(moveAction, moveAction.reverse()),
                    3
                )
            );
        }
    ];
    $scope.easeFunctionList = [
        function easeIn () {
            var moveAction = new cc.MoveBy(.5, 300, 0);

            runnerSprite.runAction(moveAction.easing(cc.easeIn(10)));
        },
        function easeOut () {
            var moveAction = new cc.MoveBy(.5, 300, 0);

            runnerSprite.runAction(moveAction.easing(cc.easeOut(10)));
        },
        function EaseInOut() {
            var moveAction = new cc.MoveBy(.5, 300, 0);

            runnerSprite.runAction(moveAction.easing(cc.easeInOut(10)));
        },
        function EaseElasticOut() {
            var moveAction = new cc.MoveBy(.5, 300, 0);

            runnerSprite.runAction(new cc.Sequence(
                new cc.RotateTo(.1, 75),
                moveAction.easing(cc.easeElasticOut(.3)),
                new cc.RotateTo(.1, 0)
            ));
        },
        function EaseBounceOut() {
            var moveAction = new cc.MoveBy(.5, 0, -50);

            runnerSprite.runAction(moveAction.easing(cc.easeBounceOut()));
        },
        function EaseBackIn() {
            var moveAction = new cc.MoveBy(.5, 300, 0);

            runnerSprite.runAction(moveAction.easing(cc.easeBackIn()));
        },
        function easeBezierAction() {
            var moveAction = new cc.MoveBy(.5, 300, 0);

            //传入四个点（1为单位长度，各点貌似是在中途设置一些中间点）
            runnerSprite.runAction(moveAction.easing(cc.easeBezierAction(.1, -0.3, 2, 1)));
        }
    ];

    $scope.runAction = function (srcCode) {
        (new Function ('(' + srcCode + ')()'))();
    };
});
