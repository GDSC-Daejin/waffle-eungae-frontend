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
  const [detailPostData, setDetailPostData] = useState(DetailPostData);
  console.log(detailPostData);
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
      .post(`https://eung-ae-back.kro.kr/post/${currentCategoryId}`, post)
      .then((res) => alert("성공"), console.log(post))
      .catch((err) => console.log(err));
  };
  const initDetailPostData = async () => {
    const response = await axios.get(`https://eung-ae-back.kro.kr/post`);
    console.log(response);
    if (response.status === 200) {
      setDetailPostData(response.data.content[0]);
      console.log(response.data);
    }
  };

  useEffect(() => {
    initDetailPostData();
  }, []);

  console.log(`${detailPostData.content}`);
  return (
    <>
      <div>post write</div>
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
    </>
  );
};

export default PostWrite;
