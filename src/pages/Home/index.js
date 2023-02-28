import React from "react";
import CategoryList from "../../components/postList/CategoryList";
import RecentList from "../../components/postList/RecentList";
import { RecentWrapper, CategoryWrapper } from "./style";

const categorys = [
  { category_id: "1", category_name: "안녕" },
  { category_id: "2", category_name: "하세요" },
  { category_id: "3", category_name: "응애" },
];
const datas = [
  {
    post_id: "1",
    title: "first",
    content: "ffffff",
    create_date: "2023-3-1",
    member_id: "asdf",
    category_id: "1",
    status: "false",
  },
  {
    post_id: "2",
    title: "second",
    content: "ssssssssss",
    create_date: "2023-3-2",
    member_id: "asdf",
    category_id: "3",
    status: "false",
  },
  {
    post_id: "3",
    title: "third",
    content: "tttttttttttt",
    create_date: "2023-3-3",
    member_id: "asdf",
    category_id: "3",
    status: "false",
  },
  {
    post_id: "4",
    title: "fourth",
    content: "ssssssssss",
    create_date: "2023-3-2",
    member_id: "asdf",
    category_id: "2",
    status: "false",
  },
];

const Home = () => {
  return (
    <div>
      <RecentWrapper>
        <div className="topic">최신글</div>
        <hr></hr>
        <RecentList datas={datas} />
      </RecentWrapper>
      <br></br>
      <CategoryWrapper>
        {categorys.map((category) => {
          const seletedDatas = datas.filter(
            (data) => data.category_id === category.category_id
          );
          return (
            <CategoryList
              datas={seletedDatas}
              category={category.category_name}
            />
          );
        })}
      </CategoryWrapper>
    </div>
  );
};

export default Home;
