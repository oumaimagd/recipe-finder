import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./Components/Header";
import RecipeList from "./Components/RecipeList";
import RecipeDetail from "./Components/RecipeDetail";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
