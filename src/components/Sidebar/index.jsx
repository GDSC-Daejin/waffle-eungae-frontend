import React, { useEffect, useState } from "react";
import {
  SidebarWrapper,
  SidebarInner,
  SidebarMenu,
  MenuToggleIconWrapper,
  GrayBox,
} from "./styled";

import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { SideBarAnimation, SideBarGrayBoxAnimation } from "../Animation";
import MenuToggleIcon from "../MenuToggleIcon";

export const sidebarMenuData = [
  {
    title: "홈",
    subtitle: "all",
  },
  {
    title: "소개",
    subtitle: "frontend",
  },
  {
    title: "커뮤니티",
    subtitle: ["카테고리1", "카테고리2", "카테고리3"],
  },
  {
    title: "마이페이지",
    subtitle: ["내 게시글", "회원정보"],
  },
];

const Sidebar = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  const menuHandler = () => {
    setMenu(!menu);
    console.log(menu);
  };

  useEffect(() => {
    document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;

    if (!menu) {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    }
  }, [menu]);

  return (
    <>
      <MenuToggleIconWrapper onClick={() => menuHandler()}>
        <MenuToggleIcon active={menu} />
      </MenuToggleIconWrapper>
      <SidebarWrapper
        initial={false}
        variants={SideBarAnimation}
        animate={menu ? "isActive" : "isUnActive"}
      >
        <SidebarInner>
          {sidebarMenuData.map((data, id) => (
            <SidebarMenu
              key={id}
              onClick={() => {
                navigate(`/category/${data.subtitle}`);
                setMenu(false);
              }}
            >
              {data.title}
            </SidebarMenu>
          ))}
        </SidebarInner>
      </SidebarWrapper>
      <AnimatePresence>
        {menu && (
          <GrayBox
            variants={SideBarGrayBoxAnimation}
            animate={"isActive"}
            exit={"isUnActive"}
            onClick={() => {
              setMenu(false);
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
