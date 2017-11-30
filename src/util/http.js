import questions from '../dataSource/questions'
import answers from '../dataSource/answers'

const dataSource = {
  questions,
  answers
}

function getDataStrategy (url) {
  const params = url.slice('1').split('/')
  const key = params[0]
  switch (key) {
    case 'questions':
      return dataSource.questions
    case 'answer':
      const questionInfo = dataSource.questions.find(item => {
        return item.id.toString() === params[1]
      })

      const answer = dataSource.answers.find(item => {
        return item.id.toString() === params[1]
      })

      return {
        questionInfo,
        answer: answer || {}
      }
    default:
      return null
  }
}

const http = {
  get (url) {
    const data = getDataStrategy(url)

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data)
      }, 1500)
    })
  }
}

export default http