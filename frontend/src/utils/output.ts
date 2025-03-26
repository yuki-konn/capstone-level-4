// OUTPUT FUNCTION
export function output(
  message: string,
  outputTag = "outputTag",
  shouldAppend = true
) {
  const tagID = document.getElementById(outputTag);
  if (shouldAppend) tagID.innerHTML += message;
  else tagID.innerHTML = message;
}
