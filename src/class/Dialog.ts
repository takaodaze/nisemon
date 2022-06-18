export type Config = {
    position: "top" | "bottom";
    text: string;
};

const dialogHeight = 200;
export class Dialog extends Phaser.GameObjects.Container {
    private margin = 10;
    private padding = 10;
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
            config.text,
            {}
        );

        this.add(this.frame);
        this.add(this.text);
    }

    setText(t: string) {
        this.text.setText(t);
    }
}
