import React from "react";
import { teaCards } from "./teaCards";

export class ShopCard {
  cardContent: any = (<></>);

  constructor(position: number) {
    this.cardContent = (
      <article className="card border border-success border-2">
        <img
          className="card-img-top"
          id={teaCards[position].id}
          src={teaCards[position].src}
          data-bs-title={teaCards[position].tooltipTitle}
          data-bs-toggle="tooltip"
        />
        <div className="card-body">
          <h3 className="card-title">{teaCards[position].title}</h3>
          {teaCards[position].description}
        </div>
      </article>
    );
  }
}
