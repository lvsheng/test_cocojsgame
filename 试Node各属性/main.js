angular.module('myApp', []).controller('myController', function ($scope) {
    cc.game.onStart = function() {
        cc.view.setDesignResolutionSize(480, 320, cc.ResolutionPolicy.SHOW_ALL);
        cc.view.resizeWithBrowserSize(true);
        cc.director.runScene(new AdjustNodeScene());

        window.$scope = $scope;
    };
    cc.game.run();
});
