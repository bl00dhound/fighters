import Fighter from './Fighter';
import ImprovedFighter from './ImprovedFighter';

let fighter = new Fighter('Ordinary', 14, 8000);
let improvedFighter = new ImprovedFighter('Improved', 14, 6000);

let fight = (fighter, improvedFighter, ...point) => {
  let round = 0;

  while(fighter.health > 0 && improvedFighter.health > 0) {
    if (fighter.health > 0) {
      fighter.hit(improvedFighter, point[getRandomNumber(point.length)]);
    }
    if (improvedFighter.health > 0) {
      improvedFighter.doubleHit(fighter, point[getRandomNumber(point.length)]);
    }
    round++;
  }

  let winner = fighter.health > 0 ? fighter.name : improvedFighter.name;

  console.log(`${winner} has won in ${round}th round.`)
}

let getRandomNumber = (max, min = 0) => Math.floor(Math.random() * (max - min)) + min;

fight(fighter, improvedFighter, 4, 56, 23, 54, 8, 45);
