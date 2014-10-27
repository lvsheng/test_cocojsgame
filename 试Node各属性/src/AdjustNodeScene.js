var AdjustLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        this.init();
    },
    init:function () {
        var self = this;

        window.$scope.$apply(function () {
            self._super();

            var runner =
                window.runner =
                    window.$scope.runner =
                        //new cc.Sprite(res.runner_png);
                        new cc.Sprite(res.helloBG_png);

            runner.attr({
                x: 240,
                y: 160
            });
            self.addChild(runner);
        });

        //为了在控制台中调试时数据实时更新至页面
        setInterval(function () {
            $scope.$digest();
        }, 500);
    }
});

var AdjustNodeScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        this.addChild(new AdjustLayer());
    }
});