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
        cc.animationCache.addAnimations(res.running_plist);
        var runningAnimation = cc.animationCache.getAnimation('running');
        debugger;
        var runningAnimateAction = new cc.RepeatForever(new cc.Animate(runningAnimation));
        self._view.runner.runAction(runningAnimateAction);
    }
});
/*
var AnimationLayer = cc.Layer.extend({
    spriteSheet:null,
    runningAction:null,
    sprite:null,
    ctor:function () {
        this._super();
        this.init();
    },

    init:function () {
        this._super();

// create sprite sheet
        cc.spriteFrameCache.addSpriteFrames(res.running_plist);
        this.spriteSheet = cc.SpriteBatchNode.create(res.running_png);
        this.addChild(this.spriteSheet);

// init runningAction
        var animFrames = [];
        for (var i = 1; i < 5; i++) {
            var str = "runner" + i + ".png";
            var frame = cc.spriteFrameCache.getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = cc.Animation.create(animFrames, 0.1);
        this.runningAction = cc.RepeatForever.create(cc.Animate.create(animation));
        this.sprite = cc.Sprite.create("#runner1.png");
        this.sprite.attr({x:80, y:85});
        this.sprite.runAction(this.runningAction);
        this.spriteSheet.addChild(this.sprite);
    }
});
    */