import React, { useRef } from "react";

export default function Portaldata() {
  const title = useRef();
  const desc = useRef();

  const Submiting = (event) => {
    event.preventDefault();
    const titleref = title.current.value;
    const descref = desc.current.value;

    fetch("https://crudcrud.com/api/408805658d75474da433919d7dc65321/note", {
      method: "POST",
      body: JSON.stringify({
        Title: titleref,
        description: descref,
      }),
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("FAILED TO ADD NOTE");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
       
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1 >Add New Note</h1>
      <label>New Title</label>
      <input type="text" placeholder="Tiltle" ref={title}></input>
      <label>Desc</label>
      <input type="text" placeholder="Description" ref={desc}></input>
      <button onClick={Submiting}>Update</button>
      <button>Close</button>
    </>
  );
}
