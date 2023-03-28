import React, { useEffect, useRef, useState } from "react";

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
  /* const [detailPostData, setDetailPostData] = useState(DetailPostData);
  console.log(detailPostData);*/
  const [post, setPost] = useState({
    content: "",
    title: "",
    fileName: "",
    filePath: "",
    file: "",
    viewCount: 0,
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
  const handleSubmit = () => {
    axios
      .post(`https://eung-ae-back.kro.kr/post/${currentCategoryId}`, post, {
        withCredentials: true,
      })
      .then((res) => alert("성공"), console.log(post))
      .catch((err) => console.log(err));
  };
  /*const initPostData = async () => {
    const response = await axios
      .get(`https://eung-ae-back.kro.kr/api/v1/post/${currentCategoryId}`)
      .then((res) => alert("성공"), console.log(post))
      .catch((err) => console.log(err));
  };*/
  /*const initDetailPostData = async () => {
    const response = await axios.get(`https://eung-ae-back.kro.kr/post`);
    console.log(response);
>>>>>>> develop
    if (response.status === 200) {
      setDetailPostData(response.data.content[0]);
      console.log(response.data);
    }
  };*/

  /*useEffect(() => {
    initDetailPostData();
  }, []);*/

  //console.log(`${detailPostData.content}`);

  const fileInput = React.useRef(null);

  const handleButtonClick = (e) => {
    fileInput.current.click();
  };

  const handleChange = (e) => {
    console.log(e.target.files);
  };

  return (
    <>
      <div>post write</div>
      <CategoryMenu onClick={setCategory} categoryName={category} />
      <PostTitle
        placeholder="제목을 입력하세요."
        value={post.title}
        onChange={(e) => {
          setPost(() => {
            return { ...post, title: e.target.value[0] };
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
      <div className="container">
        <form action="/post" method="post" encType="multipart/form-data">
          <div className="form-group row">
            <label htmlFor="inputTitle" className="col-sm-2 col-form-label">
              <strong>제목</strong>
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                name="title"
                className="form-control"
                id="inputTitle"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputAuthor" className="col-sm-2 col-form-label">
              <strong>작성자</strong>
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                name="author"
                className="form-control"
                id="inputAuthor"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputContent" className="col-sm-2 col-form-label">
              <strong>내용</strong>
            </label>
            <div className="col-sm-10">
              <textarea
                type="text"
                name="content"
                className="form-control"
                id="inputContent"
              ></textarea>
            </div>
          </div>
          <div className="form-group row">
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
          </div>
          <div className="row">
            <div className="col-auto mr-auto"></div>
            <div className="col-auto">
              <input
                className="btn btn-primary"
                type="submit"
                role="button"
                value="글쓰기"
              />
            </div>
          </div>
        </form>
      </div>
      <button onClick={handleButtonClick}>파일 업로드</button>
      <input
        type="file"
        ref={fileInput}
        onChange={handleChange}
        style={{ display: "none" }}
      />
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
