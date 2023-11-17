
import Navbar from './Mycomponents/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Mycomponents/Home';
import Signup from './Mycomponents/Signup';
import Signin from './Mycomponents/Signin';
import Calendar from './Mycomponents/Calendar';

function App() {
  
  return (
    <>
    
     <Router>
     <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path='/signin' element={<Signin/>}/>
      <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
      </>
    
  );
}

export default App;
