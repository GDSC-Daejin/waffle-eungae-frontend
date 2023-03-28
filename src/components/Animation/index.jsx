import React from "react";

export const SideBarAnimation = {
  isActive: {
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
  isUnActive: {
    x: -400,
    transition: {
      duration: 0.3,
    },
  },
};
export const SideBarGrayBoxAnimation = {
  isActive: {
    display: "block",
    opacity: 0.6,
    transition: {
      duration: 0.3,
    },
  },
  isUnActive: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};
