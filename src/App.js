import React, {Component} from 'react'
import './App.css'
import {Menu, Icon} from 'antd'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import {SearchPage, QuestionList, Answer} from './pages'

class App extends Component {
  state = {
    menus: [
      {name: 'signIn', label: '登录', route: ''},
      {name: 'signUp', label: '注册', route: ''},
      {name: 'questionList', label: '问题列表', route: '/questionList'},
      {name: 'ask', label: '提问', route: ''},
      {name: 'answer', label: '作答', route: ''}
    ]
  }

  handleMenuClick () {
  }

  render () {
    return (
      <Router>
        <div className="App">
          <div className="topbar-container">
            <Icon className="logo" type="github"/>
          <Menu
            className="topbar"
            mode="horizontal"
            onClick={this.handleMenuClick}
          >
            {
              this.state.menus.map(item => (
                <Menu.Item key={item.name}>
                  <Link to={item.route}>
                    {item.label}
                  </Link>
                </Menu.Item>
              ))
            }
          </Menu>
          </div>
          <Switch>
            <Route path="/questionList" component={QuestionList}/>
            <Route path="/answer/:id" component={Answer}/>
            <Route component={SearchPage}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
