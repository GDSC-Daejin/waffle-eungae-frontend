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
import { PostTitle } from "./styled";
import { DetailPostData } from "../../type";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";

const PostWrite = () => {
  const [content, setContent] = useState();
  const [category, setCategory] = useState("");

  const [files, setFiles] = useState();
  /* const [detailPostData, setDetailPostData] = useState(DetailPostData);
  console.log(detailPostData);*/
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

  const editorRef = useRef();

  const setEditorValue = () => {
    const editorContent = editorRef.current.getInstance().getMarkdown();
    setPost(() => {
      return { ...post, content: editorContent };
    });
  };

  // post put 기능
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("content", post.content);
    formData.append("title", post.title);
    /*formData.append("fileName", post.fileName);
    formData.append("filePath", post.filePath);
    formData.append("file", post.file);*/
    formData.append("viewCount", post.viewCount);
    formData.append("likeCount", post.likeCount);
    axios
      .post(`https://eung-ae-back.kro.kr/post/${currentCategoryId}`, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => alert("성공"))
      .catch((err) => console.log(err));
    console.log(formData);
  };

  const fileInput = React.useRef(null);

  const handleButtonClick = (e) => {
    fileInput.current.click();
  };

  const handleChangeFile = (e) => {
    const fileReader = new FileReader();
    const file = e.target.files[0];
    setFiles(e.target.files[0]);
    fileReader.readAsBinaryString(file);
    /*setPost((prev) => {
      return {
        ...prev,
        fileName: file.name,
      };
    });*/
    fileReader.onload = (e) => {
      setPost((prev) => {
        return {
          ...prev,
          file: e.target.result,
        };
      });
    };
  };

  const handleFileSubmit = useCallback(async () => {
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
  }, [files]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFiles([...files, { uploadedFile: file }]);
  };

  console.log(files);
  return (
    <>
      <CategoryMenu onClick={setCategory} categoryName={category} />
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
      <button onClick={handleSubmit}>글쓰기</button>
      {/*<header th:insert="common/header.html"></header>*/}
      {/*<div className="container">
        <form
          name="file"
          encType={"multipart/form-data"}
          onSubmit={handleFileSubmit}
        >
          <input type={"file"} name={"file"} onChange={handleFileUpload} />
        </form>
      </div>
      <button onClick={handleButtonClick}>파일 업로드</button>
      <input
        type="file"
        ref={fileInput}
        onChange={handleChangeFile}
        style={{ display: "none" }}
      />*/}
      {/*<script src="/webjars/jquery/3.5.1/jquery.min.js"></script>
      <script src="/webjars/bootstrap/4.5.0/js/bootstrap.min.js"></script>
      <div>
        $('.custom-file-input').on('change', function () {
        var fileName = $(this).val().split('\\').pop();
        $(this).siblings('.custom-file-label').addClass('selected').html(fileName);
      });
      </div>*/}
    </>
  );
};

export default PostWrite;
