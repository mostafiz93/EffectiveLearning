import React, { Component } from 'react';
import { Card, Steps } from 'antd';
import { TOPICS } from './staticData';
import TopicModal from './topicModal';
const { Step } = Steps;

export default class Topic extends Component {
  constructor(props) {
    super(props);
    this.modalElement = React.createRef();
    this.onShowModal = this.onShowModal.bind(this);
    this.state = {
      topics: TOPICS,
      current: 3,
      selectedTopic: {},
      visibleModal: false
    };
  }

  onShowModal(topic) {
    this.setState({ visibleModal: true, selectedTopic: topic });
    this.modalElement.current.showModal();
  }

  render() {
    const allTopics = this.state.topics.map((topic) => {
      return (
        <Step
          key={topic.id}
          title={
            topic.id === this.state.current
              ? topic.title + ' (In Progress)'
              : topic.title
          }
          description={topic.description}
          onClick={
            topic.id < this.state.current ? () => this.onShowModal(topic) : null
          }
        ></Step>
      );
    });

    return (
      <div>
        <Card>
          <Steps
            direction='vertical'
            current={this.state.current}
            status='process'
          >
            {allTopics}
          </Steps>
        </Card>
        <TopicModal
          ref={this.modalElement}
          title={this.state.selectedTopic.title}
          result={this.state.selectedTopic.result}
          score={this.state.selectedTopic.score}
          completedon={this.state.selectedTopic.completedon}
          totalquestions={this.state.selectedTopic.totalquestions}
          totalattempts={this.state.selectedTopic.totalattempts}
          correctattempts={this.state.selectedTopic.correctattempts}
          incorrectattempts={this.state.selectedTopic.incorrectattempts}
        />
      </div>
    );
  }
}
