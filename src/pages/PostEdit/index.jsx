import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { DetailPostData } from "../../type";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryIdStore, currentCategoryIdStore } from "../../store/category";
import axios from "axios";
import CategoryMenu from "../../components/CategoryMenu";
import { PostTitle } from "../PostWrite/styled";
import { Editor } from "@toast-ui/react-editor";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import Prism from "prismjs";
import chart from "@toast-ui/editor-plugin-chart";
import tableMergedCell from "@toast-ui/editor-plugin-table-merged-cell";
import uml from "@toast-ui/editor-plugin-uml";

const PostEdit = () => {
  const { postId } = useParams();
  console.log(postId);

  const [isLoading, setIsLoading] = useState(true);
  const [detailPostData, setDetailPostData] = useState(DetailPostData);
  console.log(detailPostData);
  const [categoryData, setCategoryData] = useState("");
  const [categoryId, setCategoryId] = useRecoilState(categoryIdStore);
  const currentCategoryId = useRecoilValue(currentCategoryIdStore);
  console.log(currentCategoryId);
  const [post, setPost] = useState({
    content: detailPostData.content,
    categoryId: currentCategoryId,
  });

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
      .patch(
        `https://eung-ae-back.kro.kr/post/${detailPostData.postId}`,
        post,
        { withCredentials: true }
      )
      .then((res) => alert("성공"), console.log(post))
      .catch((err) => console.log(err));
    console.log(post);
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
      setCategoryId(2);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    initDetailPostData();
    console.log(detailPostData);
  }, []);

  console.log(`${detailPostData.content}`);
  return (
    <>
      {!isLoading ? (
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
      ) : (
        <div>로딩 중</div>
      )}
    </>
  );
};

export default PostEdit;
