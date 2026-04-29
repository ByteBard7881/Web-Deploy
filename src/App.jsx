import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  const fetchMessage = async () => {
    const res = await fetch(`http://127.0.0.1:5000/api/message`);
    // const res = await fetch(`http://127.0.0.1:5000/`);
    const data = await res.json();
    setMessage(data.message);
  };

  useEffect(() => {
    fetchMessage();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Full Stack Demo</h1>
      <button onClick={fetchMessage}>Get Message</button>
      <h1>{message}</h1>
    </div>
  );
}

export default App;