import React from "react";
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function ShowBugs() {
  const [Bugdata, setBugdata] = useState();

  const getBugs = async () => {
    const response = await fetch("http://localhost:8081/bugs", {
      method: "GET",
    });
    const data = await response.json();

    setBugdata(data);
  };





  const deleteBugs = async () => {
    const response = await fetch("http://localhost:8081/bugs", {
      method: "DELETE",
    });
    const data = await response.json();

    setBugdata(data);
  };


  
  
  
  
  
  
  
  
  
  const handleDelete=(id)=>{
    deleteBugs()
    window.location.reload();


alert(`${id } deleted sucessfully` )






    // let index =employee.map(item=>item.id).indexOf(id)
    // employee.splice(index,1)
    // dele('/')


}






  useEffect(() => {
    getBugs();
  }, []);

  return (
    <>
      <p>
        {/* {" "} */}

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Bug Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Due Date</th>
              <th>Project</th>
              <th>Reporter</th>
              <th>File Url</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
            Bugdata && Bugdata.length > 0 ?
            Bugdata?.map((bug) => (
              <tr>
                <td>{bug.bugid}</td>
                <td>{bug.title}</td>
                <td>{bug.des}</td>
                <td>{bug.date}</td>
                <td>{bug.project}</td>
                <td>{bug.reporter}</td>
                <td>{bug.Url}</td>
                
                <td>
                  
                  <Button onClick={()=>handleDelete(bug.bugid)} variant="outline-danger">Delete</Button>{" "}
                
                  
                </td>
              </tr>
            )):""
        }
          </tbody>
        </Table>
      </p>
    </>
  );
}

export default ShowBugs;
