import Image from 'next/image'
import styles from './page.module.css'
import { QuestionData } from '@/core/QuestionData'
import { IQuestionData } from '@/interface/round.interface';
import { Questions } from '@/component/Questions/Questions';

export default async function Home() {
  const questionData = new QuestionData('planets', 'people');
  const data = await questionData.getData()

  // prepare shuffled answers
  const answers = [data.correctAnswer].concat(data.incorrectAnswers)
  answers.sort(() => Math.random() - 0.5)
 
  const question : IQuestionData = { 
    question: data.question!, 
    correctAnswer: data.correctAnswer!,
    shuffledAnswers: answers
  }

  return (
    <main>
      <Questions data={question}/>
    </main>
  )
}
