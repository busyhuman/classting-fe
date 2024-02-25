interface Props {
  answer: string
  state?: 'default' | 'correct' | 'incorrect'
  onClick?: (v: string) => void
}
export default function QuizListItem({
  answer = '',
  state = 'default',
  onClick = () => {},
}: Props) {
  const _state =
    state == 'correct'
      ? 'text-green-700'
      : state === 'incorrect'
        ? 'text-red-700'
        : 'text-black-900'

  const handleClick = function () {
    onClick(answer)
  }

  return (
    <span className={`cursor-pointer text-red ${_state}`} onClick={handleClick}>
      {`- ${answer}`}
    </span>
  )
}
