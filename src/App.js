import React from "react";
import {Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Main from './routes/Main'
import SingleCard from "./routes/SingleCard";

const App = () => {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/card/:id" element={<SingleCard/>}/>
          <Route path="*" element={<p>Path not resolved</p>}/>
        </Routes>
      </div>
  );
};

export default App;
