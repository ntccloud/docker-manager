import { Layout, Menu, Icon } from 'antd';
import { Component } from 'react';
import { routerRedux } from 'dva/router';
import { setAuthority, setUserInfo } from '@/utils/authority';

import styles from './index.css';

const { Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class MainLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  logoutHandler = (e) => {
    setAuthority(null);
    setUserInfo(null);
    this.props.history.push("/login");
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className={styles.logo} />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>用户</span>
                </span>
              }
            >
              <Menu.Item key="logout" onClick={this.logoutHandler}>登出</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '0 16px' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Docker Manager ©2019 Created by Moonlor</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default MainLayout;