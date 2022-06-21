import { Player } from "./Player.js";
import { Enemy } from "./Enemy.js";
import { Bullet } from "./Bullet.js";
import { Score } from "./Score.js";
import { Game } from "./Game.js";
import { GameOver } from "./GameOver.js";
import { GameWin } from "./GameWin.js";
import { GamePause } from "./GamePause.js";
import { GameStart } from "./GameStart.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
