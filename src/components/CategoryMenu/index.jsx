import React, { useEffect, useState } from "react";
import { CategoryMenuWrapper, CategoryMenuContainer, Category } from "./styled";
import axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryIdStore, currentCategoryIdStore } from "../../store/category";
import CategorySkeleton from "../Skeleton/CategorySkeleton";
import { postLoaderStore } from "../../store/postLoader";

export const categories = [
  { id: 0, category: "카테고리1" },
  { id: 1, category: "카테고리2" },
  { id: 2, category: "카테고리3" },
  { id: 3, category: "카테고리4" },
  { id: 4, category: "카테고리5" },
];

const CategoryMenu = ({ onClick, categoryName, setPost }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState({
    categoryId: 0,
    categoryName: "",
  });
  const [categoryList, setCategoryList] = useState([category]);
  const [categoryId, setCategoryId] = useRecoilState(categoryIdStore);
  const currentCategoryId = useRecoilValue(currentCategoryIdStore);
  const [isPostLoading, setIsPostLoading] = useRecoilState(postLoaderStore);

  const initCategoryData = async () => {
    const response = await axios.get("https://eung-ae-back.kro.kr/category");
    if (response.status === 200) {
      setCategoryList(response.data);
    }
    console.log(response);
    //setCategoryId(1);
    setIsLoading(false);
  };

  // 카테고리 추가하기
  const addCategoryHandler = () => {
    category.categoryName !== "" &&
      axios
        .post(`https://eung-ae-back.kro.kr/category`, category, {
          withCredentials: true,
        })
        .then((res) => {
          alert("성공");
          setCategory(() => {
            return { ...category, categoryName: "" };
          });
        })
        .catch((err) => console.log(err));
  };

  const updateCategoryHandler = () => {
    category.categoryName !== "" &&
      axios
        .patch(
          `https://eung-ae-back.kro.kr/category${currentCategoryId}`,
          category,
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          alert("성공");
          setCategory(() => {
            return { ...category, categoryName: "" };
          });
        })
        .catch((err) => console.log(err));
  };

  const removeCategoryHandler = async () => {
    axios
      .delete(`https://eung-ae-back.kro.kr/category/${currentCategoryId}`)
      .then((res) => alert("삭제 완료"));
    initCategoryData();
  };

  useEffect(() => {
    initCategoryData();
  }, [category.categoryName]);

  return (
    <>
      {!isLoading ? (
        <>
          <CategoryMenuWrapper>
            {categoryList.map((data, id) => (
              <Category
                onClick={() => {
                  //setIsPostLoading(true);
                  onClick(data.categoryName);
                  setCategoryId(data.categoryId);
                  setPost && setPost(data.categoryId);
                  //setIsPostLoading && setIsPostLoading(!isPostLoading);
                }}
                isClicked={data.categoryId === currentCategoryId}
                key={id}
              >
                {data.categoryName}
              </Category>
            ))}
          </CategoryMenuWrapper>
          <input
            value={category.categoryName}
            onChange={(e) =>
              setCategory(() => {
                return { ...category, categoryName: e.target.value };
              })
            }
            style={{ marginTop: "20px" }}
          />
          <button onClick={addCategoryHandler}>추가하기</button>
          <button onClick={removeCategoryHandler}>삭제하기</button>
          <button onClick={updateCategoryHandler}>수정하기</button>
        </>
      ) : (
        <CategorySkeleton />
      )}
    </>
  );
};

export default CategoryMenu;
