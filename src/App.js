import React, { useState } from "react";




const App = () => {

  const [name, setName] = useState("");




  const handleChange = (event) => {

    setName(event.target.value);

  };




  const handleSubmit = (event) => {

    event.preventDefault();

    console.log({ name });

  };




  return (

    <div>

      <form onSubmit={handleSubmit}>

        <label htmlFor="name">Name</label>

        <input id="name" type="text" value={name} onChange={handleChange} />

        <button type="submit">Submit</button>

      </form>

    </div>

  );

};




export default App;