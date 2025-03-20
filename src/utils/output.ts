// OUTPUT FUNCTION
export function output(
  message = "",
  outputTag = "outputTag",
  shouldAppend = true
) {
  const tagID = document.getElementById(outputTag);
  if (shouldAppend) tagID.innerHTML += message;
  else tagID.innerHTML = message;
}
