
// import { Navbar } from 'react-bootstrap';
import './App.css';
import Home from './Home';
// import Navbar from './Navbar';
import Navs from './Navs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowBugs from './ShowBugs';

function App() {
  return (
   
    <div className="App">
   <Router>
      <Navs></Navs>
      <Routes>
       <Route path='/' element={  <Home></Home>}></Route>
        <Route path='/Showbugs' element={ <ShowBugs></ShowBugs>}></Route>
      </Routes>
   </Router>
    </div>
  );
}

export default App;
