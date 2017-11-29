import React, {Component} from 'react'
import {Table} from 'antd'
import {SearchCondition} from '../../components'
import {Link} from 'react-router-dom'

import {http} from '../../util'

const columns = [
  {
    title: '问题',
    dataIndex: 'question',
    key: 'question',
    render (text, record) {
      return (
        <Link to={`/answer/${record.id}`}>{text}</Link>
      )
    }
  },
  {
    title: '提问者',
    dataIndex: 'questioner',
    key: 'questioner'
  },
  {
    title: '回答者',
    dataIndex: 'answerer',
    key: 'answerer'
  },
  {
    title: '提问时间',
    dataIndex: 'time',
    key: 'time'
  }
]

export default class QuestionList extends Component {
  state = {
    data: []
  }

  searchCondition = null

  async componentWillMount () {
    const questionList = await http.get('/questions')
    this.setState({
      data: questionList
    })
  }

  render () {
    return (
      <div>
        <SearchCondition
          ref={form => this.searchCondition = form}
        />
        <Table
          columns={columns}
          rowKey="id"
          dataSource={this.state.data}
          pagination={true}
        />
      </div>
    )
  }
}
