class Fighter {
  #name;
  #damage;
  #hp;
  #strength;
  #agility;
  #statistics;
  constructor({
    name,
    damage,
    hp,
    strength,
    agility,
  }) {
    this.#name = name;
    this.#damage = damage;
    this.#hp = hp;
    this.#strength = strength;
    this.#agility = agility;
    this.#statistics = {
      name: this.#name,
      wins: 0,
      losses: 0
    }
  }

  getName() {
    return this.#name
  }
  getDamage() {
    return this.#damage
  }
  getHealth() {
    return this.#hp
  }
  getStrength() {
    return this.#strength
  }
  getAgility() {
    return this.#agility
  }
  attack(defender) {
    let isSuccessful = Math.floor(Math.random() * 100);
    if ((defender.getAgility() + defender.getStrength()) > isSuccessful) {
      console.log(`${this.getName()} attack missed`)
    } else {
      defender.dealDamage(this.#damage);
      console.log(`${this.getName()} makes ${this.#damage} damage to ${defender.getName()}`)
    }
  }
  logCombatHistory() {
    console.log(`Name:${this.getName()},Wins:${this.#statistics.wins},Losses:${this.#statistics.losses}`)
  }
  heal(points) {
    return this.#hp += points
  }
  dealDamage(points) {
    this.#hp -= points;
    return this.#hp > 0 ? this.#hp : this.#hp = 0
  }
  addWin() {
    return this.#statistics.wins++
  }
  addLoss() {
    return this.#statistics.losses++
  }
}



const battle = function (fighter1, fighter2) {
  if (fighter2.getHealth() <= 0) {
    console.log(`${fighter2.getName()} is dead`);
    return 0
   }   
  if (fighter1.getHealth() <= 0) {
      console.log(`${fighter1.getName()} is dead`);
      return 0
     }
     
  while (true) {
    fighter1.attack(fighter2);
    fighter2.attack(fighter1);
    if (fighter2.getHealth() === 0 || fighter1.getHealth() === 0) {
      break
    }
  }
  if (fighter1.getHealth() > fighter2.getHealth()) {
    console.log(`${fighter1.getName()} has won`);
      fighter1.addWin();
      fighter2.addLoss();
      return fighter2
  } else {
    if(fighter1.getHealth() < fighter2.getHealth()) {
      console.log(`${fighter2.getName()} has won`);
      fighter2.addWin();
      fighter1.addLoss();
      return fighter1
    } else {
      return 0
    }
  }
   
};





module.exports = {
  Fighter,
  battle
};