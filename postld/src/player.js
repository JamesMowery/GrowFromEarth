function createStem() {

    var count = 0;
    var length = 918 / 20;
    var points = [];

    for (var i = 0; i < 20; i++)
    {
        points.push(new Phaser.Point(i * length, 0));
    }

    stem = game.add.rope(400, 600, 'plantBase', null, points);
    stem.scale.set(0.06);

    stem.updateAnimation = function() {
        count += 0.1;

        for (var i = 0; i < this.points.length; i++)
        {
            this.points[i].y = Math.sin(i * 0.5 + count) * 10;
        }
    };
    stem.rotation = 29.9;
    
}
