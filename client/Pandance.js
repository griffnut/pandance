import React from 'react'
import {HemisphericLight, Vector3, ArcRotateCamera} from 'babylonjs'
import {Engine, Scene} from 'react-babylonjs'
import Panda from './PandaModel'
import SoundKey from './SoundKey'
import * as Mousetrap from 'mousetrap'

var Record = require('mousetrap-record')(require('mousetrap'))

export default class Pandance extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scene: {}
    }

    this.onSceneMount = this.onSceneMount.bind(this)
    this.initEnvironment = this.initEnvironment.bind(this)
    this.backGroundMusicPlay = this.backGroundMusicPlay.bind(this)
  }

  onSceneMount(e) {
    const {canvas, scene} = e
    // this.scene = scene

    this.setState({scene})

    let lights = this.initEnvironment(canvas, scene)

    var cameraArc = new ArcRotateCamera(
      'cameraArc',
      -Math.PI / 2,
      Math.PI / 2,
      10,
      new BABYLON.Vector3(0, 4, 0),
      scene
    )
    cameraArc.attachControl(canvas, true)

    scene.getEngine().runRenderLoop(() => {
      if (scene) {
        scene.render()
      }
    })
  }

  initEnvironment(canvas, scene) {
    var light = new HemisphericLight('hemi', new Vector3(0, 1, 0), scene)
    this.light = light

    return {main: light}
  }

  backGroundMusicPlay(e) {
    console.log(e.target.id)
  }

  render() {
    console.log(this.state.scene)
    return (
      <div>
        <Engine>
          <Scene onSceneMount={this.onSceneMount}>
            <Panda scene={this.state.scene} />
          </Scene>
        </Engine>
        <button id="btn" onClick={this.backGroundMusicPlay}>
          Music
        </button>
        <SoundKey />
      </div>
    )
  }
}
