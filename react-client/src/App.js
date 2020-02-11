import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import OverView from './routes/lemoShops/OverView'
import LemoList from './routes/lemoShops/LemoList'
import InnerList from './routes/innerShops/InnerList'
import CreateShop from './routes/innerShops/CreateShop'
import Permission from './routes/Permission'
import Evaluation from './routes/Evaluation'

import './App.css'
import Sidebar from './layouts/Sidebar'
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

function App() {
  const headerStyle = {
    background: '#fff',
    height: '60px'
  }
  const contentStyle = {
    margin: '10px',
    background: '#fff',
    height: '82vh',
    minHeight: '420px',
    overflow: 'scroll',
    padding: '20px 20px 50px'
  }
  const footerStyle = {
    textAlign: 'center',
    height: '30px',
    lineHeight: '30px',
    padding: '0',
  }
  return (
    <div className="App">
      <Layout>
        <Sidebar />
        <Layout>
          <Header style={headerStyle}>header</Header>
          <Content style={contentStyle}>
            <Switch>
              <Route path="/overView" exact component={OverView} />
              <Route path="/lemoList" exact component={LemoList} />
              <Route path="/innerList" exact component={InnerList} />
              <Route path="/createShop" exact component={CreateShop} />
              <Route path="/permission" exact component={Permission} />
              <Route path="/evaluation" exact component={Evaluation} />
              <Redirect to="/" />
            </Switch>
          </Content>
          <Footer style={footerStyle}>Egg-Server & React-Client ©2020 Created by Jeamn</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
