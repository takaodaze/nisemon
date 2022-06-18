import { Game } from "phaser";
import { LoadingScene } from "./scene/LoadingScene";
import { MainScene } from "./scene/MainScene";

const rootEleId = "app";

const scenes = [LoadingScene, MainScene];

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 1024,
  height: 768,
  parent: rootEleId,
  scene: scenes,
};
new Game(config);
