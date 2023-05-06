import React from "react";

function DemoFetchApi() {
  //   const [data, setData] = useState([]);

  //   Get Fetch API
  const handleGetFetch = () => {
    fetch("http://localhost:8000/posts")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  //   Post Fetch API
  const handlePostFetch = () => {
    fetch("http://localhost:8000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: 6, course: "NodeJS", time: 2400 }),
    });
  };

  //   Put Fetch API
  // Khi sử dụng Put sẽ cập nhật lại đối tượng bằng giá trị truyền vào
  // Để sử dụng được put sẽ truyền hết các đối tượng để cập nhật

  const handlePutFetch = () => {
    fetch("http://localhost:8000/posts/3", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ course: "JAVA", time: 1600 }),
    });
  };

  // Patch Fetch API
  // Patch sẽ cập nhật lại đúng giá trị có key trùng với key cập nhật

  const handlePatchFetch = () => {
    fetch("http://localhost:8000/posts/4", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ course: "NextJS" }),
    });
  };

  // Delete Fetch API

  const handleDeleteFetch = () => {
    fetch("http://localhost:8000/posts/6", {
      method: "DELETE",
    });
  };

  return (
    <div>
      <h3>Demo Fetch API</h3>
      {/* gồm 5 method: GET POST PUT PATCH DELETE */}
      {/* {data
        ? data.map((e) => {
            return (
              <div>
                <div>{e.id}</div>
                <div>{e.course}</div>
                <div>{e.time}</div>
              </div>
            );
          })
        : ""} */}

      <button onClick={handleGetFetch}>Get Fetch API</button>
      <button onClick={handlePostFetch}>Post Fetch API</button>
      <button onClick={handlePutFetch}>Put Fetch API</button>
      <button onClick={handlePatchFetch}>Patch Fetch API</button>
      <button onClick={handleDeleteFetch}>Delete Fetch API</button>
    </div>
  );
}

export default DemoFetchApi;
