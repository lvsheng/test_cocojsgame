myUtil.createAnimationWithPlistFileName = function (plistFileName, interval) {
    if (!interval) { interval = .1; }

    // 可能是为了减少内存消耗，调用这个方法之后，就会把getRes里缓存的plistFileName删除，所以要在其前调getRes...
    var plistDict = cc.loader.getRes(plistFileName);
    cc.spriteFrameCache.addSpriteFrames(plistFileName);

    var frames = [];
    for (var name in plistDict.frames) {
        frames.push(cc.spriteFrameCache.getSpriteFrame(name));
    }

    return new cc.Animation(frames, interval);
};
