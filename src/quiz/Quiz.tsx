import { useEffect, useState } from 'react'
import { QuizRequest, QuizResultItem } from './apis/types'
import QuizContainer from './components/QuizContainer'
import { getQuiz } from './apis'

export default function Quiz() {
  const [quizList, setQuizList] = useState<Array<QuizResultItem>>([])
  useEffect(() => {
    const req: QuizRequest = {
      amount: 3,
      difficulty: 'easy',
      type: 'multiple',
    }

    getQuiz(req)
      .then(res => {
        const {
          data: { results },
        } = res
        setQuizList(results)
      })
      .catch(e => {
        console.error(e)
      })
  }, [])

  return <QuizContainer quizList={quizList} />
}
