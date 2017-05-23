// import Fighter from './Fighter';
// import ImprovedFighter from './ImprovedFighter';
let Fighter = require('./Fighter')
let ImprovedFighter = require('./ImprovedFighter')

let fighter = new Fighter('Ordinary', 14, 800);
let improvedFighter = new ImprovedFighter('Improved', 14, 800);

fighter.hit(improvedFighter, 2);
improvedFighter.doubleHit(fighter, 2);