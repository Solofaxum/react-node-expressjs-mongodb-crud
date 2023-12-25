import  "react";
import { useState } from "react";

export default function CreateUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const submitHandler=(e)=>{
    e.preventDefault
  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3 ">
        <form onSubmit={submitHandler}>
          <h2> Add User</h2>
          <div className="mb-2">
            <label htmlFor=""> Name</label>
            <input
              type="text"
              placeholder="Enter name"
              className="form-control"
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor=""> Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="form-control"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor=""> Age</label>
            <input
              type="number"
              placeholder="Enter Age"
              className="form-control"
              onChange={(e)=>setAge(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}
