import React from 'react';

import Instruksi from './components/Instruksi.js';

import './style.css';

export default function App() {
  const greeting = 'greeting';
  const displayEmojiName = event => alert(event.target.id);
  const displayAction = true;
  const emojis = [
    {
      emoji: '😀',
      name: 'grinning face'
    },
    {
      emoji: '🎉',
      name: 'party popper'
    },
    {
      emoji: '💃',
      name: 'woman dancing'
    }
  ];

  return (
    <div className="container">
      <h1 id="{greeting}">Hello, World</h1>
      <Instruksi />
      {displayAction && <p>i am writing</p>}
      <ul>
        {emojis.map(emoji => (
          <li key={emoji.name}>
            <button onClick={displayEmojiName}>
              <span role="img" aria-label={emoji.name} id={emoji.name}>
                {emoji.emoji}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
