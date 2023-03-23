import React, { useState, useEffect } from "react";
import CategoryList from "../../components/CategoryList";
import RecentList from "../../components/RecentList";
import UserLanking from "../../components/UserLanking";
import { getCategory, getPostASC, getPostByCategoryASC } from "../../apis";
import { HomeWrapper, CategoryWrapper } from "./style";

const Home = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [homeData, setHomeData] = useState([]);
  const setCategory = async () => {
    const res = await getCategory();
    let arr = [];
    res.data.forEach((cate) => {
      arr.push(cate);
    });
    setCategoryList(arr);
  };

  const setPostList = async () => {
    const res = await getPostASC();
    const arr = [];
    res.data.content.forEach((post) => {
      if (arr.length <= 10) {
        let object = {
          categoryId: post.category.categoryId,
          categoryName: post.category.categoryName,
          id: post.postId,
          title: post.title,
          likeCount: post.likeCount,
          viewCount: post.viewCount,
        };
        arr.push(object);
      }
    });
    setHomeData(arr);
  };
  useEffect(() => {
    setCategory();
    setPostList();
  }, []);

  let selectedDatas = [];
  return (
    <HomeWrapper>
      <RecentList datas={homeData} />
      <UserLanking />
      <CategoryWrapper>
        {categoryList.map((category) => {
          selectedDatas = [];
          homeData.filter((data) => {
            if (
              data.categoryId === category.categoryId &&
              selectedDatas.length < 5
            ) {
              selectedDatas.push(data);
              return true;
            }
            return false;
          });

          return (
            <CategoryList
              key={category.categoryId}
              category={category.categoryName}
              datas={selectedDatas}
            />
          );
        })}
      </CategoryWrapper>
    </HomeWrapper>
  );
};

export default Home;
