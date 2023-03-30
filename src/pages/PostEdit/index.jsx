import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DetailPostData } from "../../type";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryIdStore, currentCategoryIdStore } from "../../store/category";
import axios from "axios";
import CategoryMenu from "../../components/CategoryMenu";
import { ButtonWrapper, PostTitle } from "../PostWrite/styled";
import { Editor } from "@toast-ui/react-editor";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import Prism from "prismjs";
import chart from "@toast-ui/editor-plugin-chart";
import tableMergedCell from "@toast-ui/editor-plugin-table-merged-cell";
import uml from "@toast-ui/editor-plugin-uml";
import { currentUserStore } from "../../store/user";
import Button from "../../components/Button";
import ModalContent from "../../components/Modal/ModalContent";
import Modal from "../../components/Modal";

const PostEdit = () => {
  const { postId } = useParams();
  const { userId } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [detailPostData, setDetailPostData] = useState(DetailPostData);
  console.log(detailPostData);
  const [categoryData, setCategoryData] = useState("");
  const [categoryId, setCategoryId] = useRecoilState(categoryIdStore);
  const currentCategoryId = useRecoilValue(currentCategoryIdStore);
  console.log(currentCategoryId);
  const currentUser = useRecoilValue(currentUserStore);
  const [post, setPost] = useState({
    categoryId: currentCategoryId,
    content: detailPostData.content,
  });
  const [content, setContent] = useState("");

  const editorRef = useRef();
  const navigate = useNavigate();

  const isUserSame = currentUser.id === userId;

  const setEditorValue = () => {
    const editorContent = editorRef.current.getInstance().getMarkdown();
    /*setPost(() => {
      return { ...post, content: editorContent };
    });*/
    setContent(editorContent);
  };

  // post put 기능
  const handleSubmit = () => {
    if (content !== "") {
      axios
        .patch(
          `https://eung-ae-back.kro.kr/post/${detailPostData.postId}`,
          { categoryId: currentCategoryId, content: content },
          { withCredentials: true }
        )
        .then((res) => {
          alert("성공적으로 수정되었습니다.");
          navigate(-1);
        })
        .catch((err) => console.log(err));
    } else {
      alert("제출 양식에 맞지 않습니다.");
    }
  };
  const initDetailPostData = async () => {
    const response = await axios.get(
      `https://eung-ae-back.kro.kr/detail/${postId}`
    );
    console.log(response);
    if (response.status === 200) {
      setDetailPostData(() => {
        return {
          ...detailPostData,
          content: response.data.content,
          category: response.data.category,
          createDate: response.data.createDate,
          postId: response.data.postId,
          title: response.data.title,
          fileName: response.data.fileName,
          filePath: response.data.filePath,
        };
      });
      setContent(response.data.content);
      setCategoryId(response.data.category.categoryId);
      setIsLoading(false);
    }
  };

  const handleModalClose = () => setIsModalOpen(false);

  useEffect(() => {
    initDetailPostData();
  }, []);

  console.log(`${detailPostData.content}`);
  return (
    <>
      {isUserSame && !isLoading ? (
        <>
          <img src={detailPostData.filePath} />
          <CategoryMenu
            onClick={setCategoryData}
            setPost={setPost}
            categoryData={categoryData}
          />
          <PostTitle
            /*placeholder={postId ? detailPostData.title : "제목을 입력하세요."}*/
            value={detailPostData.title}
            onChange={(e) => {
              setPost(() => {
                return { ...post, title: e.target.value };
              });
            }}
          />
          <Editor
            initialValue={detailPostData.content}
            previewStyle="vertical"
            height="400px"
            initialEditType="wysiwyg"
            ref={editorRef}
            onChange={setEditorValue}
            plugins={[
              colorSyntax,
              [codeSyntaxHighlight, { highlighter: Prism }],
              chart,
              tableMergedCell,
              uml,
            ]}
            useCommandShortcut={true}
          />
          <button onClick={handleSubmit}>수정하기</button>
          <ButtonWrapper>
            <Button text={"수정하기"} onClick={handleSubmit} />
          </ButtonWrapper>
          {/*<div className="form-group row">
            <label htmlFor="inputFile" className="col-sm-2 col-form-label">
              <strong>첨부 파일</strong>
            </label>
            <div className="col-sm-10">
              <div className="custom-file" id="inputFile">
                <input
                  name="file"
                  type="file"
                  className="custom-file-input"
                  id="customFile"
                />
                <label className="custom-file-label" htmlFor="customFile">
                  파일을 선택해 주세요.
                </label>
              </div>
            </div>
          </div>*/}
        </>
      ) : (
        <Modal isOpen={isModalOpen} onClose={setIsModalOpen}>
          <ModalContent type={2} />
        </Modal>
      )}
    </>
  );
};

export default PostEdit;
