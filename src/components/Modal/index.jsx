import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "./modal.css";
import { Container, Dim, Overlay } from "./styled";

import Portal from "../Portal";

const Modal = ({ children, isOpen, onClose, selector = "#modal-root" }) => {
  const nodeRef = React.useRef(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={300}
      classNames="modal"
      unmountOnExit
    >
      <Portal selector={selector}>
        <Overlay>
          <Dim onClick={onClose} />
          <Container>{children}</Container>
        </Overlay>
      </Portal>
    </CSSTransition>
  );
};

export default Modal;
