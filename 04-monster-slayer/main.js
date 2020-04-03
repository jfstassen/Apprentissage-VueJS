new Vue({
  el: "#app",
  data: {
    playerHP: 100,
    monsterHP: 100,
    gameIsRunning: false,
    logs: []
  },
  computed: {},
  methods: {
    startNewGame() {
      this.gameIsRunning = true;
      this.playerHP = 100;
      this.monsterHP = 100;
      this.logs = []
    },
    attack() {
      let damage = this.calculateDamage(3, 10);
      this.monsterHP -= damage;
      this.logs.unshift({
        isPlayer: true,
        message: "You deal ",
        hp: damage
      });
      if (this.checkWin()) return;
      this.monsterAttack();
    },
    specialAttack() {
      let damage = this.calculateDamage(10, 20);
      this.monsterHP -= damage;
      this.logs.unshift({
        isPlayer: true,
        message: "You perform an uppercut, dealing ",
        hp: damage
      });
      if (this.checkWin()) return;
      this.monsterAttack();
    },
    monsterAttack() {
      let damage = this.calculateDamage(5, 12);
      this.playerHP -= damage;
      this.logs.unshift({
        isPlayer: false,
        message: "Monster hits you for ",
        hp: damage
      });
      this.checkWin();
    },
    heal() {
      this.playerHP <= 90 ? (this.playerHP += 10) : (this.playerHP = 100);
      this.logs.unshift({isPlayer: true, message:"You heal yourself for ", hp: 10})
      this.monsterAttack();
    },
    giveUp() {
      this.gameIsRunning = false;
    },
    calculateDamage(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min); //si random nbre < 3, on prend 3
    },
    checkWin() {
      if (this.monsterHP <= 0) {
        confirm("You won ! Play another one ?")
          ? this.startNewGame()
          : (this.gameIsRunning = false);
        return true;
      }
      if (this.playerHP <= 0) {
        confirm("You lost ! Play another one ?")
          ? this.startNewGame()
          : (this.gameIsRunning = false);
        return true;
      }
      return false;
    }
  }
});
