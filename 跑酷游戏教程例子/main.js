cc.game.onStart = function(){
    cc.view.setDesignResolutionSize(480, 320, cc.ResolutionPolicy.SHOW_ALL);
    cc.view.resizeWithBrowserSize(true);
    //load resources
    cc.LoaderScene.preload(g_resources, function () {
        var menuScene = new MenuScene();
        window.menuScene = menuScene;
        cc.director.runScene(menuScene);
    }, this);
};
cc.game.run();