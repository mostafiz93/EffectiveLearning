import React from 'react';
import axios from 'axios';

import { List, Avatar, Spin } from 'antd';
import courseData from './dataSource';

export default class Courses extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			collapsed: false,
			dataFetched: false,
			courseData: []
		};

		this.fetchCourseData();
	}

	onCollapse = collapsed => {
		console.log(collapsed);
		this.setState({ collapsed });
	};

	async fetchCourseData() {
		try {
			const response = await axios.post(
				'http://13.229.139.139:3000/api/v1/test-api',
				{ courseData }
			);
			console.log(response);
			// const { courseData } = response.data;
			this.setState({
				courseData: response.data.courseData,
				dataFetched: true
			});
		} catch (error) {
			console.error(error);
		}
	}

	render() {
		const { dataFetched, courseData } = this.state;
		if (dataFetched)
			return (
				// <>
				<List
					style={{ background: 'white' }}
					itemLayout='vertical'
					size='small'
					pagination={{
						onChange: page => {
							console.log(page);
						},
						pageSize: 6
					}}
					dataSource={courseData.course}
					renderItem={item => (
						<List.Item
							key={item.title}
							extra={
								<td>
									{item.completed}% completed |{' '}
									<a href={item.forumhref}>Visit Forum</a>
								</td>
							}
						>
							<List.Item.Meta
								style={{ textAlign: 'left' }}
								avatar={
									<Avatar
										style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
									>
										{item.no}
									</Avatar>
								}
								title={<a href={item.href}>{item.title}</a>}
								description={item.description}
							/>
						</List.Item>
					)}
				/>
				// </>
			);
		else {
			return <Spin />;
		}
	}
}
