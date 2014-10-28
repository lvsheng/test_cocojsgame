var MenuLayer = cc.Layer.extend({
    ctor : function(){
        this._super();
        this.init();
    },
    init:function(){
        var self = this;
        self._super();

        var winsize = cc.director.getWinSize();
        var centerpos = cc.p(winsize.width / 2, winsize.height / 2);

        var spritebg = new cc.Sprite(res.helloBG_png);
        spritebg.setPosition(centerpos);
        self.addChild(spritebg);

        cc.MenuItemFont.setFontSize(60);

        var menuItemPlay = new cc.MenuItemSprite(
            new cc.Sprite(res.start_n_png), // normal state image
            new cc.Sprite(res.start_s_png), //select state image
            null,
            function () {
                self._startPlayScene();
            },
            null
        );
        var menu = new cc.Menu(menuItemPlay);
        menu.setPosition(centerpos);
        self.addChild(menu);
    },

    _startPlayScene : function(){
        cc.director.runScene(new PlayScene());
    }
});
