import React from "react";
import {
  PostDetailContainer,
  Category,
  PostTitle,
  PostContent,
  PostDate,
  PostAuthorWrapper,
  PostTrashIconWrapper,
  PostAuthor,
  PostEditIconWrapper,
  PostHead,
} from "./styled";

const PostDetail = () => {
  return (
    <PostDetailContainer>
      <PostHead>
        <Category>카테고리</Category>
        <PostTitle>게시글 제목</PostTitle>
        <PostAuthorWrapper>
          <PostAuthor>작성자</PostAuthor>
          <PostDate>2023.01.01</PostDate>
          <PostEditIconWrapper></PostEditIconWrapper>
          <PostTrashIconWrapper></PostTrashIconWrapper>
        </PostAuthorWrapper>
      </PostHead>
      <PostContent>
        quia et suscipit\nsuscipit recusandae consequuntur expedita et
        cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem
        sunt rem eveniet architecto
      </PostContent>
    </PostDetailContainer>
  );
};

export default PostDetail;
