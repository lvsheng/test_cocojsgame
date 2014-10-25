var AdjustLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        this.init();
    },
    init:function () {
        this._super();

        var runner = window.runner = new cc.Node('res/runner.png');
        runner.attr({x: 240, y: 160});
        this.addChild(runner);
    }
});

var AdjustScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        this.addChild(new AdjustLayer());
    }
});