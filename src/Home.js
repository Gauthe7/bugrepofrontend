import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useEffect } from "react";
import "./Homepage.css"

function Home() {
  const [form, setForm] = useState({});

  const handleform = (e) => {
    console.log(e.target.value, e.target.name);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // window.location.reload();
    const response = await fetch("http://localhost:8081/bugs", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-Type": "application/json",
      },
    });
    const data = await response.json();
    // window.location.reload(); 

    console.log(data);
    window.location.reload();
    alert("Bug added Sucessfuly")
  };

  return (
    <div className="home">
      <form onSubmit={handleSubmit}>
        {/* <p >{JSON.stringify(form)}</p> */}
        <input type="id" placeholder="BUG ID" name="bugid" onChange={handleform}></input>
        <input type="text" placeholder="Title" name="title" onChange={handleform}></input>
        <input type="text" placeholder="Description" name="des" onChange={handleform}></input>
        <input type="date" placeholder="Due Date" name="date" onChange={handleform}></input>
        <input type="text" placeholder="Project" name="project" onChange={handleform}></input>
        <input type="text" placeholder="Reporter" name="reporter" onChange={handleform}></input>
        
        <input type="text" name="Url" placeholder="File URL" onChange={handleform}></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default Home;
