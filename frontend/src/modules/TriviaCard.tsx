import { handleClickApi } from "../controllers/handleClickApi";
import React from "react";
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
            onClick={handleClickTriviaCard}
            className="cardButton btn btn-success btn-sm"
          >
            {this.triviaCardContent.buttonName}
          </button>
        </div>
      </article>
    );
  }
}

function handleClickTriviaCard(event: any) {
  handleClickApi(event);
}
