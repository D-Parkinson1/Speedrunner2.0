import Button from './Button';

class MenuUI extends Phaser.Scene {
    constructor () {
        super({
            key: 'menuUI',
            plugins: [ 'InputPlugin' ]
        });
        this.title;
        this.hasBackBtn;
    }

    init (data) {
        this.scene.bringToTop();
        this.title = data.title;
        this.hasBackBtn = data.backBtn;
    }

    create () {
        if(this.hasBackBtn) {
            this.addBackBtn();
        } else if (this.backBtn) {
            this.removeBackBtn();
        }

        let titleConfig = {
            x: this.registry.get('width') / 2,
            y: 0,
            text: this.title,
            style: {
                fontSize: '64px',
                fontFamily: 'Arial',
                color: '#FFD700',
                align: 'center'
            }
        };
        this.displayTitle = this.make.text(titleConfig).setOrigin(0.5, 0);
    }

    backToMenu (currentScene) {
        currentScene.scene.stop();
        this.scene.launch('menu');
        this.removeBackBtn();
        this.setTitle('SPEEDRUNNER');
        this.scene.bringToTop();
    }

    setTitle (title) {
        this.title = title;
        this.displayTitle.setText(this.title);
    }

    addBackBtn (currentScene) {
        this.backBtn = new Button(0, 0, this.backToMenu, [ currentScene ], this, 'Back');

        // Hacky
        this.backBtn.setDimensions(100, 50);
        this.backBtn.x += this.backBtn.displayWidth / 2;
        this.backBtn.y += this.backBtn.displayHeight / 2;
        this.backBtn.text.x = this.backBtn.x;
        this.backBtn.text.y = this.backBtn.y;
    }

    removeBackBtn () {
        this.backBtn.deactivate();
    }
}

export default MenuUI;
