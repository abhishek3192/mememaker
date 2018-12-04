import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../styles/index.css'
import MemeItem from '../components/MemeItem'
import {Form , FormGroup, FormControl, ControlLabel} from 'react-bootstrap'
import MyMemes from './MyMemes'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {memeLimit: 10, text0: '', text1: ''}
  }

  buttonClick(){
    this.setState({memeLimit: this.state.memeLimit+10})
  }

  render() {
    return (
      <div className='App'>
        <h2><u>Welcome To Meme Generator</u></h2>
        <MyMemes />
        <h4><i>Write Some text</i></h4>
        <Form inline>
          <FormGroup>
            <ControlLabel>Top</ControlLabel>
            {' '}
            <FormControl type='text'
            onChange={event => this.setState({text0: event.target.value})
            }
            ></FormControl>
            {' '}
          </FormGroup>
          <FormGroup>
            <ControlLabel>Bottom</ControlLabel>
            {' '}
            <FormControl type='text'
            onChange={event => this.setState({text1: event.target.value})}
            ></FormControl>
          </FormGroup>
        </Form>
        {
          this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
            return (
              <MemeItem 
              key={index}
              meme={meme}
              text0={this.state.text0}
              text1={this.state.text1}
              />
            )
          })
        }
        <div  onClick={() => this.buttonClick()}>
          <button className='memebutton'>Load 10 more...</button>
        </div>
        </div>
    )
  }
}

function mapStateToProps(state){
  return state;
}


export default connect(mapStateToProps, null)(App);
