import React from "react";
import axios from "axios";

function DemoAxiosApi() {
  // Get Axios
  const handleGetAxios = () => {
    axios
      .get("http://localhost:8000/posts")
      .then((res) => console.log(res.data))
      .catch((err) => err);
  };

  //   Post Axios
  const handlePostAxios = () => {
    axios.post("http://localhost:8000/posts", {
      id: 7,
      course: "PHP",
      time: 100,
    });
    //   .then((res) => console.log(res.data))
    //   .catch((err) => err);
  };

  //  Put Axios
  const handlePutAxios = () => {
    axios.put("http://localhost:8000/posts/7", {
      course: "Rikkei Academy",
    });
  };

  // Patch Axios
  const handlePatchAxios = () => {
    axios.patch("http://localhost:8000/posts/5", {
      course: "Ruby",
    });
  };

  // Delete Axios
  const handleDeleteAxios = () => {
    axios.delete("http://localhost:8000/posts/6");
  };
  return (
    <div>
      <h3>Demo Axios API</h3>
      <button onClick={handleGetAxios}>Get Axios Api</button>
      <button onClick={handlePostAxios}>Post Axios Api</button>
      <button onClick={handlePutAxios}>Put Axios Api</button>
      <button onClick={handlePatchAxios}>Patch Axios Api</button>
      <button onClick={handleDeleteAxios}>Delete Axios Api</button>
    </div>
  );
}

export default DemoAxiosApi;
