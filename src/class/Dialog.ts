export type Config = {
    position: "top" | "bottom";
    text: string;
    textSpeed: number;
};

const dialogHeight = 200;
export class Dialog extends Phaser.GameObjects.Container {
    private margin = 10;
    private padding = 10;

    private currentText = "";
    private currentTextPointer = 0;
    private textSpeed;
    private textAnimationEvent?: Phaser.Time.TimerEvent;

    private frame: Phaser.GameObjects.Rectangle;
    private text: Phaser.GameObjects.Text;

    constructor(public scene: Phaser.Scene, config: Config) {
        super(scene);

        const { width: gameW, height: gameH } = this.scene.game.canvas;

        const { frameY } = ((): { frameY: number } => {
            if (config.position === "top") {
                return { frameY: this.margin };
            } else {
                return { frameY: gameH - (dialogHeight + this.margin) };
            }
        })();

        this.frame = new Phaser.GameObjects.Rectangle(
            this.scene,
            gameW / 2,
            frameY,
            gameW - this.margin * 2,
            dialogHeight
        )
            .setStrokeStyle(1, 0xffffff)
            .setOrigin(0.5, 0);

        this.text = new Phaser.GameObjects.Text(
            this.scene,
            this.margin + this.padding,
            this.frame.y + this.padding,
            "",
            {}
        );

        this.add(this.frame);
        this.add(this.text);

        this.textSpeed = config.textSpeed;
        this.setText(config.text);
    }

    setText(t: string) {
        this.currentTextPointer = 0;
        this.currentText = t;
        this.animateText();
    }

    private animateText() {
        const loopCallback = () => {
            if (this.currentTextPointer < this.currentText.length) {
                this.text.setText(
                    this.currentText.slice(0, 1 + this.currentTextPointer++)
                );
            } else {
                this.textAnimationEvent?.remove();
            }
        };

        this.textAnimationEvent = this.scene.time.addEvent({
            delay: this.textSpeed,
            loop: true,
            callbackScope: this,
            callback: loopCallback,
        });
    }
}
