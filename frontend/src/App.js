import Home from "./components/Home";
import Register from "./components/Register";

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>

      </Router>
    </>
  );
}

export default App;
