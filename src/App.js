import React from 'react';

import Instruksi from './components/Instruksi';
import Fungsi from './components/Fungsi';
import './style.css';
import data from './components/data.js';
import AnimalCard from './components/AnimalCard/AnimalCard';

function showAdditional(additional) {
  const alertInformation = Object.entries(additional)
    .map(information => `${information[0]}: ${information[1]}`).join('\n');
    alert(alertInformation);

}




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
      <Fungsi />
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
      <div className="wrapper">
        <h1>Animals</h1>
        {data.map(animal => (
          <AnimalCard 
            key={animal.name} 
            name={animal.name} 
            additional={animal.additional}
            diet={animal.diet}
            scientificName={animal.scientificName}
            size={animal.size}
            showAdditional={showAdditional}
          />
        ))}
      </div>
    </div>
  );
}
