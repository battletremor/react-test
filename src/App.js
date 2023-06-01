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

//<<<<<<< HEAD



export default App;
=======
//commit test
//commit test 2
//jenkins build test 1
//Demo Jenkins Commit 1
//Demo Jenkins Commit 2
//AWS Devops Test 1
//>>>>>>> 529b775ab4a24c1ccd1639abace9955e96303c79
