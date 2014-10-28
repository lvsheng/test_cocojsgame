var AdjustLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        this.init();
    },
    init:function () {
        var self = this;

        window.$scope.$apply(function () {
            self._super();

            var backgroundSprite =
                window.backgroundSprite =
                    window.$scope.backgroundSprite =
                        new cc.Sprite(res.helloBG_png);
            backgroundSprite.attr({
                x: 240,
                y: 160,
                scale: 0.5
            });
            self.addChild(backgroundSprite);

            var runnerSprite =
                window.runnerSprite =
                    window.$scope.runnerSprite =
                        new cc.Sprite(res.runner_png);
            runnerSprite.attr({
                x: 20,
                y: 160
            });
            backgroundSprite.addChild(runnerSprite);
        });
    }
});

var AdjustNodeScene = cc.Scene.extend({
    onEnter:function () {
        this._super();

        var layer =
            window.layer =
                window.$scope.layer =
                    new AdjustLayer();
        this.addChild(layer);
    }
});