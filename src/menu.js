function createMenu() {

    var menuTitle = game.add.text(game.width / 2, game.height / 2 - 200,
            'Grow From Earth', { fontSize: '72px',
                                    fill: '#FFF',
                                    stroke: 'black',
                                    strokeThickness: 3 });

    menuTitle.anchor.x = 0.5;
    menuTitle.anchor.y = 0.5;

    var menuAbout = game.add.text(game.width / 2, game.height / 2 - 75,
            'A LudumDare 34 Game\nby James Mowery', { fontSize: '32px',
                                    fill: '#FFF',
                                    align: 'center',
                                    stroke: 'black',
                                    strokeThickness: 3 });
    menuAbout.anchor.x = 0.5;
    menuAbout.anchor.y = 0.5;

    var menuLink = game.add.text(game.width / 2, game.height / 2 + 25,
            'http://mowery.co/', { fontSize: '32px',
                                    fill: '#FFF',
                                    align: 'center',
                                    stroke: 'black',
                                    strokeThickness: 3 });
    menuLink.anchor.x = 0.5;
    menuLink.anchor.y = 0.5;
    
    var menuTutorial = game.add.text(game.width / 2, game.height / 2 + 130,
        'Tips: Use the keyboard keys (Left & Right) to control.\n' +
        'Collect the sun tokens to maintain difficulty.', { fontSize: '32px',
                                    fill: '#FFF',
                                    align: 'center',
                                    stroke: 'black',
                                    strokeThickness: 3 });
    menuTutorial.anchor.setTo(0.5);

    if (game.width < 840) {
        menuTitle.fontSize      = '44px';
        menuAbout.fontSize      = '24px';
        menuLink.fontSize       = '24px';
        menuTutorial.fontSize   = '24px';
    }
    else if (game.width < 480) {
        menuTitle.fontSize      = '36px';
        menuAbout.fontSize      = '18px';
        menuLink.fontSize       = '18px';
        menuTutorial.fontSize   = '18px';
    }
    
    var menus = {
        'title'     : menuTitle,
        'about'     : menuAbout,
        'link'      : menuLink,
        'tutorial'  : menuTutorial
    }

    return menus;
    
}

function showMenu(visible) {

    menus.title.visible     = visible;
    menus.about.visible     = visible;
    menus.link.visible      = visible;
    menus.tutorial.visible  = visible;
}