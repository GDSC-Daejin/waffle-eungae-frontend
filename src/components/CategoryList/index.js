import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LikeIcon from "../../assets/LikeIcon";
import { IconBlock, ListBlock, Post, Upper } from "./style";
import { getPostByCategoryASC } from "../../apis";

const CategoryList = (category) => {
  const [catePost, setCatePost] = useState([]);

  //카레고리별로 필터링된 게시글 정보 받아오기
  const setPostList = useCallback(async () => {
    const res = await getPostByCategoryASC(category.category.categoryId);
    const dataArr = res.data.content;
    const arr = [];
    for (let i = 0; i < dataArr.length; i++) {
      if (arr.length <= 5) {
        console.log(dataArr);
        let object = {
          id: dataArr[i].postId,
          title: dataArr[i].title,
          likeCount: dataArr[i].likeCount,
        };
        arr.push(object);
      } else {
        break;
      }
    }
    setCatePost(arr);
  }, [category.category.categoryId]);

  useEffect(() => {
    setPostList();
  }, []);

  return (
    <ListBlock>
      <Upper>
        <div className="topic">{category.category.categoryName}</div>
        <Link className="more" to="/post">
          + 더보기
        </Link>
      </Upper>
      <hr />
      {catePost !== [] ? (
        catePost.map((data) => {
          return (
            <Post key={data.id}>
              <div className="title">{data.title}</div>
              <IconBlock>
                <LikeIcon />
                <div className="number">&nbsp;{data.likeCount}</div>
              </IconBlock>
            </Post>
          );
        })
      ) : (
        <Post></Post>
      )}
    </ListBlock>
  );
};

export default CategoryList;
