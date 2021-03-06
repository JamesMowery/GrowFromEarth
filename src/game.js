function addScore(plant, platform) {

    platform.kill(); // Destroy the platform object

    score += 1;
    gameSpeedModifier += 0.05;
    scoreText.text = 'Score: ' + score;

}

function addBoost(plant, theBoost) {

    theBoost.kill(); // Destroy the sun object

    if (gameSpeedModifier > 1) {
         gameSpeedModifier -= 0.05;
    }

    // boost = boost + 1;
}

function gameOver(plant, platform) {

    platforms.removeAll();          // Remove all platforms
    scorePlatforms.removeAll();     // Remove all score zones
    collectables.removeAll();       // Remove all collectables

    timeCheck = game.time.now;      // Get the current time for menu delay
    gameState = 2;                  // Set the game state to "Game Over"

}
