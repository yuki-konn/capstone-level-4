import { createRow } from "./createRow.js";

export function createRows(columnsArray = []) {
  let rows = [];
  for (let position = 0; position < columnsArray.length; position++) {
    const columns = columnsArray[position];
    const row = createRow(columns);
    rows.push(row);
  }
  return rows;
}
