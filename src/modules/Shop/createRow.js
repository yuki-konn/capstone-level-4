import React from "react";

export function createRow(column = <></>) {
  const row = (
    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5">{column}</div>
  );
  return row;
}
