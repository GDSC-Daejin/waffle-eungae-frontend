import React, { useEffect, useState } from "react";
import { CategoryMenuWrapper, CategoryMenuContainer, Category } from "./styled";
import axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryIdStore, currentCategoryIdStore } from "../../store/category";
import CategorySkeleton from "../Skeleton/CategorySkeleton";

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
  console.log(currentCategoryId);

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
        .post(`https://eung-ae-back.kro.kr/api/v1/category`, category)
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
          `https://eung-ae-back.kro.kr/api/v1/category${currentCategoryId}`,
          category
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
      .delete(
        `https://eung-ae-back.kro.kr/api/v1/category/${currentCategoryId}`
      )
      .then((res) => alert("삭제 완료"));
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
                  onClick(data.categoryName);
                  setCategoryId(data.categoryId);
                  setPost && setPost(data.categoryId);
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
