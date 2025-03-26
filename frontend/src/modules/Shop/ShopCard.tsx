import React from "react";

export class ShopCard {
  shopContent = (<></>);

  constructor(cardProperty = <></>) {
    this.shopContent = (
      <article className="card border border-success border-2">
        <img
          className="card-img-top"
          id={cardProperty.id}
          src={cardProperty.src}
          data-bs-title={cardProperty.tooltipTitle}
          data-bs-toggle="tooltip"
        />
        <div className="card-body">
          <h3 className="card-title">{cardProperty.title}</h3>
          {cardProperty.description}
        </div>
      </article>
    );
  }
}
