var PlayScene = cc.Scene.extend({
    _space: null, //chipmunk中的物理世界
    onEnter:function () {
        var self = this;
        self._super();
        self._initPhysics();

        //add three layer in the right order
        self.addChild(new BackgroundLayer());
        self.addChild(new AnimationLayer(self._space));
        self.addChild(new StatusLayer());

        self.scheduleUpdate(); //TODO? for what?
    },
    update: function (dt) {
        var self = this;
        self._super(dt);
        self._space.step(dt);
    },
    _initPhysics: function () {
        var self = this;
        self._space = new cp.Space();
        self._space.gravity = cp.v(0, -350);

        //set up walls
        var ground = new cp.SegmentShape(
            self._space.staticBody,
            cp.v(0, g_groundHight),
            cp.v(MAX_INT, g_groundHight),
            0 //厚度为0
        );
        self._space.addStaticShape(ground);
    }
});