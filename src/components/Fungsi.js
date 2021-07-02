import React from 'react';

import './instruksi.css';
import emoji from './emoji.svg';

export default function Fungsi() {
  return (
    <div className="instructions">
      <img alt="laughing crying emoji" src={emoji} />
        <p>Click on an emoji to view the emoji short name.</p>
    </div>
  )
}