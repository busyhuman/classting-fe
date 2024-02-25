import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  title?: string
}

export default function QuizList({ children, title = '' }: Props) {
  return (
    <div className="flex flex-col">
      {title}
      <div className="flex flex-col gap-y-2 mt-4 w-fit">{children}</div>
    </div>
  )
}
