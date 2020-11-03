import React from 'react'

import { Layout, Menu, Breadcrumb } from 'antd';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

import {
    DesktopOutlined,
    LinkOutlined,
    GlobalOutlined,
    TagOutlined,
    FileOutlined,
    CalendarOutlined,
    CameraOutlined,
    UserOutlined
} from '@ant-design/icons';
import citybank from './assets/citybank.png'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class Sidebar extends React.Component {
    state = {
        collapsed: false
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        return (
            <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
            >
                <div className='logo' >
                <img style={{ width: '200px' }}src={citybank} alt="" />
                </div>
                <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
                    <SubMenu key='sub1' icon={<UserOutlined />} title='User Management'>
                        <Menu.Item key='2'>A</Menu.Item>
                        <Menu.Item key='3'>B</Menu.Item>
                        <Menu.Item key='4'>C</Menu.Item>
                    </SubMenu>
                    <Menu.Item key='2' icon={<DesktopOutlined />}>
                        <Link to={"/example"}>eLearning</Link>
                    </Menu.Item>
                    <SubMenu key='sub2' icon={<UserOutlined />} title='Bank Rules'>
                        <Menu.Item key='5'>A</Menu.Item>
                        <Menu.Item key='6'>B</Menu.Item>
                        <Menu.Item key='7'>C</Menu.Item>
                    </SubMenu>
                    <Menu.Item key='8' icon={<FileOutlined />}>
                        <Link to={"/example"}>Files</Link>
                    </Menu.Item>
                    <Menu.Item key='9' icon={<TagOutlined />}>
                        <Link to={"/example"}>FAQ</Link>
                    </Menu.Item>
                    <Menu.Item key='10' icon={<GlobalOutlined />}>
                        <Link to={"/example"}>News</Link>
                    </Menu.Item>
                    <Menu.Item key='11' icon={<CameraOutlined />}>
                        <Link to={"/example"}>Media</Link>
                    </Menu.Item>
                    <Menu.Item key='12' icon={<LinkOutlined />}>
                        <Link to={"/example"}>External Links</Link>
                    </Menu.Item>
                    <Menu.Item key='13' icon={<CalendarOutlined />}>
                        <Link to={"/example"}>Calendar</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}
