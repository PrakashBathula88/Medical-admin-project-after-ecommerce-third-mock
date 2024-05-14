import React from "react";

export default function Notebookdata() {
    const Fetchingdata=()=>{
        fetch("https://crudcrud.com/api/408805658d75474da433919d7dc65321/note", {
      method: "GET",
      
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
    <div>
     {Fetchingdata}
    </div>
  );
}
