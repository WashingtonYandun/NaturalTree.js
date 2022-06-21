class Game {
    constructor(
        player,
        enemy,
        bullet,
        score,
        gameOver,
        gameWin,
        gamePause,
        gameStart
    ) {
        this.player = player;
        this.enemy = enemy;
        this.bullet = bullet;
        this.score = score;
        this.gameOver = gameOver;
        this.gameWin = gameWin;
        this.gamePause = gamePause;
        this.gameStart = gameStart;
    }
}
export { Game };
