export function getCheckedRadio(event = new Event()) {
  const fiveStar = event.target[4].ariaLabel;
  const fourStar = event.target[5].ariaLabel;
  const threeStar = event.target[6].ariaLabel;
  const twoStar = event.target[7].ariaLabel;
  const oneStar = event.target[8].ariaLabel;

  const rating = [fiveStar, fourStar, threeStar, twoStar, oneStar];

  const ratingFieldSet = event.target[3].elements;

  for (let position = 0; position <= 4; position++) {
    if (ratingFieldSet[position].checked) {
      console.log(`${rating[position]} rating is selected.`);
      const displayRadio = rating[position];
      return displayRadio;
    }
  }
}
