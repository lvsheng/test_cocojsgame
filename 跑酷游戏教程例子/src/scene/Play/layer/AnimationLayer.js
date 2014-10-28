var AnimationLayer = cc.Layer.extend({
    _view: {
        runner: null
    },
    ctor:function () {
        this._super();
        this.init();
    },

    init:function () {
        this._super();

        this._initView();
    },

    _initView: function () {
        var self = this;

        //cerate the hero sprite
        var runner = new cc.Sprite(res.runner_png);
        self._view.runner = runner;
        runner.attr({x: 80, y: 85});
        this.addChild(runner);
    }
});