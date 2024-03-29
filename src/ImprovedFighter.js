/**
 * Created by alex on 24.05.17.
 */

import Fighter from './Fighter';

export default class ImprovedFighter extends Fighter {
  constructor(name, power, health) {
    super(name, power, health);
  }

  doubleHit(enemy, point) {
    super.hit(enemy, point * 2);
  }
}
