import { Game } from "phaser";

const rootEleId = "app";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 1024,
  height: 768,
  parent: rootEleId,
};
new Game(config);
