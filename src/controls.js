function playerControls() {

    // Reset the player velocity (movement)
    plant.body.velocity.x = 0;
    plant.body.rotation = 0;

    // Move left keyboard
    if (cursors.left.isDown) {
        plant.body.velocity.x = -650;
        plant.body.rotation = -35;
    }

    // Move right keyboard
    else if (cursors.right.isDown) {
        plant.body.velocity.x = 650;
        plant.body.rotation = 35;
    }

    // Move left mouse
    else if (game.input.mousePointer.isDown &&
             game.input.mousePointer.x < 400) {
        plant.body.velocity.x = -650;
        plant.body.rotation = -35;
    }

    // Move right mouse
    else if (game.input.mousePointer.isDown &&
             game.input.mousePointer.x > 400) {
        plant.body.velocity.x = 650;
        plant.body.rotation = 35;
    }

    // Move left touch
    else if (game.input.pointer1.isDown && game.input.pointer1.x < 300) {
        plant.body.velocity.x = -650;
        plant.body.rotation = -35;
    }

    // Move right touch
    else if (game.input.pointer1.isDown && game.input.pointer1.x > 500) {
        console.log("HOLDING");
        plant.body.velocity.x = 650;
        plant.body.rotation = 35;
    }

    // Stop
    else {
        plant.body.velocity.x = 0;
        plant.body.rotation = 0;
    }

    stem.x = plant.x - 3;
    
}
