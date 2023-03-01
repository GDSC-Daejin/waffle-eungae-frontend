import React, { useState } from "react";
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
    title: "ALL",
    subtitle: "all",
  },
  {
    title: "Frontend",
    subtitle: "frontend",
  },
  {
    title: "Backend",
    subtitle: "backend",
  },
  {
    title: "Android",
    subtitle: "android",
  },
  {
    title: "Design",
    subtitle: "design",
  },
  {
    title: "Common",
    subtitle: "common",
  },
];

const Sidebar = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  const menuHandler = () => {
    setMenu(!menu);
    console.log(menu);
  };

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
