import 'phaser';

import Preload from './preload';
import Menu from './menu';
import PlayGame from './play';
import Background from './background';
import Help from './help';
import CreateAnims from './animations';
import LoadLevels from './loadLevel';
import LevelSelect from './levelSelect';
import MenuUI from './menuUI';
import Options from './options';
import initialise from './initialise';
import Config from './config';

const config = {
    type: Phaser.AUTO,
    width: Config.DEFAULT_WIDTH,
    height: Config.DEFAULT_HEIGHT,
    backgroundColor: '#87CEEB',
    pixelArt: true,
    parent: 'gameDiv',
    scene: [ Preload, Menu, PlayGame, Background, Help, CreateAnims, LoadLevels,
        LevelSelect, MenuUI, Options ],
    title: 'Speedrunner 2.0',
    banner: {
        text: '#191970',
        background: [
            '#555555',
            '#20B2AA',
            '#9ACD32',
            '#B8860B',
            '#F5F5DC'
        ],
        hidePhaser: true
    }
};

const game = new Phaser.Game(config);
initialise(game);
