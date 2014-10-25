var AnimationLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        this.init();
    },
    init:function () {
        this._super();

        //cerate the hero sprite
        var spriteRunner = new cc.Sprite(res.runner_png);
        spriteRunner.attr({x: 80, y: 85});
        this.addChild(spriteRunner);

        var spriteRunner2 = new cc.Sprite(res.runner_png);
        spriteRunner2.attr({ x: 160, y: 85});
        spriteRunner2.setSkewX(30);
        this.addChild(spriteRunner2);

        var spriteRunner3 = new cc.Sprite(res.runner_png);
        spriteRunner3.attr({ x: 240, y: 85});
        spriteRunner3.setSkewY(30);
        this.addChild(spriteRunner3);

        //create the move action
        spriteRunner.runAction(cc.Sequence.create(new cc.MoveTo(2, cc.p(300, 85))));
        spriteRunner2.runAction(cc.Sequence.create(new cc.MoveTo(2, cc.p(300, 85))));
        spriteRunner3.runAction(cc.Sequence.create(new cc.MoveTo(2, cc.p(300, 85))));


        var SKEWED_AMOUNT = 10;
        var perAngle = 180 / SKEWED_AMOUNT;

        for (var i = 0; i < 2 * SKEWED_AMOUNT; ++i) {
            var tempRunner = new cc.Sprite(res.runner_png);
            tempRunner.attr({ x: 120, y: 160});
            this.addChild(tempRunner);

            if (i % 2) {
                tempRunner.setSkewX(perAngle * Math.floor(i / 2));
            } else {
                tempRunner.setSkewY(perAngle * Math.floor(i / 2));
            }
        }

        var xSkewedRunner = new cc.Sprite(res.runner_png);
        xSkewedRunner.attr({x: 240, y: 160});
        this.addChild(xSkewedRunner);

        xSkewedRunner.runAction(new cc.Sequence(
            new cc.RotateTo(5, 0, 180),
            new cc.RotateTo(5, 180, 0),
            new cc.MoveTo(0.5, xSkewedRunner.x, xSkewedRunner.y + 10),
            new cc.SkewTo(1, 350, 0)
        ));
        window.runner = xSkewedRunner;

        var ySkewedRunner = new cc.Sprite(res.runner_png);
        ySkewedRunner.attr({x: 360, y: 160});
        this.addChild(ySkewedRunner);

        ySkewedRunner.runAction(new cc.RepeatForever(
            new cc.SkewTo(0.5, 0, 180),
            new cc.MoveTo(0.5, ySkewedRunner.x, ySkewedRunner.y + 10),
            new cc.SkewTo(1, 0, 180)
        ));
    }
});