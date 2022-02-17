import './App.css'
import Header from "./Component/Header";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import Support from "./Component/Support";
import Career from "./Component/Career";
import Error from "./Component/Error";
import Student from './Component/Student';


 

function App() {
  return (
    <div className="App">
     <Router>
    <Header/>
      <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/home" element={<Home/>}/>
     <Route path="/student/:id" element={<Student/>}/>

     <Route path="/contact" element={<Contact/>}/>
     <Route path="/support" element={<Support/>}/>
     <Route path="/career" element={<Career/>}/>

     <Route path="/*" element={<Error/>}/>


     
</Routes>
</Router>
    </div>
  );
}

export default App;
