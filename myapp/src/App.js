import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const pageSize = 5;
  const apikey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <LoadingBar color="#f11946" height={3} progress={progress} />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="business"
                pageSize={pageSize}
                country="in"
                category="business"
              />
            }
          />
          <Route
            path="/Entertainment"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="Entertainment"
                pageSize={pageSize}
                country="in"
                category="Entertainment"
              />
            }
          />
          <Route
            path="/General"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="General"
                pageSize={pageSize}
                country="in"
                category="General"
              />
            }
          />
          <Route
            path="/Health"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="Health"
                pageSize={pageSize}
                country="in"
                category="Health"
              />
            }
          />
          <Route
            path="/Science"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="Science"
                pageSize={pageSize}
                country="in"
                category="Science"
              />
            }
          />
          <Route
            path="/Sports"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="Sports"
                pageSize={pageSize}
                country="in"
                category="Sports"
              />
            }
          />
          <Route
            path="/Technology"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="Technology"
                pageSize={pageSize}
                country="in"
                category="Technology"
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
