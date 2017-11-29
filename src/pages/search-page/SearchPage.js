import React, {Component} from 'react'
import './SearchPage.css'
import {Input, Button} from 'antd'
import {Link} from 'react-router-dom'

export default class SearchPage extends Component {
  render () {
    return (
      <div className="mid-container">
        <h1 className="app-name">智能问答系统</h1>
        <div className="search-box">
          <Input className="search-input" type="text" placeholder="输入感兴趣的内容"/>
          <Link to="/questionList">
            <Button className="search-button" type="primary" shape="circle" icon="search" size="large"/>
          </Link>
        </div>
      </div>
    )
  }
}