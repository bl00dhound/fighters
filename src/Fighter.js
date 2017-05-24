/**
 * Created by alex on 24.05.17.
 */

export default class Fighter {

  constructor(name = 'Default', power = 10, health = 400) {
    this.name = name;
    this.power = power;
    this.health = health;
  }

  setDamage(damage) {
    this.health -= damage;
    console.log(`${this.name} health: ${this.health}`);
  }

  hit(enemy, point) {
    let damage = point * enemy.power;
    enemy.setDamage(damage);
  }

}
