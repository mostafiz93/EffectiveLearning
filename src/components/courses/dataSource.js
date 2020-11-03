// this data should be come from database
// for the template's shake we're generating this manually
const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: "https://ant.design",
    forumhref: "https://ant.design",
    title: `Course No - ${i + 1} | Proficient way to learn Git workflow`,
    no: i + 1,
    completed: Math.floor(Math.random() * (100 - 10)),
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:
      "This document describes the git workflow that should be used when contributing to open source projects on GitHub...",
  });
}

exports.course = listData;
