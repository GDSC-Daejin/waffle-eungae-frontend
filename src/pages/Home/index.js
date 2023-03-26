import React, { useState, useEffect } from "react";
import CategoryList from "../../components/CategoryList";
import RecentList from "../../components/RecentList";
import Lanking from "../../components/Lanking";
import { getCategory, getPostASC } from "../../apis";
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

  return (
    <HomeWrapper>
      <RecentList datas={homeData} />
      <Lanking />
      <CategoryWrapper>
        {categoryList.map((ccc) => {
          return <CategoryList category={ccc} />;
        })}
      </CategoryWrapper>
    </HomeWrapper>
  );
};

export default Home;
