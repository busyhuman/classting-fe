import { useEffect, useState } from 'react'
import Button from '../../components/Button'
import { QuizResultItem } from '../apis/types'
import QuizList from './QuizList'
import QuizListItem from './QuizListItem'
import QuizResult from './QuizResult'

interface Props {
  quizList: Array<QuizResultItem>
  shouldSaveIncorrect?: boolean
}

export default function QuizContainer({
  quizList = [],
  shouldSaveIncorrect = true,
}: Props) {
  const [amount, setAmount] = useState<number>(0)
  const [time, setTime] = useState<number>(0)
  const [correctAnswerCount, setCorrectAnswerCount] = useState<number>(0)
  const [questionList, setQuestionList] = useState<Array<Array<string>>>([[]])
  const [index, setIndex] = useState<number>(0)
  const [isDone, setIsDone] = useState<boolean>(false)

  const handleQuizListItem = function (v: string) {
    if (v !== quizList[index].correct_answer) {
      if (shouldSaveIncorrect) {
        const note = sessionStorage.getItem('note') ?? '[]'
        const temp = JSON.parse(note)
        temp.push(quizList[index])
        sessionStorage.setItem('note', JSON.stringify(temp))
      }
    } else {
      setCorrectAnswerCount(_correctCount => _correctCount + 1)
    }
    setIsDone(true)
  }

  const handleNextButton = function () {
    setIsDone(false)
    setIndex(_index => _index + 1)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (index >= amount) {
        clearInterval(timer)
      }
      if (amount > 0) {
        setTime(_time => _time + 0.1)
      }
    }, 100)

    return () => {
      clearInterval(timer)
    }
  }, [index, amount])

  useEffect(() => {
    const questionList: Array<Array<string>> = []

    quizList.forEach(val => {
      const temp = JSON.parse(JSON.stringify(val.incorrect_answers))
      temp.splice((Math.random() * 10) % 4, 0, val.correct_answer)
      questionList.push(temp)
    })

    setAmount(quizList.length)
    setQuestionList(questionList)
    setIndex(0)
  }, [quizList])

  return (
    <div className="p-4">
      {index < amount && amount > 0 && (
        <>
          <QuizList title={`Q${index + 1}. ${quizList[index].question}`}>
            {questionList[index]?.map(val => (
              <QuizListItem
                key={val}
                answer={val}
                state={
                  !isDone
                    ? 'default'
                    : val === quizList[index].correct_answer
                      ? 'correct'
                      : 'incorrect'
                }
                onClick={handleQuizListItem}
              />
            ))}
          </QuizList>
          <div className="mt-8">
            {isDone && <Button onClick={handleNextButton}>다음</Button>}
          </div>
        </>
      )}
      {index === amount && amount > 0 && (
        <QuizResult
          totalAnswerCount={amount}
          correctAnswerCount={correctAnswerCount}
          time={time}
        />
      )}
    </div>
  )
}
