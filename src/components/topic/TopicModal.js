import React, { Component } from 'react';
import { Modal } from 'antd';

export default class TopicModal extends Component {
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.state = {
      visible: false
    };
  }
  showModal() {
    this.setState({ visible: true });
  }

  handleOk() {
    this.setState({ visible: false });
  }

  handleCancel() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <div>
        <Modal
          title='Congrats! The chapter is completed!'
          visible={this.state.visible}
          okText='Practice Again'
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>
            Result:{' '}
            <strong style={{ color: 'green' }}>{this.props.result}</strong>
          </p>
          <p>Score: {this.props.score}</p>
          <p>Completed on: {this.props.completedon}</p>
          <p>Total Questions: {this.props.totalquestions}</p>
          <p>Total Attempts: {this.props.totalattempts}</p>
          <p>Correct Attempts: {this.props.correctattempts}</p>
          <p>Incorrect Attempts: {this.props.incorrectattempts}</p>
        </Modal>
      </div>
    );
  }
}
