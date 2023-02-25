export interface IHistoryQuizQuestion {
  question: string;
  options: IQuizOption[];
}

interface IQuizOption {
  id: string;
  title: string;
  correct: boolean;
}
