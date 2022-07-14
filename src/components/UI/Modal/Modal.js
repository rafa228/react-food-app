import { Fragment } from "react";
import * as Styled from './Modal.styled';
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <Styled.Backdrop onClick={props.onClose}/>;
};

const ModalOverlay = (props) => {
  return (
    <Styled.Modal>
      <div>{props.children}</div>
    </Styled.Modal>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
