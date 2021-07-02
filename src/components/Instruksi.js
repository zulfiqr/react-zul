import React, { Component } from 'react';
import emoji from './emoji.svg';
import './instruksi.css';

export default class Instruksi extends Component {
  render() {
    return(
      <div className="instructions">
        <img alt="emoji laugh" src={emoji} />
      <p>klik emoji untuk melihat short name emoji</p>
      </div>
    )
  }
}