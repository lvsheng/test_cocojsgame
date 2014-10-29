var AnimationLayer = cc.Layer.extend({
    _view: {
        runner: null
    },
    _space: null,

    ctor:function (space) {
        this._super();
        this._space = space;
        this.init();
    },

    init:function () {
        this._super();

        this._initView();
    },

    _initView: function () {
        var self = this;

        //create the runner sprite
        var runner = new cc.PhysicsSprite(res.runner_png);
        self._view.runner = runner;

        //body
        var M_RUNNER = 1;
        var runnerBody = new cp.Body(
            M_RUNNER,
            cp.momentForBox(M_RUNNER, runner.getContentSize().width, runner.getContentSize().height)
        );
        runnerBody.p = cp.v(g_runnerStartX, g_groundHight + runner.getContentSize().height / 2);
        runnerBody.applyImpulse(cp.v(150, 0), cp.v(0, 0));
        self._space.addBody(runnerBody);

        //shape
        var shape = new cp.BoxShape(runnerBody, runner.getContentSize().width, runner.getContentSize().height);
        self._space.addShape(shape);

        self._view.runner.setBody(runnerBody);
        self.addChild(runner);

        //create runner animation
        var runningAnimation = myUtil.createAnimationWithPlistFileName(res.running_plist, 0.1);
        var runningAnimateAction = new cc.RepeatForever(new cc.Animate(runningAnimation));
        self._view.runner.runAction(runningAnimateAction);
    }
});
