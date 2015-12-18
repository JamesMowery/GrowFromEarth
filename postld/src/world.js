function createPlatforms() {

    var i = 0;

    // Create random platforms upward
    for (i = 0; i < 100; i++) {
        //Math.floor(Math.random()*(max-min+1)+min);
        var rNum = Math.floor(Math.random()*(800-150+1)+150);
        rNum = rNum - 1000;
        platformLocationX = rNum;
        var platform = platforms.create(rNum,
            (-375 * i) - 800, 'platform');
        platform.scale.setTo(2, 2);
        platform.body.immovable = true;
        platform.visible = true;

        platform = platforms.create(rNum + 1000, (-375 * i) - 800, 'platform');
        platform.scale.setTo(2, 2);
        platform.body.immovable = true;
        platform.visible = true;

        platform = scorePlatforms.create(rNum + 500, (-375 * i) - 865, 'platform');
        platform.scale.setTo(2, 2);
        platform.alpha = 0;
        console.log("Create Platforms");
    }

    platformsExist = true;
}

function createCollectables() {

    var i = 0;

    for (i = 0; i < 100; i++) {
        //Math.floor(Math.random()*(max-min+1)+min);
        var rNum = Math.floor(Math.random()*(650-150+1)+150);
        var collectable = collectables.create(rNum,
            (i * - 375) - 970, 'sun');
        collectable.scale.setTo(0.75);
        collectable.body.immovable = true;
        collectable.visible = true;
    }

}
