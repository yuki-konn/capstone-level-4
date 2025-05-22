import React from "react";
import { getTrivia } from "./getTrivia";
export class TriviaCard {
  cardContent: any = (<></>);
  triviaCardContent = {
    title: "Random Trivia",
    buttonName: "Brew Question",
  };

  constructor() {
    this.cardContent = (
      <article className="card">
        <div className="card-body">
          <h2 className="card-title">{this.triviaCardContent.title}</h2>
          <div id="outputTag" className="p-3"></div>
          <button
            onClick={handleClick}
            className="cardButton btn btn-success btn-sm"
          >
            {this.triviaCardContent.buttonName}
          </button>
        </div>
      </article>
    );
  }
}

function handleClick(event: any) {
  getTrivia();
}
