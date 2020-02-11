import React from 'react';
import './index.scss'
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'

const { SubMenu } = Menu;
const { Sider } = Layout;

class Sidebar extends React.Component {
  render() {
    return (
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo">
          <span>
            <Icon type="fire" style={{ color: 'yellow' }} /> Rothschild
            </span>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="bar-chart" />
                <span>乐墨店铺</span>
              </span>
            }
          >
            <Menu.Item key="1"><Link to="/overView">店铺概况</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/lemoList">店铺列表</Link></Menu.Item>
          </SubMenu>

          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="home" />
                <span>内部数据</span>
              </span>
            }
          >
            <Menu.Item key="3"><Link to="/innerList">店铺列表</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/createShop">创建店铺</Link></Menu.Item>
          </SubMenu>

          <Menu.Item key="5">
            <Icon type="user" />
            <span className="nav-text"><Link to="/permission" style={{color: '#fff'}}>角色与权限</Link></span>
          </Menu.Item>

          <Menu.Item key="6">
            <Icon type="github" />
            <span className="nav-text"><Link to="/evaluation" style={{color: '#fff'}}>开发与评价</Link></span>
          </Menu.Item>

        </Menu>
      </Sider>
    )
  }
}
export default Sidebar