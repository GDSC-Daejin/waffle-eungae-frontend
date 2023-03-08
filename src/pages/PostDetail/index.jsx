import React, { useEffect, useState } from "react";
import {
  PostDetailContainer,
  Category,
  PostTitle,
  PostContent,
  PostDate,
  PostAuthorWrapper,
  PostAuthor,
  PostHead,
  PostWrapper,
  PostIconWrapper,
  PostIcon,
  LikeIconWrapper,
  Like,
  CommentListWrapper,
  CommentWrapper,
  CommentAuthor,
  Comment,
  CommentDate,
  StackInputButtonWrapper,
  StackInput,
  StackButton,
} from "./styled";
import PostEditIcon from "../../assets/icons/PostEditIcon";
import PostTrashIcon from "../../assets/icons/PostTrashIcon";
import LikeIcon from "../../assets/icons/LikeIcon";
import { postListData } from "../../api/Mocks/postListData";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { commentListStore, showCommentList } from "../../store/commentStore";
import commentTempData from "../../api/Mocks/comment";
import axios from "axios";

const PostDetail = () => {
  const [commentList, setCommentList] = useState([]);

  const initComment = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1/comments"
    );
    console.log(response);
  };

  useEffect(() => {
    //api로 comment 가져오기
    initComment();
    setCommentList(...commentTempData);
  }, []);

  // 코멘트를 추가하는 함수
  const addComment = () => {
    //api 호출
    console.log("추가");
  };

  // const setCommentList = useSetRecoilState(commentListStore);
  // const commentList = useRecoilValue(showCommentList);

  // const initCommentList = () => {
  //   for (let i in postListData) {
  //     setCommentList((oldCommentList) => [
  //       ...oldCommentList,
  //       {
  //         id: getId(),
  //         author: postListData[i].post.title,
  //         comment: postListData[i].post.content,
  //         uploadDate: postListData[i].uploadDate.substring(0, 10),
  //       },
  //     ]);
  //   }
  //   setComment("");
  // };
  // const addComment = () => {
  //   setCommentList((oldCommentList) => [
  //     ...oldCommentList,
  //     {
  //       id: getId(),
  //       author: "Eung ae2",
  //       comment: comment,
  //       uploadDate: "2022-02-02",
  //     },
  //   ]);
  //   setComment("");
  // };

  // useEffect(initCommentList, []);

  return (
    <PostDetailContainer>
      <PostWrapper>
        <article>
          <PostHead>
            <Category>카테고리</Category>
            <PostTitle>객체지향의 사실과 오해</PostTitle>
            <PostAuthorWrapper>
              <PostAuthor>Eung-ae</PostAuthor>
              <PostDate>2023.01.01</PostDate>
              <PostIconWrapper>
                <PostIcon>
                  <PostEditIcon />
                </PostIcon>
                <PostIcon>
                  <PostTrashIcon />
                </PostIcon>
              </PostIconWrapper>
            </PostAuthorWrapper>
          </PostHead>
          <PostContent>
            <div className="markdown-body" style={{ width: "100%" }}>
              <h2>01. 협력하는 객체들의 공동체</h2>
              <h3>역할과 책임</h3>
              <p>
                사람들은 다른 사람과 협력하는 과정 속에서 특정한 역할을 부여
                받는다.(손님, 캐시어, 바리스타) 이러한 역할이 있으면 역할을 맡은
                사람은 주문된 커피를 제조해야 할 책임이 있다.
              </p>
              <p>즉, "역할은 의미적으로 책임이라는 개념을 내포한다. "</p>
              <p>
                사람들이 협력을 위해 득정한 역할을 맡고 역할에 적합한 책임을
                수행한다는 사실은 몇가지 중요한 개념을 제시한다.
              </p>
              <ul>
                <li>여러 사람이 동일한 역할을 수행할 수 있다.</li>
                <li>역할은 대체 가능성을 의미한다.</li>
                <li>책임을 수행하는 방법은 자율적으로 선택할 수 있다.</li>
                <li>한 사람이 동시에 여러 역할을 수행할 수 있다.</li>
              </ul>
              <h3>역할, 책임, 협력</h3>
              <h4>역할과 책임을 수행하며 협력하는 객체들</h4>
              <ul>
                <li>
                  사람들은 특정한 목표를 이루기 위해 서로 협력한다. 협력의
                  핵심은{" "}
                  <strong>
                    특정한 책임을 수행하는 역할들 간의 연쇄적인 요청과 응답을
                    통해 목표를 달성
                  </strong>
                  한다는 것이다.
                </li>
                <li>
                  사용자가 최종적으로 인식하게 되는 시스템의 기능 : 객체들이
                  성실히 협력해서 일궈낸 결실 → 시스템 : 역할과 책임을 수행하는
                  객체로 분할, 시스템의 기능 : 객체 간의 연쇄적인 요청과 응답의
                  흐름으로 구성된 협력으로 구현
                </li>
              </ul>
              <p>
                객체의 역할은 사람의 역할과 유사하게 다음과 같은 특징을 지닌다.
              </p>
              <ul>
                <li>여러 객체가 동일한 역할을 수행할 수 있다.</li>
                <li>
                  <strong>역할은 대체 가능성을 의미한다.</strong>
                </li>
                <li>
                  각 객체는 책임을 수행하는 방법을 자율적으로 선택할 수 있다.
                </li>
                <li>하나의 객체가 동시에 여러 역할을 수행할 수 있다.</li>
              </ul>
              <p>
                <strong>
                  역할은 유연하고 재사용 가능한 협력관계를 구축하는데 중요한
                  설계 요소이다. 대체가능한 역할과 책임은 객체지향 패러다임의
                  중요한 기반을 제공하는 다형성과도 깊이 연관돼있다.
                </strong>
              </p>
              <h3>협력 속에 사는 객체</h3>
              <p>
                객체지향 애플리케이션의 윤곽을 결정하는 것은 역할, 책임,
                협력이지만, 실제로 협력에 참여하는 주체는 객체이다.
              </p>
              <p>
                객체는 다음과 같은 두 가지 덕목을 갖춰야 하며, 두 덕목 사이에서
                균형을 유지해야 한다.
              </p>
              <ol>
                <li>
                  객체는 충분히 '협력적'이어야한다. 객체는 다른 객체의 요청에
                  충실히 귀 기울이고 다른 객체에게 적극적으로 도움을 요청할
                  정도로 열린 마음을 지녀야한다. 객체는 다른 객체의 명령에
                  복종하는 것이 아니라 요청에 응답할 뿐이다.{" "}
                  <strong>
                    어떤 방식으로 응답할지는 객체 스스로 판단하고 결정한다.
                    심지어 요청에 응할지 여부도 객체 스스로 결정할 수 있다.
                  </strong>
                </li>
                <li>
                  객체가 충분히 '자율적'이어야한다. 요청에 따른 행동은 객체
                  스스로가 판단해야한다.
                </li>
              </ol>
              <h4>상태와 행동을 함께 지닌 자율적인 객체</h4>
              <p>
                흔히 객체를 상태와 행동을 함께 지닌 실체라고 정의한다. 이 말은
                객체가 협력에 참여하기 위해 어떤 행동을 해야한다면 그 행동을
                하는데 필요한 상태도 함께 지니고 있어야한다는 것을 의미한다.
              </p>
              <p>
                객체가 협력에 참여하는 과정 속에서 스스로 판단하고 스스로
                결정하는 자율적인 존재로 남기 위해서는 필요한 행동과 상태를 함께
                지니고 있어야한다.
              </p>
              <p>
                객체의 자율성은 객체의 내부와 외부를 명확하게 구분하는
                것으로부터 나온다.
              </p>
              <ul>
                <li>
                  객체의 사적인 부분 : 객체 스스로 관리하고 외부에서 일체 간섭할
                  수 없도록 차단해야 함.
                </li>
                <li>
                  객체의 외부 : 접근이 허락된 수단을 통해서만 객체와
                  의사소통해야 한다.
                </li>
              </ul>
              <p>
                객체는 다른 객체가 '무엇'을 수행하는지는 알 수 있지만, '어떻게'
                수행하는지에 대해서는 알 수 없다.
              </p>
              <p>
                객체는 행동을 위해 필요한 상태를 포함 + 특정한 행동을 수행하는
                방법을 스스로 결정할 수 있어야 한다.
              </p>
              <h4>협력과 메세지</h4>
              <p>
                객체는 협력을 위해 다른 객체에게 메시지를 전송하고 다른
                객체로부터 메시지를 수신한다.
              </p>
              <p>
                협력 : 메시지를 전송하는 객체(송신자), 수신하는 객체(수신자)
                사이의 관계로 구성
              </p>
              <h4>메서드와 자율성</h4>
              <p>메서드 : 객체가 수신된 메시지를 처리하는 방법</p>
              <h3>객체지향의 본질</h3>
              <p>
                그래서 객체지향이란 무엇일까? 지금까지 한 내용을 모두
                종합해보자.
              </p>
              <p>
                아래의 정리가 불완전하고 부정확하기는 하지만 대부분의 사람들이
                중요하다고 생각하는 객체지향의 개념을 포괄하고 있는다.
              </p>
              <ul>
                <li>
                  객체지향이란 시스템을 상호작용하는{" "}
                  <strong>자율적인 객체들의 공동체</strong>로 바라보고 객체를
                  이용해서 시스템을 분할하는 방법이다.
                </li>
                <li>
                  자율적인 객체란 <strong>상태,행위</strong>를 함께 지니며
                  스스로 자기 자신을 책임지는 객체를 의미한다.
                </li>
                <li>
                  객체는 시스템의 행위를 구현하기 위해 다른 객체와{" "}
                  <strong>협력</strong>한다. 각 객체는 협력 내에서 정해진{" "}
                  <strong>역할</strong>을 수행하며 역할은 관련된{" "}
                  <strong>책임</strong>의 집합이다.
                </li>
                <li>
                  객체는 다른 객체와 협력하기 위해서 메시지를 전송하고,{" "}
                  <strong>메세지</strong>를 수신한 객체는 메시지를 처리하는데
                  접합한 메시지를 자율적으로 선택한다.
                </li>
              </ul>
              <h4>객체를 지향하라</h4>
              <p>
                보통 객체지향 하면 대부분을 클래스를 떠올린다. 하지만, 지나치게
                클래스를 강조하는 프로그래밍 언어적인 관점은 객체의 캡슐화를
                저해하고, 클래스를 서로 강하게 결합시킨다. 훌륭한 객체지향
                설계자가 되기 위해 거쳐야 할 첫 번째 도전은 클래스의 관점에서
                메시지를 주고받는 객체의 관점으로 사고의 중심을 전환하는 것이다.
              </p>
              <p>
                객체지향의 핵심은 클래스가 아니라, 적절한 책임을 수행하는 역할
                간의 유연하고 견고한 협력 관계를 구축하는 것이다. 객체지향의
                중심에는 클래스가 아니라 객체가 위치하며,{" "}
                <strong>
                  중요한 것은 클래스들의 정적인 관계가 아니라 메시지를 주고받는
                  객체들의 동적인 관계이다.
                </strong>
              </p>
              <blockquote>
                <p>
                  <strong>
                    클래스의 구조와 메서드가 아니라 객체의 역할, 책임, 협력에
                    집중하라. 객체지향은 객체를 지향하는 것이지 클래스를
                    지향하는 것이 아니다.
                  </strong>
                </p>
              </blockquote>
              <p>
                <img
                  src="https://velog.velcdn.com/images/gudcks0305/post/493472f1-e41d-4883-ae3d-585ce411e120/image.png"
                  alt="사진"
                  style={{ width: "100%" }}
                />
              </p>
            </div>
          </PostContent>
        </article>
      </PostWrapper>
      <LikeIconWrapper>
        <LikeIcon />
        <Like>11</Like>
      </LikeIconWrapper>
      {/*<CommentListWrapper>
        {commentList.map((data, id) => (
          <CommentWrapper key={id}>
            <CommentAuthor>{data.author}</CommentAuthor>
            <Comment>{data.comment}</Comment>
            <CommentDate>{data.uploadDate}</CommentDate>
          </CommentWrapper>
        ))}
      </CommentListWrapper>*/}
      <StackInputButtonWrapper>
        {/*TODO값 입력하기*/}
        <StackInput
          placeholder={"댓글을 남겨주세요"}
          // value={comment ?? ""} //content의 타입이 string과 null이므로 ?? ''로 값을 설정
          type={"text"}
          // onChange={(e) => setComment(e.target.value)}
          /*onKeyPress={handleOnKeyPress} //엔터를 누르면 addTodoHandler를 실행*/
        />
        {/*TODO 추가하기 input 값이 없다면 추가 안됨*/}
        <StackButton onClick={() => console.log("123")}>추가하기</StackButton>
      </StackInputButtonWrapper>
    </PostDetailContainer>
  );
};

let id = 0;
function getId() {
  return id++;
}

export default PostDetail;
