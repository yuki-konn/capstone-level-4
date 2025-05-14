export type TriviaQuery = {
  amount: number;
  category: number;
  difficulty: string;
  type: string;
};

export type TriviaResponse = {
  question: string;
  choices: Array<string>;
  answer: string;
};
