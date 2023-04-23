import './style.css'
import goLogo from './Go.svg'
import phaserLogo from './phaser.png'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import Phaser from 'phaser'
import HelloWorldScene from './scenes/HelloWorldScene.ts'

document.querySelector<HTMLDivElement>('#header')!.innerHTML = `
  <div class="logo-list">
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <a href="https://newdocs.phaser.io/docs/3.60.0/" target="_blank">
      <img src="${phaserLogo}" class="logo" alt="Phaser logo" />
    </a>
    <a href="https://go.dev/doc/" target="_blank">
      <img src="${goLogo}" class="logo vanilla gopher" alt="Go logo" />
    </a>
    <h1>Vite + TypeScript + Phaser + Go</h1>
    <p class="read-the-docs">
      Click on the Vite, TypeScript, Phaser and Go logos to learn more
    </p>
  </div>
`

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: document.querySelector<HTMLElement>('#app') || undefined,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: [HelloWorldScene]
}

export default new Phaser.Game(config)