import React, { useCallback, useEffect, useRef, useState } from "react";

import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
// color-syntax plugin
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
// chart plugin
import "@toast-ui/chart/dist/toastui-chart.css";
import chart from "@toast-ui/editor-plugin-chart";
// color-syntax-highlignt plugin
import "prismjs/themes/prism.css";
import Prism from "prismjs";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
// table plugin
import "@toast-ui/editor-plugin-table-merged-cell/dist/toastui-editor-plugin-table-merged-cell.css";
import tableMergedCell from "@toast-ui/editor-plugin-table-merged-cell";
// uml plugin
import uml from "@toast-ui/editor-plugin-uml";
import axios from "axios";
import CategoryMenu from "../../components/CategoryMenu";
import { useRecoilValue } from "recoil";
import { currentCategoryIdStore } from "../../store/category";
import { ButtonWrapper, PostTitle } from "./styled";
import { DetailPostData } from "../../type";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import Button from "../../components/Button";
import { currentUserStore } from "../../store/user";
import Modal from "../../components/Modal";
import ModalContent from "../../components/Modal/ModalContent";
import { useNavigate } from "react-router-dom";

const PostWrite = () => {
  const [files, setFiles] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [post, setPost] = useState({
    content: "",
    title: "",
    fileName: "",
    filePath: "",
    file: "",
    viewCount: 0,
    likeCount: 0,
  });

  const currentCategoryId = useRecoilValue(currentCategoryIdStore);
  const currentUser = useRecoilValue(currentUserStore);

  const editorRef = useRef();
  const navigate = useNavigate();

  const setEditorValue = () => {
    const editorContent = editorRef.current.getInstance().getMarkdown();
    setPost(() => {
      return { ...post, content: editorContent };
    });
  };

  // post put 기능
  const handleSubmit = async () => {
    const formData = new FormData();
    if (post.content !== "" && post.title !== "") {
      formData.append("content", post.content);
      formData.append("title", post.title);
      /*formData.append("fileName", post.fileName);
      formData.append("filePath", post.filePath);
      formData.append("file", post.file);*/
      formData.append("viewCount", post.viewCount);
      formData.append("likeCount", post.likeCount);
      axios
        .post(
          `https://eung-ae-back.kro.kr/post/${currentCategoryId}`,
          formData,
          {
            withCredentials: true,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => alert("성공"))
        .catch((err) => console.log(err));
    } else {
      alert("제출 양식에 맞지 않습니다.");
    }
    navigate(-1);
  };

  /*const fileInput = React.useRef(null);*/

  /*const handleButtonClick = (e) => {
    fileInput.current.click();
  };*/

  /*const handleChangeFile = (e) => {
    const fileReader = new FileReader();
    const file = e.target.files[0];
    setFiles(e.target.files[0]);
    fileReader.readAsBinaryString(file);
    /!*setPost((prev) => {
      return {
        ...prev,
        fileName: file.name,
      };
    });*!/
    fileReader.onload = (e) => {
      setPost((prev) => {
        return {
          ...prev,
          file: e.target.result,
        };
      });
    };
  };*/

  /*const handleFileSubmit = useCallback(async () => {
    if (!files) return;

    const formData = new FormData();
    await (formData.append("file", files),
    formData.append("content", post.content),
    formData.append("title", post.title),
    formData.append("fileName", post.fileName),
    formData.append("filePath", post.filePath),
    formData.append("viewCount", post.viewCount));

    await axios.post(
      `https://eung-ae-back.kro.kr/post/${currentCategoryId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  }, [files]);*/

  /*const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFiles([...files, { uploadedFile: file }]);
  };
  console.log(files);*/

  const handleModalClose = () => setIsModalOpen(false);

  useEffect(() => {
    !currentUser.email && setIsModalOpen(true);
    console.log(currentUser);
  });

  return (
    <>
      {currentUser.email ? (
        <>
          <CategoryMenu />
          <PostTitle
            placeholder="제목을 입력하세요."
            value={post.title}
            onChange={(e) => {
              setPost(() => {
                return { ...post, title: e.target.value };
              });
            }}
          />
          <Editor
            initialValue="내용을 적어주세요."
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
          <ButtonWrapper>
            <Button text={"글쓰기"} onClick={handleSubmit} />
          </ButtonWrapper>
        </>
      ) : (
        <Modal isOpen={isModalOpen} onClose={setIsModalOpen}>
          <ModalContent type={2} />
        </Modal>
      )}
    </>
  );
};

export default PostWrite;
