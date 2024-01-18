export interface IQuestionData {
	question: string,
	correctAnswer: string,
	shuffledAnswers: string[]
}

export interface IRound {
	questions: IQuestionData[]
}