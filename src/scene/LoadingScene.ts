import { imageKeys, sceneKeys } from "../keys";

export class LoadingScene extends Phaser.Scene {
  constructor() {
    super(sceneKeys.loading);
  }

  preload() {
    this.load.image(
      imageKeys.logo,
      "//labs.phaser.io/assets/sprites/phaser3-logo.png"
    );
  }

  create() {
    const { width: w, height: h } = this.game.canvas;
    this.add.image(w / 2, h / 2, imageKeys.logo);
    this.add.text(w / 2, h / 2 + 60, "loading...").setOrigin(0.5);

    this.scene.start(sceneKeys.main);
  }
}
