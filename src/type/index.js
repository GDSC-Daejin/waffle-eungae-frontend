export const MemberData = {
  createdDate: "2023.03.21",
  email: "anes53027@gmail.com",
  level: null,
  memberId: 1,
  modifiedDate: "2023.03.21",
  name: "정승우 (정승우)",
  role: "GUEST",
  roleKey: "ROLE_GUEST,",
};
export const UserData = {
  memberId: null,
  email: null,
  name: null,
  level: null,
};
export const InitialMemberData = {
  createdDate: "",
  email: "",
  level: null,
  memberId: 0,
  modifiedDate: "",
  name: "",
  role: "",
  roleKey: "",
};
export const PostData = {
  category: {
    categoryId: 0,
    categoryName: "",
  },
  content: "",
  createDate: "",
  postId: 0,
  title: "",
  likeCount: "",
  commentCount: "",
  viewCount: "",
};
export const DetailPostData = {
  category: {
    categoryId: 0,
    categoryName: "",
  },
  content: "",
  createDate: "",
  postId: 0,
  title: "",
  fileName: "",
  filePath: "",
  member: MemberData,
  likeCount: 0,
  viewCount: 0,
};
export const DetailCommentListData = [
  {
    commentId: 0,
    content: "",
    createDate: "",
    like: 0,
    member: MemberData,
    postId: 0,
  },
];
export const DetailCommentData = {
  commentId: 0,
  content: "",
  createDate: "",
  postId: 0,
};
