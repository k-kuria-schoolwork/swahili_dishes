import{Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
     mamboo vulae
    <Routes>
      <Route path='/' element={<Home />}></Route>
    </Routes>
    </div>
  );
}

export default App;
