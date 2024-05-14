import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Portal from "../NewPortal/Portal";
import Portaldata from "../Portaldata/Portaldata";
// import Notebookdata from "../Data/Data";
export default function Notebook() {
  const [visible, setvisible] = useState(false);

  const fetchingvisible = () => {
    setvisible((prevvisibility) => !prevvisibility);
  };

  return (
    <div>
      <h1>NOTE BOOK</h1>
      <h4>
        Search <CiSearch />
      </h4>
      <p>Total Notes</p>
      <p>Showing</p>
      <button onClick={fetchingvisible}>Add Note</button>

      {visible && (
        <Portal onClick={fetchingvisible}>
          <Portaldata />
        </Portal>
      )}
      {/* <Notebookdata /> */}
    </div>
  );
}
