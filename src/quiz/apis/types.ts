export interface QuizRequest {
  amount: number
  category?: number
  difficulty?: 'easy' | 'medium' | 'hard'
  type?: 'multiple' | 'boolean'
  encode?: 'url3986' | 'base64'
}

export interface QuizResponse {
  response_code: 0 | 5
  results: Array<QuizResultItem>
}

export interface QuizResultItem {
  category: string
  correct_answer: string
  difficulty: 'easy' | 'medium' | 'hard'
  type: 'multiple' | 'boolean'
  incorrect_answers: Array<string>
  question: string
}