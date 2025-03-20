import { Column } from "./Column.js";
import React from "react";

export class Row {
  // PROPERTIES
  rowContent = (<></>);

  // CLASS METHOD TO ADD A NEW COLUMN CLASS
  addColumn(column = new Column()) {
    // "this" KEYWORD ALLOWS ACCESS TO PROPERTIES AND METHODS WITHIN AN OBJECT.
    // DOT NOTATION TO ACCESS PROPERTIES OR OBJECTS WITHIN A CLASS.
    this.rowContent = (
      <div className="row-cols-2 row-cols-md-3 row-cols-lg-5">{column}</div>
    );
  }
}
