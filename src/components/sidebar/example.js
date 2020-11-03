import React from 'react';
import { Layout } from 'antd';
import Sidebar from './sidebar';


const { Header, Content } = Layout;


export default class Example extends React.Component {
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sidebar />
                <Layout className='site-layout'>
                    <Header className='site-layout-background' style={{ padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <div
                            className='site-layout-background'
                            style={{ padding: 24, minHeight: 360 }}
                        >
                            <h1>Hello</h1>
                        </div>
                    </Content>

                </Layout>
            </Layout>

        );
    }

}









