/**
 * Created by alex on 24.05.17.
 */

/*export default */class Fighter {

  constructor(name, power, health) {
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

module.exports = Fighter;