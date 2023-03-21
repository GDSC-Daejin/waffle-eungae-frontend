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
import { currentCategoryId } from "../../store/category";
import { PostTitle } from "./styled";
import { DetailPostData } from "../../type";
import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";

const PostWrite = () => {
  const [content, setContent] = useState();
  const [category, setCategory] = useState("");
  const [detailPostData, setDetailPostData] = useState(DetailPostData);
  console.log(detailPostData);
  const [postData, setPostData] = useState({
    postId: 0,
    content: "",
    title: "",
  });

  const categoryId = useRecoilValue(currentCategoryId);
  console.log(categoryId);

  const editorRef = useRef();

  const setEditorValue = () => {
    const editorContent = editorRef.current.getInstance().getMarkdown();
    setPostData(() => {
      return { ...postData, content: editorContent };
    });
  };

  // post put 기능
  const handleSubmit = () => {
    axios
      .post(`http://eung-ae-back.kro.kr/post/${categoryId}`, postData)
      .then((res) => alert("성공"), console.log(postData))
      .catch((err) => console.log(err));
  };
  const initPostData = async () => {
    const response = await axios.get("http://eung-ae-back.kro.kr/post");
    if (response.status === 200) {
      setDetailPostData(response.data.content[0]);
      console.log(response.data);
    }
  };

  useEffect(() => {
    initPostData();
  }, []);
  /*const onUploadImage = async (blob, callback) => {
    const url = await uploadImage(blob);
    callback(url, "alt text");
    return false;
  };
  const uploadImage = (blob) => {
    let formData = new FormData();
    formData.append("image", blob); // 이미지를 폼데이터 file로 변경 'image'가 input name이다.
    this.ajax({
      url: "작업용 controler.php",
      enctype: "multipart/form-data",
      type: "POST",
      data: formData,
      processData: false,
      contentType: false,
      async: false, // 비동기를 동기로 변경.
    })
      .done(function (data) {
        return data; // 보통은 이건데, 나의 경우 할당이 안되더라.
        // dataImagurl = data;
        // return dataImagurl;
      })
      .fail(function (err) {
        alert(err);
      });
  };*/

  /*useEffect(() => {
    if (editorRef.current) {
      editorRef.current.getInstance().removeHook("addImageBlobHook");
      editorRef.current
        .getInstance()
        .addHook("addImageBlobHook", (blob, callback) => {
          (async () => {
            let formData = new FormData();
            formData.append("file", blob);

            axios.defaults.withCredentials = true;
            const { data: url } = await axios.post(`ßimage.do`, formData, {
              header: { "content-type": "multipart/formdata" },
            });
            callback(url, "alt text");
          })();

          return false;
        });
    }

    return () => {};
  }, [editorRef]);*/
  console.log(`${detailPostData.content}`);
  return (
    <>
      <div>post write</div>
      <CategoryMenu onClick={setCategory} categoryName={category} />
      <PostTitle
        placeholder="제목을 입력하세요."
        value={postData.title}
        onChange={(e) => {
          setPostData(() => {
            return { ...postData, title: e.target.value };
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
        /*hooks={{
          addImageBlobHook: (blob, callback) => {
            const uploadedImageURL = uploadImage(blob);
            callback(uploadedImageURL, "alt text");
            return false;
          },
        }}*/
        useCommandShortcut={true}
      />
      <button onClick={handleSubmit}>글쓰기</button>
      {/*<div id="toastUIEditor">
        <h1>Toast UI Editor Example</h1>
        <div id="button">
          <button className="btn_save" onClick={handleChangeEditor}>
            Save
          </button>
        </div>
      </div>*/}
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
      <div>
        <h2>Result</h2>
        <div>{detailPostData.content}</div>
      </div>
      <Viewer initialValue={`${detailPostData.content}`} />
      <div>asdfasfddafasdfadsfasfasdf</div>
    </>
  );
};

export default PostWrite;
