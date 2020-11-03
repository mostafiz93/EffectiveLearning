import React from 'react'


import { Layout, Menu, Breadcrumb } from 'antd';
import Sidebar from './sidebar/sidebar';

import React from "react";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class layout extends React.Component {
	render() {
		return (
			<Layout style={{ minHeight: '100vh' }}>
				<Sidebar />
				<Layout className='site-layout'>
					<Header className='site-layout-background' style={{ padding: 0 }} />
					<Content style={{ margin: '0 16px' }}>
						<Breadcrumb style={{ margin: '16px 0' }}>
							<Breadcrumb.Item>User</Breadcrumb.Item>
							<Breadcrumb.Item>Bill</Breadcrumb.Item>
						</Breadcrumb>
						<div
							className='site-layout-background'
							style={{ padding: 24, minHeight: 360 }}
						>
							Bill is a cat.
						</div>
					</Content>
					<Footer style={{ textAlign: 'center' }}>
						Ant Design ©2018 Created by Ant UED
					</Footer>
				</Layout>
			</Layout>
		);
	}

}


