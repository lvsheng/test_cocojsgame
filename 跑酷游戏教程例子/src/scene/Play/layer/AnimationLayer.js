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

        //create the runner sprite
        var runner = new cc.Sprite(res.runner_png);
        self._view.runner = runner;
        runner.attr({x: 80, y: 85});
        self.addChild(runner);

        //create runner animation
        var runningAnimation = myUtil.createAnimationWithPlistFileName(res.running_plist, 0.1);
        var runningAnimateAction = new cc.RepeatForever(new cc.Animate(runningAnimation));
        self._view.runner.runAction(runningAnimateAction);
    }
});
