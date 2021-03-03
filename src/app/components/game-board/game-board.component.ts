import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {

  elements: string[];
  isXNextPlayer: boolean;
  winner: string;

  constructor() { }

  ngOnInit(): void {
    this.elements = Array(9).fill(null);
    this.isXNextPlayer = true;
    this.startGame();
  }

  startGame() {
    this.elements = Array(9).fill(null);
    this.winner = null;
    this.isXNextPlayer = true;
  }

  playerMove(idx: number) {
    if (!this.elements[idx]) {
      this.elements.splice(idx, 1, this.player);
      this.isXNextPlayer = !this.isXNextPlayer;
    }


    this.winner = this.calculateWinner();
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.elements[a] &&
        this.elements[a] === this.elements[b] &&
        this.elements[a] === this.elements[c]
      ) {
        return this.elements[a];
      }
    }

    let movesRemaining: number = 9 - this.elements
        .filter(e => e != null)
        .length;

    if(movesRemaining == 0){
      return 'D';
    }

    return null;
  }

  get player() {
    return this.isXNextPlayer ? 'X' : 'O';
  }

}
