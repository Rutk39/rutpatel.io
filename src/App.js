import React from 'react'
import HomePage from "./component/HomePage/HomePage.js";

const App = () => {
    return (
      <Router>
      <div>
          <Routes>
          <Route path="/" element={<HomePage />}/>
        </Routes>
      </div>
  </Router>
  
    );
  };
  
  export default App;