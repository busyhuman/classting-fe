import Doughnut from '../../components/Doughnut'
import MyLink from '../../components/MyLink'

interface Props {
  correctAnswerCount?: number
  totalAnswerCount?: number
  time: number
}

export default function QuizResult({
  correctAnswerCount = 0,
  totalAnswerCount = 0,
  time = 0,
}: Props) {
  const incorrectAnswerCount = totalAnswerCount - correctAnswerCount

  return (
    <div className="flex flex-col gap-y-2">
      <span>정답 개수: {correctAnswerCount}</span>
      <span>오답 수: {totalAnswerCount - correctAnswerCount}</span>
      <span>시간: {time.toFixed(1)}초</span>
      {totalAnswerCount > 0 && (
        <Doughnut data={[correctAnswerCount, incorrectAnswerCount]} />
      )}
      <MyLink to={'/'}>처음으로</MyLink>
    </div>
  )
}
