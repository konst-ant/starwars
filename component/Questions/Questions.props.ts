import { IQuestionData } from '@/interface/round.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface QuestionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	data: IQuestionData
}