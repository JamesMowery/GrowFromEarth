function showMenu(visible) {

    menus.title.visible = visible;
    menus.about.visible = visible;
    menus.link.visible = visible;

}

function createMenu() {

    var menuTitle = game.add.text(game.width / 2, game.height / 2 - 100,
            'Grow From Earth', { fontSize: '72px',
                                    fill: '#FFF',
                                    stroke: 'black',
                                    strokeThickness: 3 });

    menuTitle.anchor.x = 0.5;
    menuTitle.anchor.y = 0.5;

    var menuAbout = game.add.text(game.width / 2, game.height / 2 + 50,
            'A LudumDare Game\nby James Mowery', { fontSize: '32px',
                                    fill: '#FFF',
                                    stroke: 'black',
                                    strokeThickness: 3 });
    menuAbout.anchor.x = 0.5;
    menuAbout.anchor.y = 0.5;

    var menuLink = game.add.text(game.width / 2, game.height / 2 + 175,
            'http://mowery.co/', { fontSize: '32px',
                                    fill: '#FFF',
                                    stroke: 'black',
                                    strokeThickness: 3 });
    menuLink.anchor.x = 0.5;
    menuLink.anchor.y = 0.5;

    var menus = {
        'title' : menuTitle,
        'about' : menuAbout,
        'link'  : menuLink
    }

    return menus;
    
}
