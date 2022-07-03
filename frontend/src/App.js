import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from './pages/home';
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="pages">
          <Routes>
            <Route patch="/"
             element={<Home/>}
            
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
