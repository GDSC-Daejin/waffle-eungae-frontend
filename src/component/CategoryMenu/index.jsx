import React, { useEffect, useState } from "react";
import { CategoryMenuWrapper, CategoryMenuContainer, Category } from "./styled";
import axios from "axios";
import { getCategory } from "../../apis";

export const categories = [
  { id: 0, category: "카테고리1" },
  { id: 1, category: "카테고리2" },
  { id: 2, category: "카테고리3" },
  { id: 3, category: "카테고리4" },
  { id: 4, category: "카테고리5" },
];

const CategoryMenu = () => {
  const [category, setCategory] = useState({
    categoryId: 0,
    categoryName: "",
  });
  const [categoryList, setCategoryList] = useState([category]);

  const initCategoryData = async () => {
    const response = await axios.get("http://localhost:8080/");
    if (response.status === 200) {
      setCategoryList(response.data);
    }
    console.log(categoryList);
  };

  // 카테고리 추가하기
  const addCategoryHandler = () => {
    if (category.categoryName !== "") {
      axios
        .post("http://localhost:8080/", category)
        .then((res) => {
          alert("성공");
          setCategory(() => {
            return { ...category, categoryName: "" };
          });
        })
        .catch((err) => console.log(err));
    } else alert("다시 입력해주세요.");
  };

  useEffect(() => {
    initCategoryData();
  }, [category.categoryName]);

  return (
    <>
      <CategoryMenuContainer>
        <CategoryMenuWrapper>
          {categoryList.map((data, id) => (
            <Category key={id}>{data.categoryName}</Category>
          ))}
        </CategoryMenuWrapper>
      </CategoryMenuContainer>
      {/*<input
        value={category.categoryName}
        onChange={(e) =>
          setCategory(() => {
            return { ...category, categoryName: e.target.value };
          })
        }
      />
      <button onClick={addCategoryHandler}>추가하기</button>*/}
    </>
  );
};

export default CategoryMenu;
