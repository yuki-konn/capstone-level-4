import React from "react";
export class Column {
  // PROPERTIES
  columnContent = (<></>);

  // CONSTRUCTOR AUTOMATICALLY RUNS WHEN OBJECT IS CREATED.
  // THE CONSTRUCTOR ACCEPTS PARAMETERS.
  constructor(content = <></>) {
    // "this" KEYWORD ALLOWS ACCESS TO PROPERTIES AND METHODS WITHIN AN OBJECT.
    // DOT NOTATION TO ACCESS PROPERTIES OR OBJECTS WITHIN A CLASS.
    this.columnContent = <div className="col">{content}</div>;
  }

  // CLASS METHOD EXAMPLE
  // log() {
  //   console.log("Content: " + this.columnContent);
  // }
}
// how to use a method from a class
// const myColumn = new Column();
// myColumn.log();
