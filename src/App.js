import{Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Services from './Services';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/services' element={<Services />}></Route>
    </Routes>
    </div>
  );
}

export default App;
