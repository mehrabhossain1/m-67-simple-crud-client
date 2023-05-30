/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedData = useLoaderData();

  return (
    <div>
      <h2>User Information: {loadedData.name}</h2>
    </div>
  );
};

export default Update;
