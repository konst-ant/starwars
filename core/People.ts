import { QuestionData} from "./QuestionData"

const questionData : QuestionData = new QuestionData("haha", "haha");
console.log(questionData)

export interface People {
	name: string
	height: string
	mass: string
	hair_color: string
	skin_color: string
	eye_color: string
	birth_year: string
	gender: string
	homeworld: string
	films: string[]
	species: any[]
	vehicles: string[]
	starships: string[]
	created: string
	edited: string
	url: string
  }