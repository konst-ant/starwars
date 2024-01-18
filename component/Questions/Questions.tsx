'use client'

import styles from './Questions.module.css';
import { IQuestionData } from "@/interface/round.interface";
import { QuestionProps } from './Questions.props';
import { ButtonHTMLAttributes, useRef, useState } from 'react';


export const Questions = ({data}: QuestionProps) : JSX.Element => {

	const [answerGiven, setAnswerGiven] = useState<boolean>(false)
	const [answerResult, setAnswerResult] = useState<boolean>(false)

	
	const onAnswer = (answer: string) => {
		if (!answerGiven && answer == data.correctAnswer) {
			setAnswerResult(true)
		}
		
		// color the correct answer button
		document.getElementsByName("answer").forEach(element => {
			if (element.firstChild?.nodeValue == data.correctAnswer) {
				element.style.backgroundColor = "lightgreen"
			}
		})
		setAnswerGiven(true)
	}

	return (
		<div className={styles.round}>
			<div className={styles.question}>
				{data.question}
			</div>
			<div className={styles.answers}>
				<button name="answer" className={styles.answer} onClick={() => onAnswer(data.shuffledAnswers[0])}>
					{data.shuffledAnswers[0]}
				</button>
				<button name="answer" className={styles.answer} onClick={() => onAnswer(data.shuffledAnswers[1])}>
					{data.shuffledAnswers[1]}
				</button>
				<button name="answer" className={styles.answer} onClick={() => onAnswer(data.shuffledAnswers[2])}>
					{data.shuffledAnswers[2]}
				</button>
				<button name="answer" className={styles.answer} onClick={() => onAnswer(data.shuffledAnswers[3])}>
					{data.shuffledAnswers[3]}
				</button>
			</div>
			<div className={styles.result}>
				{answerGiven && answerResult && 
					<div className={styles.resultPositive}>
						Good job! Exactly so
					</div>
				}
				{answerGiven && !answerResult &&
					<div className={styles.resultNegative}>
						Not quite

					</div>
				}
				{answerGiven &&
					<button className={styles.next}>Next question</button>
				}
			</div>
		</div>
	)
}