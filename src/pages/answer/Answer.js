import React, {Component} from 'react'
import {Card, InputNumber} from 'antd'
import './Answer.css'

import {http} from '../../util'

export default class Answer extends Component {
  state = {
    loading: true,
    title: '答案加载中',
    answerer: '',
    answer: ''
  }

  async componentWillMount () {
    const {match: {params}} = this.props
    const {questionInfo: {question, questioner, answerer}, answer: {answer}} = await http.get(`/answer/${params.id}`)

    this.setState({
      loading: false,
      title: `${questioner}: ${question}`,
      answerer,
      answer
    })
  }

  render () {
    return (
      <div>
        <Card className="answer-view" loading={this.state.loading} title={this.state.title}>
          <div className="answerer">{this.state.answerer}:</div>
          <p className="answer">{this.state.answer}</p>
        </Card>
        <div className="rate-container">
          <span className="rate-hint">这个回答怎么样？打个分吧</span>
          &nbsp;
          <InputNumber min={1} max={10} defaultValue={6}/>
        </div>
      </div>
    )
  }
}