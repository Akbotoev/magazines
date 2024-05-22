import React, { useState } from "react";
import Timer from "./Timer";


export const FormData = () => {
  const [formData, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Регистрационные данные:", formData);
   
  };
  
 
  return (
    <>
      <form onSubmit={handleSubmit}>
        
        <div className="data__cont">
            <h2 className="title__data">Registration</h2>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button className="button" type="submit">Зарегистрироваться</button>
        </div>
      </form> 
       <Timer/>
    </>
  );
};

export default FormData;