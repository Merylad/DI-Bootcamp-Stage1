import { useState, useEffect } from 'react';
import heroes from './superheroes.json';
import './SuperHeroes.css';



function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const SuperHeroes = () => {

  const [heroesList, setHeroesList] = useState(heroes.superheroes);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);


  useEffect(() => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }
    setHeroesList((prevList) => shuffleArray(prevList)); // Shuffle the heroesList after the click event has been processed
  }, [currentScore, highScore]);


  const handleClick = (id) => {

    const heroIndex = heroesList.findIndex((hero) => hero.id === id);

    const updatedHeroList = [...heroesList];

    if (heroIndex !== -1) {

      if (!heroesList[heroIndex].clicked) {
        // The hero is not clicked before
        updatedHeroList[heroIndex].clicked = true;
        setCurrentScore((prevScore) => prevScore + 1);

      } else {
        // The hero is already clicked, reset the game
        setHeroesList((prevList) => prevList.map((hero) => ({ ...hero, clicked: false })));
        setCurrentScore(0);
      }
    }
  };

  return (

    <section>

      <header>
        <nav id="navbar">
          <h1>Superheroes Memory Game</h1>
          <p id="score">Score: {currentScore} Top Score: {highScore}</p>
        </nav>
        <div id="info">Get points by clicking on an image but don't click on any more than once!</div>
      </header>

      <main id="herocontainer">

        {
            heroesList.map((hero) => {
          return (
            <div className="card" key={hero.id} onClick={() => handleClick(hero.id)}>
              <img className="card-img-top" src={hero.image} alt={hero.name} />
              <div className="card-body">
                <p>
                  <strong>Name:</strong> {hero.name}
                </p>
                <p>
                  <strong>Occupation:</strong> {hero.occupation}
                </p>
              </div>
            </div>
          );
        })}
      </main>

    </section>
  );
};

export default SuperHeroes;

