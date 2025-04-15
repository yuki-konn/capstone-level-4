import axios from "axios";
import { TriviaQuery, TriviaResponse } from "./Trivia";

// Trivia API Function
export async function getTrivia(query: TriviaQuery): Promise<TriviaResponse> {
  const { amount, category, difficulty, type } = query;
  const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;
  const response = await axios.get(url);

  const answer = response.data.results[0].correct_answer;
  const incorrectAnswer1 = response.data.results[0].incorrect_answers[0];
  const incorrectAnswer2 = response.data.results[0].incorrect_answers[1];
  const incorrectAnswer3 = response.data.results[0].incorrect_answers[2];

  const result: TriviaResponse = {
    question: response.data.results[0].question,
    choices: [answer, incorrectAnswer1, incorrectAnswer2, incorrectAnswer3],
    answer: answer,
  };
  return result;
}

// Planning to use this in home page later to replace the trivia link card.
