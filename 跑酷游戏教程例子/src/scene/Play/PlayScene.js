var PlayScene = cc.Scene.extend({
    _space: null, //chipmunk中的物理世界
    onEnter:function () {
        var self = this;
        self._super();
        self._initPhysics();

        var animationLayer = new AnimationLayer(self._space);

        //add three layer in the right order
        self.addChild(new BackgroundLayer());
        self.addChild(animationLayer);
        self.addChild(new StatusLayer());

        //TODO:for debug:
        window.animationLayer = $scope.animationLayer = animationLayer;
        window.runnerSprite = $scope.runnerSprite = animationLayer._runner;
        window.runnerBody = $scope.runnerBody = runnerSprite.body;

        self.scheduleUpdate();
    },
    update: function (dt) {
        var self = this;
        self._super(dt);
        self._space.step(dt);
    },
    _initPhysics: function () {
        var self = this;
        self._space = new cp.Space();
        self._space.gravity = cp.v(0, -35);

        //set up walls
        var ground = new cp.SegmentShape(
            self._space.staticBody,
            cp.v(0, g_groundHight),
            cp.v(MAX_INT, g_groundHight),
            10 //厚度为0
        );
        self._space.addStaticShape(ground);

        //TODO: for debug
        window.space = $scope.space = self._space;
        window.ground = $scope.ground = ground;
    }
});