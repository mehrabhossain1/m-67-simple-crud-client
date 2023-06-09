/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedData = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);

    const updatedUser = { name, email };

    fetch(`http://localhost:5000/users/${loadedData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          alert("Users updated successfully");
        }
      });
  };

  return (
    <div>
      <h2>User Information of: {loadedData.name}</h2>

      <form onSubmit={handleUpdate}>
        <input type="text" name="name" defaultValue={loadedData?.name} id="" />
        <br />
        <input
          type="email"
          name="email"
          defaultValue={loadedData?.email}
          id=""
        />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;
