import { output } from "../utils/output.js";

// index.html
export function viewResponse(fetchObject) {
  const response = JSON.parse(fetchObject);
  const results = response.results;
  const item = results[0];
  const question = item.question;
  const answer = item.correct_answer;
  const incorrects = item.incorrect_answers;

  const trivia = `<form id="outputTag" onsubmit="handleSubmitTrivia(event)">
            <p>${question}</p>
            <label for="choice-A">a. ${incorrects[0]}</label>
            <input type="radio" id="choice-A" name="choices"><br>
            <label for="choice-B">b. ${incorrects[1]}</label>
            <input type="radio" id="choice-B" name="choices"><br>
            <label for="choice-C">c. ${answer}</label>
            <input type="radio" id="choice-C" name="choices"><br>
            <label for="choice-D">d. ${incorrects[2]}</label>
            <input type="radio" id="choice-D" name="choices"><br>
            <button onclick="handleSubmitTrivia(event)">Submit</button>
          </form>`;

  output(trivia);
}
