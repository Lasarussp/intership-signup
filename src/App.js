import React, { useState } from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="registeration">
        <h1>Register</h1>
        <labal>Username</labal>
        <input type="text" />
        <labal>Password</labal>
        <input type="password" />
        <button>Submit</button>
      </div>
      <div className="login">
        <h1>login</h1>
        <input type="text" placeholder="Username..." />
        <input type="password" placeholder="password..." />
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
