import React, { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

function Contactid() {
  const { userid } = useParams();
  const [a, seta] = useSearchParams();
  const [n, setm] = useState("");
  const [id, setid] = useState("");
  console.log(a.get("id"));
  console.log(n + id);
  console.log("n + id");
  const handl = (e) => {
    e.preventDefault();
    seta({ id: id, name: n });
  };
  return (
    <div>
      Contactid
      <h2> {userid}</h2>
      <h1> {a.get("id")}</h1>
      <form onSubmit={handl}>
        <input
          onChange={(e) => setm(e.target.value)}
          type="text"
          placeholder="user name"
        />
        <input
          onChange={(e) => setid(e.target.value)}
          type="number"
          placeholder="id"
        />
        <br />
        <button> add</button>
      </form>
    </div>
  );
}

export default Contactid;
