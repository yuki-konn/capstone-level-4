import React from "react";
import { teaCards } from "./teaCards";
// import { handleClickIncrease } from "../../controllers/handleClickIncrease";

export class ShopCard {
  cardContent: any = (<></>);
  position: number;

  //TODO: Get the onClick to work
  constructor(position: number) {
    this.cardContent = (
      <article className="card border border-success border-2 m-1">
        <img
          className="card-img-top"
          id={teaCards[position].id}
          src={teaCards[position].src}
          data-bs-title={teaCards[position].tooltipTitle}
          data-bs-toggle="tooltip"
        />
        <span className="badge bg-info col-8">
          {teaCards[position].saleType}
        </span>
        <div className="card-body p-2">
          <h3 className="card-title">{teaCards[position].title}</h3>
          <p className="card-text border border-black rounded">
            {teaCards[position].description}
          </p>

          <div>
            <button
              // onClick={handleClick1(position) as any}
              className="btn btn-sm border-black bg-success"
            >
              {teaCards[position].addButton}
            </button>
            <span className="text-black">
              <i className="bi bi-cart fs-4"></i>
            </span>
            <button
              // onClick="handleClickDecrease(event)"
              className="btn btn-sm border-black bg-danger"
            >
              {teaCards[position].minusButton}
            </button>
          </div>
        </div>
      </article>
    );
  }
}
// function handleClick1(position: number): void {
//   handleClickIncrease(position);
// }
