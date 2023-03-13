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
import CategoryMenu from "../../component/CategoryMenu";

const PostWrite = () => {
  const [content, setContent] = useState();
  const [category, setCategory] = useState("");
  const [postData, setPostData] = useState([
    {
      postId: 0,
      content: "",
      title: "",
    },
  ]);

  const editorRef = useRef();
  const handleChangeEditor = () => {
    const editorContent = editorRef.current.getInstance().getHTML();
    setContent(editorContent);
  };

  // post put 기능
  const handleSubmit = () => {
    axios.post(`http://localhost:8080/post/${categoryId}`);
  };

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

  return (
    <>
      <div>post write</div>
      <CategoryMenu />
      <Editor
        initialValue="hello react editor world!"
        previewStyle="vertical"
        height="400px"
        initialEditType="wysiwyg"
        ref={editorRef}
        onChange={handleChangeEditor}
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
      <div id="toastUIEditor">
        <h1>Toast UI Editor Example</h1>
        <div id="button">
          <button className="btn_save" onClick={handleChangeEditor}>
            Save
          </button>
        </div>
      </div>
      <div>
        <h2>Result</h2>
        <textarea className="result" value={content} readOnly="readOnly" />
      </div>
    </>
  );
};

export default PostWrite;
