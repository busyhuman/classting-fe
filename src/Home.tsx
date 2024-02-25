import MyLink from './components/MyLink'

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4 p-4">
      <MyLink to="/quiz">퀴즈 풀기</MyLink>
      <MyLink to="/note">오답 노트</MyLink>
    </div>
  )
}
