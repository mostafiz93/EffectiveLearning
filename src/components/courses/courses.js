import React from "react";

import { List, Avatar } from "antd";
import courseData from "./dataSource";

export default class courses extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <>
        <List
          style={{ background: "white" }}
          itemLayout="vertical"
          size="small"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 6,
          }}
          dataSource={courseData.course}
          renderItem={(item) => (
            <List.Item
              key={item.description}
              extra={
                <td>
                  {item.completed}% completed |{" "}
                  <a href={item.forumhref}>Visit Forum</a>
                </td>
              }
            >
              <List.Item.Meta
                style={{ textAlign: "left" }}
                avatar={
                  <Avatar
                    style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
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
      </>
    );
  }
}
