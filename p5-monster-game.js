const Monster = require("./p5-monster.js");

class MonsterGame {
    constructor({
      monsterList = [],
      gameDelayInMilliseconds = 5000,
      minimumLifeDrain = 1,
      maximumLifeDrain = 30,
    }) {
      this.gameDelayInMilliseconds = gameDelayInMilliseconds;
      this.minimumLifeDrain = minimumLifeDrain;
      this.maximumLifeDrain = maximumLifeDrain;
      this.createMonsters(monsterList);
    }
  
    listMonsters() {
      this.monsters.forEach((monster) => {
        const { monsterName, currentLife, minimumLife } = monster;
        console.log(`Monster: ${monsterName} (Life: ${currentLife}, Min Life: ${minimumLife})`);
      });
    }
  
    createMonsters(monsterList = []) {
      this.monsters = monsterList.map((monster) => new Monster(monster));
    }
  
    async playGame() {
      // Game loop code
    }
}
  
module.exports = MonsterGame;
  