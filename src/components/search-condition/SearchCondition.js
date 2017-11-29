import React, {Component} from 'react'
import {Form, Input, Button, DatePicker} from 'antd'
import './SearchCondition.css'

class SearchCondition extends Component {
  rangePickerChangeHandler () {
  }

  resetHandler () {
    this.props.form.resetFields()
  }

  submitHandler () {
  }

  render () {
    const {getFieldDecorator} = this.props.form

    return (
      <Form className="search-condition" layout="inline" onSubmit={this.submitHandler.bind(this)}>
        <Form.Item>
          {getFieldDecorator('timeRange')(
            <DatePicker.RangePicker onChange={this.rangePickerChangeHandler.bind(this)}/>
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('questioner')(
            <Input placeholder="提问者"/>
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('answerer')(
            <Input placeholder="回答者"/>
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">搜索</Button>
        </Form.Item>
        <Form.Item>
          <Button type="default" htmlType="reset" onClick={this.resetHandler.bind(this)}>重置</Button>
        </Form.Item>
      </Form>
    )
  }
}

export default Form.create()(SearchCondition)
