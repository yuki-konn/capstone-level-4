import { Row } from "./Row.js";
import React from "react";

export class GridSystem {
  // PROPERTIES
  content = (<></>);

  //CLASS METHOD TO ADD NEW ROW CLASS.
  addRow(row = new Row()) {
    // "this" KEYWORD ALLOWS ACCESS TO PROPERTIES AND METHODS WITHIN AN OBJECT.
    // DOT NOTATION TO ACCESS PROPERTIES OR OBJECTS WITHIN A CLASS.
    this.content = <div className="container-fluid">{row}</div>;
  }
}
