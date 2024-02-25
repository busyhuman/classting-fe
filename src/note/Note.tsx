import { useEffect, useState } from 'react'
import QuizContainer from '../quiz/components/QuizContainer'
import { QuizResultItem } from '../quiz/apis/types'

export default function Note() {
  const [quizList, setQuizList] = useState<Array<QuizResultItem>>([])

  useEffect(() => {
    const temp = sessionStorage.getItem('note')
    if (temp) {
      try {
        setQuizList(JSON.parse(temp))
      } catch (e: unknown) {
        console.error(e)
      }
    }
  }, [])

  return <QuizContainer quizList={quizList} shouldSaveIncorrect={false} />
}
