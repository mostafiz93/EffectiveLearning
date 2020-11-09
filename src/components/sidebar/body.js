import React from 'react';
import { Layout } from 'antd';
import Sidebar from './sidebar';
import Courses from '../courses/courses';
import Topic from '../topic/topic';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const { Header, Content } = Layout;


export default class Body extends React.Component {
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
                             <Switch>
                                <Route path='/home/courses/topics' component={Topic} />
                                <Route path='/home/courses' component={Courses} />
                            </Switch>
                        </div>
                    </Content>

                </Layout>
            </Layout>

        );
    }

}









