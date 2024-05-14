import React from "react";
import classes from "../NewPortal/Portal.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.Onclose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const NewPortal = document.getElementById("NoteBook");

function Portal(props) {
  return (
    <div>
      <>
        {ReactDOM.createPortal(<Backdrop Onclose={props.Onclose} />, NewPortal)}

        <ModalOverlay>{props.children}</ModalOverlay>
      </>
    </div>
  );
}

export default Portal;
