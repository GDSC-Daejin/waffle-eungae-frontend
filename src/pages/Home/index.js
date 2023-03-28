import React from "react";
import CategoryList from "../../components/CategoryList";
import RecentList from "../../components/RecentList";
import {
  HomeWrapper,
  RecentWrapper,
  CategoryWrapper,
  UserLanking,
} from "./style";

const categorys = [
  { category_id: "1", category_name: "안녕" },
  { category_id: "2", category_name: "하세요" },
  { category_id: "3", category_name: "응애" },
];
const datas = [
  {
    post_id: "1",
    title: "firstssssssssssssssssssss",
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
  {
    post_id: "4",
    title: "fourth",
    content: "ssssssssss",
    create_date: "2023-3-2",
    member_id: "asdf",
    category_id: "2",
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
  {
    post_id: "4",
    title: "fourth",
    content: "ssssssssss",
    create_date: "2023-3-2",
    member_id: "asdf",
    category_id: "2",
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
  {
    post_id: "4",
    title: "fourth",
    content: "ssssssssss",
    create_date: "2023-3-2",
    member_id: "asdf",
    category_id: "2",
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
];

const Home = () => {
  let selectedDatas = [];
  return (
    <HomeWrapper>
      <RecentWrapper>
        <div className="topic">최신글</div>
        <hr/>
        <RecentList datas={datas}/>
      </RecentWrapper>
      <UserLanking>as</UserLanking>
      <CategoryWrapper>
        {categorys.map((category) => {
          selectedDatas = [];
          datas.filter((data) => {
            if (
              data.category_id === category.category_id &&
              selectedDatas.length < 5
            ) {
              selectedDatas.push(data);
              return true;
            }
            return false;
          });

          return (
            <CategoryList
              datas={selectedDatas}
              category={category.category_name}
            />
          );
        })}
      </CategoryWrapper>
    </HomeWrapper>
  );
}
export default Home;
