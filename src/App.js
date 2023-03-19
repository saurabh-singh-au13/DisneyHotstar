import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Switch } from "react-router";

import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";

import "./App.css";

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Header />
          <Routes>
           
            <Route exact path="/" element={<Login />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/detail/:id/" element={<Detail />}></Route>
          
          </Routes>
            
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
