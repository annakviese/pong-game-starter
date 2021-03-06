import Paddle from './Paddle';
import Board from './Board';
import { player1Keys, player2Keys } from './keys';
import Ball from './Ball';
import ScoreBoard from './ScoreBoard';

const gap = 10;


export default class Game {
	constructor() {
		const canvas = document.getElementById('game');
		this.height = canvas.height;
		this.width = canvas.width;
		this.context = canvas.getContext('2d');

    	this.board = new Board(this.height, this.width);
		this.p1 = new Paddle(this.height, 5, 'yellow', player1Keys)
		this.p2 = new Paddle(this.height, this.width - 10, 'yellow', player2Keys)
        
		this.p1Score = new ScoreBoard(225,85);
        this.p2Score = new ScoreBoard(75,85);
		this.ball = new Ball(this.height, this.width, 'white', 4);
}
	render() {
		this.board.render(this.context)
        this.p1.render(this.context)
        this.p2.render(this.context)
        
		this.p1Score.render(this.context)
		this.p2Score.render(this.context)
		this.ball.render(this.context, this.p1, this.p2, this.p1Score, this.p2Score)
}
}