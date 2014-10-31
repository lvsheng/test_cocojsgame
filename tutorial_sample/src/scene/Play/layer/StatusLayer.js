var StatusLayer = cc.Layer.extend({
    _coins:0,
    _view: {
        labelCoin: null,
        labelMeter: null
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
        var winsize = cc.director.getWinSize();

        this._view.labelCoin = new cc.LabelTTF("Coins:0", "Helvetica", 20);
        this._view.labelCoin.setColor(cc.color(0,0,0));//black color
        this._view.labelCoin.setPosition(cc.p(70, winsize.height - 20));
        this.addChild(this._view.labelCoin);

        this._view.labelMeter = new cc.LabelTTF("0M", "Helvetica", 20);
        this._view.labelMeter.setPosition(cc.p(winsize.width - 70, winsize.height - 20));
        this.addChild(this._view.labelMeter);
    }
});
