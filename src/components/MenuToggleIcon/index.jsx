import { motion } from "framer-motion";
import React from "react";
import { StyledMenuButton } from "./styled";

const MenuToggleIcon = (props) => {
  const { active } = props;
  const MenuToggleIconColor = active === "open" ? "#8B95A1" : "hsl(0, 0%, 18%)";
  return (
    <StyledMenuButton initial={false} animate={active ? "open" : "closed"}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          fill="red"
          strokeWidth="3"
          stroke={MenuToggleIconColor}
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <motion.path
          fill="transparent"
          strokeWidth="3"
          stroke="hsl(0, 0%, 18%)"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <motion.path
          fill="transparent"
          strokeWidth="3"
          stroke={MenuToggleIconColor}
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </StyledMenuButton>
  );
};

export default MenuToggleIcon;
