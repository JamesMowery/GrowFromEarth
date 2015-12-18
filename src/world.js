function createPlatforms() {

    var i = 0;

    // Create random platforms upward
    for (i = 0; i < 100; i++) {
        //Math.floor(Math.random()*(max-min+1)+min);
        var rNum = Math.floor(Math.random()*(600-0+1)+0);
        
        // Creates the left-most platform
        var platform = platforms.create(rNum,
            (-375 * i) - 800, 'platform');
        platform.anchor.setTo(1, 0.5)
        platform.scale.setTo(5, 2);
        platform.body.immovable = true;
        platform.visible = true;

        // Creates the right-most platform
        platform = platforms.create(rNum + 200, (-375 * i) - 800, 'platform');
        platform.anchor.setTo(0, 0.5)
        platform.scale.setTo(5, 2);
        platform.body.immovable = true;
        platform.visible = true;
        
        // Creates an invisible platform to increase the score
        platform = scorePlatforms.create(rNum - 100, (-375 * i) - 835, 'platform');
        platform.scale.setTo(1, 0.1);
        platform.alpha = 0;
    }

    platformsExist = true;
}

function createCollectables() {

    var i = 0;
    
    // Creates and places the sun tokens
    
    for (i = 0; i < 100; i++) {
        //Math.floor(Math.random()*(max-min+1)+min);
        var rNum = Math.floor(Math.random()*(650-150+1)+150);
        var collectable = collectables.create(rNum,
            (i * - 375) - 1000, 'sun');
        collectable.scale.setTo(0.75);
        collectable.body.immovable = true;
        collectable.visible = true;
    }

}
