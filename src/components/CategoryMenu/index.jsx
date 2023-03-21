import React, { useEffect, useState } from "react";
import { CategoryMenuWrapper, CategoryMenuContainer, Category } from "./styled";
import axios from "axios";
import { useRecoilState } from "recoil";
import { categoryId, categoryStore } from "../../store/category";

export const categories = [
  { id: 0, category: "카테고리1" },
  { id: 1, category: "카테고리2" },
  { id: 2, category: "카테고리3" },
  { id: 3, category: "카테고리4" },
  { id: 4, category: "카테고리5" },
];

const CategoryMenu = ({ onClick, categoryName }) => {
  const [category, setCategory] = useState({
    categoryId: 0,
    categoryName: "",
  });
  const [categoryList, setCategoryList] = useState([category]);
  const [currentCategoryId, setCurrentCategoryId] = useRecoilState(categoryId);

  const initCategoryData = async () => {
    const response = await axios.get("http://eung-ae-back.kro.kr/");
    if (response.status === 200) {
      setCategoryList(response.data);
    }
  };

  // 카테고리 추가하기
  const addCategoryHandler = () => {
    if (category.categoryName !== "") {
      axios
        .post("http://eung-ae-back.kro.kr/", category)
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
            <Category
              onClick={() => {
                onClick(data.categoryName);
                setCurrentCategoryId(data.categoryId);
              }}
              clicked={data.categoryName === categoryName}
              key={id}
            >
              {data.categoryName}
            </Category>
          ))}
        </CategoryMenuWrapper>
      </CategoryMenuContainer>
      <input
        value={category.categoryName}
        onChange={(e) =>
          setCategory(() => {
            return { ...category, categoryName: e.target.value };
          })
        }
      />
      <button onClick={addCategoryHandler}>추가하기</button>
    </>
  );
};

export default CategoryMenu;
