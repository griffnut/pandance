import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {
  toggleMode,
  toggleBackground,
  toggleCharacter,
  toggleParticles,
  changeName
} from './store'

class Sidenav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      hasName: false
    }

    this.openNav = this.openNav.bind(this)
    this.closeNav = this.closeNav.bind(this)
    this.toggleScene = this.toggleScene.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    this.props.changeName(this.state.name)
    this.setState({
      hasName: true
    })
  }

  toggleScene(e) {
    const name = e.target.name
    const value = e.target.value

    if (name === 'mode') this.props.toggleMode(value)
    else if (name === 'background') this.props.toggleBackground(value)
    else if (name === 'character') this.props.toggleCharacter(value)
    else if (name === 'particles') this.props.toggleParticles(value)

    document.getElementById('game').focus()
  }

  openNav() {
    document.getElementById('sidenav').style.width = '250px'
  }

  closeNav() {
    document.getElementById('sidenav').style.width = '0'
  }

  render() {
    return (
      <div>
        <div id="sidenav">
          <i className="material-icons" id="closeNav" onClick={this.closeNav}>
            close
          </i>
            {
              this.state.hasName
              ? <h2>Hey, {this.state.name}!</h2>
              : <form onSubmit={this.handleSubmit} autocomplete="off">
                  <h2>Input Name Below</h2>
                  <input
                    type="text"
                    name="userName"
                    id="name-input"
                    placeholder="enter name here"
                    value={this.state.name}
                    onChange={this.handleChange}
                    required
                    minlength="3"
                    maxlength="15"
                  />
                  <button type='submit' className='button-submit'>Submit</button>
                </form>
            }
          <h1>Selection Menu</h1>
          <h3>
            Game Mode
          </h3>
          <label className="block">
            <input
              type="radio"
              id="mode1"
              name="mode"
              value="zen"
              defaultChecked
              onChange={this.toggleScene}
            />
            <span>Zen Mode</span>
          </label>

          <label className="block">
            <input
              type="radio"
              id="mode2"
              name="mode"
              value="ddp"
              onChange={this.toggleScene}
            />
            <span>Dance Dance Pandalution</span>
          </label>

          <h3>
            Character
          </h3>
          <label className="block">
            <input
              type="radio"
              id="char1"
              name="character"
              value="panda"
              defaultChecked
              onChange={this.toggleScene}
            />
            <span>Panda</span>
          </label>

          <label className="block">
            <input
              type="radio"
              id="char2"
              name="character"
              value="robot"
              onChange={this.toggleScene}
            />
            <span>Robot</span>
          </label>

          <h3>
            Background
          </h3>
          <label className="block">
            <input
              type="radio"
              id="bg1"
              name="background"
              value="space"
              defaultChecked
              onChange={this.toggleScene}
            />
            <span>Space</span>
          </label>

          <label className="block">
            <input
              type="radio"
              id="bg2"
              name="background"
              value="disco"
              onChange={this.toggleScene}
            />
            <span>Disco</span>
          </label>

          <h3>
            Particles
          </h3>
          <label className="block">
            <input
              type="radio"
              id="part1"
              name="particles"
              value="flare"
              defaultChecked
              onChange={this.toggleScene}
            />
            <span>Flare</span>
          </label>

          <label className="block">
            <input
              type="radio"
              id="part2"
              name="particles"
              value="panda"
              onChange={this.toggleScene}
            />
            <span>Panda</span>
          </label>

          <div className="block">
            <div className="top-score">
              <i className="material-icons">star</i>
              High Scores
            </div>
          </div>
          <div className="block">
            <a href="https://github.com/rosas-unicorns/Unicorns">Github</a>
          </div>
        </div>
        <i className="material-icons" id="openNav" onClick={this.openNav}>
          menu
        </i>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleMode: mode => dispatch(toggleMode(mode)),
    toggleBackground: bg => dispatch(toggleBackground(bg)),
    toggleCharacter: char => dispatch(toggleCharacter(char)),
    toggleParticles: part => dispatch(toggleParticles(part)),
    changeName: name => dispatch(changeName(name))
  }
}

export default connect(null, mapDispatchToProps)(Sidenav)
