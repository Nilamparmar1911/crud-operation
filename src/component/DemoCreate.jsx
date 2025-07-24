import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function DemoCreate() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")

    const history = useNavigate();

    const header = {"Access-Control-Allow-Origin":"*"}
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://683965f76561b8d882b03b9b.mockapi.io/crud/crud-ope",{
            name:name,
            email:email,
            header,
        });
        history("/demoread")

    }
  return (
    <div className="container">
      <h1 className="text-center">Create</h1>
      <form>
        <div className="mb-3">
          <label className="form-label">
            Name
          </label>
          <input
            type="email"
            className="form-control"
            onChange={(e)=> setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Email Address
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e)=> setEmail(e.target.value)}
          />
        </div>
             {name}
      {email}
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default DemoCreate;
