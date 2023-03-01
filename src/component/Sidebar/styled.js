import styled from "styled-components";
import { motion } from "framer-motion";

export const SidebarWrapper = styled(motion.div)`
  display: flex;
  position: fixed;
  z-index: 900;
  left: 0px;
  top: 0px;
  width: 400px;
  height: 100%;
  background: #61dafb;
`;
export const SidebarInner = styled(motion.aside)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
export const SidebarMenu = styled(motion.aside)`
  background: blueviolet;
`;
export const MenuToggleIconWrapper = styled.div`
  display: flex;
  border: none;
  position: absolute;
  top: 24px;
  left: 55px;
`;
export const GrayBox = styled(motion.div)`
  display: flex;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 800;
  opacity: 0.35;
  background: #191f28;
`;
