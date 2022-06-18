import { Dialog } from "../class/Dialog";
import { imageKeys, sceneKeys } from "../keys";

export class MainScene extends Phaser.Scene {
    constructor() {
        super(sceneKeys.main);
    }

    create() {
        const { width: w, height: h } = this.game.canvas;
        this.add.image(w / 2, h / 2, imageKeys.logo);
        const dialog = new Dialog(this, {
            position: "bottom",
            text: "test text",
        });
        this.add.existing(dialog);
    }
}
