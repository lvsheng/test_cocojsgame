var BackgroundLayer = cc.Layer.extend({
    _map0: null,
    _map1: null,

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
        window.layer = self;
        var winsize = cc.director.getWinSize();
        var centerPos = cc.p(winsize.width / 2, winsize.height / 2);

        self._map0 = new cc.TMXTiledMap(res.map00_tmx);
        self.addChild(self._map0);
        self._map1 = new cc.TMXTiledMap(res.map01_tmx);
        self._map1.setPosition(cc.p(self._map0.getContentSize().width, 0));
        self.addChild(self._map1);
    }
});
