import React, { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"; 
import "bootstrap/dist/css/bootstrap.min.css"; 
import ErrorBoundary from "./ErrorBoundary"; 
import HomeScreen from "./HomeScreen"; 
import ProfileScreen from "./ProfileScreen"; 
import ShopScreen from "./ShopScreen"; 
import Example1 from "./Example1"; // To display social media data
import Example2 from "./Example2"; // To display skills data
import Example3 from "./Example3"; // To display experiences data
import "./App.css";

function App() {
  const [response, setResponse] = useState(null); // To store the response from the POST request

  const postData = async () => {
    const url = "https://webhook.site/3e4f35ba-2253-4099-86a2-780c7b2a4e24"; 
    
    const data = {
      key1: "myusername",
      email: "mymail@gmail.com",
      name: "Isaac",
      lastname: "Doe",
      age: 27,
    };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const jsonResponse = await res.json(); // To parse JSON response
      setResponse(jsonResponse); // To store response in the state
      console.log(jsonResponse); // To log the response to the console
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        {/* Bootstrap Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">React App</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/profile">Profile</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/shop">Shop</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/social-media">Social Media</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/skills">Skills</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/experiences">Experiences</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="container mt-4">
          <Routes>
            {/* Home route */}
            <Route 
              path="/" 
              element={
                <ErrorBoundary>
                  <HomeScreen />
                </ErrorBoundary>
              } 
            />
            {/* Profile route */}
            <Route 
              path="/profile" 
              element={
                <ErrorBoundary>
                  <ProfileScreen />
                </ErrorBoundary>
              } 
            />
            {/* Shop route (with an error) */}
            <Route 
              path="/shop" 
              element={
                <ErrorBoundary>
                  <ShopScreen />
                </ErrorBoundary>
              } 
            />
            {/* Example1 route for displaying social media */}
            <Route 
              path="/social-media" 
              element={
                <ErrorBoundary>
                  <Example1 />
                </ErrorBoundary>
              }
            />
            {/* Example2 route for displaying skills */}
            <Route 
              path="/skills" 
              element={
                <ErrorBoundary>
                  <Example2 />
                </ErrorBoundary>
              }
            />
            {/* Example3 route for displaying experiences */}
            <Route 
              path="/experiences" 
              element={
                <ErrorBoundary>
                  <Example3 />
                </ErrorBoundary>
              }
            />
          </Routes>

          {/* Button to trigger POST request */}
          <div className="mt-4">
            <button onClick={postData} className="btn btn-primary">
              Send Data to Webhook
            </button>
          </div>

          {/* Display response if available */}
          {response && (
            <div className="mt-4">
              <h4>Response:</h4>
              <pre>{JSON.stringify(response, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;



