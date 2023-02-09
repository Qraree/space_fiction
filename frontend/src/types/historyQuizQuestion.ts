export interface HistoryQuizQuestionType {
    question: string,
    options: QuizOptionType[]

}

interface QuizOptionType {
    id: string,
    title: string,
    correct: boolean,
}