import React from "react";
import Sidebar from "./components/sidebar.jsx";
import PostedJobs from "./pages/jsx/postjob.jsx";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <PostedJobs />
    </div>
  );
}

export default App;