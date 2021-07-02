import React, { Component } from 'react';
import emoji from './emoji.svg';

export default class Instruksi extends Component {
  render() {
    return(
      <div id="instruksi">
        <img alt="emoji laugh" src={emoji} />
      <p>klik emoji untuk melihat short name emoji</p>
      </div>
    )
  }
}