import Axios, { AxiosResponse } from 'axios'
import { QuizRequest, QuizResponse } from './types'

const axios = Axios.create()
axios.defaults.baseURL = 'https://opentdb.com/api.php'

export const getQuiz = async function (params: QuizRequest): Promise<AxiosResponse<QuizResponse>> {
  const response = await axios.get('/', { params })
  return response
}